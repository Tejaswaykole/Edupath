from datetime import datetime
from typing import TYPE_CHECKING
from sqlalchemy import ForeignKey, String, Text, DateTime, Boolean
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.sql import func
from .base import Base

if TYPE_CHECKING:
    from .user import User

class Notification(Base):
    __tablename__ = "notifications"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    recipient_id: Mapped[int] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), index=True, nullable=False)
    
    notification_type: Mapped[str] = mapped_column(String(100), nullable=False)
    title: Mapped[str] = mapped_column(String(255), nullable=False)
    message: Mapped[str] = mapped_column(Text, nullable=False)
    
    # Generic reference to related entity (e.g. "skill_gap:123" or "mentorship_request:45")
    related_entity_ref: Mapped[str] = mapped_column(String(255), nullable=True)

    is_read: Mapped[bool] = mapped_column(Boolean, default=False, index=True)

    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), index=True)

    recipient: Mapped["User"] = relationship()
