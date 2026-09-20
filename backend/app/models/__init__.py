from .base import Base
from .user import User
from .learner import LearnerProfile

# Phase 3 Models
from .skill import SkillCategory, Skill, LearnerSkill, ProficiencyLevel
from .target_role import TargetRole, TargetRoleSkill
from .document import Document, DocumentAnalysis
from .learning import SkillGap, LearningPath, LearningModule, LearningActivity, LearningProgress
from .assessment import PracticeTask, PracticeAttempt, Assessment, AssessmentQuestion, AssessmentAttempt, AssessmentAnswer
from .project import LearningProject
from .mentorship import MentorProfile, MentorExpertise, MentorshipRequest, ActiveMentorship, MentorGuidance
from .agent import AgentEvent, PlanAdaptation
from .assistant import AssistantConversation, AssistantMessage
from .notification import Notification

__all__ = [
    "Base", 
    "User", 
    "LearnerProfile",
    "SkillCategory", "Skill", "LearnerSkill", "ProficiencyLevel",
    "TargetRole", "TargetRoleSkill",
    "Document", "DocumentAnalysis",
    "SkillGap", "LearningPath", "LearningModule", "LearningActivity", "LearningProgress",
    "PracticeTask", "PracticeAttempt", "Assessment", "AssessmentQuestion", "AssessmentAttempt", "AssessmentAnswer",
    "LearningProject",
    "MentorProfile", "MentorExpertise", "MentorshipRequest", "ActiveMentorship", "MentorGuidance",
    "AgentEvent", "PlanAdaptation",
    "AssistantConversation", "AssistantMessage",
    "Notification"
]
