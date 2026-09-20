from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.api.deps import get_db, get_current_user
from app.models.user import User
from app.schemas.report import ReportResponse
from app.services.report_service import ReportService

router = APIRouter()

@router.get("/latest", response_model=ReportResponse)
@router.get("/summary", response_model=ReportResponse)
def get_latest_report(current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    try:
        report = ReportService.generate_report(current_user.id, db)
        return report
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
