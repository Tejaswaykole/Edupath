from typing import List
from datetime import datetime, timezone
import json
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.models.user import User
from app.models.learner import LearnerProfile
from app.models.learning import SkillGap, LearningProgress, LearningActivity
from app.models.skill import Skill, LearnerSkill, ProficiencyLevel
from app.models.document import Document, DocumentAnalysis
from app.models.project import LearningProject
from app.models.assessment import PracticeTask, PracticeAttempt, AssessmentAttempt, AssessmentQuestion, AssessmentAnswer
from app.schemas.learning import SkillGapResponse, SkillVerificationResponse, EvidenceBreakdown
from app.api.deps import require_learner
from app.services.skill_gap_service import analyze_learner_gaps
from app.services.ai_service import get_groq_client
from app.core.config import settings

router = APIRouter()

@router.get("", response_model=List[SkillGapResponse])
def get_skill_gaps(current_user: User = Depends(require_learner), db: Session = Depends(get_db)):
    profile = db.query(LearnerProfile).filter(LearnerProfile.user_id == current_user.id).first()
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")
        
    gaps = db.query(SkillGap).filter(SkillGap.learner_id == profile.id).all()
    return gaps

@router.post("/analyze", response_model=List[SkillGapResponse])
def trigger_analysis(current_user: User = Depends(require_learner), db: Session = Depends(get_db)):
    profile = db.query(LearnerProfile).filter(LearnerProfile.user_id == current_user.id).first()
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")
    
    if not profile.target_role:
        raise HTTPException(status_code=400, detail="Target role must be set before analysis")

    gaps = analyze_learner_gaps(db, profile)
    for g in gaps:
        db.refresh(g)
    
    all_gaps = db.query(SkillGap).filter(SkillGap.learner_id == profile.id).all()
    return all_gaps

@router.post("/verify/{skill_id}", response_model=SkillVerificationResponse)
def verify_skill(
    skill_id: int,
    current_user: User = Depends(require_learner),
    db: Session = Depends(get_db)
):
    """
    Multi-source deterministic skill verification based on:
    Resume Evidence + Project Evidence + Practice Performance + Assessment Performance + Recent Progress
    Interpreted and summarized by Groq AI.
    """
    profile = db.query(LearnerProfile).filter(LearnerProfile.user_id == current_user.id).first()
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")

    skill = db.query(Skill).filter(Skill.id == skill_id).first()
    if not skill:
        raise HTTPException(status_code=404, detail="Skill not found")

    target_lower = skill.name.lower()
    evidence_details = []

    # 1. Resume Evidence (up to 25 pts)
    resume_score = 0
    doc_analysis = db.query(DocumentAnalysis).join(Document).filter(
        Document.owner_id == current_user.id
    ).order_by(DocumentAnalysis.id.desc()).first()

    if doc_analysis:
        ext_skills = doc_analysis.extracted_skills or {}
        skill_names = []
        if isinstance(ext_skills, list):
            for item in ext_skills:
                if isinstance(item, dict):
                    skill_names.append(item.get("name", "").lower())
                elif isinstance(item, str):
                    skill_names.append(item.lower())
        elif isinstance(ext_skills, dict):
            for cat, skills_list in ext_skills.items():
                if isinstance(skills_list, list):
                    for s in skills_list:
                        if isinstance(s, dict):
                            skill_names.append(s.get("name", "").lower())
                        elif isinstance(s, str):
                            skill_names.append(s.lower())
                elif isinstance(skills_list, str):
                    skill_names.append(skills_list.lower())

        if any(target_lower in s or s in target_lower for s in skill_names):
            resume_score += 20
            evidence_details.append(f"Document evidence: Verified '{skill.name}' in parsed resume skillset")

        ext_exp = doc_analysis.extracted_experience or []
        ext_proj = doc_analysis.extracted_projects or []
        exp_text = json.dumps(ext_exp).lower() + json.dumps(ext_proj).lower()
        if target_lower in exp_text:
            resume_score += 5
            evidence_details.append(f"Work experience evidence: Mentioned in verified resume accomplishments")

    # 2. Project Evidence (up to 20 pts)
    project_score = 0
    projects = db.query(LearningProject).filter(LearningProject.learner_id == profile.id).all()
    for proj in projects:
        rel_skills = (proj.related_skills or "").lower()
        p_title = (proj.title or "").lower()
        if target_lower in rel_skills or target_lower in p_title:
            if proj.status == "COMPLETED":
                project_score = max(project_score, 20)
                evidence_details.append(f"Completed project evidence: '{proj.title}'")
            else:
                project_score = max(project_score, 10)
                evidence_details.append(f"In-progress project evidence: '{proj.title}'")

    # 3. Practice Performance (up to 25 pts)
    practice_score = 0
    practice_attempts = db.query(PracticeAttempt).join(PracticeTask).filter(
        PracticeAttempt.learner_id == profile.id,
        (PracticeTask.skill_id == skill.id) | (PracticeTask.title.ilike(f"%{skill.name}%"))
    ).all()

    if practice_attempts:
        scores = [pr.score for pr in practice_attempts if pr.score is not None]
        if scores:
            avg_p = sum(scores) / len(scores)
            practice_score = int((avg_p / 100.0) * 25)
            evidence_details.append(f"Practice evaluation score: {int(avg_p)}% across {len(scores)} task attempt(s)")
    else:
        existing_ls = db.query(LearnerSkill).filter_by(learner_id=profile.id, skill_id=skill.id).first()
        if existing_ls and existing_ls.proficiency in [ProficiencyLevel.INTERMEDIATE, ProficiencyLevel.ADVANCED, ProficiencyLevel.EXPERT]:
            practice_score = 10
            evidence_details.append("Foundational competency recognized from demonstrated learner profile level")

    # 4. Assessment Performance (up to 20 pts)
    assessment_score = 0
    assessment_answers = db.query(AssessmentAnswer).join(AssessmentQuestion).join(AssessmentAttempt).filter(
        AssessmentAttempt.learner_id == profile.id,
        (AssessmentQuestion.skill_id == skill.id) | (AssessmentQuestion.content.ilike(f"%{skill.name}%"))
    ).all()

    if assessment_answers:
        correct_count = sum(1 for a in assessment_answers if a.is_correct)
        pct = (correct_count / len(assessment_answers))
        assessment_score = int(pct * 20)
        evidence_details.append(f"Assessment performance: {correct_count}/{len(assessment_answers)} correct answers ({int(pct * 100)}%)")
    else:
        any_assessment = db.query(AssessmentAttempt).filter_by(
            learner_id=profile.id,
            status="COMPLETED"
        ).order_by(AssessmentAttempt.id.desc()).first()
        if any_assessment and any_assessment.score:
            assessment_score = int((any_assessment.score / 100.0) * 12)
            evidence_details.append(f"Milestone assessment baseline score: {any_assessment.score}%")

    # 5. Recent Progress (up to 10 pts)
    progress_score = 0
    completed_activities = db.query(LearningProgress).join(LearningActivity).filter(
        LearningProgress.learner_id == profile.id,
        LearningProgress.status == "COMPLETED",
        (LearningActivity.title.ilike(f"%{skill.name}%") | LearningActivity.description.ilike(f"%{skill.name}%"))
    ).all()

    if completed_activities:
        progress_score = 10
        evidence_details.append(f"Completed {len(completed_activities)} curriculum activity checkpoint(s) covering '{skill.name}'")

    verified_score = min(100, max(0, resume_score + project_score + practice_score + assessment_score + progress_score))

    if verified_score >= 85:
        confidence_level = "EXPERT"
    elif verified_score >= 70:
        confidence_level = "ADVANCED"
    elif verified_score >= 50:
        confidence_level = "INTERMEDIATE"
    else:
        confidence_level = "BEGINNER"

    # AI Interpretation
    ai_explanation = f"Competency in {skill.name} verified at {verified_score}% ({confidence_level}) through multi-source evidence including resume parsing, practice tasks, and roadmap progress."
    if settings.GROQ_API_KEY and settings.GROQ_API_KEY != "dummy_key_if_not_set":
        client = get_groq_client()
        prompt = f"""
        You are an adaptive AI skill verification auditor for EduPath.
        Learner: {profile.first_name} {profile.last_name}
        Target Role: {profile.target_role}
        Skill: {skill.name}
        Deterministic Score: {verified_score}/100 ({confidence_level})
        Breakdown:
        - Resume Evidence: {resume_score}/25
        - Project Evidence: {project_score}/20
        - Practice Performance: {practice_score}/25
        - Assessment Performance: {assessment_score}/20
        - Progress Milestone: {progress_score}/10
        Evidence Details: {', '.join(evidence_details) if evidence_details else 'Initial baseline calibration'}

        Provide a concise, professional 2-sentence verification explanation summarizing why the learner holds this confidence rating and which concrete evidence validated it.
        Respond with JSON: {{"explanation": "..."}}
        """
        try:
            resp = client.chat.completions.create(
                messages=[{"role": "user", "content": prompt}],
                model=settings.GROQ_MODEL,
                temperature=0.2,
                response_format={"type": "json_object"}
            )
            data = json.loads(resp.choices[0].message.content)
            if "explanation" in data:
                ai_explanation = data["explanation"]
        except Exception as e:
            print(f"Groq skill verification summary error: {e}")

    # Persist in LearnerSkill
    now_utc = datetime.now(timezone.utc)
    learner_skill = db.query(LearnerSkill).filter_by(learner_id=profile.id, skill_id=skill.id).first()
    if not learner_skill:
        learner_skill = LearnerSkill(
            learner_id=profile.id,
            skill_id=skill.id,
            proficiency=ProficiencyLevel[confidence_level] if confidence_level in ProficiencyLevel.__members__ else ProficiencyLevel.BEGINNER,
            confidence_score=verified_score,
            source_evidence=f"Multi-source verified ({verified_score}/100)",
            last_assessed_at=now_utc
        )
        db.add(learner_skill)
    else:
        learner_skill.confidence_score = verified_score
        learner_skill.source_evidence = f"Multi-source verified ({verified_score}/100)"
        if confidence_level in ProficiencyLevel.__members__:
            learner_skill.proficiency = ProficiencyLevel[confidence_level]
        learner_skill.last_assessed_at = now_utc

    db.commit()

    return SkillVerificationResponse(
        skill_id=skill.id,
        skill_name=skill.name,
        verified_score=verified_score,
        confidence_level=confidence_level,
        breakdown=EvidenceBreakdown(
            resume_score=resume_score,
            project_score=project_score,
            practice_score=practice_score,
            assessment_score=assessment_score,
            progress_score=progress_score,
            evidence_details=evidence_details
        ),
        ai_explanation=ai_explanation,
        verified_at=now_utc
    )
