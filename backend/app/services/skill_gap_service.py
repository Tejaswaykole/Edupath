from sqlalchemy.orm import Session
from app.models.learning import SkillGap, LearningObjective
from app.models.learner import LearnerProfile
from app.models.target_role import TargetRole
from app.models.skill import LearnerSkill
from app.services.ai_service import analyze_skill_gap

PROFICIENCY_LEVELS = {"BEGINNER": 1, "INTERMEDIATE": 2, "ADVANCED": 3, "EXPERT": 4}

def get_gap_level(required: str, current: str) -> int:
    req_level = PROFICIENCY_LEVELS.get(required.upper(), 1)
    cur_level = PROFICIENCY_LEVELS.get(current.upper(), 0) if current else 0
    return max(0, req_level - cur_level)

def analyze_learner_gaps(db: Session, learner: LearnerProfile) -> list[SkillGap]:
    if not learner.target_role:
        return []
    
    target_role = db.query(TargetRole).filter(TargetRole.title == learner.target_role).first()
    if not target_role:
        return []

    # Get learner's current skills mapped by skill_id
    current_skills = {ls.skill_id: ls.proficiency_level for ls in learner.skills}
    
    gaps_created = []

    for tr_skill in target_role.skills:
        skill = tr_skill.skill
        required_prof = tr_skill.required_proficiency_level
        current_prof = current_skills.get(skill.id, "NONE")

        gap_level = get_gap_level(required_prof, current_prof)
        
        if gap_level > 0:
            # Check if gap already exists
            existing_gap = db.query(SkillGap).filter(
                SkillGap.learner_id == learner.id,
                SkillGap.skill_id == skill.id
            ).first()

            if not existing_gap:
                priority = 1 if gap_level >= 2 else 2 # Deterministic priority
                
                new_gap = SkillGap(
                    learner_id=learner.id,
                    target_role_id=target_role.id,
                    skill_id=skill.id,
                    current_proficiency=current_prof,
                    required_proficiency=required_prof,
                    gap_level=gap_level,
                    priority=priority,
                    status="IDENTIFIED"
                )
                db.add(new_gap)
                db.flush()
                gaps_created.append(new_gap)

                # Call Groq to generate learning objectives for this gap
                ai_analysis = analyze_skill_gap(skill.name, target_role.title)
                
                for obj in ai_analysis.objectives:
                    db.add(LearningObjective(
                        skill_gap_id=new_gap.id,
                        title=obj.title,
                        description=obj.description,
                        difficulty=obj.difficulty,
                        estimated_effort_mins=obj.estimated_effort_mins,
                        priority=priority,
                        status="PENDING"
                    ))
    
    db.commit()
    return gaps_created
