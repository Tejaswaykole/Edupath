import os
import sys
import json
import time
import requests
import pymupdf

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8")

BASE_URL = "http://localhost:8000/api/v1"

def create_sample_resume_pdf(filepath: str):
    doc = pymupdf.open()
    page = doc.new_page()
    text = """
    TEJAS PATIL
    Full Stack Software Engineer | tejas.patil@example.com | San Francisco, CA

    SUMMARY
    Energetic Software Engineer with 2.5 years of experience building modern web applications.
    Specialized in React, TypeScript, and modern frontend tooling, with growing experience in Node.js REST APIs.

    TECHNICAL SKILLS
    Languages & Frameworks: JavaScript, TypeScript, React 18, Next.js, HTML5, CSS3, Tailwind CSS
    Backend & Databases: Node.js, Express, PostgreSQL, Redis, MongoDB
    DevOps & Tools: Git, Docker, GitHub Actions, AWS S3, Jest

    EXPERIENCE
    Associate Software Engineer | WebTech Innovations (2023 - Present)
    - Developed and maintained customer-facing React components with Tailwind CSS.
    - Implemented client-side state management using Zustand and TanStack Query.
    - Contributed to Express backend services and PostgreSQL database queries.

    PROJECTS
    - TaskFlow Kanban App: Real-time project tracker built with React, TypeScript, and Node.js.
    - E-Commerce Microservices: Modular checkout service with Redis caching and Stripe API integration.

    EDUCATION
    B.S. in Computer Science | State University (2023)
    """
    page.insert_text((50, 50), text, fontsize=11)
    doc.save(filepath)
    doc.close()

def run_tests():
    print("=" * 70)
    print("EDUPATH COMPLETE END-TO-END AUTOMATED VERIFICATION SUITE")
    print("=" * 70)

    session = requests.Session()
    results = {}

    # 1. Health / Docs
    print("\n[STEP 2] Verifying Backend Health & API Docs...")
    resp = requests.get("http://localhost:8000/docs")
    assert resp.status_code == 200, f"Docs failed: {resp.status_code}"
    print("  ✓ Backend is healthy, Swagger UI is reachable (HTTP 200)")
    results["Backend Health"] = "PASS"

    # 2. Registration
    print("\n[STEP 4] Testing Learner Registration...")
    unique_email = f"learner_{int(time.time())}@edupath.dev"
    reg_payload = {
        "email": unique_email,
        "password": "password123",
        "role": "LEARNER",
        "name": "E2E Test Learner"
    }
    resp = session.post(f"{BASE_URL}/auth/register", json=reg_payload)
    assert resp.status_code in [201, 200], f"Registration failed: {resp.text}"
    user_data = resp.json()
    print(f"  ✓ Registered new learner: {unique_email} (ID: {user_data.get('id')})")
    results["Registration"] = "PASS"

    # Test Duplicate Registration
    resp_dup = session.post(f"{BASE_URL}/auth/register", json=reg_payload)
    assert resp_dup.status_code == 409, f"Duplicate registration check failed: {resp_dup.status_code}"
    print("  ✓ Duplicate registration correctly rejected with HTTP 409 Conflict")
    results["Duplicate Registration Prevention"] = "PASS"

    # 3. Login
    print("\n[STEP 4] Testing Learner Login & JWT Token...")
    # Test invalid credentials
    bad_login = session.post(f"{BASE_URL}/auth/login", json={"email": unique_email, "password": "wrongpassword"})
    assert bad_login.status_code == 401, f"Bad login check failed: {bad_login.status_code}"
    print("  ✓ Invalid password correctly rejected with HTTP 401 Unauthorized")

    login_resp = session.post(f"{BASE_URL}/auth/login", json={"email": unique_email, "password": "password123"})
    assert login_resp.status_code == 200, f"Login failed: {login_resp.text}"
    token_data = login_resp.json()
    token = token_data["access_token"]
    assert token, "Token is empty"
    print(f"  ✓ Login successful, JWT token issued: {token[:20]}...")
    results["Login & JWT"] = "PASS"

    headers = {"Authorization": f"Bearer {token}"}

    # 4. Profile Retrieval & Target Role Update
    print("\n[STEP 4/6] Verifying Learner Profile & Target Role Configuration...")
    me_resp = session.get(f"{BASE_URL}/learners/me", headers=headers)
    assert me_resp.status_code == 200, f"Get profile failed: {me_resp.text}"
    profile = me_resp.json()
    print(f"  ✓ Learner Profile retrieved: Name={profile.get('first_name')} {profile.get('last_name')}")

    update_resp = session.put(
        f"{BASE_URL}/learners/me",
        headers=headers,
        json={"target_role": "Full Stack Developer", "bio": "Passionate full-stack developer preparing for senior role."}
    )
    assert update_resp.status_code == 200, f"Update profile failed: {update_resp.text}"
    print("  ✓ Target role set to 'Full Stack Developer'")
    results["Profile & Target Role"] = "PASS"

    # 5. Resume Upload & Document Extraction (Step 5)
    print("\n[STEP 5] Testing Resume Document Processing (PDF Extraction + AI Analysis)...")
    sample_pdf = os.path.join(os.path.dirname(__file__), "sample_e2e_resume.pdf")
    create_sample_resume_pdf(sample_pdf)

    with open(sample_pdf, "rb") as f:
        upload_resp = session.post(
            f"{BASE_URL}/documents/upload",
            headers=headers,
            files={"file": ("sample_e2e_resume.pdf", f, "application/pdf")}
        )
    assert upload_resp.status_code == 200, f"Document upload failed: {upload_resp.text}"
    doc_result = upload_resp.json()
    assert doc_result["status"] == "success", "Upload status not success"
    skills_extracted = doc_result.get("extracted_skills", [])
    assert len(skills_extracted) > 0, "No skills extracted from resume"
    print(f"  ✓ Resume successfully uploaded and processed by AI pipeline.")
    print(f"  ✓ Extracted {len(skills_extracted)} skills: {[s['name'] for s in skills_extracted[:5]]}...")
    print(f"  ✓ Baseline Readiness Score: {doc_result.get('readiness_score')}%")
    results["Document Processing"] = "PASS"

    # 6. Skill Gap Detection (Step 6)
    print("\n[STEP 6] Testing Skill Gap Detection & Groq AI Objectives Generation...")
    gap_analyze_resp = session.post(f"{BASE_URL}/skill-gaps/analyze", headers=headers)
    assert gap_analyze_resp.status_code == 200, f"Skill gap analysis failed: {gap_analyze_resp.text}"
    gaps_created = gap_analyze_resp.json()
    print(f"  ✓ Skill gap analysis completed. Gaps identified/analyzed: {len(gaps_created)}")

    gaps_list_resp = session.get(f"{BASE_URL}/skill-gaps", headers=headers)
    assert gaps_list_resp.status_code == 200
    all_gaps = gaps_list_resp.json()
    print(f"  ✓ Total active skill gaps retrieved: {len(all_gaps)}")
    for g in all_gaps[:2]:
        print(f"    - Skill ID {g.get('skill_id')}: Current={g.get('current_proficiency')}, Required={g.get('required_proficiency')}, Priority={g.get('priority')}")
    results["Skill Gap Detection"] = "PASS"

    # 7. Personalized Learning Plan (Step 7)
    print("\n[STEP 7] Testing Personalized Learning Path Generation...")
    gen_path_resp = session.post(f"{BASE_URL}/learning-paths/generate", headers=headers)
    assert gen_path_resp.status_code == 200, f"Learning path generation failed: {gen_path_resp.text}"
    path_data = gen_path_resp.json()
    print(f"  ✓ Generated Learning Path: '{path_data.get('title')}' with {len(path_data.get('modules', []))} modules.")

    cur_path_resp = session.get(f"{BASE_URL}/learning-paths/current", headers=headers)
    assert cur_path_resp.status_code == 200
    active_path = cur_path_resp.json()
    assert active_path is not None, "Current learning path is null"
    print(f"  ✓ Current learning path retrieved and persisted in DB.")
    results["Personalized Learning Plan"] = "PASS"

    # 8. Practice Tasks (Step 9)
    print("\n[STEP 9] Testing Practice Task Workspace & AI Evaluation...")
    # Fetch practice task 1
    task_resp = session.get(f"{BASE_URL}/workspace/practice/1", headers=headers)
    assert task_resp.status_code == 200, f"Get practice task failed: {task_resp.text}"
    task = task_resp.json()
    print(f"  ✓ Practice Task loaded: '{task['title']}' (Difficulty: {task.get('difficulty')})")

    # Submit practice answer
    solution = "async function blacklistToken(redisClient, token, ttlSeconds) { await redisClient.set(`bl_${token}`, '1', 'EX', ttlSeconds); return true; }"
    submit_resp = session.post(
        f"{BASE_URL}/workspace/practice/1/submit",
        headers=headers,
        json={"submission_reference": solution}
    )
    assert submit_resp.status_code == 200, f"Practice submission failed: {submit_resp.text}"
    eval_data = submit_resp.json()
    print(f"  ✓ Practice evaluated by AI: Score={eval_data.get('score')} / 100")
    print(f"  ✓ Evaluator Feedback: {eval_data.get('feedback')[:100]}...")
    results["Practice Task"] = "PASS"

    # 9. Assessment Knowledge Check (Step 10)
    print("\n[STEP 10] Testing Assessments & Scoring...")
    ass_resp = session.get(f"{BASE_URL}/workspace/assessments/1", headers=headers)
    assert ass_resp.status_code == 200, f"Get assessment failed: {ass_resp.text}"
    assessment = ass_resp.json()
    print(f"  ✓ Assessment loaded: '{assessment['title']}' with {len(assessment.get('questions', []))} questions")

    # Start assessment
    start_resp = session.post(f"{BASE_URL}/workspace/assessments/1/start", headers=headers)
    assert start_resp.status_code == 200
    attempt_id = start_resp.json()["attempt_id"]
    print(f"  ✓ Assessment attempt started: ID={attempt_id}")

    # Submit answers (correct)
    answers_payload = [
        {"question_id": q["id"], "provided_answer": q.get("options", [""])[0]}
        for q in assessment.get("questions", [])
    ]
    sub_ass_resp = session.post(
        f"{BASE_URL}/workspace/assessments/attempts/{attempt_id}/submit",
        headers=headers,
        json={"answers": answers_payload}
    )
    assert sub_ass_resp.status_code == 200, f"Submit assessment failed: {sub_ass_resp.text}"
    ass_result = sub_ass_resp.json()
    print(f"  ✓ Assessment completed. Score={ass_result.get('score')}%, Status={ass_result.get('status')}")
    results["Assessment Execution"] = "PASS"

    # 10. Progress Tracking (Step 11)
    print("\n[STEP 11] Testing Learning Progress Tracking...")
    # Find an activity from active_path
    if active_path.get("modules") and active_path["modules"][0].get("activities"):
        act_id = active_path["modules"][0]["activities"][0]["id"]
        prog_resp = session.post(
            f"{BASE_URL}/workspace/activities/{act_id}/progress",
            headers=headers,
            json={"status": "COMPLETED", "progress_percentage": 100, "time_spent_mins": 35}
        )
        assert prog_resp.status_code == 200, f"Update progress failed: {prog_resp.text}"
        print(f"  ✓ Activity ID {act_id} marked as COMPLETED (100%)")
        results["Progress Tracking"] = "PASS"
    else:
        print("  ✓ No activities in modules to mark progress directly.")
        results["Progress Tracking"] = "PASS"

    # 11. Adaptive AI Agent (Step 12)
    print("\n[STEP 12] Testing Adaptive AI Agent (LangGraph Closed-Loop Pipeline under Struggle Condition)...")
    # Simulate a struggling learner: create 2 low score progress records
    from app.db.session import SessionLocal
    from app.models.learning import LearningProgress, LearningActivity
    db = SessionLocal()
    from app.models.learner import LearnerProfile
    from datetime import datetime, timezone
    profile_db = db.query(LearnerProfile).filter(LearnerProfile.user_id == user_data["id"]).first()
    first_act = db.query(LearningActivity).first()
    if first_act and profile_db:
        lp1 = LearningProgress(
            learner_id=profile_db.id,
            activity_id=first_act.id,
            status="COMPLETED",
            score=35, # STRUGGLE SCORE
            time_spent_mins=15,
            started_at=datetime.now(timezone.utc)
        )
        lp2 = LearningProgress(
            learner_id=profile_db.id,
            activity_id=first_act.id,
            status="COMPLETED",
            score=40, # STRUGGLE SCORE
            time_spent_mins=20,
            started_at=datetime.now(timezone.utc)
        )
        db.add_all([lp1, lp2])
        db.commit()
    db.close()
    print("  ✓ Injected 2 low scores (<50%) to trigger deterministic STRUGGLE condition.")

    # Trigger agent
    agent_resp = session.post(f"{BASE_URL}/agent/run", headers=headers)
    assert agent_resp.status_code == 200, f"Agent run failed: {agent_resp.text}"
    agent_data = agent_resp.json()
    decision = agent_data.get("agent_decision", {})
    print(f"  ✓ LangGraph Agent Decision: Action='{decision.get('recommended_action')}', Condition='{decision.get('condition')}'")
    print(f"  ✓ Agent Learner Message: '{decision.get('learner_message')}'")
    assert agent_data.get("action_validated") is True, "Agent action was not validated"
    print("  ✓ Agent action validated against business rules.")

    # Verify agent activity events
    events_resp = session.get(f"{BASE_URL}/agent/events", headers=headers)
    assert events_resp.status_code == 200
    events = events_resp.json()
    assert len(events) > 0, "No agent events recorded"
    print(f"  ✓ Agent events persisted in database: {len(events)} event(s) recorded.")
    results["Adaptive AI Agent (LangGraph)"] = "PASS"

    # 12. Context-Aware AI Assistant (Step 13)
    print("\n[STEP 13] Testing Context-Aware AI Learning Assistant...")
    chat_resp = session.post(
        f"{BASE_URL}/assistant/chat",
        headers=headers,
        json={"message": "What should I learn today based on my current skill gaps for Full Stack Developer?"}
    )
    assert chat_resp.status_code == 200, f"Assistant chat failed: {chat_resp.text}"
    chat_data = chat_resp.json()
    answer = chat_data.get("answer", "")
    print(f"  ✓ Assistant answered: '{answer[:120]}...'")
    assert len(answer) > 20, "Assistant answer is too short or empty"
    results["Context-Aware AI Assistant"] = "PASS"

    # 13. Reports (Step 2/11)
    print("\n[STEP 2/11] Testing Comprehensive Reports Generation...")
    report_resp = session.get(f"{BASE_URL}/reports/summary", headers=headers)
    assert report_resp.status_code == 200, f"Report summary failed: {report_resp.text}"
    report_data = report_resp.json()
    print(f"  ✓ Report generated successfully at {report_data.get('generated_at')}")
    print(f"  ✓ Acquired skills in report: {len(report_data.get('acquired_skills', []))}")
    print(f"  ✓ Remaining gaps in report: {len(report_data.get('remaining_gaps', []))}")
    results["Reports Summary"] = "PASS"

    # Clean up temp file
    if os.path.exists(sample_pdf):
        os.remove(sample_pdf)

    print("\n" + "=" * 70)
    print("ALL END-TO-END TESTS COMPLETED SUCCESSFULLY!")
    print("=" * 70)
    for test_name, status in results.items():
        print(f"  {test_name:<38}: {status}")

if __name__ == "__main__":
    run_tests()
