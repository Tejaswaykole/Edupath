import api from './client';

export interface AssistantMessageCreate {
  content: string;
}

export interface AssistantMessageResponse {
  id: number;
  conversation_id: number;
  sender_type: 'USER' | 'ASSISTANT';
  content: string;
  response_metadata?: any;
  created_at: string;
}

export interface AssistantConversationResponse {
  id: number;
  learner_id: number;
  title?: string;
  created_at: string;
  updated_at: string;
}

export const assistantApi = {
  getConversations: async (): Promise<AssistantConversationResponse[]> => {
    const response = await api.get('/assistant/conversations');
    return response.data;
  },

  getMessages: async (conversationId: number): Promise<AssistantMessageResponse[]> => {
    const response = await api.get(`/assistant/conversations/${conversationId}/messages`);
    return response.data;
  },

  sendMessage: async (message: AssistantMessageCreate, conversationId?: number): Promise<AssistantMessageResponse> => {
    const url = conversationId ? `/assistant/chat?conversation_id=${conversationId}` : '/assistant/chat';
    const response = await api.post(url, message);
    return response.data;
  }
};
