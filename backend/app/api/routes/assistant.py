from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from sqlalchemy import select

from app.api.deps import get_db, get_current_user
from app.models.user import User
from app.models.learner import LearnerProfile
from app.models.assistant import AssistantConversation, AssistantMessage
from app.schemas.assistant import AssistantMessageCreate, AssistantMessageResponse, AssistantConversationResponse
from app.services.context_service import get_learner_context
from app.services.assistant_service import process_chat_message

router = APIRouter()

@router.get("/conversations", response_model=List[AssistantConversationResponse])
def get_conversations(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    profile = db.execute(select(LearnerProfile).where(LearnerProfile.user_id == current_user.id)).scalar_one_or_none()
    if not profile:
        raise HTTPException(status_code=404, detail="Learner profile not found")
        
    conversations = db.execute(
        select(AssistantConversation).where(AssistantConversation.learner_id == profile.id).order_by(AssistantConversation.updated_at.desc())
    ).scalars().all()
    return conversations

@router.get("/conversations/{conversation_id}/messages", response_model=List[AssistantMessageResponse])
def get_messages(conversation_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    profile = db.execute(select(LearnerProfile).where(LearnerProfile.user_id == current_user.id)).scalar_one_or_none()
    if not profile:
        raise HTTPException(status_code=404, detail="Learner profile not found")
        
    conversation = db.execute(
        select(AssistantConversation).where(AssistantConversation.id == conversation_id, AssistantConversation.learner_id == profile.id)
    ).scalar_one_or_none()
    
    if not conversation:
        raise HTTPException(status_code=404, detail="Conversation not found")
        
    messages = db.execute(
        select(AssistantMessage).where(AssistantMessage.conversation_id == conversation_id).order_by(AssistantMessage.created_at.asc())
    ).scalars().all()
    return messages

@router.post("/chat", response_model=AssistantMessageResponse)
def send_message(msg: AssistantMessageCreate, conversation_id: int = None, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    profile = db.execute(select(LearnerProfile).where(LearnerProfile.user_id == current_user.id)).scalar_one_or_none()
    if not profile:
        raise HTTPException(status_code=404, detail="Learner profile not found")

    if conversation_id:
        conversation = db.execute(
            select(AssistantConversation).where(AssistantConversation.id == conversation_id, AssistantConversation.learner_id == profile.id)
        ).scalar_one_or_none()
        if not conversation:
            raise HTTPException(status_code=404, detail="Conversation not found")
    else:
        conversation = AssistantConversation(learner_id=profile.id, title=msg.content[:50])
        db.add(conversation)
        db.commit()
        db.refresh(conversation)
        conversation_id = conversation.id

    # Persist user message
    user_msg = AssistantMessage(conversation_id=conversation_id, sender_type="USER", content=msg.content)
    db.add(user_msg)
    db.commit()

    # Retrieve history
    history_records = db.execute(
        select(AssistantMessage).where(AssistantMessage.conversation_id == conversation_id).order_by(AssistantMessage.created_at.asc())
    ).scalars().all()
    
    history_formatted = [{"role": "user" if m.sender_type == "USER" else "assistant", "content": m.content} for m in history_records[:-1]] # exclude the one we just added

    # Get Context
    context_str = get_learner_context(db, profile.id)
    
    # Process with LLM
    ai_response = process_chat_message(context_str, history_formatted, msg.content)
    
    # Persist assistant message
    resp_metadata = {
        "recommended_actions": ai_response.recommended_actions,
        "related_skill_ids": ai_response.related_skill_ids,
        "related_activity_ids": ai_response.related_activity_ids
    }
    
    asst_msg = AssistantMessage(
        conversation_id=conversation_id,
        sender_type="ASSISTANT",
        content=ai_response.answer,
        response_metadata=resp_metadata
    )
    db.add(asst_msg)
    db.commit()
    db.refresh(asst_msg)
    
    return asst_msg
