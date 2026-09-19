from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.models.user import User
from app.models.learner import LearnerProfile
from app.models.learning import SkillGap
from app.schemas.learning import SkillGapResponse
from app.api.deps import require_learner
from app.services.skill_gap_service import analyze_learner_gaps

router = APIRouter()

@router.get("", response_model=List[SkillGapResponse])
def get_skill_gaps(current_user: User = Depends(require_learner), db: Session = Depends(get_db)):
    profile = db.query(LearnerProfile).filter(LearnerProfile.user_id == current_user.id).first()
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")
        
    gaps = db.query(SkillGap).filter(SkillGap.learner_id == profile.id).all()
    return gaps

@router.post("/analyze", response_model=List[SkillGapResponse])
def trigger_analysis(current_user: User = Depends(require_learner), db: Session = Depends(get_db)):
    profile = db.query(LearnerProfile).filter(LearnerProfile.user_id == current_user.id).first()
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")
    
    if not profile.target_role:
        raise HTTPException(status_code=400, detail="Target role must be set before analysis")

    gaps = analyze_learner_gaps(db, profile)
    # Refresh to include related models (skill, objectives)
    for g in gaps:
        db.refresh(g)
    
    # Return all current gaps after analysis
    all_gaps = db.query(SkillGap).filter(SkillGap.learner_id == profile.id).all()
    return all_gaps
