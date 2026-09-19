from pydantic import BaseModel, Field
from typing import Optional

class PracticeSubmissionRequest(BaseModel):
    submission_reference: str = Field(..., description="The learner's code or answer text")

class PracticeSubmissionResponse(BaseModel):
    id: int
    task_id: int
    score: int
    feedback: str

    class Config:
        from_attributes = True

class AssessmentAnswerSubmission(BaseModel):
    question_id: int
    provided_answer: str

class AssessmentSubmissionRequest(BaseModel):
    answers: list[AssessmentAnswerSubmission]

class AssessmentSubmissionResponse(BaseModel):
    id: int
    assessment_id: int
    score: int
    status: str

    class Config:
        from_attributes = True

class ActivityProgressUpdate(BaseModel):
    status: str
    progress_percentage: int
    time_spent_mins: int
