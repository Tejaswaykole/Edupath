import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { mentorshipApi, MentorshipRequestCreate, MentorshipRequestUpdate, MentorGuidanceCreate } from '../api/mentorship';

export const useMentorship = () => {
  const queryClient = useQueryClient();

  const { data: mentors, isLoading: isLoadingMentors } = useQuery({
    queryKey: ['mentorship', 'mentors'],
    queryFn: mentorshipApi.getMentors,
  });

  const { data: activeMentorships, isLoading: isLoadingActiveMentorships } = useQuery({
    queryKey: ['mentorship', 'active'],
    queryFn: mentorshipApi.getActiveMentorships,
  });

  const createRequestMutation = useMutation({
    mutationFn: (request: MentorshipRequestCreate) => mentorshipApi.createRequest(request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['mentorship', 'requests'] });
    },
  });

  const updateRequestMutation = useMutation({
    mutationFn: ({ id, update }: { id: number, update: MentorshipRequestUpdate }) => mentorshipApi.updateRequest(id, update),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['mentorship', 'requests'] });
      queryClient.invalidateQueries({ queryKey: ['mentorship', 'active'] });
    },
  });

  const createGuidanceMutation = useMutation({
    mutationFn: ({ id, guidance }: { id: number, guidance: MentorGuidanceCreate }) => mentorshipApi.createGuidance(id, guidance),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['mentorship', 'guidance', variables.id] });
    },
  });

  return {
    mentors,
    isLoadingMentors,
    activeMentorships,
    isLoadingActiveMentorships,
    createRequest: createRequestMutation.mutate,
    isCreatingRequest: createRequestMutation.isPending,
    updateRequest: updateRequestMutation.mutate,
    isUpdatingRequest: updateRequestMutation.isPending,
    createGuidance: createGuidanceMutation.mutate,
    isCreatingGuidance: createGuidanceMutation.isPending,
  };
};
