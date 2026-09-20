from datetime import datetime
from typing import Optional, Dict, Any
from pydantic import BaseModel, Field

class AgentDecision(BaseModel):
    condition: str = Field(description="The detected learning condition (e.g. STRUGGLE, DIFFICULTY_MISMATCH, OVERLOAD, LEARNING_DROP, PREREQUISITE_GAP, PROGRESS_STAGNATION, NO_ACTION_REQUIRED)")
    recommended_action: str = Field(description="The action to take (e.g. ADD_PRACTICE, REDUCE_WORKLOAD, INCREASE_DIFFICULTY, DECREASE_DIFFICULTY, ADD_PREREQUISITE, NO_ACTION)")
    affected_skill: Optional[str] = Field(None, description="The skill name affected, if any")
    reason: str = Field(description="Internal reasoning for this decision")
    learner_message: str = Field(description="A friendly explanation of the change to display to the learner")
    confidence: str = Field(description="HIGH, MEDIUM, or LOW")

class AgentEventResponse(BaseModel):
    id: int
    learner_id: int
    event_type: str
    description: Optional[str] = None
    event_data: Optional[Dict[str, Any]] = None
    occurred_at: datetime
    agent_decision: Optional[AgentDecision] = None
    action_validated: Optional[bool] = None

class AgentEvaluationResponse(AgentEventResponse):
    pass

class PlanAdaptationResponse(BaseModel):
    id: int
    learner_id: int
    learning_path_id: int
    trigger_condition: str
    action_taken: str
    user_message: Optional[str] = None
    previous_state: Optional[Dict[str, Any]] = None
    new_state: Optional[Dict[str, Any]] = None
    created_at: datetime
