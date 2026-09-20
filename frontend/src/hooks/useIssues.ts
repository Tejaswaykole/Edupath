import { useMutation } from '@tanstack/react-query';
import { issuesApi } from "../api/issues"; import type { IssueReportCreate } from '../api/issues';

export const useIssues = () => {
  const submitIssueMutation = useMutation({
    mutationFn: (data: IssueReportCreate) => issuesApi.createIssue(data),
  });

  return {
    submitIssue: submitIssueMutation.mutate,
    isSubmitting: submitIssueMutation.isPending,
    isSuccess: submitIssueMutation.isSuccess,
    isError: submitIssueMutation.isError,
  };
};
