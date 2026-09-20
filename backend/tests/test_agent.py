from fastapi.testclient import TestClient
from sqlalchemy import text
from app.models.agent import AgentEvent
from app.models.learner import LearnerProfile

def test_agent_evaluate(client: TestClient, db_session):
    client.post("/api/v1/auth/register", json={"email": "agent_test@test.com", "password": "pass", "role": "LEARNER"})
    login_resp = client.post("/api/v1/auth/login", data={"username": "agent_test@test.com", "password": "pass"})
    token = login_resp.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}
    
    user_id = db_session.execute(text("SELECT id FROM users WHERE email = 'agent_test@test.com'")).scalar()
    
    existing = db_session.execute(text("SELECT id FROM learner_profiles WHERE user_id = :uid"), {"uid": user_id}).scalar()
    if not existing:
        profile = LearnerProfile(user_id=user_id, first_name="Agent", last_name="Test")
        db_session.add(profile)
        db_session.commit()

    # Trigger evaluation
    resp = client.post("/api/v1/agent/evaluate", headers=headers)
    assert resp.status_code == 200
    data = resp.json()
    assert "event_type" in data
    assert data["event_type"] in ["NO_ACTION_REQUIRED", "LEARNING_DROP"]
    
    # Get activity
    act_resp = client.get("/api/v1/agent/activity", headers=headers)
    assert act_resp.status_code == 200
    act_data = act_resp.json()
    assert len(act_data) >= 1
    assert act_data[0]["event_type"] in ["NO_ACTION_REQUIRED", "LEARNING_DROP"]
