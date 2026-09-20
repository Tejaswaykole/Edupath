import os
import sys
import logging
from datetime import datetime, timezone, timedelta

sys.path.insert(0, os.path.realpath(os.path.join(os.path.dirname(__file__), '..')))

from app.db.session import SessionLocal
from app.models.user import User
from app.models.learner import LearnerProfile
from app.models.skill import SkillCategory, Skill, LearnerSkill, ProficiencyLevel
from app.models.mentorship import MentorProfile, MentorExpertise, MentorshipRequest, ActiveMentorship, MentorGuidance
from app.models.learning import SkillGap, LearningPath, LearningModule, LearningActivity, LearningProgress
from app.models.target_role import TargetRole
from app.models.agent import AgentEvent
from app.models.notification import Notification
from app.core.security import hash_password

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def seed():
    db = SessionLocal()
    try:
        # Seed Users
        users = [
            {"email": "nikhil.demo@edupath.local", "name": "Nikhil Sharma", "role": "LEARNER"},
            {"email": "rahul.demo@edupath.local", "name": "Rahul Patil", "role": "LEARNER"},
            {"email": "priya.demo@edupath.local", "name": "Priya Kulkarni", "role": "MENTOR"},
            {"email": "amit.demo@edupath.local", "name": "Amit Deshmukh", "role": "MENTOR"}
        ]

        db_users = {}
        for u in users:
            existing = db.query(User).filter(User.email == u["email"]).first()
            if not existing:
                new_user = User(
                    email=u["email"],
                    hashed_password=hash_password("password123"),
                    role=u["role"]
                )
                db.add(new_user)
                db.commit()
                db.refresh(new_user)
                db_users[u["name"]] = new_user
                logger.info(f"Created user: {u['name']}")
            else:
                db_users[u["name"]] = existing
                logger.info(f"User {u['name']} already exists")

        nikhil = db_users.get("Nikhil Sharma")
        rahul = db_users.get("Rahul Patil")
        priya = db_users.get("Priya Kulkarni")
        amit = db_users.get("Amit Deshmukh")

        # Seed Learner Profiles
        if nikhil and not db.query(LearnerProfile).filter(LearnerProfile.user_id == nikhil.id).first():
            db.add(LearnerProfile(user_id=nikhil.id, first_name="Nikhil", last_name="Sharma", target_role="Full Stack Developer", bio="Passionate about scalable architectures."))
        if rahul and not db.query(LearnerProfile).filter(LearnerProfile.user_id == rahul.id).first():
            db.add(LearnerProfile(user_id=rahul.id, first_name="Rahul", last_name="Patil", target_role="Backend Developer", bio="Student learning Python and Go."))
        db.commit()

        # Seed Mentor Profiles
        if priya and not db.query(MentorProfile).filter(MentorProfile.user_id == priya.id).first():
            db.add(MentorProfile(user_id=priya.id, professional_title="Senior Full Stack Engineer", years_experience=8, is_verified=True))
        if amit and not db.query(MentorProfile).filter(MentorProfile.user_id == amit.id).first():
            db.add(MentorProfile(user_id=amit.id, professional_title="Staff Backend Engineer", years_experience=12, is_verified=True))
        db.commit()

        # Seed Skills & Gaps for Nikhil
        if nikhil:
            profile = db.query(LearnerProfile).filter(LearnerProfile.user_id == nikhil.id).first()
            if profile and not db.query(SkillGap).filter(SkillGap.learner_id == nikhil.id).first():
                # Add categories and skills
                cat = db.query(SkillCategory).filter(SkillCategory.name == "Backend Development").first()
                if not cat:
                    cat = SkillCategory(name="Backend Development", description="Server side tech")
                    db.add(cat)
                    db.commit()
                    db.refresh(cat)
                
                skill_node = db.query(Skill).filter(Skill.name == "Node.js").first()
                if not skill_node:
                    skill_node = Skill(category_id=cat.id, name="Node.js", description="Async JS server")
                    db.add(skill_node)
                    
                skill_redis = db.query(Skill).filter(Skill.name == "Redis").first()
                if not skill_redis:
                    skill_redis = Skill(category_id=cat.id, name="Redis", description="In-memory cache")
                    db.add(skill_redis)
                
                db.commit()
                if skill_node and skill_redis:
                    db.refresh(skill_node)
                    db.refresh(skill_redis)
                    
                    target_role = db.query(TargetRole).filter(TargetRole.name == "Full Stack Developer").first()
                    if not target_role:
                        target_role = TargetRole(name="Full Stack Developer", description="Handles both frontend and backend")
                        db.add(target_role)
                        db.commit()
                        db.refresh(target_role)

                    gap1 = db.query(SkillGap).filter(SkillGap.learner_id == nikhil.id, SkillGap.skill_id == skill_node.id).first()
                    if not gap1:
                        gap1 = SkillGap(learner_id=nikhil.id, target_role_id=target_role.id, skill_id=skill_node.id, current_proficiency="BEGINNER", required_proficiency="ADVANCED", gap_level=4, priority=85)
                        db.add(gap1)
                        
                    gap2 = db.query(SkillGap).filter(SkillGap.learner_id == nikhil.id, SkillGap.skill_id == skill_redis.id).first()
                    if not gap2:
                        gap2 = SkillGap(learner_id=nikhil.id, target_role_id=target_role.id, skill_id=skill_redis.id, current_proficiency="BEGINNER", required_proficiency="INTERMEDIATE", gap_level=3, priority=75)
                        db.add(gap2)
                    db.commit()
                
                # Seed Learning Path
                path = db.query(LearningPath).filter(LearningPath.learner_id == nikhil.id).first()
                if not path:
                    path = LearningPath(learner_id=nikhil.id, target_role_id=None, title="Full Stack Developer Path", status="ACTIVE")
                    db.add(path)
                    db.commit()
                    db.refresh(path)
                
                module1 = db.query(LearningModule).filter(LearningModule.learning_path_id == path.id).first()
                if not module1:
                    module1 = LearningModule(learning_path_id=path.id, title="Advanced Node.js Patterns", order_index=1, status="IN_PROGRESS")
                    db.add(module1)
                    db.commit()

        # Seed Mentorship Request from Nikhil to Priya
        if nikhil and priya:
            priya_mentor = db.query(MentorProfile).filter(MentorProfile.user_id == priya.id).first()
            if priya_mentor and not db.query(MentorshipRequest).filter(MentorshipRequest.learner_id == nikhil.id).first():
                req = MentorshipRequest(learner_id=nikhil.id, mentor_id=priya_mentor.id, message="Hi Priya, I'd like help with Redis caching in Node.", status="ACCEPTED")
                db.add(req)
                db.commit()
                db.refresh(req)

                active = ActiveMentorship(request_id=req.id, learner_id=req.learner_id, mentor_id=req.mentor_id, status="ACTIVE", goals="Mastering Redis caching and Node.js microservices")
                db.add(active)
                db.commit()
                db.refresh(active)

                guidance = MentorGuidance(mentorship_id=active.id, title="Redis TTL Strategy", message="Hi Nikhil, great progress on your Express routes. I reviewed your code. The reason you're hitting latency issues is storing full decoded claims in Redis on every hit. Instead, only store the `jti` in a Redis SET with a TTL matching your token expiration window.", is_read=False)
                db.add(guidance)
                db.commit()

        # Seed Agent Events & Notifications
        if nikhil:
            if not db.query(AgentEvent).filter(AgentEvent.learner_id == nikhil.id).first():
                event = AgentEvent(learner_id=nikhil.id, event_type="LEARNING_PLAN_GENERATED", description="Generated initial learning path for Full Stack Developer role.")
                db.add(event)
                db.commit()
            
            if not db.query(Notification).filter(Notification.recipient_id == nikhil.id).first():
                notif = Notification(recipient_id=nikhil.id, title="Welcome to Edupath", message="Your customized learning plan is ready.", notification_type="SYSTEM")
                db.add(notif)
                db.commit()
                
        logger.info("Database seeding complete!")
        
    except Exception as e:
        logger.error(f"Error seeding database: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    seed()
