from sqlalchemy.orm import Session
from app.models.learner import LearnerProfile
from app.models.learning import SkillGap, LearningPath, LearningModule, LearningActivity, LearningProgress
from app.models.agent import AgentEvent
from app.models.assessment import AssessmentAttempt
from sqlalchemy import select, desc
import json

def get_learner_context(db: Session, learner_id: int) -> str:
    # Get Profile
    profile = db.execute(
        select(LearnerProfile).where(LearnerProfile.id == learner_id)
    ).scalar_one_or_none()
    
    if not profile:
        return "{}"

    # Get Active Learning Path
    learning_path = db.execute(
        select(LearningPath).where(LearningPath.learner_id == learner_id, LearningPath.status == "ACTIVE")
    ).scalar_one_or_none()
    
    # Get Skill Gaps with skill relationship
    skill_gaps = db.execute(
        select(SkillGap).where(SkillGap.learner_id == learner_id, SkillGap.status != "COMPLETED")
    ).scalars().all()
    
    # Get Recent Agent Events (last 3)
    agent_events = db.execute(
        select(AgentEvent).where(AgentEvent.learner_id == learner_id).order_by(desc(AgentEvent.occurred_at)).limit(3)
    ).scalars().all()

    # Get Recent Assessment Attempts
    assessments = db.execute(
        select(AssessmentAttempt).where(AssessmentAttempt.learner_id == learner_id).order_by(desc(AssessmentAttempt.started_at)).limit(3)
    ).scalars().all()

    path_modules = []
    if learning_path and learning_path.modules:
        for m in learning_path.modules[:3]:
            path_modules.append({
                "title": m.title,
                "status": m.status,
                "activities_count": len(m.activities) if m.activities else 0
            })

    context = {
        "learner_info": {
            "first_name": profile.first_name or "Learner",
            "target_role": profile.target_role or "Full Stack Developer",
            "bio": profile.bio or ""
        },
        "skill_gaps": [
            {
                "id": gap.id,
                "skill_name": gap.skill.name if gap.skill else f"Skill #{gap.skill_id}",
                "current_proficiency": gap.current_proficiency,
                "required_proficiency": gap.required_proficiency,
                "priority": gap.priority
            }
            for gap in skill_gaps
        ],
        "active_learning_path": {
            "id": learning_path.id,
            "title": learning_path.title,
            "status": learning_path.status,
            "modules": path_modules
        } if learning_path else None,
        "recent_assessments": [
            {
                "title": att.assessment.title if att.assessment else "Assessment",
                "score": att.score,
                "status": att.status
            }
            for att in assessments
        ],
        "recent_agent_events": [
            {
                "event_type": event.event_type,
                "message": event.description,
                "event_data": event.event_data
            }
            for event in agent_events
        ]
    }
    
    return json.dumps(context, default=str)
