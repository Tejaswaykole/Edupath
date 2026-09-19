from fastapi import APIRouter
from app.api.routes import auth, learner, skill_gaps, learning_paths, workspace

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(learner.router, prefix="/learner", tags=["learner"])
api_router.include_router(skill_gaps.router, prefix="/skill-gaps", tags=["skill-gaps"])
api_router.include_router(learning_paths.router, prefix="/learning-paths", tags=["learning-paths"])
api_router.include_router(workspace.router, prefix="/workspace", tags=["workspace"])
