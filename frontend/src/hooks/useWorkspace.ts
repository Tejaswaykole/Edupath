import { useMutation, useQueryClient } from '@tanstack/react-query';
import * as api from '../api/workspace';

export const useActivityProgress = (activityId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { status: string; progress_percentage: number; time_spent_mins: number }) => 
      api.updateActivityProgress(activityId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['learningPath'] });
    }
  });
};

export const useSubmitPractice = (taskId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (submission: string) => api.submitPractice(taskId, submission),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['learningPath'] });
      queryClient.invalidateQueries({ queryKey: ['agentActivity'] });
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
    }
  });
};

export const useStartAssessment = (assessmentId: number) => {
  return useMutation({
    mutationFn: () => api.startAssessment(assessmentId)
  });
};

export const useSubmitAssessment = (attemptId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (answers: { question_id: number, provided_answer: string }[]) => 
      api.submitAssessment(attemptId, answers),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['learningPath'] });
      queryClient.invalidateQueries({ queryKey: ['agentActivity'] });
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
    }
  });
};
