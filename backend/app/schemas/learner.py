from pydantic import BaseModel
from typing import Optional

class LearnerProfileBase(BaseModel):
    first_name: str
    last_name: str
    target_role: Optional[str] = None
    bio: Optional[str] = None

class LearnerProfileCreate(LearnerProfileBase):
    pass

class LearnerProfileUpdate(BaseModel):
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    target_role: Optional[str] = None
    bio: Optional[str] = None

class LearnerProfileResponse(LearnerProfileBase):
    id: int
    user_id: int

    class Config:
        from_attributes = True
