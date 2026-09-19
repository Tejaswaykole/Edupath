from pydantic import BaseModel, Field
from typing import List, Optional

class AIObjective(BaseModel):
    title: str = Field(description="A clear, measurable learning objective title")
    description: str = Field(description="Detailed explanation of what the learner will achieve")
    difficulty: str = Field(description="BEGINNER, INTERMEDIATE, or ADVANCED")
    estimated_effort_mins: int = Field(description="Estimated minutes to complete")

class AISkillGapAnalysis(BaseModel):
    reasoning: str = Field(description="AI explanation of why this gap is important for the target role")
    objectives: List[AIObjective] = Field(description="Recommended learning objectives to bridge the gap")

class AIActivity(BaseModel):
    title: str = Field(description="Title of the learning activity")
    description: str = Field(description="Brief description of the activity")
    activity_type: str = Field(description="VIDEO, ARTICLE, PRACTICE, or QUIZ")
    estimated_duration_mins: int = Field(description="Estimated duration in minutes")
    difficulty: str = Field(description="BEGINNER, INTERMEDIATE, or ADVANCED")
    resource_url: Optional[str] = Field(None, description="A relevant URL if available (leave null if none)")

class AIModule(BaseModel):
    title: str = Field(description="Title of the learning module")
    description: str = Field(description="What this module covers")
    activities: List[AIActivity] = Field(description="List of activities in this module")

class AILearningPathResult(BaseModel):
    title: str = Field(description="Title of the overall learning path")
    modules: List[AIModule] = Field(description="Modules in sequential order")
