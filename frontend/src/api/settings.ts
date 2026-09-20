import api from './client';

export interface UserSettings {
  id?: number;
  learning_pace: string;
  preferred_study_schedule: string;
  preferred_difficulty: string;
  notification_email: boolean;
  notification_push: boolean;
  is_private: boolean;
}

export const settingsApi = {
  getSettings: async () => {
    const response = await api.get('/settings/');
    return response.data;
  },
  updateSettings: async (data: Partial<UserSettings>) => {
    const response = await api.patch('/settings/', data);
    return response.data;
  }
};