from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from sqlalchemy import select

from app.api.deps import get_db, get_current_user
from app.models.user import User
from app.models.learner import LearnerProfile
from app.models.mentorship import MentorProfile, MentorshipRequest, ActiveMentorship, MentorGuidance
from app.schemas.mentorship import (
    MentorProfileResponse, 
    MentorshipRequestCreate, 
    MentorshipRequestResponse, 
    MentorshipRequestUpdate,
    ActiveMentorshipResponse,
    MentorGuidanceCreate,
    MentorGuidanceResponse
)

router = APIRouter()

@router.get("/mentors", response_model=List[MentorProfileResponse])
def get_mentors(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    # Simple mentor discovery
    mentors = db.execute(select(MentorProfile)).scalars().all()
    return mentors

@router.post("/requests", response_model=MentorshipRequestResponse)
def create_request(req: MentorshipRequestCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    learner = db.execute(select(LearnerProfile).where(LearnerProfile.user_id == current_user.id)).scalar_one_or_none()
    if not learner:
        raise HTTPException(status_code=403, detail="Only learners can create mentorship requests")
        
    mentor = db.execute(select(MentorProfile).where(MentorProfile.id == req.mentor_id)).scalar_one_or_none()
    if not mentor:
        raise HTTPException(status_code=404, detail="Mentor not found")
        
    request_obj = MentorshipRequest(
        learner_id=learner.id,
        mentor_id=mentor.id,
        message=req.message,
        status="PENDING"
    )
    db.add(request_obj)
    db.commit()
    db.refresh(request_obj)
    return request_obj

@router.patch("/requests/{request_id}", response_model=MentorshipRequestResponse)
def update_request(request_id: int, update: MentorshipRequestUpdate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    mentor_profile = db.execute(select(MentorProfile).where(MentorProfile.user_id == current_user.id)).scalar_one_or_none()
    learner_profile = db.execute(select(LearnerProfile).where(LearnerProfile.user_id == current_user.id)).scalar_one_or_none()
    
    request_obj = db.execute(select(MentorshipRequest).where(MentorshipRequest.id == request_id)).scalar_one_or_none()
    if not request_obj:
        raise HTTPException(status_code=404, detail="Request not found")
        
    if update.status == "CANCELLED":
        if not learner_profile or request_obj.learner_id != learner_profile.id:
            raise HTTPException(status_code=403, detail="Not authorized to cancel this request")
    elif update.status in ["ACCEPTED", "REJECTED"]:
        if not mentor_profile or request_obj.mentor_id != mentor_profile.id:
            raise HTTPException(status_code=403, detail="Not authorized to update this request")
    else:
        raise HTTPException(status_code=400, detail="Invalid status")
        
    request_obj.status = update.status
    db.commit()
    db.refresh(request_obj)
    
    if update.status == "ACCEPTED":
        # Create active mentorship
        active = ActiveMentorship(
            request_id=request_obj.id,
            learner_id=request_obj.learner_id,
            mentor_id=request_obj.mentor_id
        )
        db.add(active)
        db.commit()
        
    return request_obj

@router.get("/active", response_model=List[ActiveMentorshipResponse])
def get_active_mentorships(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    mentor_profile = db.execute(select(MentorProfile).where(MentorProfile.user_id == current_user.id)).scalar_one_or_none()
    learner_profile = db.execute(select(LearnerProfile).where(LearnerProfile.user_id == current_user.id)).scalar_one_or_none()
    
    query = select(ActiveMentorship)
    if mentor_profile:
        query = query.where(ActiveMentorship.mentor_id == mentor_profile.id)
    elif learner_profile:
        query = query.where(ActiveMentorship.learner_id == learner_profile.id)
    else:
        return []
        
    active = db.execute(query).scalars().all()
    return active

@router.post("/active/{mentorship_id}/guidance", response_model=MentorGuidanceResponse)
def create_guidance(mentorship_id: int, guidance: MentorGuidanceCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    mentor_profile = db.execute(select(MentorProfile).where(MentorProfile.user_id == current_user.id)).scalar_one_or_none()
    if not mentor_profile:
        raise HTTPException(status_code=403, detail="Only mentors can provide guidance")
        
    mentorship = db.execute(select(ActiveMentorship).where(ActiveMentorship.id == mentorship_id, ActiveMentorship.mentor_id == mentor_profile.id)).scalar_one_or_none()
    if not mentorship:
        raise HTTPException(status_code=404, detail="Mentorship not found")
        
    guidance_obj = MentorGuidance(
        mentorship_id=mentorship.id,
        title=guidance.title,
        message=guidance.message,
        related_skill_id=guidance.related_skill_id
    )
    db.add(guidance_obj)
    db.commit()
    db.refresh(guidance_obj)
    return guidance_obj

@router.get("/active/{mentorship_id}/guidance", response_model=List[MentorGuidanceResponse])
def get_guidance(mentorship_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    mentorship = db.execute(select(ActiveMentorship).where(ActiveMentorship.id == mentorship_id)).scalar_one_or_none()
    if not mentorship:
        raise HTTPException(status_code=404, detail="Mentorship not found")
        
    guidance_list = db.execute(select(MentorGuidance).where(MentorGuidance.mentorship_id == mentorship.id).order_by(MentorGuidance.created_at.desc())).scalars().all()
    return guidance_list
