from sqlalchemy.orm import Session
from app.models.learner import LearnerProfile
from app.models.learning import SkillGap, LearningPath, LearningModule, LearningActivity, LearningProgress
from app.models.skill import LearnerSkill, Skill
from app.models.agent import AgentEvent
from app.models.assessment import AssessmentAttempt
from sqlalchemy import select, desc
import json

def get_learner_context(db: Session, learner_id: int) -> str:
    # 1. Get Profile
    profile = db.execute(
        select(LearnerProfile).where(LearnerProfile.id == learner_id)
    ).scalar_one_or_none()
    
    if not profile:
        return "{}"

    # 2. Get Current Skills (LearnerSkill joined with Skill)
    learner_skills_rows = db.execute(
        select(LearnerSkill, Skill)
        .join(Skill, LearnerSkill.skill_id == Skill.id)
        .where(LearnerSkill.learner_id == learner_id)
    ).all()

    current_skills = [
        {
            "skill_id": skill.id,
            "name": skill.name,
            "proficiency": ls.proficiency.value if hasattr(ls.proficiency, "value") else str(ls.proficiency),
            "confidence_score": ls.confidence_score,
            "source_evidence": ls.source_evidence,
            "experience_years": ls.experience_years
        }
        for ls, skill in learner_skills_rows
    ]

    # 3. Get Active Learning Path
    learning_path = db.execute(
        select(LearningPath).where(LearningPath.learner_id == learner_id, LearningPath.status == "ACTIVE")
    ).scalar_one_or_none()
    
    # 4. Get Skill Gaps with skill relationship
    skill_gaps = db.execute(
        select(SkillGap).where(SkillGap.learner_id == learner_id, SkillGap.status != "COMPLETED")
    ).scalars().all()
    
    # 5. Get Recent Agent Events (last 3)
    agent_events = db.execute(
        select(AgentEvent).where(AgentEvent.learner_id == learner_id).order_by(desc(AgentEvent.occurred_at)).limit(3)
    ).scalars().all()

    # 6. Get Recent Assessment Attempts
    assessments = db.execute(
        select(AssessmentAttempt).where(AssessmentAttempt.learner_id == learner_id).order_by(desc(AssessmentAttempt.started_at)).limit(3)
    ).scalars().all()

    path_modules = []
    total_activities = 0
    if learning_path and learning_path.modules:
        for m in learning_path.modules[:3]:
            act_count = len(m.activities) if m.activities else 0
            total_activities += act_count
            path_modules.append({
                "title": m.title,
                "status": m.status,
                "activities_count": act_count
            })

    # 7. Progress Completion Calculation
    completed_activities = db.execute(
        select(LearningProgress).where(
            LearningProgress.learner_id == learner_id,
            LearningProgress.status == "COMPLETED"
        )
    ).scalars().all()

    progress_pct = int((len(completed_activities) / total_activities) * 100) if total_activities > 0 else 0

    # 8. Weak Areas Extraction (from priority skill gaps and low scoring assessment attempts)
    weak_areas = []
    for gap in skill_gaps:
        s_name = gap.skill.name if gap.skill else f"Skill #{gap.skill_id}"
        if s_name not in weak_areas and gap.priority >= 2:
            weak_areas.append(s_name)

    for att in assessments:
        if att.score is not None and att.score < 60:
            a_title = att.assessment.title if att.assessment else "Assessment"
            if a_title not in weak_areas:
                weak_areas.append(f"{a_title} (Score: {att.score}%)")

    context = {
        "learner_info": {
            "first_name": profile.first_name or "Learner",
            "target_role": profile.target_role or "Full Stack Developer",
            "bio": profile.bio or ""
        },
        "current_skills": current_skills,
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
        "weak_areas": weak_areas,
        "progress": {
            "completed_activities_count": len(completed_activities),
            "total_activities_count": total_activities,
            "completion_percentage": progress_pct
        },
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
