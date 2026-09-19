from datetime import datetime
from typing import TYPE_CHECKING, List
from sqlalchemy import ForeignKey, String, Text, Integer, DateTime
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.sql import func
from .base import Base

if TYPE_CHECKING:
    from .learner import LearnerProfile
    from .target_role import TargetRole
    from .skill import Skill

class SkillGap(Base):
    __tablename__ = "skill_gaps"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    learner_id: Mapped[int] = mapped_column(ForeignKey("learner_profiles.id", ondelete="CASCADE"), index=True, nullable=False)
    target_role_id: Mapped[int] = mapped_column(ForeignKey("target_roles.id", ondelete="CASCADE"), index=True, nullable=False)
    skill_id: Mapped[int] = mapped_column(ForeignKey("skills.id", ondelete="CASCADE"), index=True, nullable=False)
    
    current_proficiency: Mapped[str] = mapped_column(String(50), nullable=False)
    required_proficiency: Mapped[str] = mapped_column(String(50), nullable=False)
    gap_level: Mapped[int] = mapped_column(Integer, default=1) # E.g., 1-5 scale of gap severity
    priority: Mapped[int] = mapped_column(Integer, default=3)
    status: Mapped[str] = mapped_column(String(50), default="IDENTIFIED") # IDENTIFIED, IN_PROGRESS, COMPLETED

    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())

    learner: Mapped["LearnerProfile"] = relationship()
    target_role: Mapped["TargetRole"] = relationship()
    skill: Mapped["Skill"] = relationship()

class LearningObjective(Base):
    __tablename__ = "learning_objectives"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    skill_gap_id: Mapped[int] = mapped_column(ForeignKey("skill_gaps.id", ondelete="CASCADE"), index=True, nullable=False)
    
    title: Mapped[str] = mapped_column(String(200), nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=True)
    difficulty: Mapped[str] = mapped_column(String(50), nullable=True)
    estimated_effort_mins: Mapped[int] = mapped_column(Integer, nullable=True)
    priority: Mapped[int] = mapped_column(Integer, default=3)
    status: Mapped[str] = mapped_column(String(50), default="PENDING")
    
    skill_gap: Mapped["SkillGap"] = relationship()

class LearningPath(Base):
    __tablename__ = "learning_paths"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    learner_id: Mapped[int] = mapped_column(ForeignKey("learner_profiles.id", ondelete="CASCADE"), index=True, nullable=False)
    target_role_id: Mapped[int] = mapped_column(ForeignKey("target_roles.id", ondelete="SET NULL"), nullable=True)
    
    title: Mapped[str] = mapped_column(String(200), nullable=False)
    status: Mapped[str] = mapped_column(String(50), default="ACTIVE")
    
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    
    learner: Mapped["LearnerProfile"] = relationship()
    target_role: Mapped["TargetRole"] = relationship()
    modules: Mapped[List["LearningModule"]] = relationship(back_populates="learning_path")

class LearningModule(Base):
    __tablename__ = "learning_modules"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    learning_path_id: Mapped[int] = mapped_column(ForeignKey("learning_paths.id", ondelete="CASCADE"), index=True, nullable=False)
    
    title: Mapped[str] = mapped_column(String(200), nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=True)
    order_index: Mapped[int] = mapped_column(Integer, default=0)
    status: Mapped[str] = mapped_column(String(50), default="PENDING")

    learning_path: Mapped["LearningPath"] = relationship(back_populates="modules")
    activities: Mapped[List["LearningActivity"]] = relationship(back_populates="module")

class LearningActivity(Base):
    __tablename__ = "learning_activities"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    module_id: Mapped[int] = mapped_column(ForeignKey("learning_modules.id", ondelete="CASCADE"), index=True, nullable=False)
    
    title: Mapped[str] = mapped_column(String(200), nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=True)
    activity_type: Mapped[str] = mapped_column(String(50), nullable=False) # e.g. VIDEO, ARTICLE, PRACTICE, QUIZ
    estimated_duration_mins: Mapped[int] = mapped_column(Integer, nullable=True)
    difficulty: Mapped[str] = mapped_column(String(50), nullable=True)
    order_index: Mapped[int] = mapped_column(Integer, default=0)
    
    resource_url: Mapped[str] = mapped_column(String(500), nullable=True)
    weekly_plan_id: Mapped[int] = mapped_column(ForeignKey("weekly_plans.id", ondelete="SET NULL"), nullable=True)
    practice_task_id: Mapped[int] = mapped_column(ForeignKey("practice_tasks.id", ondelete="SET NULL"), nullable=True)
    assessment_id: Mapped[int] = mapped_column(ForeignKey("assessments.id", ondelete="SET NULL"), nullable=True)

    module: Mapped["LearningModule"] = relationship(back_populates="activities")
    progress: Mapped[List["LearningProgress"]] = relationship(back_populates="activity")
    weekly_plan: Mapped["WeeklyPlan"] = relationship(back_populates="activities")

class WeeklyPlan(Base):
    __tablename__ = "weekly_plans"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    learning_path_id: Mapped[int] = mapped_column(ForeignKey("learning_paths.id", ondelete="CASCADE"), index=True, nullable=False)
    
    week_number: Mapped[int] = mapped_column(Integer, nullable=False)
    focus_description: Mapped[str] = mapped_column(Text, nullable=True)
    status: Mapped[str] = mapped_column(String(50), default="ACTIVE")
    
    learning_path: Mapped["LearningPath"] = relationship()
    activities: Mapped[List["LearningActivity"]] = relationship(back_populates="weekly_plan")

class LearningProgress(Base):
    __tablename__ = "learning_progress"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    learner_id: Mapped[int] = mapped_column(ForeignKey("learner_profiles.id", ondelete="CASCADE"), index=True, nullable=False)
    activity_id: Mapped[int] = mapped_column(ForeignKey("learning_activities.id", ondelete="CASCADE"), index=True, nullable=False)
    
    status: Mapped[str] = mapped_column(String(50), default="NOT_STARTED") # NOT_STARTED, IN_PROGRESS, COMPLETED
    progress_percentage: Mapped[int] = mapped_column(Integer, default=0)
    time_spent_mins: Mapped[int] = mapped_column(Integer, default=0)
    score: Mapped[int] = mapped_column(Integer, nullable=True)

    started_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=True)
    completed_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=True)

    learner: Mapped["LearnerProfile"] = relationship()
    activity: Mapped["LearningActivity"] = relationship(back_populates="progress")
