import pytest
from fastapi.testclient import TestClient
from sqlalchemy import text
from app.models.learner import LearnerProfile
from app.models.skill import Skill, SkillCategory
from app.models.learning import LearningPath, LearningModule, LearningActivity, SkillGap, WeeklyPlan
from app.models.assessment import Assessment, AssessmentQuestion, AssessmentAttempt, AssessmentAnswer
from app.models.agent import AgentEvent, PlanAdaptation
from app.models.notification import Notification

def test_complete_adaptive_agent_loop(client: TestClient, db_session):
    """
    Verifies the complete closed-loop adaptive agent lifecycle:
    OBSERVE -> ANALYZE -> DECIDE -> VALIDATE -> ACT -> PERSIST -> REPLAN
    """
    # 1. Register and login test learner
    reg_resp = client.post("/api/v1/auth/register", json={
        "email": "adaptive_learner@edupath.dev",
        "password": "password123",
        "role": "LEARNER",
        "name": "Alex Mercer"
    })
    assert reg_resp.status_code in [200, 201]

    login_resp = client.post("/api/v1/auth/login", json={
        "email": "adaptive_learner@edupath.dev",
        "password": "password123"
    })
    assert login_resp.status_code == 200
    token = login_resp.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    # Retrieve learner profile
    profile = client.get("/api/v1/learners/me", headers=headers).json()
    profile_id = profile["id"]

    # 2. Setup skills & initial active learning path
    cat = SkillCategory(name="Frontend Architecture", description="Modern UI tech")
    db_session.add(cat)
    db_session.flush()

    skill_react = Skill(name="React", description="Component UI Library", category_id=cat.id)
    db_session.add(skill_react)
    db_session.flush()

    gap = SkillGap(
        learner_id=profile_id,
        target_role_id=1,
        skill_id=skill_react.id,
        current_proficiency="BEGINNER",
        required_proficiency="ADVANCED",
        priority=1
    )
    db_session.add(gap)

    # Initial Learning Path BEFORE intervention
    path = LearningPath(
        learner_id=profile_id,
        title="Full Stack Career Path",
        status="ACTIVE"
    )
    db_session.add(path)
    db_session.flush()

    module1 = LearningModule(
        learning_path_id=path.id,
        title="React Foundations & State",
        description="Master React hooks and component lifecycle",
        order_index=0,
        status="PENDING"
    )
    module2 = LearningModule(
        learning_path_id=path.id,
        title="API Integration & Microservices",
        description="Connect frontend with backend services",
        order_index=1,
        status="PENDING"
    )
    db_session.add_all([module1, module2])
    db_session.flush()

    act1 = LearningActivity(
        module_id=module1.id,
        title="Intro to React Hooks",
        description="Overview of basic hooks",
        activity_type="VIDEO",
        estimated_duration_mins=30,
        order_index=1
    )
    act2 = LearningActivity(
        module_id=module2.id,
        title="Connecting Axios to REST Endpoints",
        description="Building API clients",
        activity_type="LAB",
        estimated_duration_mins=45,
        order_index=1
    )
    db_session.add_all([act1, act2])

    wp = WeeklyPlan(
        learning_path_id=path.id,
        week_number=1,
        focus_description="React Foundations",
        status="ACTIVE"
    )
    db_session.add(wp)
    db_session.commit()

    # Verify initial activity count
    initial_module1_activities = db_session.query(LearningActivity).filter_by(module_id=module1.id).count()
    assert initial_module1_activities == 1

    # 3. Simulate Poor Assessment Result (Score = 40%)
    assessment = Assessment(
        title="React Core State Evaluation",
        description="Check comprehension of useState and useEffect"
    )
    db_session.add(assessment)
    db_session.flush()

    q1 = AssessmentQuestion(
        assessment_id=assessment.id,
        skill_id=skill_react.id,
        question_type="MULTIPLE_CHOICE",
        content="How does useState update state asynchronously?",
        correct_answer="Batched updates"
    )
    q2 = AssessmentQuestion(
        assessment_id=assessment.id,
        skill_id=skill_react.id,
        question_type="MULTIPLE_CHOICE",
        content="What is the dependency array in useEffect?",
        correct_answer="Triggers effect on change"
    )
    db_session.add_all([q1, q2])
    db_session.flush()

    attempt = AssessmentAttempt(
        learner_id=profile_id,
        assessment_id=assessment.id,
        score=40, # Poor score triggering STRUGGLE
        status="COMPLETED"
    )
    db_session.add(attempt)
    db_session.flush()

    ans1 = AssessmentAnswer(attempt_id=attempt.id, question_id=q1.id, is_correct=False, provided_answer="Immediately")
    ans2 = AssessmentAnswer(attempt_id=attempt.id, question_id=q2.id, is_correct=False, provided_answer="None")
    db_session.add_all([ans1, ans2])
    db_session.commit()

    # 4. Trigger the LangGraph Adaptive Agent
    agent_resp = client.post("/api/v1/agent/evaluate", headers=headers)
    assert agent_resp.status_code == 200, f"Agent evaluation failed: {agent_resp.text}"
    agent_data = agent_resp.json()

    # 5. Verify Structured Agent Decision
    assert agent_data["event_type"] == "STRUGGLE"
    decision = agent_data.get("agent_decision")
    assert decision is not None
    assert decision["condition"] == "STRUGGLE"
    assert decision["recommended_action"] in ["ADD_PRACTICE", "ADD_PREREQUISITE"]
    assert agent_data.get("action_validated") is True

    # Check event data contains observation and weak topics
    event_data = agent_data.get("event_data", {})
    assert "observation" in event_data
    assert "React" in event_data.get("skill", "") or "React" in str(event_data.get("weak_topics", []))

    # 6. Verify Roadmap Replanning: Plan was modified in Database
    new_module1_activities = db_session.query(LearningActivity).filter_by(module_id=module1.id).all()
    assert len(new_module1_activities) > initial_module1_activities, "Roadmap was not replanned with reinforcement activity!"
    
    reinforcement_act = [a for a in new_module1_activities if "Reinforcement Practice" in a.title]
    assert len(reinforcement_act) == 1
    assert "React" in reinforcement_act[0].title or "Core" in reinforcement_act[0].title
    print(f"  [OK] Verified Replanned Activity: '{reinforcement_act[0].title}'")

    # 7. Verify In-App Notification was generated for Learner
    user_id = profile["user_id"]
    notifs = db_session.query(Notification).filter_by(recipient_id=user_id).all()
    assert len(notifs) >= 1
    assert "AGENT_STRUGGLE" in notifs[-1].notification_type
    print(f"  [OK] Verified In-App Notification: '{notifs[-1].title}' - '{notifs[-1].message}'")

    # 8. Test Proactive Learning-Drop Check Endpoint
    drop_resp = client.post("/api/v1/agent/check-drops", headers=headers)
    assert drop_resp.status_code == 200
    print("  [OK] Proactive /check-drops endpoint executed successfully.")
