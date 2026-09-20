import pytest
from datetime import datetime, timedelta, timezone
from sqlalchemy.orm import Session
from app.models.user import User
from app.models.learner import LearnerProfile
from app.models.skill import Skill, SkillCategory, LearnerSkill, ProficiencyLevel
from app.models.learning import LearningPath, LearningModule, LearningActivity, LearningProgress, SkillGap
from app.models.document import Document, DocumentAnalysis
from app.models.project import LearningProject
from app.models.assessment import PracticeTask, PracticeAttempt, Assessment, AssessmentAttempt
from app.models.notification import Notification
from app.agents.nodes import observe, analyze_and_detect, decide, act, persist
from app.services.context_service import get_learner_context
import json

def test_context_service_enriched(db_session: Session):
    # Setup test user and profile
    user = User(email="test.context@edupath.test", hashed_password="pw", role="learner")
    db_session.add(user)
    db_session.commit()

    profile = LearnerProfile(user_id=user.id, first_name="ContextLearner", last_name="Test", target_role="Backend Engineer")
    db_session.add(profile)
    db_session.commit()

    # Add skill and learner skill
    cat = SkillCategory(name="Backend Engineering")
    db_session.add(cat)
    db_session.commit()

    skill = Skill(name="PostgreSQL", category_id=cat.id)
    db_session.add(skill)
    db_session.commit()

    ls = LearnerSkill(
        learner_id=profile.id,
        skill_id=skill.id,
        proficiency=ProficiencyLevel.INTERMEDIATE,
        confidence_score=75,
        source_evidence="Resume"
    )
    db_session.add(ls)

    # Add active learning path with activities
    path = LearningPath(learner_id=profile.id, title="Backend Track", status="ACTIVE")
    db_session.add(path)
    db_session.commit()

    module = LearningModule(learning_path_id=path.id, title="Database Tuning", order_index=1, status="ACTIVE")
    db_session.add(module)
    db_session.commit()

    act1 = LearningActivity(module_id=module.id, title="Indexing Basics", activity_type="READING", estimated_duration_mins=20, order_index=1)
    act2 = LearningActivity(module_id=module.id, title="Query Optimization", activity_type="LAB", estimated_duration_mins=40, order_index=2)
    db_session.add_all([act1, act2])
    db_session.commit()

    # Add progress: 1 completed
    prog = LearningProgress(learner_id=profile.id, activity_id=act1.id, status="COMPLETED", time_spent_mins=25)
    db_session.add(prog)
    db_session.commit()

    # Call get_learner_context
    context_str = get_learner_context(db_session, profile.id)
    context = json.loads(context_str)

    assert "current_skills" in context
    assert len(context["current_skills"]) == 1
    assert context["current_skills"][0]["name"] == "PostgreSQL"
    assert context["current_skills"][0]["confidence_score"] == 75

    assert "progress" in context
    assert context["progress"]["completed_activities_count"] == 1
    assert context["progress"]["total_activities_count"] == 2
    assert context["progress"]["completion_percentage"] == 50

    assert "weak_areas" in context


def test_learning_drop_detection(db_session: Session):
    user = User(email="test.drop@edupath.test", hashed_password="pw", role="learner")
    db_session.add(user)
    db_session.commit()

    profile = LearnerProfile(user_id=user.id, first_name="DropLearner", last_name="Test", target_role="DevOps Engineer")
    db_session.add(profile)
    db_session.commit()

    # Path created 5 days ago with an activity completed 5 days ago
    path = LearningPath(learner_id=profile.id, title="DevOps Track", status="ACTIVE")
    db_session.add(path)
    db_session.commit()

    module = LearningModule(learning_path_id=path.id, title="Containerization", order_index=1, status="ACTIVE")
    db_session.add(module)
    db_session.commit()

    act_old = LearningActivity(module_id=module.id, title="Docker Basics", activity_type="VIDEO", estimated_duration_mins=30, order_index=1)
    act_pending = LearningActivity(module_id=module.id, title="Kubernetes Cluster", activity_type="LAB", estimated_duration_mins=60, order_index=2)
    db_session.add_all([act_old, act_pending])
    db_session.commit()

    five_days_ago = datetime.now(timezone.utc) - timedelta(days=5)
    prog = LearningProgress(
        learner_id=profile.id,
        activity_id=act_old.id,
        status="COMPLETED",
        time_spent_mins=30,
        completed_at=five_days_ago
    )
    db_session.add(prog)
    db_session.commit()

    # Run agent pipeline nodes directly
    state = {
        "learner_id": profile.id,
        "recent_signals": {},
        "detected_conditions": [],
        "agent_decision": None,
        "action_validated": False,
        "final_event_id": None
    }

    obs_res = observe(state, db_session)
    state.update(obs_res)

    assert state["recent_signals"]["days_inactive"] >= 4

    detect_res = analyze_and_detect(state, db_session)
    state.update(detect_res)

    assert "LEARNING_DROP" in state["detected_conditions"]

    decide_res = decide(state, db_session)
    state.update(decide_res)

    assert state["agent_decision"].condition == "LEARNING_DROP"
    assert state["agent_decision"].recommended_action == "REDUCE_WORKLOAD"

    state["action_validated"] = True
    act(state, db_session)

    # Verify pending activity workload capped
    db_session.refresh(act_pending)
    assert act_pending.estimated_duration_mins <= 15

    # Verify momentum warmup activity inserted
    warmup = db_session.query(LearningActivity).filter_by(module_id=module.id, title="Quick Momentum: 10-Minute Warmup").first()
    assert warmup is not None
    assert warmup.estimated_duration_mins == 10

    # Test persist creates notification
    persist_res = persist(state, db_session)
    notif = db_session.query(Notification).filter_by(recipient_id=user.id, notification_type="AGENT_LEARNING_DROP").first()
    assert notif is not None
    assert "Learning Drop" in notif.title


def test_prerequisite_order_delay(db_session: Session):
    user = User(email="test.prereq@edupath.test", hashed_password="pw", role="learner")
    db_session.add(user)
    db_session.commit()

    profile = LearnerProfile(user_id=user.id, first_name="PrereqLearner", last_name="Test")
    db_session.add(profile)
    db_session.commit()

    path = LearningPath(learner_id=profile.id, title="Advanced React", status="ACTIVE")
    db_session.add(path)
    db_session.commit()

    module = LearningModule(learning_path_id=path.id, title="State Machines", order_index=1, status="PENDING")
    db_session.add(module)
    db_session.commit()

    dependent_act = LearningActivity(module_id=module.id, title="Redux Sagas Complex Flow", activity_type="LAB", order_index=0)
    db_session.add(dependent_act)
    db_session.commit()

    from app.schemas.agent import AgentDecision
    state = {
        "learner_id": profile.id,
        "action_validated": True,
        "agent_decision": AgentDecision(
            condition="STRUGGLE",
            recommended_action="ADD_PREREQUISITE",
            affected_skill="Redux",
            reason="Repeated low scores on Redux fundamentals",
            learner_message="Prerequisite added",
            confidence="HIGH"
        )
    }

    act(state, db_session)

    # Verify dependent activity shifted to order_index 1
    db_session.refresh(dependent_act)
    assert dependent_act.order_index == 1

    # Verify prerequisite activity added at order_index 0
    prereq = db_session.query(LearningActivity).filter_by(module_id=module.id, order_index=0).first()
    assert prereq is not None
    assert "Prerequisite Review" in prereq.title


def test_skill_verification_endpoint(client, db_session: Session):
    # Register and login to get auth token
    reg_res = client.post("/api/v1/auth/register", json={
        "email": "verify.skill@example.com",
        "password": "StrongPassword123!",
        "role": "LEARNER"
    })
    assert reg_res.status_code == 201

    login_res = client.post("/api/v1/auth/login", data={
        "username": "verify.skill@example.com",
        "password": "StrongPassword123!"
    })
    assert login_res.status_code == 200
    token = login_res.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}



    # Setup target role
    client.put("/api/v1/learners/me", json={"target_role": "Full Stack Developer"}, headers=headers)

    # Get skill
    skill = db_session.query(Skill).first()
    if not skill:
        skill = Skill(name="TypeScript")
        db_session.add(skill)
        db_session.commit()

    # Call verify skill endpoint
    verify_res = client.post(f"/api/v1/skill-gaps/verify/{skill.id}", headers=headers)
    assert verify_res.status_code == 200

    data = verify_res.json()
    assert data["skill_id"] == skill.id
    assert data["skill_name"] == skill.name
    assert "verified_score" in data
    assert 0 <= data["verified_score"] <= 100
    assert "confidence_level" in data
    assert "breakdown" in data
    assert "resume_score" in data["breakdown"]
    assert "project_score" in data["breakdown"]
    assert "practice_score" in data["breakdown"]
    assert "assessment_score" in data["breakdown"]
    assert "progress_score" in data["breakdown"]
    assert "ai_explanation" in data
