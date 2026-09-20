from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.api import deps
from app.models.agent import AgentEvent
from app.schemas.agent import AgentEventResponse, AgentEvaluationResponse
from app.agents.graph import agent_graph
from app.models.learner import LearnerProfile

router = APIRouter()

def _run_agent_pipeline(profile_id: int, db: Session) -> dict:
    initial_state = {
        "learner_id": profile_id,
        "db_session": db,
        "recent_signals": {},
        "detected_conditions": [],
        "agent_decision": None,
        "action_validated": False,
        "final_event_id": None
    }
    
    final_state = agent_graph.invoke(initial_state)
    
    if not final_state.get("final_event_id"):
        raise HTTPException(status_code=500, detail="Agent evaluation failed to produce an event.")
        
    db.commit() # Commit all changes made by the agent
    
    event = db.query(AgentEvent).filter_by(id=final_state["final_event_id"]).first()
    
    return {
        "id": event.id,
        "learner_id": event.learner_id,
        "event_type": event.event_type,
        "description": event.description,
        "event_data": event.event_data,
        "occurred_at": event.occurred_at,
        "agent_decision": final_state.get("agent_decision"),
        "action_validated": final_state.get("action_validated", True)
    }

@router.post("/evaluate", response_model=AgentEvaluationResponse)
def evaluate_learner(
    current_user = Depends(deps.get_current_user),
    db: Session = Depends(deps.get_db),
) -> Any:
    """
    Trigger the adaptive AI agent evaluation for the current learner.
    """
    profile = db.query(LearnerProfile).filter_by(user_id=current_user.id).first()
    if not profile:
        raise HTTPException(status_code=404, detail="Learner profile not found")
        
    return _run_agent_pipeline(profile.id, db)

@router.post("/run", response_model=AgentEvaluationResponse)
def run_agent(
    current_user = Depends(deps.get_current_user),
    db: Session = Depends(deps.get_db),
) -> Any:
    """
    Alias for /evaluate — triggers adaptive agent pipeline and returns decision trace.
    """
    return evaluate_learner(current_user=current_user, db=db)

@router.get("/activity", response_model=List[AgentEventResponse])
def get_agent_activity(
    current_user = Depends(deps.get_current_user),
    db: Session = Depends(deps.get_db),
    limit: int = 10
) -> Any:
    """
    Get recent agent events for the current learner.
    """
    profile = db.query(LearnerProfile).filter_by(user_id=current_user.id).first()
    if not profile:
        raise HTTPException(status_code=404, detail="Learner profile not found")
        
    events = db.query(AgentEvent).filter_by(learner_id=profile.id).order_by(AgentEvent.occurred_at.desc()).limit(limit).all()
    return events

@router.get("/events", response_model=List[AgentEventResponse])
def get_agent_events(
    current_user = Depends(deps.get_current_user),
    db: Session = Depends(deps.get_db),
    limit: int = 10
) -> Any:
    """
    Alias for /activity — gets recent agent events.
    """
    return get_agent_activity(current_user=current_user, db=db, limit=limit)

@router.post("/check-drops", response_model=AgentEvaluationResponse)
def check_learning_drops(
    current_user = Depends(deps.get_current_user),
    db: Session = Depends(deps.get_db),
) -> Any:
    """
    Proactive learning-drop detection: verifies recent activity, triggers the adaptive agent,
    and dispatches an intervention notification if learning activity has dropped.
    """
    profile = db.query(LearnerProfile).filter_by(user_id=current_user.id).first()
    if not profile:
        raise HTTPException(status_code=404, detail="Learner profile not found")
        
    return _run_agent_pipeline(profile.id, db)
