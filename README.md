<p align="center">
  <img src="./frontend/public/logo.png" alt="EduPath Logo" width="160" />
</p>

<h1 align="center">EduPath — Adaptive Learning & Skill Gap Agent</h1>

<p align="center">
  <strong>Learn &bull; Grow &bull; Go Further</strong>
</p>

<p align="center">
  An autonomous, AI-powered personalized learning platform that diagnoses skill gaps from resumes and assessments, synthesizes custom curriculum roadmaps, and dynamically adapts learning trajectories in real-time using LangGraph agents.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/FastAPI-0.111.0-009688?style=flat-square&logo=fastapi&logoColor=white" alt="FastAPI" />
  <img src="https://img.shields.io/badge/Python-3.11+-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python" />
  <img src="https://img.shields.io/badge/LangGraph-Autonomous_Agents-FF6F00?style=flat-square" alt="LangGraph" />
  <img src="https://img.shields.io/badge/Groq_Cloud-Llama_3.3_70B-F55036?style=flat-square" alt="Groq" />
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-8.3-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/PostgreSQL-Supabase-3ECF8E?style=flat-square&logo=postgresql&logoColor=white" alt="PostgreSQL" />
</p>

---

## 🌟 Overview

Traditional online education provides static, one-size-fits-all roadmaps that fail to adapt when a learner struggles or advances quickly. **EduPath** resolves this by operating as an autonomous closed-loop learning copilot:

1. **Diagnoses**: Parses resumes and skill profiles to pinpoint exact competencies and skill gaps against target engineering roles.
2. **Generates**: Synthesizes a structured, milestone-driven curriculum tailored to the learner's schedule and velocity.
3. **Monitors & Adapts**: Evaluates learner telemetry (practice milestone submissions, quiz attempts, velocity, and inactivity) using a **LangGraph state machine** to autonomously calibrate difficulty, inject missing prerequisites, or ease workload to protect against cognitive burnout.
4. **Verifies**: Employs a deterministic, multi-source evidence algorithm backed by Groq AI rationale to verify acquired competencies across resume history, projects, practice labs, and assessment performance.

---

## ✨ Key Features

### 📄 1. Multi-Source Diagnostic & Resume Parsing
- Extracts technical skills, proficiencies, and career history from uploaded PDF resumes.
- Maps extracted skills against standard role profiles (e.g., Full Stack Engineer, Cloud Architect, Machine Learning Engineer).
- Computes baseline learner readiness scores and highlights immediate priority gaps.

### 🔍 2. Deterministic Multi-Source Skill Verification
- Quantifies skill mastery through an empirical multi-factor evidence rubric:
  - **Resume History (25 pts)**: Experience and historical role usage.
  - **Project Artifacts (20 pts)**: Applied project complexity and repository evidence.
  - **Interactive Practice (25 pts)**: Successful coding workspace submissions.
  - **Knowledge Checks (20 pts)**: Diagnostic assessment and quiz scores.
  - **Curriculum Progress (10 pts)**: Milestone completion rates.
- Synthesizes an AI rationale explaining the verification score, highlighting strengths and identifying next growth vectors.

### 🗺️ 3. Personalized Curriculum Generation
- Leverages Groq Cloud (`llama-3.3-70b-versatile`) to generate custom, milestone-driven learning paths.
- Structures paths into sequential modules with specific practice activities, recommended durations, and resource references.

### 🤖 4. Autonomous Adaptive Engine (LangGraph)
An event-driven agent loop implementing an `assess -> decide -> act` state graph:
- **Learning-Drop Detection (`LEARNING_DROP`)**: Identifies periods of inactivity ($\ge 3$ days), issues motivational notifications, and activates cognitive velocity guards.
- **Bidirectional Difficulty Scaling (`INCREASE_DIFFICULTY` / `DECREASE_DIFFICULTY`)**: Adjusts subsequent activity complexity up or down based on empirical assessment scores ($>85\%$ or $<50\%$).
- **Prerequisite Interception (`ADD_PREREQUISITE`)**: Inserts necessary foundational topics when knowledge deficiencies are detected, automatically shifting subsequent module schedules.
- **Workload Protection (`REDUCE_WORKLOAD`)**: Dynamically caps daily study to 15 minutes with a 10-minute warmup when signs of cognitive fatigue appear.

### 💻 5. Interactive Practice & Assessment Workspaces
- Integrated code submission workspace for hands-on exercises.
- Diagnostic quizzes and knowledge checks with automated evaluation and telemetry synchronization.

### 🤝 6. Contextual Mentor Discovery & Matching
- Matches learners with verified industry practitioners based on specific diagnostic friction points (e.g., JWT authentication, cache invalidation, distributed databases).
- Shares anonymized telemetry summaries with mentors to eliminate cold-start introductions.

---

## 🏗️ System Architecture

```
                                 ┌─────────────────────────────────┐
                                 │     EduPath Client (React)      │
                                 │  Vite + TypeScript + Tailwind   │
                                 └───────────────┬─────────────────┘
                                                 │ HTTPS / JSON
                                                 ▼
                                 ┌─────────────────────────────────┐
                                 │      FastAPI Backend API        │
                                 │      Uvicorn ASGI Server        │
                                 └───────────────┬─────────────────┘
                                                 │
                   ┌─────────────────────────────┼─────────────────────────────┐
                   ▼                             ▼                             ▼
       ┌───────────────────────┐   ┌───────────────────────────┐   ┌───────────────────────┐
       │   SQLAlchemy 2.0 ORM  │   │     LangGraph Engine      │   │    Groq Cloud LLM     │
       │  PostgreSQL (Supabase)│   │ (Assess ➔ Decide ➔ Act)   │   │(llama-3.3-70b-v...)   │
       │        SQLite         │   │  Autonomous Interventions │   │ Roadmaps & Extraction │
       └───────────────────────┘   └───────────────────────────┘   └───────────────────────┘
```

---

## 📁 Repository Structure

```
Edupath/
├── backend/
│   ├── app/
│   │   ├── agents/            # LangGraph adaptive workflow nodes and state models
│   │   ├── api/               # REST API endpoints (auth, documents, learning, agent, etc.)
│   │   ├── core/              # Security, database connection, and configuration
│   │   ├── models/            # SQLAlchemy database models
│   │   ├── schemas/           # Pydantic validation schemas
│   │   └── services/          # Groq LLM service, PDF parser, context service
│   ├── tests/                 # Integration and unit test suite
│   ├── requirements.txt       # Python dependencies
│   └── run_agent.py           # Standalone agent runner
├── frontend/
│   ├── public/                # Static assets, logo, and favicon
│   ├── src/
│   │   ├── api/               # Axios API client and backend queries
│   │   ├── components/        # Reusable UI components
│   │   ├── hooks/             # Custom React Query hooks
│   │   ├── pages/             # Application views & generated Stitch screens
│   │   └── store/             # Zustand state management (auth, upload, agent)
│   ├── package.json           # Frontend dependencies and scripts
│   └── vite.config.ts         # Vite build configuration
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- **Python**: 3.10 or higher
- **Node.js**: 18.0.0 or higher
- **Package Manager**: `npm` or `yarn`
- **Groq API Key**: Obtain a free API key from [Groq Cloud Console](https://console.groq.com/)

---

### Backend Setup

1. **Navigate to the backend directory**:
   ```bash
   cd backend
   ```

2. **Create and activate a virtual environment**:
   - **Windows (PowerShell)**:
     ```powershell
     python -m venv venv
     .\venv\Scripts\Activate.ps1
     ```
   - **macOS / Linux**:
     ```bash
     python3 -m venv venv
     source venv/bin/activate
     ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure Environment Variables**:
   Create a `.env` file in the `backend/` directory:
   ```env
   DATABASE_URL=sqlite:///./edupath.db
   # Or for PostgreSQL:
   # DATABASE_URL=postgresql://user:password@host:5432/dbname

   JWT_SECRET_KEY=your_secure_secret_key_here
   JWT_ALGORITHM=HS256
   ACCESS_TOKEN_EXPIRE_MINUTES=1440

   CORS_ALLOWED_ORIGINS=http://localhost:5173
   ENVIRONMENT=development

   GROQ_API_KEY=gsk_your_groq_api_key_here
   ```

5. **Start the Backend Server**:
   ```bash
   uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
   ```
   The backend API will be live at `http://localhost:8000`. Interactive Swagger API docs are available at `http://localhost:8000/docs`.

---

### Frontend Setup

1. **Navigate to the frontend directory**:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:5173`.

---

## 🧪 Testing & Verification

### Running Backend Unit & Integration Tests
```bash
cd backend
pytest tests/ -v
```

### Validating Frontend Build
```bash
cd frontend
npm run build
```

---

## 📡 Key API Routes

| Endpoint | Method | Description |
|---|---|---|
| `/api/v1/auth/register` | `POST` | Register a new learner or mentor account |
| `/api/v1/auth/login` | `POST` | Authenticate and obtain JWT bearer token |
| `/api/v1/documents/upload` | `POST` | Upload and parse learner resume PDF |
| `/api/v1/skill-gaps/analyze` | `POST` | Trigger skill gap extraction & readiness diagnostic |
| `/api/v1/skill-gaps/verify/{skill_id}` | `POST` | Run multi-source deterministic skill verification |
| `/api/v1/learning-paths/generate` | `POST` | Generate AI personalized milestone roadmap |
| `/api/v1/learning-paths/current` | `GET` | Retrieve active learning roadmap & modules |
| `/api/v1/agent/run` | `POST` | Execute LangGraph adaptive agent cycle |
| `/api/v1/practice/submit` | `POST` | Submit interactive practice milestone code |
| `/api/v1/assessment/submit` | `POST` | Submit knowledge check assessment responses |

---

## 🔒 Security & Privacy
- **Stateless Authentication**: Signed JWT tokens with configurable expiration.
- **Data Protection**: Document text extraction is processed in memory; no sensitive PII is shared externally.
- **Enterprise Mentor NDA Policy**: Anonymized diagnostic tokens prevent employer or proprietary repository exposure during 1:1 mentorship sessions.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
