from typing import Optional
from pydantic import BaseModel, ConfigDict
from datetime import datetime

class UserSettingsBase(BaseModel):
    learning_pace: str
    preferred_study_schedule: str
    preferred_difficulty: str
    notification_email: bool
    notification_push: bool
    is_private: bool

class UserSettingsUpdate(BaseModel):
    learning_pace: Optional[str] = None
    preferred_study_schedule: Optional[str] = None
    preferred_difficulty: Optional[str] = None
    notification_email: Optional[bool] = None
    notification_push: Optional[bool] = None
    is_private: Optional[bool] = None

class UserSettingsResponse(UserSettingsBase):
    id: int
    user_id: int
    created_at: datetime
    updated_at: datetime
    
    model_config = ConfigDict(from_attributes=True)
