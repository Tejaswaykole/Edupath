import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import * as api from '../api/agent';

export const useEvaluateLearner = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => api.evaluateLearner(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['agentActivity'] });
      queryClient.invalidateQueries({ queryKey: ['learningPath'] });
    }
  });
};

export const useAgentActivity = () => {
  return useQuery({
    queryKey: ['agentActivity'],
    queryFn: () => api.getAgentActivity(),
  });
};
