from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models.base import Base
from models import (
    SkillCategory, Skill, TargetRole, TargetRoleSkill, ProficiencyLevel,
    User, LearnerProfile, MentorProfile, MentorExpertise
)

# SQLite DB connection
engine = create_engine("sqlite:///../test.db", echo=False)
SessionLocal = sessionmaker(bind=engine)

def seed_data():
    db = SessionLocal()
    
    # Avoid duplicate seeding
    if db.query(SkillCategory).first():
        print("Database already seeded!")
        return

    print("Seeding initial categories and skills...")
    
    # Create Categories
    cat_frontend = SkillCategory(name="Frontend Engineering", description="Client-side technologies")
    cat_backend = SkillCategory(name="Backend Engineering", description="Server-side technologies")
    db.add_all([cat_frontend, cat_backend])
    db.commit()

    # Create Skills
    skill_react = Skill(name="React", description="Component-based UI library", category_id=cat_frontend.id)
    skill_ts = Skill(name="TypeScript", description="Strongly typed JavaScript", category_id=cat_frontend.id)
    skill_python = Skill(name="Python", description="General purpose programming", category_id=cat_backend.id)
    db.add_all([skill_react, skill_ts, skill_python])
    db.commit()

    print("Seeding target roles...")
    
    # Create Target Role
    role_fse = TargetRole(name="Full Stack Engineer", category="Software Engineering", description="End-to-end software development")
    db.add(role_fse)
    db.commit()

    # Mappings
    trs_1 = TargetRoleSkill(target_role_id=role_fse.id, skill_id=skill_react.id, required_proficiency=ProficiencyLevel.INTERMEDIATE, importance=9)
    trs_2 = TargetRoleSkill(target_role_id=role_fse.id, skill_id=skill_python.id, required_proficiency=ProficiencyLevel.INTERMEDIATE, importance=8)
    db.add_all([trs_1, trs_2])
    db.commit()

    print("Seeding mock mentor...")
    # Mock Mentor
    user_mentor = User(email="mentor.seed@example.com", hashed_password="mock_hash", role="MENTOR")
    db.add(user_mentor)
    db.commit()

    mentor_profile = MentorProfile(user_id=user_mentor.id, professional_title="Senior SWE", years_experience=8, is_verified=True)
    db.add(mentor_profile)
    db.commit()

    expert_react = MentorExpertise(mentor_id=mentor_profile.id, skill_id=skill_react.id, years_experience=6)
    db.add(expert_react)
    db.commit()

    print("Seeding complete.")

if __name__ == "__main__":
    seed_data()
