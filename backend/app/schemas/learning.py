from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class SkillBase(BaseModel):
    id: int
    name: str

class LearningObjectiveResponse(BaseModel):
    id: int
    title: str
    description: Optional[str] = None
    difficulty: Optional[str] = None
    estimated_effort_mins: Optional[int] = None
    priority: int
    status: str

    class Config:
        from_attributes = True

class SkillGapResponse(BaseModel):
    id: int
    skill: SkillBase
    current_proficiency: str
    required_proficiency: str
    gap_level: int
    priority: int
    status: str
    objectives: List[LearningObjectiveResponse] = []

    class Config:
        from_attributes = True

class LearningActivityResponse(BaseModel):
    id: int
    title: str
    description: Optional[str] = None
    activity_type: str
    estimated_duration_mins: Optional[int] = None
    difficulty: Optional[str] = None
    order_index: int
    resource_url: Optional[str] = None
    practice_task_id: Optional[int] = None
    assessment_id: Optional[int] = None

    class Config:
        from_attributes = True

class LearningModuleResponse(BaseModel):
    id: int
    title: str
    description: Optional[str] = None
    order_index: int
    status: str
    activities: List[LearningActivityResponse] = []

    class Config:
        from_attributes = True

class WeeklyPlanResponse(BaseModel):
    id: int
    week_number: int
    focus_description: Optional[str] = None
    status: str
    activities: List[LearningActivityResponse] = []

    class Config:
        from_attributes = True

class LearningPathResponse(BaseModel):
    id: int
    title: str
    status: str
    modules: List[LearningModuleResponse] = []
    weekly_plans: List[WeeklyPlanResponse] = []

    class Config:
        from_attributes = True
