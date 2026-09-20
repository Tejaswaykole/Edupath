import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { assistantApi, AssistantMessageCreate } from '../api/assistant';

export const useAssistant = (conversationId?: number) => {
  const queryClient = useQueryClient();

  const { data: conversations, isLoading: isLoadingConversations } = useQuery({
    queryKey: ['assistant', 'conversations'],
    queryFn: assistantApi.getConversations,
  });

  const { data: messages, isLoading: isLoadingMessages } = useQuery({
    queryKey: ['assistant', 'messages', conversationId],
    queryFn: () => assistantApi.getMessages(conversationId!),
    enabled: !!conversationId,
  });

  const sendMessageMutation = useMutation({
    mutationFn: (message: AssistantMessageCreate) => assistantApi.sendMessage(message, conversationId),
    onSuccess: () => {
      if (conversationId) {
        queryClient.invalidateQueries({ queryKey: ['assistant', 'messages', conversationId] });
      } else {
        queryClient.invalidateQueries({ queryKey: ['assistant', 'conversations'] });
      }
    },
  });

  return {
    conversations,
    isLoadingConversations,
    messages,
    isLoadingMessages,
    sendMessage: sendMessageMutation.mutate,
    isSending: sendMessageMutation.isPending,
  };
};
