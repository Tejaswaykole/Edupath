from typing import List, Optional
from pydantic import BaseModel
from datetime import datetime

class SkillStat(BaseModel):
    name: str
    level: str

class GapStat(BaseModel):
    name: str
    relevance_score: int

class ProgressStat(BaseModel):
    total_modules: int
    completed_modules: int
    completion_percentage: int
    average_assessment_score: int

class ReportResponse(BaseModel):
    generated_at: datetime
    acquired_skills: List[SkillStat]
    in_progress_skills: List[SkillStat]
    remaining_gaps: List[GapStat]
    progress: ProgressStat
    next_steps: List[str]
