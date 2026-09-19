from typing import TYPE_CHECKING, List
from sqlalchemy import ForeignKey, String, Text, Integer, Enum
from sqlalchemy.orm import Mapped, mapped_column, relationship
from .base import Base
from .skill import ProficiencyLevel

if TYPE_CHECKING:
    from .skill import Skill

class TargetRole(Base):
    __tablename__ = "target_roles"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    name: Mapped[str] = mapped_column(String(150), unique=True, index=True, nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=True)
    category: Mapped[str] = mapped_column(String(100), nullable=True)

    required_skills: Mapped[List["TargetRoleSkill"]] = relationship(back_populates="target_role")

class TargetRoleSkill(Base):
    __tablename__ = "target_role_skills"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    target_role_id: Mapped[int] = mapped_column(ForeignKey("target_roles.id", ondelete="CASCADE"), index=True, nullable=False)
    skill_id: Mapped[int] = mapped_column(ForeignKey("skills.id", ondelete="CASCADE"), index=True, nullable=False)
    
    required_proficiency: Mapped[ProficiencyLevel] = mapped_column(Enum(ProficiencyLevel), default=ProficiencyLevel.INTERMEDIATE)
    importance: Mapped[int] = mapped_column(Integer, default=5) # 1-10 priority scale

    target_role: Mapped["TargetRole"] = relationship(back_populates="required_skills")
    skill: Mapped["Skill"] = relationship()
