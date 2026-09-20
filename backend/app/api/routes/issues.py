from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.api.deps import get_db, get_current_user
from app.models.user import User
from app.models.issue import IssueReport
from app.schemas.issue import IssueReportCreate, IssueReportResponse

router = APIRouter()

@router.post("/", response_model=IssueReportResponse)
def create_issue(issue: IssueReportCreate, current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    db_issue = IssueReport(
        user_id=current_user.id,
        category=issue.category,
        title=issue.title,
        description=issue.description,
        reference=issue.reference
    )
    db.add(db_issue)
    db.commit()
    db.refresh(db_issue)
    return db_issue
