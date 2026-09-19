from fastapi import APIRouter
from app.api.routes import auth, learner

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(learner.router, prefix="/learner", tags=["learner"])
