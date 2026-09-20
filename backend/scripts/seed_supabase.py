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
from app.models.learning import SkillGap, LearningPath, LearningModule, LearningActivity, LearningProgress, WeeklyPlan
from app.models.target_role import TargetRole, TargetRoleSkill
from app.models.assessment import PracticeTask, Assessment, AssessmentQuestion
from app.models.agent import AgentEvent
from app.models.notification import Notification
from app.core.security import hash_password

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def seed():
    db = SessionLocal()
    try:
        # 1. Seed Users
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

        # 2. Seed Learner Profiles
        nikhil_profile = None
        if nikhil:
            nikhil_profile = db.query(LearnerProfile).filter(LearnerProfile.user_id == nikhil.id).first()
            if not nikhil_profile:
                nikhil_profile = LearnerProfile(user_id=nikhil.id, first_name="Nikhil", last_name="Sharma", target_role="Full Stack Developer", bio="Passionate about scalable architectures.")
                db.add(nikhil_profile)
                db.commit()
                db.refresh(nikhil_profile)

        if rahul and not db.query(LearnerProfile).filter(LearnerProfile.user_id == rahul.id).first():
            rahul_profile = LearnerProfile(user_id=rahul.id, first_name="Rahul", last_name="Patil", target_role="Backend Developer", bio="Student learning Python and Go.")
            db.add(rahul_profile)
            db.commit()

        # 3. Seed Mentor Profiles
        priya_mentor = None
        if priya:
            priya_mentor = db.query(MentorProfile).filter(MentorProfile.user_id == priya.id).first()
            if not priya_mentor:
                priya_mentor = MentorProfile(user_id=priya.id, professional_title="Senior Full Stack Engineer", years_experience=8, is_verified=True)
                db.add(priya_mentor)
                db.commit()
                db.refresh(priya_mentor)

        if amit and not db.query(MentorProfile).filter(MentorProfile.user_id == amit.id).first():
            db.add(MentorProfile(user_id=amit.id, professional_title="Staff Backend Engineer", years_experience=12, is_verified=True))
            db.commit()

        # 4. Seed Categories & Skills
        cat_backend = db.query(SkillCategory).filter(SkillCategory.name == "Backend Development").first()
        if not cat_backend:
            cat_backend = SkillCategory(name="Backend Development", description="Server side tech")
            db.add(cat_backend)
            db.commit()
            db.refresh(cat_backend)

        cat_frontend = db.query(SkillCategory).filter(SkillCategory.name == "Frontend Architecture").first()
        if not cat_frontend:
            cat_frontend = SkillCategory(name="Frontend Architecture", description="Client side frameworks")
            db.add(cat_frontend)
            db.commit()
            db.refresh(cat_frontend)

        skill_node = db.query(Skill).filter(Skill.name == "Node.js").first()
        if not skill_node:
            skill_node = Skill(category_id=cat_backend.id, name="Node.js", description="Async JS runtime")
            db.add(skill_node)
            
        skill_redis = db.query(Skill).filter(Skill.name == "Redis").first()
        if not skill_redis:
            skill_redis = Skill(category_id=cat_backend.id, name="Redis", description="In-memory cache")
            db.add(skill_redis)

        skill_react = db.query(Skill).filter(Skill.name == "React").first()
        if not skill_react:
            skill_react = Skill(category_id=cat_frontend.id, name="React", description="Modern UI library")
            db.add(skill_react)

        skill_ts = db.query(Skill).filter(Skill.name == "TypeScript").first()
        if not skill_ts:
            skill_ts = Skill(category_id=cat_frontend.id, name="TypeScript", description="Typed JavaScript")
            db.add(skill_ts)

        db.commit()
        db.refresh(skill_node)
        db.refresh(skill_redis)
        db.refresh(skill_react)
        db.refresh(skill_ts)

        # 5. Seed Target Role & Required Skills
        target_role = db.query(TargetRole).filter(TargetRole.name == "Full Stack Developer").first()
        if not target_role:
            target_role = TargetRole(name="Full Stack Developer", description="Builds both frontend and backend systems.", category="Engineering")
            db.add(target_role)
            db.commit()
            db.refresh(target_role)

        # Check required skills for TargetRole
        for sk, prof in [(skill_node, ProficiencyLevel.ADVANCED), (skill_redis, ProficiencyLevel.INTERMEDIATE), (skill_react, ProficiencyLevel.ADVANCED), (skill_ts, ProficiencyLevel.INTERMEDIATE)]:
            tr_skill = db.query(TargetRoleSkill).filter(TargetRoleSkill.target_role_id == target_role.id, TargetRoleSkill.skill_id == sk.id).first()
            if not tr_skill:
                db.add(TargetRoleSkill(target_role_id=target_role.id, skill_id=sk.id, required_proficiency=prof, importance=8))
        db.commit()

        # 6. Seed Practice Task
        practice_task = db.query(PracticeTask).filter(PracticeTask.title == "Implement Redis Token Blacklisting").first()
        if not practice_task:
            practice_task = PracticeTask(
                skill_id=skill_redis.id,
                title="Implement Redis Token Blacklisting",
                instructions="Write a function `blacklistToken(redisClient, token, ttlSeconds)` that sets a token key in Redis with the specified expiration time in seconds, and returns true on success.",
                difficulty="INTERMEDIATE",
                estimated_duration_mins=20,
                expected_output="async function blacklistToken(client, token, ttl) { await client.set(token, 'revoked', 'EX', ttl); return true; }"
            )
            db.add(practice_task)
            db.commit()
            db.refresh(practice_task)

        # 7. Seed Assessment
        assessment = db.query(Assessment).filter(Assessment.title == "Full Stack Core Knowledge Check").first()
        if not assessment:
            assessment = Assessment(
                title="Full Stack Core Knowledge Check",
                description="Evaluate your core comprehension of full stack async architecture, caching patterns, and frontend state management."
            )
            db.add(assessment)
            db.commit()
            db.refresh(assessment)

            q1 = AssessmentQuestion(
                assessment_id=assessment.id,
                skill_id=skill_node.id,
                question_type="MULTIPLE_CHOICE",
                content="Which Node.js event loop phase executes timers like setTimeout() and setInterval()?",
                correct_answer="Timers phase",
                options=["Timers phase", "Poll phase", "Check phase", "Close callbacks phase"]
            )
            q2 = AssessmentQuestion(
                assessment_id=assessment.id,
                skill_id=skill_redis.id,
                question_type="MULTIPLE_CHOICE",
                content="What is the time complexity of the Redis GET command for a string key?",
                correct_answer="O(1)",
                options=["O(1)", "O(log N)", "O(N)", "O(N^2)"]
            )
            q3 = AssessmentQuestion(
                assessment_id=assessment.id,
                skill_id=skill_react.id,
                question_type="MULTIPLE_CHOICE",
                content="In React, when does a useEffect hook with an empty dependency array `[]` run?",
                correct_answer="Once after initial render",
                options=["Once after initial render", "Before initial render", "On every state update", "Never"]
            )
            db.add_all([q1, q2, q3])
            db.commit()

        # 8. Seed Gaps & Path for Nikhil
        if nikhil_profile:
            gap1 = db.query(SkillGap).filter(SkillGap.learner_id == nikhil_profile.id, SkillGap.skill_id == skill_node.id).first()
            if not gap1:
                gap1 = SkillGap(learner_id=nikikhil_id if (nikikhil_id := nikhil_profile.id) else nikhil_profile.id, target_role_id=target_role.id, skill_id=skill_node.id, current_proficiency="BEGINNER", required_proficiency="ADVANCED", gap_level=4, priority=85)
                db.add(gap1)

            gap2 = db.query(SkillGap).filter(SkillGap.learner_id == nikhil_profile.id, SkillGap.skill_id == skill_redis.id).first()
            if not gap2:
                gap2 = SkillGap(learner_id=nikhil_profile.id, target_role_id=target_role.id, skill_id=skill_redis.id, current_proficiency="BEGINNER", required_proficiency="INTERMEDIATE", gap_level=3, priority=75)
                db.add(gap2)
            db.commit()

            # Seed Learning Path
            path = db.query(LearningPath).filter(LearningPath.learner_id == nikhil_profile.id, LearningPath.status == "ACTIVE").first()
            if not path:
                path = LearningPath(learner_id=nikhil_profile.id, target_role_id=target_role.id, title="Full Stack Developer Path", status="ACTIVE")
                db.add(path)
                db.commit()
                db.refresh(path)

            module1 = db.query(LearningModule).filter(LearningModule.learning_path_id == path.id).first()
            if not module1:
                module1 = LearningModule(learning_path_id=path.id, title="Advanced Node.js & Distributed Caching", order_index=1, status="IN_PROGRESS")
                db.add(module1)
                db.commit()
                db.refresh(module1)

                # Link practice and assessment activities
                act1 = LearningActivity(
                    module_id=module1.id,
                    title="Hands-on Redis Blacklisting",
                    description="Implement token expiration and TTL handling with Redis.",
                    activity_type="PRACTICE",
                    estimated_duration_mins=20,
                    difficulty="INTERMEDIATE",
                    practice_task_id=practice_task.id
                )
                act2 = LearningActivity(
                    module_id=module1.id,
                    title="Full Stack Benchmark Knowledge Check",
                    description="Assess your architectural understanding of full stack concepts.",
                    activity_type="QUIZ",
                    estimated_duration_mins=15,
                    difficulty="INTERMEDIATE",
                    assessment_id=assessment.id
                )
                db.add_all([act1, act2])
                db.commit()

            # 9. Mentorship Request from Nikhil to Priya
            if priya_mentor:
                req = db.query(MentorshipRequest).filter(MentorshipRequest.learner_id == nikhil_profile.id).first()
                if not req:
                    req = MentorshipRequest(learner_id=nikhil_profile.id, mentor_id=priya_mentor.id, message="Hi Priya, I'd like help with Redis caching in Node.", status="ACCEPTED")
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

            # 10. Seed Agent Events & Notifications
            if not db.query(AgentEvent).filter(AgentEvent.learner_id == nikhil_profile.id).first():
                event = AgentEvent(learner_id=nikhil_profile.id, event_type="LEARNING_PLAN_GENERATED", description="Generated initial learning path for Full Stack Developer role.")
                db.add(event)
                db.commit()

            if not db.query(Notification).filter(Notification.recipient_id == nikhil.id).first():
                notif = Notification(recipient_id=nikhil.id, title="Welcome to EduPath", message="Your customized learning plan is ready.", notification_type="SYSTEM")
                db.add(notif)
                db.commit()

        logger.info("Database seeding completed successfully!")

    except Exception as e:
        logger.error(f"Error seeding database: {e}", exc_info=True)
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    seed()
