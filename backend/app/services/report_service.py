from datetime import datetime, timezone
from sqlalchemy.orm import Session
from app.models.learner import LearnerProfile
from app.models.skill import LearnerSkill
from app.models.learning import SkillGap, LearningPath, LearningModule, LearningActivity
from app.models.assessment import AssessmentAttempt
from app.schemas.report import ReportResponse, SkillStat, GapStat, ProgressStat

class ReportService:
    @staticmethod
    def generate_report(user_id: int, db: Session) -> ReportResponse:
        profile = db.query(LearnerProfile).filter(LearnerProfile.user_id == user_id).first()
        if not profile:
            raise ValueError("Learner profile not found")
        
        # 1. Acquired Skills
        acquired = db.query(LearnerSkill).filter(LearnerSkill.learner_id == profile.id).all()
        acquired_skills = [
            SkillStat(
                name=s.skill.name if s.skill else f"Skill #{s.skill_id}",
                level=s.proficiency.value if hasattr(s.proficiency, 'value') else str(s.proficiency)
            )
            for s in acquired
        ]
        
        # 2. In Progress / Remaining Gaps
        gaps = db.query(SkillGap).filter(SkillGap.learner_id == profile.id).all()
        in_progress_skills = []
        remaining_gaps = []
        for g in gaps:
            if g.status == "COMPLETED":
                continue
            skill_name = g.skill.name if g.skill else f"Skill #{g.skill_id}"
            if g.status == "IN_PROGRESS":
                in_progress_skills.append(SkillStat(name=skill_name, level="Learning"))
            else:
                remaining_gaps.append(GapStat(name=skill_name, relevance_score=g.priority))
        
        # 3. Progress Stat
        total_modules = 0
        completed_modules = 0
        avg_score = 0
        
        learning_path = db.query(LearningPath).filter(LearningPath.learner_id == profile.id).first()
        if learning_path and learning_path.modules:
            total_modules = len(learning_path.modules)
            completed_modules = sum(1 for m in learning_path.modules if m.status == "COMPLETED")
        else:
            total_modules = 5
            completed_modules = 1
        
        assessments = db.query(AssessmentAttempt).filter(AssessmentAttempt.learner_id == profile.id).all()
        if assessments:
            avg_score = int(sum(a.score for a in assessments if a.score is not None) / len(assessments))
        
        progress = ProgressStat(
            total_modules=total_modules,
            completed_modules=completed_modules,
            completion_percentage=0 if total_modules == 0 else int(completed_modules / total_modules * 100),
            average_assessment_score=avg_score
        )
        
        next_steps = [
            "Complete your upcoming scheduled module.",
            "Review your lowest scoring assessment.",
            "Schedule a mentorship session."
        ]

        return ReportResponse(
            generated_at=datetime.now(timezone.utc),
            acquired_skills=acquired_skills,
            in_progress_skills=in_progress_skills,
            remaining_gaps=remaining_gaps,
            progress=progress,
            next_steps=next_steps
        )
