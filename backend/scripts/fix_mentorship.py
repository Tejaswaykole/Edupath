from app.db.session import SessionLocal
from app.models.mentorship import MentorshipRequest, ActiveMentorship, MentorGuidance

db = SessionLocal()
req = db.query(MentorshipRequest).first()
if req:
    req.status = "ACCEPTED"
    db.commit()
    
    active = db.query(ActiveMentorship).filter(ActiveMentorship.request_id == req.id).first()
    if not active:
        active = ActiveMentorship(request_id=req.id, learner_id=req.learner_id, mentor_id=req.mentor_id, status="ACTIVE", goals="Mastering Redis caching")
        db.add(active)
        db.commit()
        db.refresh(active)
        
        guidance = MentorGuidance(mentorship_id=active.id, title="Redis TTL Strategy", message="Hi Nikhil, great progress on your Express routes. I reviewed your code. The reason you're hitting latency issues is storing full decoded claims in Redis on every hit. Instead, only store the `jti` in a Redis SET with a TTL matching your token expiration window.", is_read=False)
        db.add(guidance)
        db.commit()

db.close()
print("Mentorship fixed")
