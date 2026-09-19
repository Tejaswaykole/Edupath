from datetime import timedelta
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError

from app.core import security
from app.core.config import settings
from app.db.session import get_db
from app.models.user import User
from app.models.learner import LearnerProfile
from app.models.mentorship import MentorProfile
from app.schemas.user import UserCreate, UserResponse, Token
from app.api.deps import get_current_user

router = APIRouter()

@router.post("/register", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
def register(user_in: UserCreate, db: Session = Depends(get_db)):
    # Validate allowed roles
    allowed_roles = ["LEARNER", "MENTOR"]
    user_role = user_in.role.upper()
    if user_role not in allowed_roles:
        raise HTTPException(status_code=400, detail="Invalid role specified")

    # Check existing user
    user = db.query(User).filter(User.email == user_in.email).first()
    if user:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="The user with this email already exists in the system",
        )

    # Create new user
    db_user = User(
        email=user_in.email,
        hashed_password=security.hash_password(user_in.password),
        role=user_role,
    )
    db.add(db_user)
    
    try:
        db.flush() # flush to get db_user.id
        
        # Create corresponding profile
        if user_role == "LEARNER":
            profile = LearnerProfile(
                user_id=db_user.id,
                first_name="New",
                last_name="Learner"
            )
            db.add(profile)
        elif user_role == "MENTOR":
            profile = MentorProfile(
                user_id=db_user.id,
                professional_title="Mentor"
            )
            db.add(profile)

        db.commit()
        db.refresh(db_user)
        return db_user
    except IntegrityError:
        db.rollback()
        raise HTTPException(status_code=500, detail="Database integrity error during registration")

@router.post("/login", response_model=Token)
def login(db: Session = Depends(get_db), form_data: OAuth2PasswordRequestForm = Depends()):
    # Find user
    user = db.query(User).filter(User.email == form_data.username).first()
    
    # Generic error message to prevent email enumeration
    auth_error = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Incorrect email or password",
        headers={"WWW-Authenticate": "Bearer"},
    )
    
    if not user:
        raise auth_error
    if not security.verify_password(form_data.password, user.hashed_password):
        raise auth_error

    # Create token
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = security.create_access_token(
        subject=user.id, expires_delta=access_token_expires
    )
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": user
    }

@router.get("/me", response_model=UserResponse)
def get_me(current_user: User = Depends(get_current_user)):
    return current_user
