import api from './client';

export interface MentorProfileResponse {
  id: number;
  user_id: number;
  professional_title?: string;
  years_experience: number;
  bio?: string;
  linkedin_url?: string;
  is_verified: boolean;
}

export interface MentorshipRequestCreate {
  mentor_id: number;
  message?: string;
}

export interface MentorshipRequestResponse {
  id: number;
  learner_id: number;
  mentor_id: number;
  message?: string;
  status: string;
}

export interface MentorshipRequestUpdate {
  status: string;
}

export interface ActiveMentorshipResponse {
  id: number;
  request_id: number;
  learner_id: number;
  mentor_id: number;
  status: string;
  goals?: string;
  mentor?: MentorProfileResponse;
  created_at: string;
  updated_at: string;
}

export interface MentorGuidanceCreate {
  title?: string;
  message: string;
  related_skill_id?: number;
}

export interface MentorGuidanceResponse {
  id: number;
  mentorship_id: number;
  title?: string;
  message: string;
  related_skill_id?: number;
  is_read: boolean;
}

export const mentorshipApi = {
  getMentors: async (): Promise<MentorProfileResponse[]> => {
    const response = await api.get('/mentorship/mentors');
    return response.data;
  },
  
  createRequest: async (request: MentorshipRequestCreate): Promise<MentorshipRequestResponse> => {
    const response = await api.post('/mentorship/requests', request);
    return response.data;
  },

  updateRequest: async (requestId: number, update: MentorshipRequestUpdate): Promise<MentorshipRequestResponse> => {
    const response = await api.patch(`/mentorship/requests/${requestId}`, update);
    return response.data;
  },

  getActiveMentorships: async (): Promise<ActiveMentorshipResponse[]> => {
    const response = await api.get('/mentorship/active');
    return response.data;
  },

  getGuidance: async (mentorshipId: number): Promise<MentorGuidanceResponse[]> => {
    const response = await api.get(`/mentorship/active/${mentorshipId}/guidance`);
    return response.data;
  },

  createGuidance: async (mentorshipId: number, guidance: MentorGuidanceCreate): Promise<MentorGuidanceResponse> => {
    const response = await api.post(`/mentorship/active/${mentorshipId}/guidance`, guidance);
    return response.data;
  }
};