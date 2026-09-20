import os
import shutil
from datetime import datetime, timezone
from io import BytesIO
from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, status
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.models.user import User
from app.models.learner import LearnerProfile
from app.models.skill import Skill, LearnerSkill, SkillCategory, ProficiencyLevel
from app.models.document import Document, DocumentAnalysis
from app.api.deps import get_current_user, require_learner
from app.services.ai_service import extract_resume_data

router = APIRouter()

UPLOAD_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), "uploads")
os.makedirs(UPLOAD_DIR, exist_ok=True)

PROFICIENCY_MAP = {
    "BEGINNER": ProficiencyLevel.BEGINNER,
    "INTERMEDIATE": ProficiencyLevel.INTERMEDIATE,
    "ADVANCED": ProficiencyLevel.ADVANCED,
    "EXPERT": ProficiencyLevel.EXPERT,
}

def extract_text_from_pdf(content: bytes) -> str:
    try:
        import pymupdf
        doc = pymupdf.open(stream=content, filetype="pdf")
        text = "\n".join(page.get_text() for page in doc)
        return text
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Failed to extract text from PDF: {str(e)}")

def extract_text_from_docx(content: bytes) -> str:
    try:
        from docx import Document as DocxDoc
        doc = DocxDoc(BytesIO(content))
        text = "\n".join(p.text for p in doc.paragraphs if p.text.strip())
        return text
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Failed to extract text from DOCX: {str(e)}")

@router.post("/upload")
async def upload_document(
    file: UploadFile = File(...),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    # Validate file extension
    filename = file.filename or "resume.pdf"
    ext = os.path.splitext(filename)[1].lower()
    if ext not in [".pdf", ".docx"]:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Unsupported file format. Please upload a PDF or DOCX file."
        )

    # Read content
    contents = await file.read()
    if len(contents) == 0:
        raise HTTPException(status_code=400, detail="Uploaded file is empty.")
    if len(contents) > 15 * 1024 * 1024:
        raise HTTPException(status_code=400, detail="File size exceeds 15MB limit.")

    # Save to disk
    safe_name = f"{current_user.id}_{int(datetime.now(timezone.utc).timestamp())}_{filename}"
    file_path = os.path.join(UPLOAD_DIR, safe_name)
    with open(file_path, "wb") as f:
        f.write(contents)

    # Extract text
    if ext == ".pdf":
        raw_text = extract_text_from_pdf(contents)
    else:
        raw_text = extract_text_from_docx(contents)

    # Create Document record
    doc_record = Document(
        owner_id=current_user.id,
        file_name=filename,
        file_type="application/pdf" if ext == ".pdf" else "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        storage_path=file_path,
        file_size_bytes=len(contents),
        upload_status="COMPLETED",
        processing_status="PROCESSING"
    )
    db.add(doc_record)
    db.flush()

    # Extract structured data with AI
    parsed = extract_resume_data(raw_text)

    # Save DocumentAnalysis
    analysis = DocumentAnalysis(
        document_id=doc_record.id,
        extracted_skills=parsed.get("skills", []),
        extracted_experience=parsed.get("experience", []),
        extracted_education=parsed.get("education", []),
        extracted_projects=parsed.get("projects", []),
        analysis_status="COMPLETED"
    )
    db.add(analysis)
    doc_record.processing_status = "COMPLETED"

    # Persist extracted skills to learner profile if current_user is learner
    profile = db.query(LearnerProfile).filter(LearnerProfile.user_id == current_user.id).first()
    if profile:
        for sk in parsed.get("skills", []):
            sk_name = sk.get("name", "").strip()
            if not sk_name:
                continue
            
            # Find or create skill
            skill = db.query(Skill).filter(Skill.name.ilike(sk_name)).first()
            if not skill:
                category_name = sk.get("category", "General")
                category = db.query(SkillCategory).filter(SkillCategory.name.ilike(category_name)).first()
                if not category:
                    category = SkillCategory(name=category_name, description=f"{category_name} skills")
                    db.add(category)
                    db.flush()
                skill = Skill(name=sk_name, category_id=category.id, description=f"Skill: {sk_name}")
                db.add(skill)
                db.flush()

            # Map proficiency
            prof_str = sk.get("proficiency", "INTERMEDIATE").upper()
            prof_level = PROFICIENCY_MAP.get(prof_str, ProficiencyLevel.INTERMEDIATE)

            # Check existing learner skill
            ls = db.query(LearnerSkill).filter(
                LearnerSkill.learner_id == profile.id,
                LearnerSkill.skill_id == skill.id
            ).first()

            if not ls:
                ls = LearnerSkill(
                    learner_id=profile.id,
                    skill_id=skill.id,
                    proficiency=prof_level,
                    confidence_score=sk.get("confidence", 85),
                    source_evidence="Resume"
                )
                db.add(ls)
            else:
                ls.proficiency = prof_level
                ls.confidence_score = sk.get("confidence", ls.confidence_score)
                ls.source_evidence = "Resume"

    db.commit()

    return {
        "status": "success",
        "document_id": doc_record.id,
        "file_name": doc_record.file_name,
        "extracted_skills": parsed.get("skills", []),
        "extracted_experience": parsed.get("experience", []),
        "extracted_education": parsed.get("education", []),
        "extracted_projects": parsed.get("projects", []),
        "readiness_score": parsed.get("readiness_score", 75),
        "summary": parsed.get("summary", "Resume processed successfully.")
    }

@router.get("/my-documents")
def get_user_documents(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    docs = db.query(Document).filter(Document.owner_id == current_user.id).order_by(Document.created_at.desc()).all()
    results = []
    for d in docs:
        analysis = d.analysis
        results.append({
            "id": d.id,
            "file_name": d.file_name,
            "file_type": d.file_type,
            "file_size_bytes": d.file_size_bytes,
            "upload_status": d.upload_status,
            "processing_status": d.processing_status,
            "created_at": d.created_at,
            "skills_count": len(analysis.extracted_skills) if analysis and analysis.extracted_skills else 0
        })
    return results
