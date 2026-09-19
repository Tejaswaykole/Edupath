import json
from groq import Groq
from app.core.config import settings
from app.schemas.ai import AISkillGapAnalysis, AILearningPathResult

client = Groq(api_key=settings.GROQ_API_KEY)

def analyze_skill_gap(skill_name: str, target_role_title: str) -> AISkillGapAnalysis:
    if settings.GROQ_API_KEY == "dummy_key_if_not_set" or not settings.GROQ_API_KEY:
        return AISkillGapAnalysis(
            reasoning=f"This is a mocked reasoning because the Groq API key is not set. {skill_name} is essential for {target_role_title}.",
            objectives=[
                {
                    "title": f"Master {skill_name} basics",
                    "description": f"Learn the fundamentals of {skill_name}.",
                    "difficulty": "BEGINNER",
                    "estimated_effort_mins": 120
                }
            ]
        )
    
    prompt = f"""
    You are an expert career coach. Analyze the skill gap for "{skill_name}" in the context of becoming a "{target_role_title}".
    Provide a JSON response with exactly this structure:
    {{
      "reasoning": "string explaining why this is important",
      "objectives": [
        {{
          "title": "string",
          "description": "string",
          "difficulty": "BEGINNER|INTERMEDIATE|ADVANCED",
          "estimated_effort_mins": int
        }}
      ]
    }}
    Ensure valid JSON format.
    """
    
    try:
        response = client.chat.completions.create(
            model="llama3-8b-8192",
            messages=[{"role": "user", "content": prompt}],
            response_format={"type": "json_object"},
            temperature=0.3,
        )
        data = json.loads(response.choices[0].message.content)
        return AISkillGapAnalysis(**data)
    except Exception as e:
        print(f"Groq API Error: {e}")
        return AISkillGapAnalysis(
            reasoning=f"Failed to generate analysis for {skill_name}.",
            objectives=[]
        )

def generate_learning_path(target_role_title: str, gaps: list[str]) -> AILearningPathResult:
    if settings.GROQ_API_KEY == "dummy_key_if_not_set" or not settings.GROQ_API_KEY:
        return AILearningPathResult(
            title=f"Path to {target_role_title}",
            modules=[
                {
                    "title": f"Module for {gap}",
                    "description": f"Learn {gap}",
                    "activities": [
                        {
                            "title": f"Intro to {gap}",
                            "description": "Basic concepts",
                            "activity_type": "VIDEO",
                            "estimated_duration_mins": 30,
                            "difficulty": "BEGINNER",
                            "resource_url": "https://example.com"
                        }
                    ]
                } for gap in gaps
            ]
        )
        
    gaps_str = ", ".join(gaps)
    prompt = f"""
    You are an expert curriculum designer. A learner wants to become a "{target_role_title}" and has skill gaps in: {gaps_str}.
    Generate a highly structured learning path to bridge these gaps. 
    Return a JSON response strictly matching this structure:
    {{
      "title": "string",
      "modules": [
        {{
          "title": "string",
          "description": "string",
          "activities": [
            {{
              "title": "string",
              "description": "string",
              "activity_type": "VIDEO|ARTICLE|PRACTICE|QUIZ",
              "estimated_duration_mins": int,
              "difficulty": "BEGINNER|INTERMEDIATE|ADVANCED",
              "resource_url": "string or null"
            }}
          ]
        }}
      ]
    }}
    Ensure valid JSON format.
    """
    
    try:
        response = client.chat.completions.create(
            model="llama3-8b-8192",
            messages=[{"role": "user", "content": prompt}],
            response_format={"type": "json_object"},
            temperature=0.3,
        )
        data = json.loads(response.choices[0].message.content)
        return AILearningPathResult(**data)
    except Exception as e:
        print(f"Groq API Error: {e}")
        return AILearningPathResult(title="Fallback Path", modules=[])
