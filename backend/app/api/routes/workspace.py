from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from datetime import datetime

from app.db.session import get_db
from app.models.user import User
from app.models.learner import LearnerProfile
from app.models.learning import LearningActivity, LearningProgress
from app.models.assessment import PracticeTask, PracticeAttempt, Assessment, AssessmentAttempt, AssessmentAnswer, AssessmentQuestion
from app.schemas.workspace import (
    PracticeSubmissionRequest, PracticeSubmissionResponse,
    AssessmentSubmissionRequest, AssessmentSubmissionResponse,
    ActivityProgressUpdate
)
from app.api.deps import require_learner
from app.services.ai_service import evaluate_practice_attempt

router = APIRouter()

def get_learner_profile(current_user: User, db: Session) -> LearnerProfile:
    profile = db.query(LearnerProfile).filter(LearnerProfile.user_id == current_user.id).first()
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")
    return profile

@router.post("/activities/{activity_id}/progress")
def update_progress(activity_id: int, data: ActivityProgressUpdate, current_user: User = Depends(require_learner), db: Session = Depends(get_db)):
    profile = get_learner_profile(current_user, db)
    
    activity = db.query(LearningActivity).filter(LearningActivity.id == activity_id).first()
    if not activity:
        raise HTTPException(status_code=404, detail="Activity not found")
        
    progress = db.query(LearningProgress).filter(
        LearningProgress.learner_id == profile.id,
        LearningProgress.activity_id == activity_id
    ).first()
    
    if not progress:
        progress = LearningProgress(
            learner_id=profile.id,
            activity_id=activity_id,
            time_spent_mins=0,
            started_at=datetime.utcnow()
        )
        db.add(progress)
    
    progress.status = data.status
    progress.progress_percentage = data.progress_percentage
    progress.time_spent_mins = (progress.time_spent_mins or 0) + data.time_spent_mins
    
    if data.status == "COMPLETED" and not progress.completed_at:
        progress.completed_at = datetime.utcnow()
        
    db.commit()
    db.refresh(progress)
    return {"status": "success", "progress_percentage": progress.progress_percentage}

@router.post("/practice/{task_id}/submit", response_model=PracticeSubmissionResponse)
def submit_practice(task_id: int, request: PracticeSubmissionRequest, current_user: User = Depends(require_learner), db: Session = Depends(get_db)):
    profile = get_learner_profile(current_user, db)
    
    task = db.query(PracticeTask).filter(PracticeTask.id == task_id).first()
    if not task:
        raise HTTPException(status_code=404, detail="Practice task not found")
        
    # Evaluate using AI
    evaluation = evaluate_practice_attempt(
        instructions=task.instructions,
        expected=task.expected_output or "A functional solution",
        submission=request.submission_reference
    )
    
    attempt = PracticeAttempt(
        learner_id=profile.id,
        task_id=task.id,
        submission_reference=request.submission_reference,
        score=evaluation.score,
        feedback=evaluation.feedback
    )
    db.add(attempt)
    db.commit()
    db.refresh(attempt)
    
    # Automatically trigger adaptive AI agent for real-time practice feedback adaptation
    from app.api.routes.agent import _run_agent_pipeline
    try:
        _run_agent_pipeline(profile.id, db)
    except Exception as e:
        print(f"Automatic adaptive agent trigger on practice error: {e}")

    return attempt

@router.post("/assessments/{assessment_id}/start")
def start_assessment(assessment_id: int, current_user: User = Depends(require_learner), db: Session = Depends(get_db)):
    profile = get_learner_profile(current_user, db)
    
    assessment = db.query(Assessment).filter(Assessment.id == assessment_id).first()
    if not assessment:
        raise HTTPException(status_code=404, detail="Assessment not found")
        
    attempt = AssessmentAttempt(
        learner_id=profile.id,
        assessment_id=assessment_id,
        status="IN_PROGRESS"
    )
    db.add(attempt)
    db.commit()
    db.refresh(attempt)
    return {"attempt_id": attempt.id, "status": "started"}

@router.post("/assessments/attempts/{attempt_id}/submit", response_model=AssessmentSubmissionResponse)
def submit_assessment(attempt_id: int, request: AssessmentSubmissionRequest, current_user: User = Depends(require_learner), db: Session = Depends(get_db)):
    profile = get_learner_profile(current_user, db)
    
    attempt = db.query(AssessmentAttempt).filter(
        AssessmentAttempt.id == attempt_id,
        AssessmentAttempt.learner_id == profile.id
    ).first()
    
    if not attempt:
        raise HTTPException(status_code=404, detail="Attempt not found")
    
    if attempt.status == "COMPLETED":
        raise HTTPException(status_code=400, detail="Attempt is already completed")
        
    total_score = 0
    max_score = 0
    
    for ans_data in request.answers:
        q = db.query(AssessmentQuestion).filter(AssessmentQuestion.id == ans_data.question_id).first()
        if q:
            max_score += 1
            is_correct = (ans_data.provided_answer.strip().lower() == (q.correct_answer or "").strip().lower())
            if is_correct:
                total_score += 1
                
            ans = AssessmentAnswer(
                attempt_id=attempt.id,
                question_id=q.id,
                provided_answer=ans_data.provided_answer,
                is_correct=is_correct,
                score=1 if is_correct else 0
            )
            db.add(ans)
            
    final_score = int((total_score / max_score) * 100) if max_score > 0 else 0
    attempt.score = final_score
    attempt.status = "COMPLETED"
    attempt.completed_at = datetime.utcnow()
    
    db.commit()
    db.refresh(attempt)

    # Automatically trigger adaptive LangGraph agent pipeline so assessment results immediately adapt curriculum
    from app.api.routes.agent import _run_agent_pipeline
    try:
        _run_agent_pipeline(profile.id, db)
    except Exception as e:
        print(f"Automatic adaptive agent trigger on assessment error: {e}")

    return attempt

@router.get("/practice/{task_id}")
def get_practice_task(task_id: int, current_user: User = Depends(require_learner), db: Session = Depends(get_db)):
    task = db.query(PracticeTask).filter(PracticeTask.id == task_id).first()
    if not task:
        raise HTTPException(status_code=404, detail="Practice task not found")
    return {
        "id": task.id,
        "title": task.title,
        "description": getattr(task, "instructions", task.title),
        "instructions": task.instructions,
        "starter_code": getattr(task, "expected_output", ""),
        "difficulty": task.difficulty,
        "estimated_mins": getattr(task, "estimated_duration_mins", 20)
    }

@router.get("/assessments/{assessment_id}")
def get_assessment(assessment_id: int, current_user: User = Depends(require_learner), db: Session = Depends(get_db)):
    assessment = db.query(Assessment).filter(Assessment.id == assessment_id).first()
    if not assessment:
        raise HTTPException(status_code=404, detail="Assessment not found")
    
    questions = db.query(AssessmentQuestion).filter(AssessmentQuestion.assessment_id == assessment_id).order_by(AssessmentQuestion.id).all()
    
    return {
        "id": assessment.id,
        "title": assessment.title,
        "description": assessment.description,
        "questions": [
            {
                "id": q.id,
                "content": q.content,
                "question_text": q.content,
                "options": q.options,
                "question_type": q.question_type
            }
            for q in questions
        ]
    }
