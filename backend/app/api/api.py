from fastapi import APIRouter
from app.api.routes import auth, learner, skill_gaps, learning_paths, workspace, agent, assistant, mentorship, settings, notifications, reports, issues

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(learner.router, prefix="/learners", tags=["learners"])
api_router.include_router(skill_gaps.router, prefix="/skill-gaps", tags=["skill-gaps"])
api_router.include_router(learning_paths.router, prefix="/learning-paths", tags=["learning-paths"])
api_router.include_router(workspace.router, prefix="/workspace", tags=["workspace"])
api_router.include_router(mentorship.router, prefix="/mentorship", tags=["mentorship"])
api_router.include_router(agent.router, prefix="/agent", tags=["agent"])
api_router.include_router(assistant.router, prefix="/assistant", tags=["assistant"])
api_router.include_router(settings.router, prefix="/settings", tags=["settings"])
api_router.include_router(notifications.router, prefix="/notifications", tags=["notifications"])
api_router.include_router(reports.router, prefix="/reports", tags=["reports"])
api_router.include_router(issues.router, prefix="/issues", tags=["issues"])
