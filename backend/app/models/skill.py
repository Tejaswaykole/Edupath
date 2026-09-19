from datetime import datetime
from typing import TYPE_CHECKING, List
from sqlalchemy import ForeignKey, String, Text, DateTime, Integer, Enum
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.sql import func
from .base import Base
import enum

if TYPE_CHECKING:
    from .learner import LearnerProfile

class ProficiencyLevel(enum.Enum):
    BEGINNER = "BEGINNER"
    INTERMEDIATE = "INTERMEDIATE"
    ADVANCED = "ADVANCED"
    EXPERT = "EXPERT"

class SkillCategory(Base):
    __tablename__ = "skill_categories"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    name: Mapped[str] = mapped_column(String(100), unique=True, index=True, nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=True)

    skills: Mapped[List["Skill"]] = relationship(back_populates="category")

class Skill(Base):
    __tablename__ = "skills"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    category_id: Mapped[int] = mapped_column(ForeignKey("skill_categories.id", ondelete="SET NULL"), nullable=True)
    name: Mapped[str] = mapped_column(String(100), unique=True, index=True, nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=True)
    
    category: Mapped["SkillCategory"] = relationship(back_populates="skills")
    learner_skills: Mapped[List["LearnerSkill"]] = relationship(back_populates="skill")

class LearnerSkill(Base):
    __tablename__ = "learner_skills"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    learner_id: Mapped[int] = mapped_column(ForeignKey("learner_profiles.id", ondelete="CASCADE"), index=True, nullable=False)
    skill_id: Mapped[int] = mapped_column(ForeignKey("skills.id", ondelete="CASCADE"), index=True, nullable=False)
    
    proficiency: Mapped[ProficiencyLevel] = mapped_column(Enum(ProficiencyLevel), default=ProficiencyLevel.BEGINNER)
    experience_years: Mapped[int] = mapped_column(Integer, default=0)
    source_evidence: Mapped[str] = mapped_column(String(255), nullable=True) # e.g. "Resume", "Assessment"
    confidence_score: Mapped[int] = mapped_column(Integer, nullable=True) # 0-100
    
    last_assessed_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    learner: Mapped["LearnerProfile"] = relationship(back_populates="skills")
    skill: Mapped["Skill"] = relationship(back_populates="learner_skills")
