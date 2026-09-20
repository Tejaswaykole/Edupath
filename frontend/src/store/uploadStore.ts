import { create } from 'zustand';

export interface UploadedSkill {
  name: string;
  proficiency: string;
  confidence: number;
  category: string;
}

export interface UploadedExperience {
  role: string;
  company: string;
  years: number;
  description: string;
}

export interface UploadedEducation {
  degree: string;
  institution: string;
  year: string;
}

export interface UploadedProject {
  name: string;
  stack: string;
  description: string;
}

export interface UploadResult {
  documentId: number;
  fileName: string;
  skills: UploadedSkill[];
  experience: UploadedExperience[];
  education: UploadedEducation[];
  projects: UploadedProject[];
  readinessScore: number;
  summary: string;
}

interface UploadState {
  result: UploadResult | null;
  isUploading: boolean;
  error: string | null;
  setResult: (result: UploadResult) => void;
  setUploading: (uploading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

export const useUploadStore = create<UploadState>((set) => ({
  result: null,
  isUploading: false,
  error: null,
  setResult: (result) => set({ result, isUploading: false, error: null }),
  setUploading: (uploading) => set({ isUploading: uploading, error: null }),
  setError: (error) => set({ error, isUploading: false }),
  reset: () => set({ result: null, isUploading: false, error: null }),
}));
