from datetime import datetime
from typing import Optional, List
from pydantic import BaseModel, Field

class MentorProfileBase(BaseModel):
    professional_title: Optional[str] = None
    years_experience: int = 0
    bio: Optional[str] = None
    linkedin_url: Optional[str] = None

class MentorProfileResponse(MentorProfileBase):
    id: int
    user_id: int
    is_verified: bool

    class Config:
        from_attributes = True

class MentorshipRequestCreate(BaseModel):
    mentor_id: int
    message: Optional[str] = None

class MentorshipRequestResponse(BaseModel):
    id: int
    learner_id: int
    mentor_id: int
    message: Optional[str] = None
    status: str
    created_at: datetime
    updated_at: datetime

class MentorshipRequestUpdate(BaseModel):
    status: str = Field(description="ACCEPTED or REJECTED or CANCELLED")

class ActiveMentorshipResponse(BaseModel):
    id: int
    request_id: int
    learner_id: int
    mentor_id: int
    status: str
    goals: Optional[str] = None
    mentor: Optional[MentorProfileResponse] = None
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

class MentorGuidanceCreate(BaseModel):
    title: Optional[str] = None
    message: str
    related_skill_id: Optional[int] = None

class MentorGuidanceResponse(BaseModel):
    id: int
    mentorship_id: int
    title: Optional[str] = None
    message: str
    related_skill_id: Optional[int] = None
    is_read: bool
    created_at: datetime
