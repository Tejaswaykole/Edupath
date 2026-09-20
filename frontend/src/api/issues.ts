import api from './client';

export interface IssueReportCreate {
  category: string;
  title: string;
  description: string;
  reference?: string;
}

export const issuesApi = {
  createIssue: async (data: IssueReportCreate) => {
    const response = await api.post('/issues/', data);
    return response.data;
  }
};