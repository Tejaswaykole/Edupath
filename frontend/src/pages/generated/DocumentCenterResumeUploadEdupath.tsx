import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import api from '../../api/client';
import { useUploadStore } from '../../store/uploadStore';

interface MyDocument {
  id: number;
  file_name: string;
  file_type: string;
  file_size_bytes: number;
  upload_status: string;
  processing_status: string;
  created_at: string;
  skills_count: number;
}

export default function DocumentCenterResumeUploadEdupath() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isUploading, error, setUploading, setResult, setError } = useUploadStore();

  // Fetch real documents from backend
  const { data: documents = [], isLoading: isLoadingDocs } = useQuery<MyDocument[]>({
    queryKey: ['documents'],
    queryFn: async () => {
      const res = await api.get('/documents/my-documents');
      return res.data;
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
      setError(null);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedFile) return;
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const res = await api.post('/documents/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      const data = res.data;
      setResult({
        documentId: data.document_id,
        fileName: data.file_name,
        skills: data.extracted_skills || [],
        experience: data.extracted_experience || [],
        education: data.extracted_education || [],
        projects: data.extracted_projects || [],
        readinessScore: data.readiness_score ?? 75,
        summary: data.summary || '',
      });

      // Invalidate all dependent data so UI refreshes
      queryClient.invalidateQueries({ queryKey: ['documents'] });
      queryClient.invalidateQueries({ queryKey: ['profile'] });
      queryClient.invalidateQueries({ queryKey: ['skillGaps'] });
      queryClient.invalidateQueries({ queryKey: ['learningPath'] });
      queryClient.invalidateQueries({ queryKey: ['reports', 'latest'] });

      navigate('/documentprocessing');
    } catch (err: any) {
      const msg = err?.response?.data?.detail || 'Upload failed. Please try again.';
      setError(msg);
    }
  };

  // Latest document for sidebar preview
  const latestDoc = documents.length > 0 ? documents[0] : null;

  return (
    <div className="min-h-screen bg-surface">
      {/* Generated from Stitch UI */}
      <main className="w-full pt-16 bg-background px-space-xl py-space-xl min-h-screen"><div className="flex flex-col w-full gap-space-lg">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex flex-col">
<nav className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm mb-space-xs">
<a className="hover:text-primary transition-colors" href="#">Dashboard</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<a className="hover:text-primary transition-colors" href="#">Profile</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-on-surface font-semibold">Document Center</span>
</nav>
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">Profile Analysis &amp; Documents</h1>
<p className="font-body-md text-body-md text-secondary mt-0.5">Upload your existing career documents and let EduPath identify your skills, experience, and project depth.</p>
</div>
<div className="flex items-center gap-space-sm self-start md:self-auto">
<div className="flex items-center gap-space-xs bg-surface-container-low px-space-md py-space-sm rounded-xl">
<span className="material-symbols-outlined text-tertiary-container text-[18px]">verified_user</span>
<span className="font-label-sm text-label-sm text-on-surface">End-to-End Encrypted</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
<div className="lg:col-span-8 flex flex-col gap-space-lg">
<div className="bg-surface-container-lowest rounded-xl p-space-xl shadow-sm flex flex-col gap-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
<div>
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[22px]">upload_file</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Upload your resume</h2>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-1">EduPath will analyze your resume to understand your existing skills, experience, projects, and education.</p>
</div>
<span className="inline-flex items-center self-start sm:self-auto font-label-sm text-label-sm px-space-sm py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed-variant">AI Pipeline v3.2</span>
</div>

{/* Error Banner */}
{error && (
  <div className="flex items-center gap-space-sm p-space-md rounded-xl bg-error-container text-on-error">
    <span className="material-symbols-outlined text-[20px]">error</span>
    <span className="font-body-sm text-body-sm">{error}</span>
  </div>
)}

<div className="relative group cursor-pointer rounded-xl bg-surface-container-low/60 hover:bg-surface-container-low transition-all duration-200 p-space-xl text-center flex flex-col items-center justify-center min-h-[170px]" id="drop-zone">
<input accept=".pdf,.docx" className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" id="resume-file-input" type="file" onChange={handleFileChange} />
<div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary mb-space-sm group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[26px]">cloud_upload</span>
</div>
<p className="font-label-md text-label-md text-on-surface">
  Drag &amp; drop your resume here or <span className="text-primary underline underline-offset-2">Browse Files</span>
</p>
<p className="font-body-sm text-body-sm text-secondary mt-1">Supported formats: PDF, DOCX (Max 15MB)</p>
</div>

{selectedFile && (
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md min-w-0">
<div className="w-11 h-11 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[24px]">description</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs truncate">
<span className="font-label-md text-label-md text-on-surface truncate">{selectedFile.name}</span>
<span className="font-label-sm text-label-sm text-secondary shrink-0">• {(selectedFile.size / 1024 / 1024).toFixed(1)} MB</span>
</div>
<div className="flex items-center gap-space-xs mt-1">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
<span className="font-label-sm text-label-sm text-tertiary font-semibold">Ready for analysis</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-xs shrink-0 self-end sm:self-auto">
<button
  onClick={handleAnalyze}
  disabled={isUploading}
  className="flex items-center gap-space-xs px-space-md py-space-sm rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md shadow-sm transition-all hover:translate-y-[-1px] disabled:opacity-60 disabled:cursor-not-allowed"
  type="button"
>
  {isUploading ? (
    <>
      <span className="material-symbols-outlined text-[16px] animate-spin">progress_activity</span>
      <span>Uploading & Analyzing...</span>
    </>
  ) : (
    <>
      <span>Analyze Resume</span>
      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
    </>
  )}
</button>
<button onClick={() => document.getElementById('resume-file-input')?.click()} className="p-space-sm rounded-xl text-secondary hover:bg-surface-container-low hover:text-on-surface transition-colors" title="Replace file" type="button">
<span className="material-symbols-outlined text-[20px]">sync</span>
</button>
<button onClick={() => setSelectedFile(null)} className="p-space-sm rounded-xl text-secondary hover:bg-surface-container-low hover:text-error transition-colors" title="Remove file" type="button">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</div>
)}

</div>

{/* Document Center Roster — real data from backend */}
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Document Center Roster</h3>
<span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded-full bg-surface-container text-secondary font-semibold">
  {documents.length} {documents.length === 1 ? 'Document' : 'Documents'}
</span>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
{isLoadingDocs ? (
  <div className="col-span-2 flex justify-center p-8">
    <span className="material-symbols-outlined animate-spin text-[32px] text-primary">progress_activity</span>
  </div>
) : documents.length === 0 ? (
  <div className="col-span-2 bg-surface-container-low/70 rounded-xl p-space-md flex flex-col justify-center items-center text-center min-h-[140px]">
    <span className="material-symbols-outlined text-[32px] text-secondary mb-2">upload_file</span>
    <p className="font-label-md text-label-md text-on-surface font-semibold">No documents uploaded yet</p>
    <p className="font-body-sm text-body-sm text-secondary mt-0.5">Upload your resume above to get started.</p>
  </div>
) : (
  documents.map((doc) => (
    <div key={doc.id} className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow min-h-[160px]">
      <div>
        <div className="flex items-start justify-between gap-space-xs mb-space-sm">
          <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[22px]">badge</span>
          </div>
          <span className={`font-label-sm text-label-sm px-space-xs py-0.5 rounded-full ${doc.processing_status === 'COMPLETED' ? 'bg-secondary-container text-on-secondary-fixed-variant' : 'bg-surface-container text-secondary'}`}>
            {doc.processing_status === 'COMPLETED' ? 'Analyzed' : doc.processing_status}
          </span>
        </div>
        <h4 className="font-label-md text-label-md text-on-surface font-semibold truncate">{doc.file_name}</h4>
        <p className="font-body-sm text-body-sm text-secondary mt-0.5">
          {new Date(doc.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </p>
        {doc.skills_count > 0 && (
          <div className="flex items-center gap-1.5 mt-space-sm">
            <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
            <span className="font-label-sm text-label-sm text-tertiary">{doc.skills_count} skills extracted</span>
          </div>
        )}
      </div>
      <div className="flex items-center gap-space-xs mt-space-md pt-space-sm">
        <span className="font-label-sm text-label-sm text-secondary">
          {(doc.file_size_bytes / 1024 / 1024).toFixed(1)} MB
        </span>
      </div>
    </div>
  ))
)}

{/* Add Document card always shown */}
<div className="bg-surface-container-low/70 rounded-xl p-space-md flex flex-col justify-center items-center text-center hover:bg-surface-container-low transition-colors min-h-[160px] cursor-pointer group"
  onClick={() => document.getElementById('resume-file-input')?.click()}>
  <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-secondary group-hover:text-primary mb-space-xs transition-colors">
    <span className="material-symbols-outlined text-[22px]">add_circle</span>
  </div>
  <h4 className="font-label-md text-label-md text-on-surface font-semibold">Upload New Document</h4>
  <p className="font-body-sm text-body-sm text-secondary mt-0.5 max-w-[200px]">Add a new resume or career document.</p>
</div>
</div>
</div>
</div>

{/* Right sidebar */}
<div className="lg:col-span-4 flex flex-col gap-space-md">
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Extraction Preview</h3>
{latestDoc && (
  <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded-md bg-surface-container text-secondary">
    {latestDoc.skills_count} skills
  </span>
)}
</div>
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between text-on-surface font-label-sm text-label-sm">
<span>Overall Readiness Score</span>
<span className="text-primary font-bold">
  {latestDoc ? `${Math.min(50 + latestDoc.skills_count * 3, 100)}%` : '—'}
</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
<div
  className="bg-primary h-2 rounded-full"
  style={{ width: latestDoc ? `${Math.min(50 + latestDoc.skills_count * 3, 100)}%` : '0%' }}
></div>
</div>
</div>
{latestDoc ? (
  <div className="flex flex-col gap-space-xs pt-space-xs">
    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Latest Document</span>
    <p className="font-body-sm text-body-sm text-on-surface font-medium truncate">{latestDoc.file_name}</p>
    <p className="font-label-sm text-label-sm text-tertiary">{latestDoc.skills_count} skills detected</p>
  </div>
) : (
  <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
    <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md">
      <span className="material-symbols-outlined text-[18px]">psychology</span>
      <span>AI Resume Insight</span>
    </div>
    <p className="font-body-sm text-body-sm text-on-surface-variant">
      Upload your resume to see AI-extracted skills and readiness score here.
    </p>
  </div>
)}
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center gap-space-xs text-secondary">
<span className="material-symbols-outlined text-[20px] text-tertiary">lock</span>
<h4 className="font-label-md text-label-md text-on-surface font-semibold">AI Privacy &amp; Security Note</h4>
</div>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed">
  Your data is encrypted, processed privately, and only used to benchmark your technical trajectory. Resumes are sanitized of PII prior to model inference and stored on SOC2-compliant partitions.
</p>
<div className="pt-space-xs flex items-center justify-between text-secondary font-label-sm text-label-sm">
<span>AES-256 at rest</span>
<a className="text-primary hover:underline font-semibold" href="#">Data Policy →</a>
</div>
</div>
</div>
</div>
</div>
</main>
    </div>
  );
}
