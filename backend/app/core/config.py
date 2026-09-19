from pydantic_settings import BaseSettings
from typing import List
import json

class Settings(BaseSettings):
    ENVIRONMENT: str = "development"
    DATABASE_URL: str = "sqlite:///./test.db"
    
    JWT_SECRET_KEY: str = "supersecretkey_change_in_production"
    JWT_ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 1440

    CORS_ALLOWED_ORIGINS: str = "http://localhost:5173"
    
    GROQ_API_KEY: str = "dummy_key_if_not_set"

    @property
    def get_cors_origins(self) -> List[str]:
        return [origin.strip() for origin in self.CORS_ALLOWED_ORIGINS.split(",") if origin.strip()]

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"

settings = Settings()
