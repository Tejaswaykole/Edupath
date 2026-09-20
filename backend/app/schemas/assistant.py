from datetime import datetime
from typing import Optional, List, Dict, Any
from pydantic import BaseModel, Field, model_validator

class AssistantMessageCreate(BaseModel):
    content: Optional[str] = None
    message: Optional[str] = None
    
    @model_validator(mode="after")
    def validate_message_fields(self):
        if not self.content and self.message:
            self.content = self.message
        elif not self.content and not self.message:
            raise ValueError("Either content or message must be provided")
        return self

class AssistantMessageResponse(BaseModel):
    id: int
    conversation_id: int
    sender_type: str
    content: str
    answer: Optional[str] = None
    response_metadata: Optional[Dict[str, Any]] = None
    created_at: datetime

    @model_validator(mode="after")
    def validate_answer(self):
        if not self.answer and self.content:
            self.answer = self.content
        return self

class AssistantConversationResponse(BaseModel):
    id: int
    learner_id: int
    title: Optional[str] = None
    created_at: datetime
    updated_at: datetime

class AIResponseContent(BaseModel):
    answer: str
    recommended_actions: Optional[List[str]] = None
    related_skill_ids: Optional[List[int]] = None
    related_activity_ids: Optional[List[int]] = None
