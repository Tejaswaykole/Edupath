from fastapi.testclient import TestClient
from sqlalchemy import text
from app.models.learner import LearnerProfile

def test_assistant_chat(client: TestClient, db_session):
    client.post("/api/v1/auth/register", json={"email": "asst_test@test.com", "password": "pass", "role": "LEARNER"})
    login_resp = client.post("/api/v1/auth/login", data={"username": "asst_test@test.com", "password": "pass"})
    token = login_resp.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}
    
    user_id = db_session.execute(text("SELECT id FROM users WHERE email = 'asst_test@test.com'")).scalar()
    
    existing = db_session.execute(text("SELECT id FROM learner_profiles WHERE user_id = :uid"), {"uid": user_id}).scalar()
    if not existing:
        profile = LearnerProfile(user_id=user_id, first_name="Assistant", last_name="Test")
        db_session.add(profile)
        db_session.commit()

    # Create chat
    chat_resp = client.post("/api/v1/assistant/chat", json={"content": "What should I study?"}, headers=headers)
    assert chat_resp.status_code == 200
    chat_data = chat_resp.json()
    assert len(chat_data.get("content", "")) > 5
    assert "response_metadata" in chat_data
    assert "conversation_id" in chat_data
    
    conv_id = chat_data["conversation_id"]

    # Get conversations
    list_resp = client.get("/api/v1/assistant/conversations", headers=headers)
    assert list_resp.status_code == 200
    list_data = list_resp.json()
    assert len(list_data) >= 1
    assert list_data[0]["id"] == conv_id

    # Get messages
    msg_resp = client.get(f"/api/v1/assistant/conversations/{conv_id}/messages", headers=headers)
    assert msg_resp.status_code == 200
    msg_data = msg_resp.json()
    assert len(msg_data) == 2 # USER and ASSISTANT
    assert msg_data[0]["sender_type"] == "USER"
    assert msg_data[1]["sender_type"] == "ASSISTANT"
