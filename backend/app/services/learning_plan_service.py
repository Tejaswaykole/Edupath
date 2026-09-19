from sqlalchemy.orm import Session
from app.models.learning import SkillGap, LearningPath, LearningModule, LearningActivity, WeeklyPlan
from app.models.learner import LearnerProfile
from app.services.ai_service import generate_learning_path

def create_personalized_plan(db: Session, learner: LearnerProfile) -> LearningPath:
    # Get all active skill gaps
    gaps = db.query(SkillGap).filter(
        SkillGap.learner_id == learner.id, 
        SkillGap.status != "COMPLETED"
    ).all()

    if not gaps:
        return None

    target_role_id = gaps[0].target_role_id
    gap_names = [g.skill.name for g in gaps]
    
    # Check if a learning path already exists
    path = db.query(LearningPath).filter(
        LearningPath.learner_id == learner.id,
        LearningPath.target_role_id == target_role_id
    ).first()

    if path:
        return path # In a real implementation we might update it, but returning for MVP

    # Call AI to generate path structure
    ai_path = generate_learning_path(learner.target_role, gap_names)
    
    path = LearningPath(
        learner_id=learner.id,
        target_role_id=target_role_id,
        title=ai_path.title,
        status="ACTIVE"
    )
    db.add(path)
    db.flush()

    # Generate the modules and activities
    for m_idx, module_data in enumerate(ai_path.modules):
        module = LearningModule(
            learning_path_id=path.id,
            title=module_data.title,
            description=module_data.description,
            order_index=m_idx
        )
        db.add(module)
        db.flush()

        for a_idx, act_data in enumerate(module_data.activities):
            activity = LearningActivity(
                module_id=module.id,
                title=act_data.title,
                description=act_data.description,
                activity_type=act_data.activity_type,
                estimated_duration_mins=act_data.estimated_duration_mins,
                difficulty=act_data.difficulty,
                order_index=a_idx,
                resource_url=act_data.resource_url
            )
            db.add(activity)

    # Generate a simple Weekly Plan (Assigning modules roughly by weeks)
    db.flush()
    modules = db.query(LearningModule).filter(LearningModule.learning_path_id == path.id).all()
    for w_idx, module in enumerate(modules):
        weekly_plan = WeeklyPlan(
            learning_path_id=path.id,
            week_number=w_idx + 1,
            focus_description=f"Focus on {module.title}"
        )
        db.add(weekly_plan)
        db.flush()
        
        # Link activities to this week
        for act in module.activities:
            act.weekly_plan_id = weekly_plan.id
            db.add(act)

    db.commit()
    db.refresh(path)
    return path
