import { useMutation, useQueryClient } from '@tanstack/react-query';
import { learnerApi } from '../api/learner';
import type { LearnerProfileUpdate } from '../api/learner';

export const useLearner = () => {
  const queryClient = useQueryClient();

  const updateProfileMutation = useMutation({
    mutationFn: (data: LearnerProfileUpdate) => learnerApi.updateProfile(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['learnerProfile'] });
    },
  });

  return {
    updateProfile: updateProfileMutation.mutateAsync,
    isUpdatingProfile: updateProfileMutation.isPending,
  };
};
