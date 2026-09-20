from typing import TypedDict, Dict, Any, Optional
from app.schemas.agent import AgentDecision

class AgentState(TypedDict):
    learner_id: int
    db_session: Any  # Cannot easily pass Session directly in graph state due to Pydantic/serialization, but we'll manage it
    recent_signals: Dict[str, Any]
    detected_conditions: list[str]
    agent_decision: Optional[AgentDecision]
    action_validated: bool
    final_event_id: Optional[int]
