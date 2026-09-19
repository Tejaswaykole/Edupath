from datetime import datetime
from typing import TYPE_CHECKING, List
from sqlalchemy import ForeignKey, String, Text, Integer, DateTime
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.sql import func
from .base import Base

if TYPE_CHECKING:
    from .user import User
    from .learner import LearnerProfile
    from .skill import Skill

class MentorProfile(Base):
    __tablename__ = "mentor_profiles"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), unique=True, index=True, nullable=False)
    
    professional_title: Mapped[str] = mapped_column(String(150), nullable=True)
    years_experience: Mapped[int] = mapped_column(Integer, default=0)
    bio: Mapped[str] = mapped_column(Text, nullable=True)
    linkedin_url: Mapped[str] = mapped_column(String(255), nullable=True)
    
    is_verified: Mapped[bool] = mapped_column(default=False)

    user: Mapped["User"] = relationship()
    expertise: Mapped[List["MentorExpertise"]] = relationship(back_populates="mentor")

class MentorExpertise(Base):
    __tablename__ = "mentor_expertise"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    mentor_id: Mapped[int] = mapped_column(ForeignKey("mentor_profiles.id", ondelete="CASCADE"), index=True, nullable=False)
    skill_id: Mapped[int] = mapped_column(ForeignKey("skills.id", ondelete="CASCADE"), index=True, nullable=False)
    
    years_experience: Mapped[int] = mapped_column(Integer, default=0)

    mentor: Mapped["MentorProfile"] = relationship(back_populates="expertise")
    skill: Mapped["Skill"] = relationship()

class MentorshipRequest(Base):
    __tablename__ = "mentorship_requests"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    learner_id: Mapped[int] = mapped_column(ForeignKey("learner_profiles.id", ondelete="CASCADE"), index=True, nullable=False)
    mentor_id: Mapped[int] = mapped_column(ForeignKey("mentor_profiles.id", ondelete="CASCADE"), index=True, nullable=False)
    
    message: Mapped[str] = mapped_column(Text, nullable=True)
    status: Mapped[str] = mapped_column(String(50), default="PENDING") # PENDING, ACCEPTED, DECLINED, ACTIVE, COMPLETED

    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    learner: Mapped["LearnerProfile"] = relationship()
    mentor: Mapped["MentorProfile"] = relationship()
