import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as api from '../api/learning';

export const useSkillGaps = () => {
  return useQuery({
    queryKey: ['skillGaps'],
    queryFn: api.getSkillGaps
  });
};

export const useAnalyzeSkillGaps = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.analyzeSkillGaps,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['skillGaps'] });
    }
  });
};

export const useLearningPath = () => {
  return useQuery({
    queryKey: ['learningPath'],
    queryFn: api.getCurrentLearningPath,
    retry: false // Don't retry if it's 404
  });
};

export const useGenerateLearningPath = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.generateLearningPath,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['learningPath'] });
    }
  });
};

export const useVerifySkill = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (skillId: number) => api.verifySkill(skillId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['skillGaps'] });
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    }
  });
};

