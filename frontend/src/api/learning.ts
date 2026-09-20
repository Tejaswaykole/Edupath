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

export const getSkillGaps = async () => {
  const response = await api.get('/skill-gaps');
  return response.data;
};

export const analyzeSkillGaps = async () => {
  const response = await api.post('/skill-gaps/analyze');
  return response.data;
};

export const getCurrentLearningPath = async () => {
  const response = await api.get('/learning-paths/current');
  return response.data;
};

export const generateLearningPath = async () => {
  const response = await api.post('/learning-paths/generate');
  return response.data;
};

export const verifySkill = async (skillId: number) => {
  const response = await api.post(`/skill-gaps/verify/${skillId}`);
  return response.data;
};

