from typing import Optional
from pydantic import BaseModel, ConfigDict
from datetime import datetime

class IssueReportCreate(BaseModel):
    category: str
    title: str
    description: str
    reference: Optional[str] = None

class IssueReportResponse(IssueReportCreate):
    id: int
    user_id: int
    status: str
    created_at: datetime
    
    model_config = ConfigDict(from_attributes=True)
