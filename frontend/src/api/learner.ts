import api from './client';

export interface LearnerProfileUpdate {
  first_name?: string;
  last_name?: string;
  target_role?: string;
  bio?: string;
}

export const learnerApi = {
  updateProfile: async (data: LearnerProfileUpdate) => {
    const response = await api.patch('/learner/profile', data);
    return response.data;
  }
};
