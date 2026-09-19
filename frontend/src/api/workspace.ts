import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const updateActivityProgress = async (activityId: number, data: { status: string; progress_percentage: number; time_spent_mins: number }) => {
  const response = await api.post(`/workspace/activities/${activityId}/progress`, data);
  return response.data;
};

export const submitPractice = async (taskId: number, submission_reference: string) => {
  const response = await api.post(`/workspace/practice/${taskId}/submit`, { submission_reference });
  return response.data;
};

export const startAssessment = async (assessmentId: number) => {
  const response = await api.post(`/workspace/assessments/${assessmentId}/start`);
  return response.data;
};

export const submitAssessment = async (attemptId: number, answers: { question_id: number, provided_answer: string }[]) => {
  const response = await api.post(`/workspace/assessments/attempts/${attemptId}/submit`, { answers });
  return response.data;
};
