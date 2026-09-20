import requests

BASE_URL = "http://localhost:8000/api/v1"

# Nikhil's login
nikhil_res = requests.post(f"{BASE_URL}/auth/login", data={"username": "nikhil@example.com", "password": "password123"})
nikhil_token = nikhil_res.json()["access_token"]
nikhil_headers = {"Authorization": f"Bearer {nikhil_token}"}

# Rahul's login
rahul_res = requests.post(f"{BASE_URL}/auth/login", data={"username": "rahul.mentor@example.com", "password": "password123"})
rahul_token = rahul_res.json()["access_token"]
rahul_headers = {"Authorization": f"Bearer {rahul_token}"}

# Check Nikhil's skill gaps
nikhil_gaps = requests.get(f"{BASE_URL}/skill-gaps", headers=nikhil_headers).json()
print(f"Nikhil Skill Gaps: {len(nikhil_gaps)}")

# Check Rahul's skill gaps (should be empty, he's a mentor, or at least different)
rahul_gaps = requests.get(f"{BASE_URL}/skill-gaps", headers=rahul_headers).json()
print(f"Rahul Skill Gaps: {len(rahul_gaps) if isinstance(rahul_gaps, list) else rahul_gaps}")

# Check Nikhil's learning path
nikhil_paths = requests.get(f"{BASE_URL}/learning-paths/current", headers=nikhil_headers).json()
print(f"Nikhil Learning Path: {nikhil_paths.get('title', 'None')}")

# Check Rahul's learning path
rahul_paths = requests.get(f"{BASE_URL}/learning-paths/current", headers=rahul_headers).json()
print(f"Rahul Learning Path: {rahul_paths.get('title', 'None') if isinstance(rahul_paths, dict) else rahul_paths}")

print("Isolation Test Complete")
