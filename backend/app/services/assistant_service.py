import json
from app.core.config import settings
from app.schemas.assistant import AIResponseContent
from app.services.ai_service import get_groq_client

def process_chat_message(context: str, history: list, user_message: str) -> AIResponseContent:
    if settings.GROQ_API_KEY == "dummy_key_if_not_set" or not settings.GROQ_API_KEY:
        return AIResponseContent(
            answer="This is a mocked response because the Groq API key is not set. But I understand you need help with your learning path.",
            recommended_actions=["Review the current module", "Check out mentorship options"],
            related_skill_ids=[],
            related_activity_ids=[]
        )
    
    client = get_groq_client()
    
    system_prompt = f"""
    You are an expert, contextual AI learning assistant for EduPath.
    Your goal is to help the learner with their educational journey using their specific context.
    
    Do not expose internal system details or private reasoning.
    Do not modify the database or tell the user you will do so. 
    If they ask to change a plan, suggest they use the system UI or rely on the adaptive agent.
    
    LEARNER CONTEXT (JSON):
    {context}
    
    Provide your response in JSON format exactly matching this schema:
    {{
      "answer": "Your detailed, helpful response to the learner",
      "recommended_actions": ["List", "of", "suggested", "actions"],
      "related_skill_ids": [1, 2], // optional integer IDs based on context
      "related_activity_ids": [3] // optional integer IDs based on context
    }}
    """
    
    messages = [{"role": "system", "content": system_prompt}]
    
    for msg in history:
        # history is expected to be a list of dicts like {"role": "user" or "assistant", "content": str}
        messages.append(msg)
        
    messages.append({"role": "user", "content": user_message})

    try:
        response = client.chat.completions.create(
            model=settings.GROQ_MODEL,
            messages=messages,
            response_format={"type": "json_object"},
            temperature=0.3,
        )
        data = json.loads(response.choices[0].message.content)
        return AIResponseContent(**data)
    except Exception as e:
        print(f"Groq API Error in Assistant: {e}")
        return AIResponseContent(
            answer="I'm sorry, I'm having trouble connecting to my brain right now. Please try again later.",
            recommended_actions=[]
        )
