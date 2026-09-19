from datetime import datetime
from typing import TYPE_CHECKING, List
from sqlalchemy import ForeignKey, String, Text, Integer, DateTime, JSON
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.sql import func
from .base import Base

if TYPE_CHECKING:
    from .learner import LearnerProfile
    from .skill import Skill

class PracticeTask(Base):
    __tablename__ = "practice_tasks"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    skill_id: Mapped[int] = mapped_column(ForeignKey("skills.id", ondelete="CASCADE"), index=True, nullable=False)
    
    title: Mapped[str] = mapped_column(String(200), nullable=False)
    instructions: Mapped[str] = mapped_column(Text, nullable=False)
    difficulty: Mapped[str] = mapped_column(String(50), nullable=True)
    estimated_duration_mins: Mapped[int] = mapped_column(Integer, nullable=True)
    expected_output: Mapped[str] = mapped_column(Text, nullable=True)

    skill: Mapped["Skill"] = relationship()

class PracticeAttempt(Base):
    __tablename__ = "practice_attempts"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    learner_id: Mapped[int] = mapped_column(ForeignKey("learner_profiles.id", ondelete="CASCADE"), index=True, nullable=False)
    task_id: Mapped[int] = mapped_column(ForeignKey("practice_tasks.id", ondelete="CASCADE"), index=True, nullable=False)
    
    submission_reference: Mapped[str] = mapped_column(Text, nullable=True)
    score: Mapped[int] = mapped_column(Integer, nullable=True)
    feedback: Mapped[str] = mapped_column(Text, nullable=True)

    completed_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())

    learner: Mapped["LearnerProfile"] = relationship()
    task: Mapped["PracticeTask"] = relationship()

class Assessment(Base):
    __tablename__ = "assessments"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    title: Mapped[str] = mapped_column(String(200), nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=True)

    questions: Mapped[List["AssessmentQuestion"]] = relationship(back_populates="assessment")

class AssessmentQuestion(Base):
    __tablename__ = "assessment_questions"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    assessment_id: Mapped[int] = mapped_column(ForeignKey("assessments.id", ondelete="CASCADE"), index=True, nullable=False)
    skill_id: Mapped[int] = mapped_column(ForeignKey("skills.id", ondelete="SET NULL"), nullable=True)
    
    question_type: Mapped[str] = mapped_column(String(50), nullable=False) # e.g. MULTIPLE_CHOICE, CODE
    content: Mapped[str] = mapped_column(Text, nullable=False)
    correct_answer: Mapped[str] = mapped_column(Text, nullable=True)
    options: Mapped[dict] = mapped_column(JSON, nullable=True)

    assessment: Mapped["Assessment"] = relationship(back_populates="questions")
    skill: Mapped["Skill"] = relationship()

class AssessmentAttempt(Base):
    __tablename__ = "assessment_attempts"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    learner_id: Mapped[int] = mapped_column(ForeignKey("learner_profiles.id", ondelete="CASCADE"), index=True, nullable=False)
    assessment_id: Mapped[int] = mapped_column(ForeignKey("assessments.id", ondelete="CASCADE"), index=True, nullable=False)
    
    score: Mapped[int] = mapped_column(Integer, nullable=True)
    status: Mapped[str] = mapped_column(String(50), default="IN_PROGRESS") # IN_PROGRESS, COMPLETED

    started_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    completed_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=True)

    learner: Mapped["LearnerProfile"] = relationship()
    assessment: Mapped["Assessment"] = relationship()
    answers: Mapped[List["AssessmentAnswer"]] = relationship(back_populates="attempt")

class AssessmentAnswer(Base):
    __tablename__ = "assessment_answers"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    attempt_id: Mapped[int] = mapped_column(ForeignKey("assessment_attempts.id", ondelete="CASCADE"), index=True, nullable=False)
    question_id: Mapped[int] = mapped_column(ForeignKey("assessment_questions.id", ondelete="CASCADE"), index=True, nullable=False)
    
    provided_answer: Mapped[str] = mapped_column(Text, nullable=True)
    is_correct: Mapped[bool] = mapped_column(nullable=True)
    score: Mapped[int] = mapped_column(Integer, nullable=True)

    attempt: Mapped["AssessmentAttempt"] = relationship(back_populates="answers")
    question: Mapped["AssessmentQuestion"] = relationship()
