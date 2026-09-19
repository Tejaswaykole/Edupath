from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.models.user import User
from app.models.learner import LearnerProfile
from app.schemas.learner import LearnerProfileResponse, LearnerProfileUpdate
from app.api.deps import require_learner

router = APIRouter()

@router.get("/profile", response_model=LearnerProfileResponse)
def get_own_profile(
    current_user: User = Depends(require_learner),
    db: Session = Depends(get_db)
):
    profile = db.query(LearnerProfile).filter(LearnerProfile.user_id == current_user.id).first()
    if not profile:
        raise HTTPException(status_code=404, detail="Learner profile not found")
    return profile

@router.patch("/profile", response_model=LearnerProfileResponse)
def update_own_profile(
    profile_in: LearnerProfileUpdate,
    current_user: User = Depends(require_learner),
    db: Session = Depends(get_db)
):
    profile = db.query(LearnerProfile).filter(LearnerProfile.user_id == current_user.id).first()
    if not profile:
        raise HTTPException(status_code=404, detail="Learner profile not found")

    update_data = profile_in.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(profile, field, value)
        
    db.commit()
    db.refresh(profile)
    return profile
