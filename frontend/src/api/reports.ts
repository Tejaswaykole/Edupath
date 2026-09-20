import api from './client';

export interface SkillStat {
  name: string;
  level: string;
}

export interface GapStat {
  name: string;
  relevance_score: number;
}

export interface ProgressStat {
  total_modules: number;
  completed_modules: number;
  completion_percentage: number;
  average_assessment_score: number;
}

export interface ReportResponse {
  generated_at: string;
  acquired_skills: SkillStat[];
  in_progress_skills: SkillStat[];
  remaining_gaps: GapStat[];
  progress: ProgressStat;
  next_steps: string[];
}

export const reportsApi = {
  getLatestReport: async () => {
    const response = await api.get('/reports/latest');
    return response.data as ReportResponse;
  }
};
