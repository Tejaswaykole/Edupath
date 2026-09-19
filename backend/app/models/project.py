from datetime import datetime
from typing import TYPE_CHECKING
from sqlalchemy import ForeignKey, String, Text, Integer, DateTime
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.sql import func
from .base import Base

if TYPE_CHECKING:
    from .learner import LearnerProfile

class LearningProject(Base):
    __tablename__ = "learning_projects"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    learner_id: Mapped[int] = mapped_column(ForeignKey("learner_profiles.id", ondelete="CASCADE"), index=True, nullable=False)
    
    title: Mapped[str] = mapped_column(String(200), nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=True)
    related_skills: Mapped[str] = mapped_column(Text, nullable=True) # Stored as JSON or comma separated purely for project metadata if needed
    difficulty: Mapped[str] = mapped_column(String(50), nullable=True)
    
    status: Mapped[str] = mapped_column(String(50), default="NOT_STARTED") # NOT_STARTED, IN_PROGRESS, COMPLETED
    progress_percentage: Mapped[int] = mapped_column(Integer, default=0)

    started_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=True)
    completed_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=True)

    learner: Mapped["LearnerProfile"] = relationship()
