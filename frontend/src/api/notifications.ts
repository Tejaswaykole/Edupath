import api from './client';

export interface Notification {
  id: number;
  notification_type: string;
  title: string;
  message: string;
  related_entity_ref?: string;
  is_read: boolean;
  created_at: string;
}

export const notificationsApi = {
  getNotifications: async () => {
    const response = await api.get('/notifications/');
    return response.data as Notification[];
  },
  getUnreadCount: async () => {
    const response = await api.get('/notifications/unread-count');
    return response.data;
  },
  markAsRead: async (id: number) => {
    const response = await api.patch(`/notifications/${id}/read`);
    return response.data;
  },
  markAllAsRead: async () => {
    const response = await api.post('/notifications/read-all');
    return response.data;
  }
};
