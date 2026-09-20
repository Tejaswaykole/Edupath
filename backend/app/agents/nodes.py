from datetime import datetime, timedelta, timezone
from typing import Dict, Any, List
from sqlalchemy.orm import Session
from sqlalchemy import text
import json
from app.services.ai_service import get_groq_client
from app.schemas.agent import AgentDecision
from app.agents.state import AgentState
from app.models.learning import LearningProgress, LearningActivity, LearningModule, LearningPath, SkillGap, WeeklyPlan
from app.models.agent import AgentEvent, PlanAdaptation
from app.models.assessment import PracticeTask, PracticeAttempt, Assessment, AssessmentAttempt, AssessmentAnswer, AssessmentQuestion
from app.models.learner import LearnerProfile
from app.models.notification import Notification

# Define deterministic condition constants
CONDITIONS = {
    "STRUGGLE": "STRUGGLE",
    "DIFFICULTY_MISMATCH": "DIFFICULTY_MISMATCH",
    "LEARNING_DROP": "LEARNING_DROP",
    "OVERLOAD": "OVERLOAD",
    "PREREQUISITE_GAP": "PREREQUISITE_GAP",
    "PROGRESS_STAGNATION": "PROGRESS_STAGNATION",
}

def observe(state: AgentState, db: Session) -> Dict[str, Any]:
    """
    Gather signals deterministically across LearningProgress, AssessmentAttempts, and PracticeAttempts.
    """
    learner_id = state["learner_id"]
    now = datetime.now(timezone.utc)
    one_week_ago = now - timedelta(days=7)
    
    # 1. Inspect LearningProgress
    recent_progress = db.query(LearningProgress).filter(
        LearningProgress.learner_id == learner_id
    ).all()
    
    signals = {
        "recent_activities_completed": 0,
        "recent_activities_started": 0,
        "low_scores": 0,
        "high_scores": 0,
        "total_time_spent_mins": 0,
        "recent_assessment_score": None,
        "recent_assessment_scores": [],
        "recent_assessment_title": None,
        "affected_skill": None,
        "weak_topics": [],
        "observation_summary": ""
    }
    
    for p in recent_progress:
        if p.status == "COMPLETED":
            signals["recent_activities_completed"] += 1
        else:
            signals["recent_activities_started"] += 1
        
        signals["total_time_spent_mins"] += (p.time_spent_mins or 0)
        
        if p.score is not None:
            if p.score < 50:
                signals["low_scores"] += 1
            elif p.score >= 85:
                signals["high_scores"] += 1

    # 2. Inspect AssessmentAttempts
    recent_assessments = db.query(AssessmentAttempt).filter(
        AssessmentAttempt.learner_id == learner_id
    ).order_by(AssessmentAttempt.id.desc()).limit(5).all()

    for att in recent_assessments:
        if att.score is not None:
            signals["recent_assessment_scores"].append(att.score)
            if signals["recent_assessment_score"] is None:
                signals["recent_assessment_score"] = att.score
                if att.assessment:
                    signals["recent_assessment_title"] = att.assessment.title

            if att.score < 50:
                signals["low_scores"] += 1
            elif att.score >= 85:
                signals["high_scores"] += 1

            # Check answers for incorrect topics/questions
            for ans in att.answers:
                if ans.is_correct is False and ans.question:
                    content = ans.question.content or ""
                    # Extract skill name if mapped
                    if ans.question.skill and ans.question.skill.name:
                        signals["affected_skill"] = ans.question.skill.name
                        if ans.question.skill.name not in signals["weak_topics"]:
                            signals["weak_topics"].append(ans.question.skill.name)
                    # Extract recognizable weak topics
                    for kw in ["useState", "useEffect", "State Management", "Async/Await", "Hooks", "Component Lifecycle", "Redis", "Docker", "REST API", "Database", "Authentication"]:
                        if kw.lower() in content.lower() and kw not in signals["weak_topics"]:
                            signals["weak_topics"].append(kw)
                    first_words = " ".join(content.split()[:5])
                    if first_words and first_words not in signals["weak_topics"] and len(signals["weak_topics"]) < 4:
                        signals["weak_topics"].append(first_words)

    # 3. Inspect PracticeAttempts
    recent_practices = db.query(PracticeAttempt).filter(
        PracticeAttempt.learner_id == learner_id
    ).order_by(PracticeAttempt.completed_at.desc()).limit(5).all()

    for pr in recent_practices:
        if pr.score is not None:
            if pr.score < 50:
                signals["low_scores"] += 1
            elif pr.score > 85:
                signals["high_scores"] += 1
            if pr.task and pr.task.skill and not signals["affected_skill"]:
                signals["affected_skill"] = pr.task.skill.name

    # 4. Fallback affected skill from top skill gap if not yet identified
    if not signals["affected_skill"]:
        top_gap = db.query(SkillGap).filter_by(learner_id=learner_id).order_by(SkillGap.priority.desc()).first()
        if top_gap and top_gap.skill:
            signals["affected_skill"] = top_gap.skill.name
        else:
            signals["affected_skill"] = "Core Architecture"

    if not signals["weak_topics"]:
        signals["weak_topics"] = ["Core Concepts", "Implementation Patterns"]

    # Formulate human-readable observation summary
    if signals["recent_assessment_score"] is not None:
        signals["observation_summary"] = f"{signals['recent_assessment_title'] or 'Assessment'} score: {signals['recent_assessment_score']}%"
    elif signals["low_scores"] > 0:
        signals["observation_summary"] = f"Detected {signals['low_scores']} low score checkpoint(s) in {signals['affected_skill']}"
    elif signals["total_time_spent_mins"] == 0:
        signals["observation_summary"] = "Zero activity recorded in current evaluation window"
    else:
        signals["observation_summary"] = f"Steady progress across {signals['recent_activities_completed']} completed activities"

    return {"recent_signals": signals}

def analyze_and_detect(state: AgentState, db: Session) -> Dict[str, Any]:
    """
    Uses deterministic rules + signals to classify learner state.
    """
    signals = state["recent_signals"]
    conditions = []
    recent_scores = signals.get("recent_assessment_scores", [])
    recent_score = signals.get("recent_assessment_score")
    
    # 1. Improved Score after previous struggle
    if len(recent_scores) >= 2 and recent_scores[0] >= 70 and any(s < 50 for s in recent_scores[1:]):
        conditions.append("IMPROVEMENT")
    # 2. Repeated failures
    elif signals["low_scores"] >= 2:
        conditions.append(CONDITIONS["STRUGGLE"])
    # 3. Single struggle (score < 50%)
    elif signals["low_scores"] == 1:
        conditions.append(CONDITIONS["STRUGGLE"])
    # 4. High performance / excellence (score >= 85%)
    elif (recent_score is not None and recent_score >= 85) or signals["high_scores"] >= 1:
        conditions.append(CONDITIONS["DIFFICULTY_MISMATCH"])
    # 5. Moderate performance (50% <= score < 85%)
    elif recent_score is not None and 50 <= recent_score < 85:
        conditions.append(CONDITIONS["PROGRESS_STAGNATION"])
    # 6. Inactivity / learning drop
    elif signals["total_time_spent_mins"] == 0 and signals["recent_activities_completed"] == 0:
        conditions.append(CONDITIONS["LEARNING_DROP"])
        
    return {"detected_conditions": conditions}

def decide(state: AgentState, db: Session) -> Dict[str, Any]:
    """
    Uses LLM / deterministic rules to decide on an action based on detected conditions.
    """
    conditions = state["detected_conditions"]
    signals = state["recent_signals"]
    affected_skill = signals.get("affected_skill") or "Technical Skills"
    weak_topics = signals.get("weak_topics", ["Fundamentals"])
    recent_scores = signals.get("recent_assessment_scores", [])
    recent_score = signals.get("recent_assessment_score")
    
    if not conditions:
        decision = AgentDecision(
            condition="NO_ACTION_REQUIRED",
            recommended_action="NO_ACTION",
            affected_skill=affected_skill,
            reason="No friction signals detected. Learner is progressing steadily.",
            learner_message="You are doing great! Keep up the momentum on your current learning path.",
            confidence="HIGH"
        )
        return {"agent_decision": decision}
    
    primary_condition = conditions[0]
    
    from app.core.config import settings
    if settings.GROQ_API_KEY == "dummy_key_if_not_set" or not settings.GROQ_API_KEY:
        if primary_condition == "STRUGGLE":
            action = "ADD_PREREQUISITE" if signals.get("low_scores", 0) >= 2 else "ADD_PRACTICE"
            decision = AgentDecision(
                condition="STRUGGLE",
                recommended_action=action,
                affected_skill=affected_skill,
                reason=f"Friction detected in {affected_skill}. Weak areas: {', '.join(weak_topics[:2])}.",
                learner_message=f"We noticed friction on recent {affected_skill} evaluations. We've added targeted reinforcement to strengthen these topics.",
                confidence="HIGH"
            )
        elif primary_condition == "DIFFICULTY_MISMATCH":
            decision = AgentDecision(
                condition="DIFFICULTY_MISMATCH",
                recommended_action="INCREASE_DIFFICULTY",
                affected_skill=affected_skill,
                reason=f"High proficiency ({recent_score}%) demonstrated in {affected_skill}.",
                learner_message=f"Outstanding work! You scored {recent_score}% in {affected_skill}. We've upgraded your curriculum with advanced challenges.",
                confidence="HIGH"
            )
        elif primary_condition == "PROGRESS_STAGNATION":
            decision = AgentDecision(
                condition="PROGRESS_STAGNATION",
                recommended_action="NO_ACTION",
                affected_skill=affected_skill,
                reason=f"Moderate proficiency ({recent_score}%) in {affected_skill}. Continuing current trajectory.",
                learner_message=f"Solid progress! You're on track with {recent_score}% in {affected_skill}. Keep up the steady work.",
                confidence="HIGH"
            )
        elif primary_condition == "IMPROVEMENT":
            decision = AgentDecision(
                condition="IMPROVEMENT",
                recommended_action="NO_ACTION",
                affected_skill=affected_skill,
                reason=f"Score improved to {recent_scores[0]}% after prior struggle.",
                learner_message=f"Phenomenal progress! Your score improved to {recent_scores[0]}%. Ready for the next milestone.",
                confidence="HIGH"
            )
        elif primary_condition == "LEARNING_DROP":
            decision = AgentDecision(
                condition="LEARNING_DROP",
                recommended_action="REDUCE_WORKLOAD",
                affected_skill=affected_skill,
                reason="Inactivity detected. Pacing calibrated to ease learner back into rhythm.",
                learner_message="Welcome back! We've streamlined your daily itinerary into bite-sized tasks to help you regain momentum.",
                confidence="HIGH"
            )
        else:
            decision = AgentDecision(
                condition=primary_condition,
                recommended_action="NO_ACTION",
                affected_skill=affected_skill,
                reason=f"Condition {primary_condition} addressed.",
                learner_message=f"Plan optimized for {primary_condition.lower()}.",
                confidence="HIGH"
            )
        return {"agent_decision": decision}
    
    client = get_groq_client()
    
    prompt = f"""
    You are an adaptive AI learning agent for EduPath.
    Detected conditions: {conditions}
    Learner signals:
    - Recent Assessment Score: {recent_score}
    - Score History: {recent_scores}
    - Low Score Count: {signals.get('low_scores')}
    - High Score Count: {signals.get('high_scores')}
    - Affected Skill: {affected_skill}
    - Weak Topics: {weak_topics}
    - Time Spent (mins): {signals.get('total_time_spent_mins')}
    
    Decide the best adaptive action to take.
    Allowed Actions: ADD_PRACTICE, REDUCE_WORKLOAD, INCREASE_DIFFICULTY, DECREASE_DIFFICULTY, ADD_PREREQUISITE, NO_ACTION.
    Guidelines:
    - For single STRUGGLE (score < 50%): recommend ADD_PRACTICE.
    - For repeated STRUGGLE (low_scores >= 2): recommend ADD_PREREQUISITE.
    - For high performance (score >= 85%): recommend INCREASE_DIFFICULTY.
    - For moderate performance (score ~65%): recommend NO_ACTION or maintain steady pace.
    - For IMPROVEMENT (score >= 70% after struggle): recommend NO_ACTION to advance.
    - For LEARNING_DROP (inactivity): recommend REDUCE_WORKLOAD.
    
    Respond strictly with JSON matching this structure:
    {{
        "condition": "{primary_condition}",
        "recommended_action": "One of the allowed actions",
        "affected_skill": "{affected_skill}",
        "reason": "Clear explanation of why this intervention was triggered",
        "learner_message": "Warm, encouraging user-facing explanation of the plan adjustment",
        "confidence": "HIGH"
    }}
    """
    
    try:
        response = client.chat.completions.create(
            messages=[{"role": "user", "content": prompt}],
            model=settings.GROQ_MODEL,
            temperature=0.0,
            response_format={"type": "json_object"}
        )
        content = json.loads(response.choices[0].message.content)
        decision = AgentDecision(**content)
    except Exception as e:
        # High quality fallback
        if primary_condition == "STRUGGLE":
            action = "ADD_PREREQUISITE" if signals.get("low_scores", 0) >= 2 else "ADD_PRACTICE"
            decision = AgentDecision(
                condition="STRUGGLE",
                recommended_action=action,
                affected_skill=affected_skill,
                reason=f"Friction detected in {affected_skill} assessment ({recent_score or 40}%). Weak topics: {', '.join(weak_topics[:2])}.",
                learner_message=f"We noticed you encountered friction in {affected_skill}. We've updated your plan with targeted reinforcement before proceeding.",
                confidence="HIGH"
            )
        elif primary_condition == "DIFFICULTY_MISMATCH":
            decision = AgentDecision(
                condition="DIFFICULTY_MISMATCH",
                recommended_action="INCREASE_DIFFICULTY",
                affected_skill=affected_skill,
                reason=f"High score ({recent_score}%) in {affected_skill}. Ready for advanced challenges.",
                learner_message=f"Excellent score ({recent_score}%)! We've unlocked advanced challenges to keep you growing.",
                confidence="HIGH"
            )
        elif primary_condition == "PROGRESS_STAGNATION":
            decision = AgentDecision(
                condition="PROGRESS_STAGNATION",
                recommended_action="NO_ACTION",
                affected_skill=affected_skill,
                reason=f"Working knowledge demonstrated in {affected_skill} ({recent_score}%). Continuing current schedule.",
                learner_message=f"Good progress! You're on track with {recent_score}% in {affected_skill}. Keep moving forward.",
                confidence="HIGH"
            )
        elif primary_condition == "IMPROVEMENT":
            decision = AgentDecision(
                condition="IMPROVEMENT",
                recommended_action="NO_ACTION",
                affected_skill=affected_skill,
                reason=f"Score improved to {recent_scores[0] if recent_scores else 75}% after prior struggle.",
                learner_message=f"Great job! Your score improved significantly. You've mastered previous weak spots and are ready to advance.",
                confidence="HIGH"
            )
        elif primary_condition == "LEARNING_DROP":
            decision = AgentDecision(
                condition="LEARNING_DROP",
                recommended_action="REDUCE_WORKLOAD",
                affected_skill=affected_skill,
                reason="Inactivity detected. Pacing calibrated to ease learner back into rhythm.",
                learner_message="Welcome back! We've adjusted your daily itinerary into bite-sized tasks to help you regain momentum.",
                confidence="HIGH"
            )
        else:
            decision = AgentDecision(
                condition=primary_condition,
                recommended_action="NO_ACTION",
                affected_skill=affected_skill,
                reason=f"Evaluated condition {primary_condition}: {e}",
                learner_message="Your learning plan is optimized.",
                confidence="MEDIUM"
            )

    return {"agent_decision": decision}

def validate(state: AgentState, db: Session) -> Dict[str, Any]:
    """
    Validates the LLM's recommended action against business rules.
    """
    decision = state["agent_decision"]
    allowed_actions = ["ADD_PRACTICE", "REDUCE_WORKLOAD", "INCREASE_DIFFICULTY", "DECREASE_DIFFICULTY", "ADD_PREREQUISITE", "NO_ACTION"]
    
    is_valid = True
    if not decision or decision.recommended_action not in allowed_actions:
        is_valid = False
        
    return {"action_validated": is_valid}

def act(state: AgentState, db: Session) -> Dict[str, Any]:
    """
    Executes the validated action on the database, replanning the roadmap.
    """
    if not state.get("action_validated") or not state.get("agent_decision"):
        return {}
        
    decision = state["agent_decision"]
    learner_id = state["learner_id"]
    
    if decision.recommended_action == "NO_ACTION":
        return {}
        
    # Get active learning path
    active_path = db.query(LearningPath).filter_by(learner_id=learner_id, status="ACTIVE").first()
    if not active_path:
        return {}
        
    # Find target module (active/pending)
    module = db.query(LearningModule).filter_by(learning_path_id=active_path.id, status="PENDING").first()
    if not module:
        module = db.query(LearningModule).filter_by(learning_path_id=active_path.id).order_by(LearningModule.order_index).first()

    first_weekly_plan = db.query(WeeklyPlan).filter_by(learning_path_id=active_path.id).order_by(WeeklyPlan.week_number).first()
    weekly_plan_id = first_weekly_plan.id if first_weekly_plan else None
    skill_name = decision.affected_skill or "Core Fundamentals"

    # Action implementations
    if decision.recommended_action == "ADD_PRACTICE" and module:
        new_title = f"Reinforcement Practice: {skill_name}"
        existing = db.query(LearningActivity).filter_by(module_id=module.id, title=new_title).first()
        if not existing:
            new_activity = LearningActivity(
                module_id=module.id,
                title=new_title,
                description=f"Reinforce {skill_name} fundamentals based on adaptive agent evaluation. {decision.reason}",
                activity_type="PRACTICE",
                estimated_duration_mins=20,
                difficulty="BEGINNER",
                order_index=0,
                weekly_plan_id=weekly_plan_id
            )
            db.add(new_activity)
            db.flush()

    elif decision.recommended_action == "ADD_PREREQUISITE" and module:
        new_title = f"Prerequisite Review: {skill_name} Foundations"
        existing = db.query(LearningActivity).filter_by(module_id=module.id, title=new_title).first()
        if not existing:
            new_activity = LearningActivity(
                module_id=module.id,
                title=new_title,
                description=f"Deep foundational prerequisite review for {skill_name} before proceeding to complex modules. {decision.reason}",
                activity_type="VIDEO",
                estimated_duration_mins=30,
                difficulty="BEGINNER",
                order_index=0,
                weekly_plan_id=weekly_plan_id
            )
            db.add(new_activity)
            db.flush()

    elif decision.recommended_action == "INCREASE_DIFFICULTY" and module:
        new_title = f"Advanced Challenge: {skill_name} Mastery"
        existing = db.query(LearningActivity).filter_by(module_id=module.id, title=new_title).first()
        if not existing:
            new_activity = LearningActivity(
                module_id=module.id,
                title=new_title,
                description=f"Accelerated challenge to test advanced {skill_name} capabilities. {decision.reason}",
                activity_type="LAB",
                estimated_duration_mins=45,
                difficulty="ADVANCED",
                order_index=0,
                weekly_plan_id=weekly_plan_id
            )
            db.add(new_activity)
            db.flush()

    elif decision.recommended_action == "REDUCE_WORKLOAD":
        pending_activities = db.query(LearningActivity).join(LearningModule).filter(
            LearningModule.learning_path_id == active_path.id
        ).all()
        for act_item in pending_activities[:3]:
            if act_item.estimated_duration_mins and act_item.estimated_duration_mins > 15:
                act_item.estimated_duration_mins = 15
        db.flush()
    return {}

def persist(state: AgentState, db: Session) -> Dict[str, Any]:
    """
    Records the AgentEvent, PlanAdaptation, and creates an in-app Notification.
    """
    decision = state["agent_decision"]
    learner_id = state["learner_id"]
    signals = state.get("recent_signals", {})
    
    if not decision:
        return {}
        
    event_data = {
        "action": decision.recommended_action,
        "skill": decision.affected_skill,
        "weak_topics": signals.get("weak_topics", []),
        "observation": signals.get("observation_summary", ""),
        "decision": decision.reason,
        "actions_taken": [
            f"Added reinforcement practice for {decision.affected_skill or 'core skills'}",
            "Calibrated learning pace",
            "Updated weekly milestones"
        ] if decision.recommended_action != "NO_ACTION" else ["Maintained current curriculum cadence"],
        "validated": state.get("action_validated", False)
    }

    event = AgentEvent(
        learner_id=learner_id,
        event_type=decision.condition,
        description=decision.learner_message,
        event_data=event_data
    )
    db.add(event)
    db.flush()
    
    if decision.recommended_action != "NO_ACTION" and state.get("action_validated"):
        active_path = db.query(LearningPath).filter_by(learner_id=learner_id, status="ACTIVE").first()
        if active_path:
            adaptation = PlanAdaptation(
                learner_id=learner_id,
                learning_path_id=active_path.id,
                trigger_condition=decision.condition,
                action_taken=decision.recommended_action,
                user_message=decision.learner_message,
                previous_state={"status": "before_adaptation", "path_title": active_path.title},
                new_state={"status": "after_adaptation", "action": decision.recommended_action, "skill": decision.affected_skill}
            )
            db.add(adaptation)
            db.flush()

    # Create in-app Notification for the learner
    profile = db.query(LearnerProfile).filter_by(id=learner_id).first()
    if profile and profile.user_id:
        notif = Notification(
            recipient_id=profile.user_id,
            notification_type=f"AGENT_{decision.condition}",
            title=f"EduPath Adaptation: {decision.condition.replace('_', ' ').title()}",
            message=decision.learner_message,
            related_entity_ref=f"agent_event:{event.id}"
        )
        db.add(notif)
        db.flush()
            
    return {"final_event_id": event.id}
