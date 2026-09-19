from datetime import datetime
from typing import TYPE_CHECKING
from sqlalchemy import ForeignKey, String, Text, Integer, DateTime, JSON
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.sql import func
from .base import Base

if TYPE_CHECKING:
    from .user import User

class Document(Base):
    __tablename__ = "documents"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    owner_id: Mapped[int] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), index=True, nullable=False)
    
    file_name: Mapped[str] = mapped_column(String(255), nullable=False)
    file_type: Mapped[str] = mapped_column(String(50), nullable=False)
    storage_path: Mapped[str] = mapped_column(String(500), nullable=False)
    file_size_bytes: Mapped[int] = mapped_column(Integer, nullable=True)
    
    upload_status: Mapped[str] = mapped_column(String(50), default="COMPLETED") # UPLOADING, COMPLETED, FAILED
    processing_status: Mapped[str] = mapped_column(String(50), default="PENDING") # PENDING, PROCESSING, COMPLETED, FAILED

    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    owner: Mapped["User"] = relationship()
    analysis: Mapped["DocumentAnalysis"] = relationship(back_populates="document", uselist=False)

class DocumentAnalysis(Base):
    __tablename__ = "document_analyses"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    document_id: Mapped[int] = mapped_column(ForeignKey("documents.id", ondelete="CASCADE"), unique=True, index=True, nullable=False)
    
    extracted_skills: Mapped[dict] = mapped_column(JSON, nullable=True)
    extracted_experience: Mapped[dict] = mapped_column(JSON, nullable=True)
    extracted_education: Mapped[dict] = mapped_column(JSON, nullable=True)
    extracted_projects: Mapped[dict] = mapped_column(JSON, nullable=True)
    
    analysis_status: Mapped[str] = mapped_column(String(50), default="COMPLETED")
    analyzed_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())

    document: Mapped["Document"] = relationship(back_populates="analysis")
