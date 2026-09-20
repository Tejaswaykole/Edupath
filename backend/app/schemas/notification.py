from datetime import datetime
from typing import Optional, List
from pydantic import BaseModel, ConfigDict

class NotificationBase(BaseModel):
    notification_type: str
    title: str
    message: str
    related_entity_ref: Optional[str] = None
    is_read: bool = False

class NotificationCreate(NotificationBase):
    recipient_id: int

class NotificationResponse(NotificationBase):
    id: int
    recipient_id: int
    created_at: datetime
    
    model_config = ConfigDict(from_attributes=True)

class UnreadCountResponse(BaseModel):
    count: int
