from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.models.user import User
from app.models.learner import LearnerProfile
from app.models.learning import LearningPath
from app.schemas.learning import LearningPathResponse
from app.api.deps import require_learner
from app.services.learning_plan_service import create_personalized_plan

router = APIRouter()

@router.get("/current", response_model=LearningPathResponse)
def get_current_path(current_user: User = Depends(require_learner), db: Session = Depends(get_db)):
    profile = db.query(LearnerProfile).filter(LearnerProfile.user_id == current_user.id).first()
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")

    path = db.query(LearningPath).filter(LearningPath.learner_id == profile.id, LearningPath.status == "ACTIVE").first()
    if not path:
        raise HTTPException(status_code=404, detail="No active learning path found")
        
    return path

@router.post("/generate", response_model=LearningPathResponse)
def generate_path(current_user: User = Depends(require_learner), db: Session = Depends(get_db)):
    profile = db.query(LearnerProfile).filter(LearnerProfile.user_id == current_user.id).first()
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")

    path = create_personalized_plan(db, profile)
    if not path:
        raise HTTPException(status_code=400, detail="Cannot generate path without active skill gaps")
        
    return path
