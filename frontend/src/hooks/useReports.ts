import { useQuery } from '@tanstack/react-query';
import { reportsApi } from '../api/reports';

export const useReports = () => {
  const { data: report, isLoading } = useQuery({
    queryKey: ['reports', 'latest'],
    queryFn: reportsApi.getLatestReport,
  });

  return {
    report,
    isLoading,
  };
};
