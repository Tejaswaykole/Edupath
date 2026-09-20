from datetime import datetime
from typing import TYPE_CHECKING
from sqlalchemy import ForeignKey, String, Text, DateTime, JSON
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.sql import func
from .base import Base

if TYPE_CHECKING:
    from .learner import LearnerProfile
    from .learning import LearningPath

class PlanAdaptation(Base):
    __tablename__ = "plan_adaptations"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    learner_id: Mapped[int] = mapped_column(ForeignKey("learner_profiles.id", ondelete="CASCADE"), index=True, nullable=False)
    learning_path_id: Mapped[int] = mapped_column(ForeignKey("learning_paths.id", ondelete="CASCADE"), index=True, nullable=False)
    
    trigger_condition: Mapped[str] = mapped_column(String(100), nullable=False) # e.g. STRUGGLE
    action_taken: Mapped[str] = mapped_column(String(100), nullable=False) # e.g. ADD_PRACTICE
    user_message: Mapped[str] = mapped_column(Text, nullable=True)
    
    previous_state: Mapped[dict] = mapped_column(JSON, nullable=True)
    new_state: Mapped[dict] = mapped_column(JSON, nullable=True)
    
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())

    learner: Mapped["LearnerProfile"] = relationship()
    learning_path: Mapped["LearningPath"] = relationship()

class AgentEvent(Base):
    """
    Structured logs of adaptive agent decisions.
    Records safe, user-facing events like SKILL_GAP_DETECTED without storing private chain-of-thought.
    """
    __tablename__ = "agent_events"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    learner_id: Mapped[int] = mapped_column(ForeignKey("learner_profiles.id", ondelete="CASCADE"), index=True, nullable=False)
    
    event_type: Mapped[str] = mapped_column(String(100), index=True, nullable=False) # e.g. SKILL_GAP_DETECTED, DIFFICULTY_ADJUSTED
    description: Mapped[str] = mapped_column(Text, nullable=True)
    
    # Store structured data about the event context (e.g., related skill_id or recommended practice)
    event_data: Mapped[dict] = mapped_column(JSON, nullable=True)

    occurred_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), index=True)

    learner: Mapped["LearnerProfile"] = relationship()
