import { useAuthStore } from '../../store/authStore';

export default function DocumentProcessingEdupath() {
  const user = useAuthStore((state) => state.user);
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
<span className="font-label-md text-label-md text-on-surface font-semibold">{user?.name?.replace(/\s+/g, '_') || 'Learner'}_Resume.pdf</span>
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
<span className="font-body-sm text-body-sm text-secondary">Job Archetype: <strong className="text-on-surface font-semibold">Full Stack Engineer</strong></span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">Analyzing Your Career Documents</h1>
<p className="font-body-md text-body-md text-secondary">EduPath Agent is parsing your resume and portfolio to calibrate your technical baseline.</p>
</div>
</div>
<div className="flex items-center gap-space-xs self-start md:self-auto bg-surface-container-low px-space-md py-space-sm rounded-xl">
<span className="material-symbols-outlined text-secondary text-[20px]">picture_as_pdf</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface truncate max-w-[190px]">{user?.name?.split(' ')[0] || 'Learner'}_Resume...</span>
<span className="font-label-sm text-label-sm text-secondary font-normal">1.4 MB • Uploaded 18s ago</span>
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
<span className="font-body-sm text-body-sm text-secondary truncate">Extracting skills and benchmarking against Full Stack Developer industry criteria (Level 3 profile).</span>
</div>
<div className="hidden sm:flex items-center gap-2">
<span className="font-label-sm text-label-sm text-secondary">Overall</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold" id="calibrated-percentage">68%</span>
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
<span className="font-label-sm text-label-sm text-tertiary bg-surface-container-low px-2 py-0.5 rounded-full">Completed ✓ (1.8s)</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-1">High-fidelity optical recognition parsed 3 pages cleanly. Text layer verified without encoding anomalies.</p>
</div>
</div>
{/*  Step 2: Work Experience & Seniority  */}
<div className="relative z-10 flex items-start gap-space-md pb-space-lg group">
<div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed shadow-sm shrink-0">
<span className="material-symbols-outlined text-[20px]">check</span>
</div>
<div className="flex flex-col flex-1 min-w-0 pt-1">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Parsing work experience &amp; seniority</span>
<span className="font-label-sm text-label-sm text-tertiary bg-surface-container-low px-2 py-0.5 rounded-full">Completed ✓</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-1">Identified 2.4 years of practical software engineering experience, freelance deliverables, and full-stack capstones.</p>
</div>
</div>
{/*  Step 3: In Progress - Core Technical Skills  */}
<div className="relative z-10 flex items-start gap-space-md pb-space-lg group">
<div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-md shrink-0 ring-4 ring-primary-fixed/40">
<span className="material-symbols-outlined text-[20px] animate-spin">sync</span>
</div>
<div className="flex flex-col flex-1 min-w-0 pt-1">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold flex items-center gap-2">
                      Identifying core technical skills &amp; frameworks
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
</span>
<span className="font-label-sm text-label-sm text-primary font-semibold bg-surface-container-low px-2 py-0.5 rounded-full">In Progress</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-1">Cross-referencing libraries, databases, and architectural standards. <span className="text-on-surface font-medium">Detected 14 candidate technologies...</span></p>
{/*  Dynamic Mini Progress Bar  */}
<div className="w-full bg-surface-container rounded-full h-1.5 mt-space-sm overflow-hidden">
<div className="bg-primary h-full rounded-full w-3/4 transition-all duration-500 ease-out"></div>
</div>
</div>
</div>
{/*  Step 4: Project Architecture  */}
<div className="relative z-10 flex items-start gap-space-md pb-space-lg group opacity-60">
<div className="w-10 h-10 rounded-full bg-surface-container text-secondary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">radio_button_unchecked</span>
</div>
<div className="flex flex-col flex-1 min-w-0 pt-1">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Extracting project architecture &amp; contributions</span>
<span className="font-label-sm text-label-sm text-secondary bg-surface-container px-2 py-0.5 rounded-full">Queued</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-1">Pending skill completion. Will parse repository citations, system scale, and architectural patterns.</p>
</div>
</div>
{/*  Step 5: Structured Profile Benchmark  */}
<div className="relative z-10 flex items-start gap-space-md group opacity-60">
<div className="w-10 h-10 rounded-full bg-surface-container text-secondary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">radio_button_unchecked</span>
</div>
<div className="flex flex-col flex-1 min-w-0 pt-1">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Preparing structured profile benchmark</span>
<span className="font-label-sm text-label-sm text-secondary bg-surface-container px-2 py-0.5 rounded-full">Queued</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-1">Generating skill readiness scores, tailored curriculum sprints, and personalized mentor matches.</p>
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
<span className="font-label-sm text-label-sm text-primary font-bold bg-surface-container-lowest px-2 py-0.5 rounded-md shadow-xs">14 Found</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Real-time tokens classified by confidence score and industry market weight.</p>
{/*  Detected Entity Tags Stream  */}
<div className="flex flex-wrap gap-space-xs pt-space-xs" id="entity-stream">
{/*  Entity Pill 1  */}
<div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-container-lowest shadow-xs text-on-surface font-label-md text-label-md transition-all hover:shadow-sm">
<span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
<span>TypeScript</span>
<span className="text-secondary font-label-sm text-label-sm">98%</span>
</div>
{/*  Entity Pill 2  */}
<div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-container-lowest shadow-xs text-on-surface font-label-md text-label-md transition-all hover:shadow-sm">
<span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
<span>Next.js 14</span>
<span className="text-secondary font-label-sm text-label-sm">95%</span>
</div>
{/*  Entity Pill 3  */}
<div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-container-lowest shadow-xs text-on-surface font-label-md text-label-md transition-all hover:shadow-sm">
<span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
<span>Docker</span>
<span className="text-secondary font-label-sm text-label-sm">91%</span>
</div>
{/*  Entity Pill 4  */}
<div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-container-lowest shadow-xs text-on-surface font-label-md text-label-md transition-all hover:shadow-sm">
<span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
<span>PostgreSQL</span>
<span className="text-secondary font-label-sm text-label-sm">88%</span>
</div>
{/*  Entity Pill 5  */}
<div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-container-lowest shadow-xs text-on-surface font-label-md text-label-md transition-all hover:shadow-sm">
<span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
<span>RESTful APIs</span>
<span className="text-secondary font-label-sm text-label-sm">96%</span>
</div>
{/*  Entity Pill 6  */}
<div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-container-lowest shadow-xs text-on-surface font-label-md text-label-md transition-all hover:shadow-sm">
<span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
<span>Node.js</span>
<span className="text-secondary font-label-sm text-label-sm">94%</span>
</div>
{/*  Entity Pill 7  */}
<div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-container-lowest shadow-xs text-on-surface font-label-md text-label-md transition-all hover:shadow-sm">
<span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
<span>GraphQL</span>
<span className="text-secondary font-label-sm text-label-sm">82%</span>
</div>
{/*  Entity Pill 8  */}
<div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-container-lowest shadow-xs text-on-surface font-label-md text-label-md transition-all hover:shadow-sm">
<span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
<span>Tailwind CSS</span>
<span className="text-secondary font-label-sm text-label-sm">97%</span>
</div>
{/*  Pulsing Discovery State Entity  */}
<div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary-fixed text-primary font-label-md text-label-md animate-pulse">
<span className="material-symbols-outlined text-[14px] animate-spin">refresh</span>
<span>Evaluating Redis &amp; Caching...</span>
</div>
</div>
{/*  Contextual Extraction Insight Card  */}
<div className="mt-space-md p-space-md rounded-xl bg-surface-container-lowest shadow-xs flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary font-semibold">Seniority Baseline</span>
<span className="font-label-sm text-label-sm text-primary font-bold">Mid-Level Associate</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2 overflow-hidden my-1">
<div className="bg-gradient-to-r from-primary to-primary-container h-full rounded-full" ></div>
</div>
<div className="flex justify-between font-label-sm text-label-sm text-secondary">
<span>Entry</span>
<span>Mid-Level</span>
<span>Senior Staff</span>
</div>
</div>
{/*  Mini Live Feed Console Message  */}
<div className="p-space-sm bg-surface-container rounded-lg flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">verified_user</span>
<span className="font-body-sm text-body-sm text-secondary text-xs">No sensitive PII (SSN, home address) stored. Extraction adheres to strict EduPath privacy standards.</span>
</div>
</div>
</div>
{/*  Footer Control Strip  */}
<div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-lg border-t border-transparent">
<div className="flex items-center gap-space-sm text-secondary font-body-sm text-body-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">timelapse</span>
<span>Estimated completion in ~15 seconds</span>
</div>
<div className="flex items-center gap-space-md w-full sm:w-auto justify-end">
<button className="px-space-lg py-2.5 rounded-xl font-label-md text-label-md text-secondary hover:text-on-surface hover:bg-surface-container-low transition-all" type="button">
              Cancel Analysis
            </button>
<button className="inline-flex items-center gap-space-xs px-space-lg py-2.5 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all shadow-sm" type="button">
<span>Run in Background</span>
<span className="material-symbols-outlined text-[18px]">notifications_active</span>
</button>
</div>
</div>
</div>
</div>
{/*  Supplementary Informative Cards  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
{/*  Card 1: What happens next  */}
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-xs">
<div className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-1">
<span className="material-symbols-outlined text-[20px]">radar</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Instant Gap Calibration</h3>
<p className="font-body-sm text-body-sm text-secondary">Identified strengths map directly into your dynamic curriculum, skipping foundational lessons you have already mastered.</p>
</div>
{/*  Card 2: AI Agent Integration  */}
<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-xs">
<div className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-1">
<span className="material-symbols-outlined text-[20px]">psychology_alt</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Tailored Agent Coaching</h3>
<p className="font-body-sm text-body-sm text-secondary">The EduPath Agent will craft custom sprint challenges tailored precisely to your next promotion or target hiring rubric.</p>
</div>
{/*  Card 3: Continuous Ingestion  */}
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
