from datetime import datetime
from sqlalchemy import ForeignKey, String, Boolean, DateTime
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.sql import func
from .base import Base
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from .user import User

class UserSettings(Base):
    __tablename__ = "user_settings"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), unique=True, index=True, nullable=False)
    
    learning_pace: Mapped[str] = mapped_column(String(50), default="Moderate", nullable=False)
    preferred_study_schedule: Mapped[str] = mapped_column(String(100), default="Evenings and Weekends", nullable=False)
    preferred_difficulty: Mapped[str] = mapped_column(String(50), default="Adaptive", nullable=False)
    
    notification_email: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
    notification_push: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
    
    is_private: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)

    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    user: Mapped["User"] = relationship()
