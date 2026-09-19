from fastapi.testclient import TestClient

def test_register_learner(client: TestClient):
    response = client.post(
        "/api/v1/auth/register",
        json={"email": "learner@example.com", "password": "password123", "role": "LEARNER"}
    )
    assert response.status_code == 201
    data = response.json()
    assert data["email"] == "learner@example.com"
    assert data["role"] == "LEARNER"
    assert "password" not in data

def test_register_duplicate(client: TestClient):
    client.post(
        "/api/v1/auth/register",
        json={"email": "duplicate@example.com", "password": "password123", "role": "LEARNER"}
    )
    response = client.post(
        "/api/v1/auth/register",
        json={"email": "duplicate@example.com", "password": "password123", "role": "LEARNER"}
    )
    assert response.status_code == 409

def test_login_success(client: TestClient):
    client.post(
        "/api/v1/auth/register",
        json={"email": "login@example.com", "password": "password123", "role": "LEARNER"}
    )
    response = client.post(
        "/api/v1/auth/login",
        data={"username": "login@example.com", "password": "password123"}
    )
    assert response.status_code == 200
    data = response.json()
    assert "access_token" in data
    assert data["token_type"] == "bearer"
    assert data["user"]["email"] == "login@example.com"

def test_login_invalid(client: TestClient):
    response = client.post(
        "/api/v1/auth/login",
        data={"username": "wrong@example.com", "password": "wrongpassword"}
    )
    assert response.status_code == 401

def test_get_me(client: TestClient):
    client.post(
        "/api/v1/auth/register",
        json={"email": "me@example.com", "password": "password123", "role": "LEARNER"}
    )
    login_resp = client.post(
        "/api/v1/auth/login",
        data={"username": "me@example.com", "password": "password123"}
    )
    token = login_resp.json()["access_token"]
    
    response = client.get(
        "/api/v1/auth/me",
        headers={"Authorization": f"Bearer {token}"}
    )
    assert response.status_code == 200
    assert response.json()["email"] == "me@example.com"

def test_get_own_profile_authorized(client: TestClient):
    client.post(
        "/api/v1/auth/register",
        json={"email": "profile@example.com", "password": "password123", "role": "LEARNER"}
    )
    login_resp = client.post(
        "/api/v1/auth/login",
        data={"username": "profile@example.com", "password": "password123"}
    )
    token = login_resp.json()["access_token"]
    
    response = client.get(
        "/api/v1/learner/profile",
        headers={"Authorization": f"Bearer {token}"}
    )
    assert response.status_code == 200
    assert response.json()["first_name"] == "New"
    assert response.json()["last_name"] == "Learner"

def test_mentor_cannot_access_learner_profile(client: TestClient):
    client.post(
        "/api/v1/auth/register",
        json={"email": "mentor@example.com", "password": "password123", "role": "MENTOR"}
    )
    login_resp = client.post(
        "/api/v1/auth/login",
        data={"username": "mentor@example.com", "password": "password123"}
    )
    token = login_resp.json()["access_token"]
    
    response = client.get(
        "/api/v1/learner/profile",
        headers={"Authorization": f"Bearer {token}"}
    )
    assert response.status_code == 403
