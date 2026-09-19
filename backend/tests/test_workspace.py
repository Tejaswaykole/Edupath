from fastapi.testclient import TestClient
from app.models.learning import LearningActivity, LearningProgress
from app.models.assessment import PracticeTask, PracticeAttempt

def test_practice_submission(client: TestClient, db_session):
    # 1. Register and Login
    client.post("/api/v1/auth/register", json={"email": "learner_ws@test.com", "password": "pass", "role": "LEARNER"})
    login_resp = client.post("/api/v1/auth/login", data={"username": "learner_ws@test.com", "password": "pass"})
    token = login_resp.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}
    
    from sqlalchemy import text
    user_id = db_session.execute(text("SELECT id FROM users WHERE email = 'learner_ws@test.com'")).scalar()
    
    from app.models.learner import LearnerProfile
    profile_id = db_session.execute(text(f"SELECT id FROM learner_profiles WHERE user_id = {user_id}")).scalar()
    
    if not profile_id:
        profile = LearnerProfile(user_id=user_id, first_name="Test", last_name="User")
        db_session.add(profile)
        db_session.commit()

    # 2. Seed a PracticeTask
    # Wait, we need a skill first because practice task requires a skill_id
    from app.models.skill import Skill
    skill = Skill(name="Test Skill", description="Test Description")
    db_session.add(skill)
    db_session.commit()

    task = PracticeTask(
        skill_id=skill.id,
        title="Test Task",
        instructions="Do something",
        difficulty="BEGINNER"
    )
    db_session.add(task)
    db_session.commit()
    
    # 3. Submit Practice
    submit_req = {"submission_reference": "function test() {}"}
    resp = client.post(f"/api/v1/workspace/practice/{task.id}/submit", json=submit_req, headers=headers)
    
    assert resp.status_code == 200
    data = resp.json()
    assert data["task_id"] == task.id
    assert "score" in data
    assert "feedback" in data

def test_progress_update(client: TestClient, db_session):
    client.post("/api/v1/auth/register", json={"email": "learner_ws2@test.com", "password": "pass", "role": "LEARNER"})
    login_resp = client.post("/api/v1/auth/login", data={"username": "learner_ws2@test.com", "password": "pass"})
    token = login_resp.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}
    
    # Setup learning path and module to create activity
    from app.models.learning import LearningPath, LearningModule
    from sqlalchemy import text
    user_id = db_session.execute(text("SELECT id FROM users WHERE email = 'learner_ws2@test.com'")).scalar()
    profile_id = db_session.execute(text(f"SELECT id FROM learner_profiles WHERE user_id = {user_id}")).scalar()
    
    if not profile_id:
        from app.models.learner import LearnerProfile
        profile = LearnerProfile(user_id=user_id, first_name="Test", last_name="User")
        db_session.add(profile)
        db_session.commit()
        profile_id = profile.id
    
    path = LearningPath(learner_id=profile_id, title="Test Path")
    db_session.add(path)
    db_session.flush()
    
    mod = LearningModule(learning_path_id=path.id, title="Test Module")
    db_session.add(mod)
    db_session.flush()
    
    act = LearningActivity(module_id=mod.id, title="Test Activity", activity_type="VIDEO")
    db_session.add(act)
    db_session.commit()
    
    req = {
        "status": "COMPLETED",
        "progress_percentage": 100,
        "time_spent_mins": 10
    }
    
    resp = client.post(f"/api/v1/workspace/activities/{act.id}/progress", json=req, headers=headers)
    assert resp.status_code == 200
    
    progress = db_session.query(LearningProgress).filter_by(activity_id=act.id, learner_id=profile_id).first()
    assert progress.status == "COMPLETED"
    assert progress.progress_percentage == 100
    assert progress.time_spent_mins == 10
