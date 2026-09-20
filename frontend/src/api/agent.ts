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

export const evaluateLearner = async () => {
  const response = await api.post(`/agent/evaluate`);
  return response.data;
};

export const getAgentActivity = async () => {
  const response = await api.get(`/agent/activity`);
  return response.data;
};
