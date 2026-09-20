from datetime import timedelta
from fastapi import APIRouter, Depends, HTTPException, status, Request
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
        
        # Determine name
        first_name = user_in.first_name
        last_name = user_in.last_name
        if not first_name and user_in.name:
            parts = user_in.name.strip().split(" ", 1)
            first_name = parts[0]
            last_name = parts[1] if len(parts) > 1 else ""
        first_name = first_name or "New"
        last_name = last_name or "Learner"

        # Create corresponding profile
        if user_role == "LEARNER":
            profile = LearnerProfile(
                user_id=db_user.id,
                first_name=first_name,
                last_name=last_name
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
        return {
            "id": db_user.id,
            "email": db_user.email,
            "role": db_user.role,
            "name": f"{first_name} {last_name}".strip()
        }
    except IntegrityError:
        db.rollback()
        raise HTTPException(status_code=500, detail="Database integrity error during registration")

@router.post("/login", response_model=Token)
async def login(
    request: Request,
    db: Session = Depends(get_db)
):
    email = None
    password = None
    
    content_type = request.headers.get("content-type", "")
    if "application/json" in content_type:
        try:
            body = await request.json()
            email = body.get("email") or body.get("username")
            password = body.get("password")
        except Exception:
            pass
    else:
        try:
            form = await request.form()
            email = form.get("username") or form.get("email")
            password = form.get("password")
        except Exception:
            pass

    auth_error = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Incorrect email or password",
        headers={"WWW-Authenticate": "Bearer"},
    )
    
    if not email or not password:
        raise auth_error
        
    user = db.query(User).filter(User.email == email).first()
    if not user:
        raise auth_error
    if not security.verify_password(password, user.hashed_password):
        raise auth_error

    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = security.create_access_token(
        subject=user.id, expires_delta=access_token_expires
    )
    
    user_name = None
    if user.learner_profile:
        user_name = f"{user.learner_profile.first_name} {user.learner_profile.last_name}".strip()
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": {
            "id": user.id,
            "email": user.email,
            "role": user.role,
            "name": user_name
        }
    }

@router.get("/me", response_model=UserResponse)
def get_me(current_user: User = Depends(get_current_user)):
    return current_user
