import sys
sys.stdout.reconfigure(encoding='utf-8')
import pytest
from app.db.session import SessionLocal
from app.models.user import User
from app.models.learner import LearnerProfile
from app.models.learning import LearningPath, LearningModule, LearningActivity, SkillGap, WeeklyPlan
from app.models.assessment import Assessment, AssessmentQuestion, AssessmentAttempt, AssessmentAnswer
from app.models.agent import AgentEvent, PlanAdaptation
from app.models.notification import Notification
from app.agents.graph import agent_graph

def test_multi_scenario_adaptive_loop():
    """
    Tests all 6 scenarios required by the EduPath Adaptive Loop specification:
    1. Score 40%: Struggle condition -> ADD_PRACTICE (Reinforcement inserted into DB)
    2. Repeated Failures: Stronger intervention -> ADD_PREREQUISITE (Prerequisite inserted into DB)
    3. Score 90%: High performance -> INCREASE_DIFFICULTY (Advanced challenge inserted into DB)
    4. Score 65%: Moderate score -> NO_ACTION / PROGRESS_STAGNATION (Maintain pace)
    5. Improved Score (40% -> 80%): Reassessment improvement -> IMPROVEMENT / NO_ACTION (Advance)
    """
    db = SessionLocal()
    def clean_attempts(pid):
        att_ids = [a.id for a in db.query(AssessmentAttempt).filter_by(learner_id=pid).all()]
        if att_ids:
            db.query(AssessmentAnswer).filter(AssessmentAnswer.attempt_id.in_(att_ids)).delete(synchronize_session=False)
        db.query(AssessmentAttempt).filter_by(learner_id=pid).delete(synchronize_session=False)
        db.commit()

    try:
        # Setup test learner
        email = "adaptive_scenarios_test@edupath.dev"
        user = db.query(User).filter_by(email=email).first()
        if not user:
            user = User(email=email, role="LEARNER", hashed_password="dummy_password")
            db.add(user)
            db.flush()

        profile = db.query(LearnerProfile).filter_by(user_id=user.id).first()
        if not profile:
            profile = LearnerProfile(user_id=user.id, first_name="Adaptive", last_name="Tester", target_role="Full Stack Developer")
            db.add(profile)
            db.flush()

        # Clean existing test path & attempts
        old_path = db.query(LearningPath).filter_by(learner_id=profile.id).first()
        if old_path:
            db.query(LearningActivity).filter(LearningActivity.module_id.in_(
                [m.id for m in old_path.modules]
            )).delete(synchronize_session=False)
            db.query(LearningModule).filter_by(learning_path_id=old_path.id).delete(synchronize_session=False)
            db.query(WeeklyPlan).filter_by(learning_path_id=old_path.id).delete(synchronize_session=False)
            db.query(LearningPath).filter_by(id=old_path.id).delete(synchronize_session=False)

        clean_attempts(profile.id)
        db.query(AgentEvent).filter_by(learner_id=profile.id).delete(synchronize_session=False)
        db.query(PlanAdaptation).filter_by(learner_id=profile.id).delete(synchronize_session=False)
        db.query(Notification).filter_by(recipient_id=user.id).delete(synchronize_session=False)
        db.commit()

        # Create active learning path with 1 module
        path = LearningPath(learner_id=profile.id, title="Full Stack Developer Path", status="ACTIVE")
        db.add(path)
        db.flush()

        mod1 = LearningModule(learning_path_id=path.id, title="Module 1: React State Management", order_index=0, status="PENDING")
        db.add(mod1)
        db.flush()

        wp = WeeklyPlan(learning_path_id=path.id, week_number=1, focus_description="React State Management")
        db.add(wp)
        db.flush()

        initial_act = LearningActivity(
            module_id=mod1.id,
            title="Core React State Introduction",
            activity_type="VIDEO",
            estimated_duration_mins=30,
            weekly_plan_id=wp.id,
            order_index=0
        )
        db.add(initial_act)

        ass = Assessment(title="React Assessment", description="Evaluation of useState and useEffect")
        db.add(ass)
        db.flush()

        q1 = AssessmentQuestion(assessment_id=ass.id, content="How does useState update state?", correct_answer="Batched", question_type="MULTIPLE_CHOICE")
        q2 = AssessmentQuestion(assessment_id=ass.id, content="What is the useEffect dependency array?", correct_answer="Triggers effect", question_type="MULTIPLE_CHOICE")
        db.add_all([q1, q2])
        db.commit()

        print("\n--- SCENARIO 1: Score 40% (Struggle Detection) ---")
        att1 = AssessmentAttempt(learner_id=profile.id, assessment_id=ass.id, score=40, status="COMPLETED")
        db.add(att1)
        db.flush()
        ans1 = AssessmentAnswer(attempt_id=att1.id, question_id=q1.id, is_correct=False, provided_answer="Immediately")
        ans2 = AssessmentAnswer(attempt_id=att1.id, question_id=q2.id, is_correct=False, provided_answer="None")
        db.add_all([ans1, ans2])
        db.commit()

        state1 = agent_graph.invoke({
            "learner_id": profile.id,
            "db_session": db,
            "recent_signals": {},
            "detected_conditions": [],
            "agent_decision": None,
            "action_validated": False,
            "final_event_id": None
        })
        db.commit()

        dec1 = state1["agent_decision"]
        assert dec1.condition == "STRUGGLE"
        assert dec1.recommended_action == "ADD_PRACTICE"
        print(f"  ✓ Decision: Action='{dec1.recommended_action}', Condition='{dec1.condition}'")
        print(f"  ✓ Reason: '{dec1.reason}'")
        
        # Verify reinforcement activity added to DB
        reinf = db.query(LearningActivity).filter_by(module_id=mod1.id, activity_type="PRACTICE").first()
        assert reinf is not None
        assert "Reinforcement Practice" in reinf.title
        print(f"  ✓ Mutated Database: Inserted '{reinf.title}' into Module 1")

        print("\n--- SCENARIO 2: Repeated Failures (Stronger Intervention) ---")
        att2 = AssessmentAttempt(learner_id=profile.id, assessment_id=ass.id, score=35, status="COMPLETED")
        db.add(att2)
        db.flush()
        ans3 = AssessmentAnswer(attempt_id=att2.id, question_id=q1.id, is_correct=False, provided_answer="Wrong")
        db.add(ans3)
        db.commit()

        state2 = agent_graph.invoke({
            "learner_id": profile.id,
            "db_session": db,
            "recent_signals": {},
            "detected_conditions": [],
            "agent_decision": None,
            "action_validated": False,
            "final_event_id": None
        })
        db.commit()

        dec2 = state2["agent_decision"]
        assert dec2.condition == "STRUGGLE"
        assert dec2.recommended_action == "ADD_PREREQUISITE"
        print(f"  ✓ Decision on Repeated Failures: Action='{dec2.recommended_action}', Condition='{dec2.condition}'")
        
        prereq = db.query(LearningActivity).filter(
            LearningActivity.module_id == mod1.id,
            LearningActivity.title.like("%Prerequisite Review%")
        ).first()
        assert prereq is not None
        print(f"  ✓ Mutated Database: Inserted Prerequisite '{prereq.title}' into Module 1")

        print("\n--- SCENARIO 3: Improved Score Reassessment (40% -> 80%) ---")
        att3 = AssessmentAttempt(learner_id=profile.id, assessment_id=ass.id, score=80, status="COMPLETED")
        db.add(att3)
        db.commit()

        state3 = agent_graph.invoke({
            "learner_id": profile.id,
            "db_session": db,
            "recent_signals": {},
            "detected_conditions": [],
            "agent_decision": None,
            "action_validated": False,
            "final_event_id": None
        })
        db.commit()

        dec3 = state3["agent_decision"]
        assert dec3.condition == "IMPROVEMENT"
        assert dec3.recommended_action == "NO_ACTION"
        print(f"  ✓ Reassessment Result: Action='{dec3.recommended_action}', Condition='{dec3.condition}'")
        print(f"  ✓ Learner Message: '{dec3.learner_message}'")

        print("\n--- SCENARIO 4: High Performance Score 90% (Difficulty Mismatch) ---")
        clean_attempts(profile.id)
        att4 = AssessmentAttempt(learner_id=profile.id, assessment_id=ass.id, score=90, status="COMPLETED")
        db.add(att4)
        db.commit()

        state4 = agent_graph.invoke({
            "learner_id": profile.id,
            "db_session": db,
            "recent_signals": {},
            "detected_conditions": [],
            "agent_decision": None,
            "action_validated": False,
            "final_event_id": None
        })
        db.commit()

        dec4 = state4["agent_decision"]
        assert dec4.condition == "DIFFICULTY_MISMATCH"
        assert dec4.recommended_action == "INCREASE_DIFFICULTY"
        print(f"  ✓ High Score Decision: Action='{dec4.recommended_action}', Condition='{dec4.condition}'")
        
        adv = db.query(LearningActivity).filter(
            LearningActivity.module_id == mod1.id,
            LearningActivity.title.like("%Advanced Challenge%")
        ).first()
        assert adv is not None
        print(f"  ✓ Mutated Database: Inserted Advanced Challenge '{adv.title}' into Module 1")

        print("\n--- SCENARIO 5: Moderate Score 65% (Steady Progress / Monitor) ---")
        clean_attempts(profile.id)
        att5 = AssessmentAttempt(learner_id=profile.id, assessment_id=ass.id, score=65, status="COMPLETED")
        db.add(att5)
        db.commit()

        state5 = agent_graph.invoke({
            "learner_id": profile.id,
            "db_session": db,
            "recent_signals": {},
            "detected_conditions": [],
            "agent_decision": None,
            "action_validated": False,
            "final_event_id": None
        })
        db.commit()

        dec5 = state5["agent_decision"]
        assert dec5.condition == "PROGRESS_STAGNATION"
        assert dec5.recommended_action == "NO_ACTION"
        print(f"  ✓ Moderate Score Decision: Action='{dec5.recommended_action}', Condition='{dec5.condition}'")
        print(f"  ✓ Maintained pace: '{dec5.reason}'")

        print("\n--- SCENARIO 6: Inactivity / Dropout (Learning Drop) ---")
        clean_attempts(profile.id)
        state6 = agent_graph.invoke({
            "learner_id": profile.id,
            "db_session": db,
            "recent_signals": {},
            "detected_conditions": [],
            "agent_decision": None,
            "action_validated": False,
            "final_event_id": None
        })
        db.commit()

        dec6 = state6["agent_decision"]
        assert dec6.condition == "LEARNING_DROP"
        assert dec6.recommended_action == "REDUCE_WORKLOAD"
        print(f"  ✓ Inactivity Decision: Action='{dec6.recommended_action}', Condition='{dec6.condition}'")
        print(f"  ✓ Calibrated itinerary: '{dec6.learner_message}'")

        print("\n" + "=" * 70)
        print("ALL 6 ADAPTIVE SCENARIOS VERIFIED SUCCESSFULLY WITH DB MUTATIONS!")
        print("=" * 70)

    finally:
        db.close()

if __name__ == "__main__":
    test_multi_scenario_adaptive_loop()
