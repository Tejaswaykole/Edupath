from fastapi.testclient import TestClient
from sqlalchemy import text
from app.models.learner import LearnerProfile
from app.models.mentorship import MentorProfile

def test_mentorship_flow(client: TestClient, db_session):
    # Register Learner
    client.post("/api/v1/auth/register", json={"email": "l_test@test.com", "password": "pass", "role": "LEARNER"})
    l_login = client.post("/api/v1/auth/login", data={"username": "l_test@test.com", "password": "pass"})
    l_token = l_login.json()["access_token"]
    l_headers = {"Authorization": f"Bearer {l_token}"}
    
    # Register Mentor
    client.post("/api/v1/auth/register", json={"email": "m_test@test.com", "password": "pass", "role": "MENTOR"})
    m_login = client.post("/api/v1/auth/login", data={"username": "m_test@test.com", "password": "pass"})
    m_token = m_login.json()["access_token"]
    m_headers = {"Authorization": f"Bearer {m_token}"}

    l_id = db_session.execute(text("SELECT id FROM users WHERE email = 'l_test@test.com'")).scalar()
    m_id = db_session.execute(text("SELECT id FROM users WHERE email = 'm_test@test.com'")).scalar()
    
    l_prof = db_session.execute(text("SELECT id FROM learner_profiles WHERE user_id = :uid"), {"uid": l_id}).scalar()
    if not l_prof:
        lp = LearnerProfile(user_id=l_id, first_name="Learner", last_name="Test")
        db_session.add(lp)
    
    m_prof = db_session.execute(text("SELECT id FROM mentor_profiles WHERE user_id = :uid"), {"uid": m_id}).scalar()
    if not m_prof:
        mp = MentorProfile(user_id=m_id, professional_title="Senior Dev")
        db_session.add(mp)
        
    db_session.commit()
    
    m_prof_id = db_session.execute(text("SELECT id FROM mentor_profiles WHERE user_id = :uid"), {"uid": m_id}).scalar()

    # Learner views mentors
    res = client.get("/api/v1/mentorship/mentors", headers=l_headers)
    assert res.status_code == 200
    mentors = res.json()
    assert len(mentors) >= 1

    # Learner requests mentorship
    req_res = client.post("/api/v1/mentorship/requests", json={"mentor_id": m_prof_id, "message": "Help me"}, headers=l_headers)
    assert req_res.status_code == 200
    req_id = req_res.json()["id"]

    # Mentor accepts request
    acc_res = client.patch(f"/api/v1/mentorship/requests/{req_id}", json={"status": "ACCEPTED"}, headers=m_headers)
    assert acc_res.status_code == 200

    # Learner views active mentorship
    act_res = client.get("/api/v1/mentorship/active", headers=l_headers)
    assert act_res.status_code == 200
    active = act_res.json()
    assert len(active) == 1
    mentorship_id = active[0]["id"]

    # Mentor provides guidance
    gui_res = client.post(f"/api/v1/mentorship/active/{mentorship_id}/guidance", json={"message": "Read this book", "title": "Tip"}, headers=m_headers)
    assert gui_res.status_code == 200
    assert gui_res.json()["message"] == "Read this book"
