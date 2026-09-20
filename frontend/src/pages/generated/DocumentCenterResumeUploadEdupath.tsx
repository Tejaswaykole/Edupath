import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DocumentCenterResumeUploadEdupath() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };
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
<button className="flex items-center gap-space-xs px-space-md py-space-sm rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors font-label-md text-label-md text-on-surface" type="button">
<span className="material-symbols-outlined text-[18px]">history</span>
<span>Audit Log</span>
</button>
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
<div className="relative group cursor-pointer rounded-xl bg-surface-container-low/60 hover:bg-surface-container-low transition-all duration-200 p-space-xl text-center flex flex-col items-center justify-center min-h-[170px]" id="drop-zone">
<input accept=".pdf,.docx" className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" id="resume-file-input" type="file" onChange={handleFileChange} />
<div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary mb-space-sm group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[26px]">cloud_upload</span>
</div>
<p className="font-label-md text-label-md text-on-surface">
            Drag &amp; drop your resume here or <span className="text-primary underline underline-offset-2">Browse Files</span>
</p>
<p className="font-body-sm text-body-sm text-secondary mt-1">Supported formats: PDF, DOCX (Max 10MB)</p>
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
<span className="font-label-sm text-label-sm text-tertiary font-semibold">Uploaded • Ready for analysis</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-xs shrink-0 self-end sm:self-auto">
<button onClick={() => navigate('/documentprocessing')} className="flex items-center gap-space-xs px-space-md py-space-sm rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md shadow-sm transition-all hover:translate-y-[-1px]"  type="button">
<span>Analyze Resume</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
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
<div className="hidden flex-col gap-space-xs p-space-md rounded-xl bg-surface-container-low transition-all" id="parsing-progress">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-primary font-semibold flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] animate-spin">progress_activity</span>
              Extracting technical competencies &amp; taxonomy...
            </span>
<span className="text-on-surface" id="parsing-percentage">64%</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
<div className="bg-primary h-2 rounded-full transition-all duration-300 w-[64%]" id="progress-bar-fill"></div>
</div>
</div>
</div>
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Document Center Roster</h3>
<span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded-full bg-surface-container text-secondary font-semibold">3 Active</span>
</div>
<a className="font-label-md text-label-md text-primary flex items-center gap-0.5 hover:underline" href="#">
<span>View taxonomy mapping</span>
<span className="material-symbols-outlined text-[16px]">open_in_new</span>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow min-h-[190px]">
<div>
<div className="flex items-start justify-between gap-space-xs mb-space-sm">
<div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">badge</span>
</div>
<span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed-variant">Primary Resume</span>
</div>
<h4 className="font-label-md text-label-md text-on-surface font-semibold truncate">Tejas_Patil_FullStack_Resume_2025.pdf</h4>
<p className="font-body-sm text-body-sm text-secondary mt-0.5">Uploaded Mar 10, 2025</p>
<div className="flex items-center gap-1.5 mt-space-sm">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
<span className="font-label-sm text-label-sm text-tertiary">Ready to Analyze</span>
</div>
</div>
<div className="flex items-center gap-space-xs mt-space-md pt-space-sm">
<button className="flex-1 py-1.5 px-space-sm rounded-xl bg-primary text-on-primary font-label-sm text-label-sm hover:bg-primary-container transition-colors text-center" type="button">Analyze Now</button>
<button className="px-space-sm py-1.5 rounded-xl bg-surface-container-low text-secondary hover:text-on-surface font-label-sm text-label-sm transition-colors" type="button">Replace</button>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow min-h-[190px]">
<div>
<div className="flex items-start justify-between gap-space-xs mb-space-sm">
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-on-surface">
<span className="material-symbols-outlined text-[22px]">code</span>
</div>
<span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded-full bg-surface-container text-secondary">VCS Feed</span>
</div>
<h4 className="font-label-md text-label-md text-on-surface font-semibold truncate">github.com/tejaspatil-dev</h4>
<p className="font-body-sm text-body-sm text-secondary mt-0.5">Linked Mar 8, 2025</p>
<div className="flex items-center gap-1.5 mt-space-sm">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span className="font-label-sm text-label-sm text-tertiary">Synced (14 repos detected)</span>
</div>
</div>
<div className="flex items-center gap-space-xs mt-space-md pt-space-sm">
<button className="flex-1 py-1.5 px-space-sm rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container font-label-sm text-label-sm transition-colors text-center" type="button">Re-sync</button>
<a className="px-space-sm py-1.5 rounded-xl bg-surface-container-low text-secondary hover:text-on-surface font-label-sm text-label-sm transition-colors" href="#">View</a>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow min-h-[190px]">
<div>
<div className="flex items-start justify-between gap-space-xs mb-space-sm">
<div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">workspace_premium</span>
</div>
<span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded-full bg-surface-container text-secondary">850 KB • PDF</span>
</div>
<h4 className="font-label-md text-label-md text-on-surface font-semibold truncate">AWS Certified Cloud Practitioner</h4>
<p className="font-body-sm text-body-sm text-secondary mt-0.5">Uploaded Mar 9, 2025</p>
<div className="flex items-center gap-1.5 mt-space-sm">
<span className="material-symbols-outlined text-tertiary-fixed-dim text-[16px]">check_circle</span>
<span className="font-label-sm text-label-sm text-tertiary">Verified Credential</span>
</div>
</div>
<div className="flex items-center gap-space-xs mt-space-md pt-space-sm">
<button className="flex-1 py-1.5 px-space-sm rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container font-label-sm text-label-sm transition-colors text-center" type="button">View</button>
<button className="px-space-sm py-1.5 rounded-xl bg-surface-container-low text-secondary hover:text-on-surface font-label-sm text-label-sm transition-colors" type="button">Replace</button>
</div>
</div>
<div className="bg-surface-container-low/70 rounded-xl p-space-md flex flex-col justify-center items-center text-center hover:bg-surface-container-low transition-colors min-h-[190px] cursor-pointer group">
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-secondary group-hover:text-primary mb-space-xs transition-colors">
<span className="material-symbols-outlined text-[22px]">add_circle</span>
</div>
<h4 className="font-label-md text-label-md text-on-surface font-semibold">Project Spec / Case Study</h4>
<p className="font-body-sm text-body-sm text-secondary mt-0.5 max-w-[200px]">No project docs uploaded yet. Add README or system architecture.</p>
<button className="mt-space-md font-label-sm text-label-sm text-primary flex items-center gap-1 font-semibold group-hover:translate-y-[-1px] transition-transform" type="button">
<span>+ Upload Case Study</span>
</button>
</div>
</div>
</div>
</div>
<div className="lg:col-span-4 flex flex-col gap-space-md">
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Extraction Preview</h3>
<span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded-md bg-surface-container text-secondary">Target: Full-Stack</span>
</div>
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between text-on-surface font-label-sm text-label-sm">
<span>Overall Readiness Score</span>
<span className="text-primary font-bold">78%</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
<div className="bg-primary h-2 rounded-full w-[78%]"></div>
</div>
</div>
<div className="flex flex-col gap-space-xs pt-space-xs">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Detected Capabilities</span>
<div className="flex flex-wrap gap-1.5 mt-1">
<span className="font-label-sm text-label-sm px-space-sm py-1 rounded-lg bg-surface-container-low text-on-surface">TypeScript • Advanced</span>
<span className="font-label-sm text-label-sm px-space-sm py-1 rounded-lg bg-surface-container-low text-on-surface">React 19 • Intermediate</span>
<span className="font-label-sm text-label-sm px-space-sm py-1 rounded-lg bg-surface-container-low text-on-surface">PostgreSQL • Intermediate</span>
<span className="font-label-sm text-label-sm px-space-sm py-1 rounded-lg bg-secondary-container text-on-secondary-fixed-variant">Docker / CI • In-progress</span>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs text-primary font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]">psychology</span>
<span>AI Resume Insight</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Your architecture section emphasizes backend services, but lack of explicit distributed caching details may trigger a gap assessment before sprint planning.
          </p>
</div>
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
<div className="rounded-xl overflow-hidden shadow-sm relative group">
<div className="bg-cover bg-center w-full h-36 flex flex-col justify-end p-space-md" data-alt="Minimalist modern coding environment with high-contrast ambient screen lighting showing code analysis nodes and neural connections in clean indigo and deep slate tones." >
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/40 to-transparent"></div>
<div className="relative z-10 text-on-primary flex flex-col">
<span className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-wider">EduPath Coach</span>
<span className="font-headline-sm text-headline-sm font-semibold">Need manual profile review?</span>
<p className="font-body-sm text-body-sm text-surface-variant mt-0.5">Book a 1:1 session with senior tech mentor.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
    </div>
  );
}
