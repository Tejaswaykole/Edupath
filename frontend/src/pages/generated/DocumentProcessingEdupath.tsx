import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { useUploadStore } from '../../store/uploadStore';

export default function DocumentProcessingEdupath() {
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();
  const { result, isUploading } = useUploadStore();

  // If upload result is already available, redirect quickly
  // Otherwise wait 2.5s (covers in-flight upload that navigated here before finishing)
  useEffect(() => {
    if (result && !isUploading) {
      const timer = setTimeout(() => {
        navigate('/aianalysisresultreview');
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        navigate('/aianalysisresultreview');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [navigate, result, isUploading]);

  // Show extracted skills if available, otherwise show animated placeholders
  const entitySkills = result?.skills?.slice(0, 8) ?? [];
  const fileName = result?.fileName || `${user?.name?.split(' ')[0] || 'Learner'}_Resume...`;

  return (
    <div className="min-h-screen bg-surface">
      {/* Generated from Stitch UI */}
      <main className="w-full pt-16 bg-background px-space-xl py-space-xl min-h-screen"><div className="flex flex-col w-full">
<div className="max-w-5xl mx-auto w-full flex flex-col gap-space-lg">
{/*  Breadcrumb & Top Bar  */}
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm text-secondary">
<a className="font-label-md text-label-md hover:text-primary transition-colors flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-[18px]">folder_open</span>
          Career Documents
        </a>
<span className="material-symbols-outlined text-[16px] text-outline-variant">chevron_right</span>
<span className="font-label-md text-label-md text-on-surface font-semibold truncate max-w-[220px]">{fileName}</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="inline-flex items-center gap-1.5 px-space-md py-1 rounded-full bg-secondary-container text-on-secondary-fixed text-label-sm font-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
          Live Ingestion Feed
        </span>
</div>
</div>
{/*  Main Processing Hero Card  */}
<div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden relative">
{/*  Decorative Accent Wave Ribbon Gradient  */}
<div className="h-2 w-full bg-gradient-to-r from-primary via-primary-container to-tertiary-fixed"></div>
<div className="p-space-xl flex flex-col gap-space-lg">
{/*  Header Strip  */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[28px] animate-pulse">psychology</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-sm">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-fixed/30 text-tertiary font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                  EduPath Agent • Active Analysis
                </span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">Analyzing Your Career Documents</h1>
<p className="font-body-md text-body-md text-secondary">EduPath Agent is parsing your resume and portfolio to calibrate your technical baseline.</p>
</div>
</div>
<div className="flex items-center gap-space-xs self-start md:self-auto bg-surface-container-low px-space-md py-space-sm rounded-xl">
<span className="material-symbols-outlined text-secondary text-[20px]">picture_as_pdf</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface truncate max-w-[190px]">{fileName}</span>
<span className="font-label-sm text-label-sm text-secondary font-normal">
  {result ? `${result.skills.length} skills detected` : 'Processing...'}
</span>
</div>
</div>
</div>

{/*  Safe Status Notification Banner  */}
<div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-low text-on-surface">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[20px]">info</span>
</div>
<div className="flex flex-col flex-1 min-w-0">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Calibrating Competency Baseline</span>
<span className="font-body-sm text-body-sm text-secondary truncate">
  {result
    ? `Extracted ${result.skills.length} skills, ${result.projects.length} projects, ${result.education.length} education entries.`
    : 'Extracting skills and benchmarking against industry criteria...'}
</span>
</div>
<div className="hidden sm:flex items-center gap-2">
<span className="font-label-sm text-label-sm text-secondary">Score</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold" id="calibrated-percentage">
  {result ? `${result.readinessScore}%` : '—'}
</span>
</div>
</div>

{/*  Multi-column Grid: Left (Sequential Stepper) / Right (Real-time Entity Extraction Drawer)  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
{/*  Stepper Column (7 cols)  */}
<div className="lg:col-span-7 flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold">Extraction Milestones</span>
<span className="font-label-sm text-label-sm text-tertiary font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">bolt</span> Real-time pipeline active
              </span>
</div>
{/*  Stepper List  */}
<div className="flex flex-col relative">
{/*  Stepper Vertical Spine  */}
<div className="absolute left-[19px] top-4 bottom-6 w-0.5 bg-surface-container z-0"></div>

{/*  Step 1: Upload & Text extraction  */}
<div className="relative z-10 flex items-start gap-space-md pb-space-lg group">
<div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed shadow-sm shrink-0">
<span className="material-symbols-outlined text-[20px]">check</span>
</div>
<div className="flex flex-col flex-1 min-w-0 pt-1">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Document uploaded &amp; text extracted</span>
<span className="font-label-sm text-label-sm text-tertiary bg-surface-container-low px-2 py-0.5 rounded-full">Completed ✓</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-1">High-fidelity optical recognition parsed your resume successfully.</p>
</div>
</div>

{/*  Step 2: Work Experience & Seniority  */}
<div className={`relative z-10 flex items-start gap-space-md pb-space-lg group`}>
<div className={`w-10 h-10 rounded-full ${result ? 'bg-tertiary-fixed text-on-tertiary-fixed' : 'bg-primary-container text-on-primary'} flex items-center justify-center shadow-sm shrink-0 ${result ? '' : 'ring-4 ring-primary-fixed/40'}`}>
{result ? (
  <span className="material-symbols-outlined text-[20px]">check</span>
) : (
  <span className="material-symbols-outlined text-[20px] animate-spin">sync</span>
)}
</div>
<div className="flex flex-col flex-1 min-w-0 pt-1">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Parsing work experience &amp; seniority</span>
<span className={`font-label-sm text-label-sm bg-surface-container-low px-2 py-0.5 rounded-full ${result ? 'text-tertiary' : 'text-primary font-semibold'}`}>
  {result ? 'Completed ✓' : 'In Progress'}
</span>
</div>
{result && result.experience.length > 0 && (
  <p className="font-body-sm text-body-sm text-secondary mt-1">
    Identified {result.experience.length} experience entr{result.experience.length === 1 ? 'y' : 'ies'}: {result.experience[0].role} at {result.experience[0].company}.
  </p>
)}
</div>
</div>

{/*  Step 3: Core Technical Skills  */}
<div className={`relative z-10 flex items-start gap-space-md pb-space-lg group ${result ? '' : 'opacity-70'}`}>
<div className={`w-10 h-10 rounded-full ${result ? 'bg-tertiary-fixed text-on-tertiary-fixed' : 'bg-surface-container text-secondary'} flex items-center justify-center shrink-0`}>
{result ? (
  <span className="material-symbols-outlined text-[20px]">check</span>
) : (
  <span className="material-symbols-outlined text-[18px]">radio_button_unchecked</span>
)}
</div>
<div className="flex flex-col flex-1 min-w-0 pt-1">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Identifying core technical skills &amp; frameworks</span>
{result ? (
  <p className="font-body-sm text-body-sm text-secondary mt-1">
    Found <span className="text-on-surface font-medium">{result.skills.length} technical skills</span> across {[...new Set(result.skills.map(s => s.category))].length} categories.
  </p>
) : (
  <p className="font-body-sm text-body-sm text-secondary mt-1">Cross-referencing libraries, databases, and architectural standards...</p>
)}
</div>
</div>

{/*  Step 4: Structured Profile Benchmark  */}
<div className={`relative z-10 flex items-start gap-space-md group ${result ? '' : 'opacity-40'}`}>
<div className="w-10 h-10 rounded-full bg-surface-container text-secondary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">radio_button_unchecked</span>
</div>
<div className="flex flex-col flex-1 min-w-0 pt-1">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Preparing structured profile benchmark</span>
<p className="font-body-sm text-body-sm text-secondary mt-1">Generating skill readiness scores and personalized curriculum sprints.</p>
</div>
</div>
</div>
</div>

{/*  Entity Extraction Live Preview (5 cols)  */}
<div className="lg:col-span-5 flex flex-col gap-space-md bg-surface-container-low p-space-lg rounded-2xl">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">filter_center_focus</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Discovered Competencies</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-bold bg-surface-container-lowest px-2 py-0.5 rounded-md shadow-xs">
  {result ? `${result.skills.length} Found` : 'Scanning...'}
</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Real-time tokens classified by confidence score and industry market weight.</p>
{/*  Detected Entity Tags  */}
<div className="flex flex-wrap gap-space-xs pt-space-xs" id="entity-stream">
{entitySkills.length > 0 ? (
  entitySkills.map((skill, i) => (
    <div key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-container-lowest shadow-xs text-on-surface font-label-md text-label-md transition-all hover:shadow-sm">
      <span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
      <span>{skill.name}</span>
      <span className="text-secondary font-label-sm text-label-sm">{skill.confidence}%</span>
    </div>
  ))
) : (
  // Animated placeholder while uploading
  ['Scanning resume...', 'Detecting skills...', 'Analyzing stack...'].map((label, i) => (
    <div key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary-fixed text-primary font-label-md text-label-md animate-pulse">
      <span className="material-symbols-outlined text-[14px] animate-spin">refresh</span>
      <span>{label}</span>
    </div>
  ))
)}
</div>

{result && (
  <div className="mt-space-md p-space-md rounded-xl bg-surface-container-lowest shadow-xs flex flex-col gap-space-xs">
    <div className="flex items-center justify-between">
      <span className="font-label-sm text-label-sm text-secondary font-semibold">Readiness Score</span>
      <span className="font-label-sm text-label-sm text-primary font-bold">{result.readinessScore}%</span>
    </div>
    <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden my-1">
      <div className="bg-gradient-to-r from-primary to-primary-container h-full rounded-full" style={{ width: `${result.readinessScore}%` }}></div>
    </div>
  </div>
)}
</div>
</div>

{/*  Footer Control Strip  */}
<div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-lg border-t border-transparent">
<div className="flex items-center gap-space-sm text-secondary font-body-sm text-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">timelapse</span>
<span>{result ? 'Processing complete — redirecting...' : 'Estimated completion in ~15 seconds'}</span>
</div>
<div className="flex items-center gap-space-md w-full sm:w-auto justify-end">
<button onClick={() => navigate('/aianalysisresultreview')} className="inline-flex items-center gap-space-xs px-space-lg py-2.5 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all shadow-sm" type="button">
<span>Continue to Review</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>

{/*  Supplementary Informative Cards  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-xs">
<div className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-1">
<span className="material-symbols-outlined text-[20px]">radar</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Instant Gap Calibration</h3>
<p className="font-body-sm text-body-sm text-secondary">Identified strengths map directly into your dynamic curriculum, skipping foundational lessons you have already mastered.</p>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-xs">
<div className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-1">
<span className="material-symbols-outlined text-[20px]">psychology_alt</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Tailored Agent Coaching</h3>
<p className="font-body-sm text-body-sm text-secondary">The EduPath Agent will craft custom sprint challenges tailored precisely to your next promotion or target hiring rubric.</p>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-xs">
<div className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-1">
<span className="material-symbols-outlined text-[20px]">sync_saved_locally</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Continuous Ingestion</h3>
<p className="font-body-sm text-body-sm text-secondary">Connect GitHub or sync your LinkedIn profile at any time to continuously benchmark your real-world progress automatically.</p>
</div>
</div>
</div>
</div>
</main>
    </div>
  );
}
