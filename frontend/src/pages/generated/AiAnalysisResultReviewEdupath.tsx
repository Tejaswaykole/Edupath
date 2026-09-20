import { useNavigate } from 'react-router-dom';

export default function AiAnalysisResultReviewEdupath() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-surface">
      {/* Generated from Stitch UI */}
      <main className="w-full pt-16 bg-background px-space-xl py-space-xl min-h-screen"><div className="flex flex-col w-full gap-space-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs text-primary font-label-sm uppercase tracking-wider mb-space-xs">
<span className="material-symbols-outlined text-[18px]">neurology</span>
<span>Resume Parsing Engine v2.4</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">Here's what EduPath found</h1>
<p className="font-body-lg text-body-lg text-secondary max-w-2xl mt-space-xs">
        Review the information we've extracted from your resume before continuing. You can edit anything that doesn't look right.
      </p>
</div>
<div className="flex items-center gap-space-sm self-start md:self-auto">
<span className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container font-label-md text-label-md text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
        Parsed: <strong className="text-on-surface font-semibold">Tejas_Patil_Resume.pdf</strong>
</span>
<button className="p-space-xs rounded-xl hover:bg-surface-container text-secondary hover:text-on-surface transition-all" title="View Source Document" type="button">
<span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
</button>
</div>
</div>
<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md shadow-sm">
<div className="flex items-start gap-space-md">
<div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[22px]">tune</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">Human-in-the-Loop Validation</span>
<span className="px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed-variant font-label-sm text-label-sm">Step 2 of 4</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 max-w-3xl">
          EduPath Agent identified <strong>14 skills</strong>, <strong>2 verified projects</strong>, and <strong>1 certification</strong>. You have full control to edit, add, or remove items before proceeding to Skill Gap Analysis.
        </p>
</div>
</div>
<div className="flex items-center gap-space-sm shrink-0">
<span className="font-label-sm text-label-sm text-secondary">Extraction Confidence:</span>
<div className="flex items-center gap-space-xs px-space-sm py-space-xs rounded-lg bg-surface-container-lowest text-tertiary font-label-md text-label-md font-bold shadow-sm">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span>94.2%</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
<div className="lg:col-span-8 flex flex-col gap-space-lg">
<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">psychology</span>
</div>
<div>
<h2 className="font-headline-md text-headline-md text-on-surface">Detected Technical Skills</h2>
<p className="font-body-sm text-body-sm text-secondary">Identified from coursework, repo commits, and bullet points</p>
</div>
</div>
<button className="flex items-center gap-space-xs px-space-md py-space-xs rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md transition-all" id="openAddSkillBtn" type="button">
<span className="material-symbols-outlined text-[18px]">add</span>
<span>Add Missing Skill</span>
</button>
</div>
<div className="flex flex-col gap-space-md">
<div className="flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">Frontend Architecture</span>
<div className="flex flex-wrap gap-space-xs" id="frontendChips">
<div className="group relative flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-all">
<span>JavaScript</span>
<span className="font-label-sm text-label-sm text-secondary font-normal">95%</span>
<div className="flex items-center gap-0.5 ml-1 opacity-60 group-hover:opacity-100 transition-opacity">
<button className="text-secondary hover:text-primary p-0.5"  title="Edit skill" type="button">
<span className="material-symbols-outlined text-[15px]">edit</span>
</button>
<button className="text-secondary hover:text-error p-0.5"  title="Remove" type="button">
<span className="material-symbols-outlined text-[15px]">close</span>
</button>
</div>
</div>
<div className="group relative flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-all">
<span>React</span>
<span className="font-label-sm text-label-sm text-secondary font-normal">90%</span>
<div className="flex items-center gap-0.5 ml-1 opacity-60 group-hover:opacity-100 transition-opacity">
<button className="text-secondary hover:text-primary p-0.5"  title="Edit skill" type="button">
<span className="material-symbols-outlined text-[15px]">edit</span>
</button>
<button className="text-secondary hover:text-error p-0.5"  title="Remove" type="button">
<span className="material-symbols-outlined text-[15px]">close</span>
</button>
</div>
</div>
<div className="group relative flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-all">
<span>TypeScript</span>
<span className="font-label-sm text-label-sm text-secondary font-normal">85%</span>
<div className="flex items-center gap-0.5 ml-1 opacity-60 group-hover:opacity-100 transition-opacity">
<button className="text-secondary hover:text-primary p-0.5"  title="Edit skill" type="button">
<span className="material-symbols-outlined text-[15px]">edit</span>
</button>
<button className="text-secondary hover:text-error p-0.5"  title="Remove" type="button">
<span className="material-symbols-outlined text-[15px]">close</span>
</button>
</div>
</div>
<div className="group relative flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-all">
<span>HTML / CSS</span>
<span className="font-label-sm text-label-sm text-secondary font-normal">98%</span>
<div className="flex items-center gap-0.5 ml-1 opacity-60 group-hover:opacity-100 transition-opacity">
<button className="text-secondary hover:text-primary p-0.5"  title="Edit skill" type="button">
<span className="material-symbols-outlined text-[15px]">edit</span>
</button>
<button className="text-secondary hover:text-error p-0.5"  title="Remove" type="button">
<span className="material-symbols-outlined text-[15px]">close</span>
</button>
</div>
</div>
<div className="group relative flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-all">
<span>Tailwind CSS</span>
<span className="font-label-sm text-label-sm text-secondary font-normal">92%</span>
<div className="flex items-center gap-0.5 ml-1 opacity-60 group-hover:opacity-100 transition-opacity">
<button className="text-secondary hover:text-primary p-0.5"  title="Edit skill" type="button">
<span className="material-symbols-outlined text-[15px]">edit</span>
</button>
<button className="text-secondary hover:text-error p-0.5"  title="Remove" type="button">
<span className="material-symbols-outlined text-[15px]">close</span>
</button>
</div>
</div>
</div>
</div>
<div className="flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">Backend, APIs &amp; Databases</span>
<div className="flex flex-wrap gap-space-xs" id="backendChips">
<div className="group relative flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-all">
<span>Node.js</span>
<span className="font-label-sm text-label-sm text-secondary font-normal">88%</span>
<div className="flex items-center gap-0.5 ml-1 opacity-60 group-hover:opacity-100 transition-opacity">
<button className="text-secondary hover:text-primary p-0.5"  title="Edit skill" type="button">
<span className="material-symbols-outlined text-[15px]">edit</span>
</button>
<button className="text-secondary hover:text-error p-0.5"  title="Remove" type="button">
<span className="material-symbols-outlined text-[15px]">close</span>
</button>
</div>
</div>
<div className="group relative flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-all">
<span>Express</span>
<span className="font-label-sm text-label-sm text-secondary font-normal">85%</span>
<div className="flex items-center gap-0.5 ml-1 opacity-60 group-hover:opacity-100 transition-opacity">
<button className="text-secondary hover:text-primary p-0.5"  title="Edit skill" type="button">
<span className="material-symbols-outlined text-[15px]">edit</span>
</button>
<button className="text-secondary hover:text-error p-0.5"  title="Remove" type="button">
<span className="material-symbols-outlined text-[15px]">close</span>
</button>
</div>
</div>
<div className="group relative flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-all">
<span>PostgreSQL</span>
<span className="font-label-sm text-label-sm text-secondary font-normal">78%</span>
<div className="flex items-center gap-0.5 ml-1 opacity-60 group-hover:opacity-100 transition-opacity">
<button className="text-secondary hover:text-primary p-0.5"  title="Edit skill" type="button">
<span className="material-symbols-outlined text-[15px]">edit</span>
</button>
<button className="text-secondary hover:text-error p-0.5"  title="Remove" type="button">
<span className="material-symbols-outlined text-[15px]">close</span>
</button>
</div>
</div>
<div className="group relative flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-all">
<span>REST APIs</span>
<span className="font-label-sm text-label-sm text-secondary font-normal">92%</span>
<div className="flex items-center gap-0.5 ml-1 opacity-60 group-hover:opacity-100 transition-opacity">
<button className="text-secondary hover:text-primary p-0.5"  title="Edit skill" type="button">
<span className="material-symbols-outlined text-[15px]">edit</span>
</button>
<button className="text-secondary hover:text-error p-0.5"  title="Remove" type="button">
<span className="material-symbols-outlined text-[15px]">close</span>
</button>
</div>
</div>
<div className="group relative flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-all">
<span>MongoDB</span>
<span className="font-label-sm text-label-sm text-secondary font-normal">74%</span>
<div className="flex items-center gap-0.5 ml-1 opacity-60 group-hover:opacity-100 transition-opacity">
<button className="text-secondary hover:text-primary p-0.5"  title="Edit skill" type="button">
<span className="material-symbols-outlined text-[15px]">edit</span>
</button>
<button className="text-secondary hover:text-error p-0.5"  title="Remove" type="button">
<span className="material-symbols-outlined text-[15px]">close</span>
</button>
</div>
</div>
</div>
</div>
<div className="flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">DevOps &amp; Infrastructure</span>
<div className="flex flex-wrap gap-space-xs" id="devopsChips">
<div className="group relative flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-all">
<span>Git</span>
<span className="font-label-sm text-label-sm text-secondary font-normal">94%</span>
<div className="flex items-center gap-0.5 ml-1 opacity-60 group-hover:opacity-100 transition-opacity">
<button className="text-secondary hover:text-primary p-0.5"  title="Edit skill" type="button">
<span className="material-symbols-outlined text-[15px]">edit</span>
</button>
<button className="text-secondary hover:text-error p-0.5"  title="Remove" type="button">
<span className="material-symbols-outlined text-[15px]">close</span>
</button>
</div>
</div>
<div className="group relative flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-all">
<span>Docker</span>
<span className="font-label-sm text-label-sm text-secondary font-normal">70%</span>
<div className="flex items-center gap-0.5 ml-1 opacity-60 group-hover:opacity-100 transition-opacity">
<button className="text-secondary hover:text-primary p-0.5"  title="Edit skill" type="button">
<span className="material-symbols-outlined text-[15px]">edit</span>
</button>
<button className="text-secondary hover:text-error p-0.5"  title="Remove" type="button">
<span className="material-symbols-outlined text-[15px]">close</span>
</button>
</div>
</div>
<div className="group relative flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-all">
<span>AWS</span>
<span className="font-label-sm text-label-sm text-amber-700 bg-amber-100 px-1 rounded font-semibold">65%</span>
<div className="flex items-center gap-0.5 ml-1 opacity-60 group-hover:opacity-100 transition-opacity">
<button className="text-secondary hover:text-primary p-0.5"  title="Edit skill" type="button">
<span className="material-symbols-outlined text-[15px]">edit</span>
</button>
<button className="text-secondary hover:text-error p-0.5"  title="Remove" type="button">
<span className="material-symbols-outlined text-[15px]">close</span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">terminal</span>
</div>
<div>
<div className="flex items-center gap-space-xs">
<h2 className="font-headline-md text-headline-md text-on-surface">Extracted Experience &amp; Projects</h2>
<span className="px-space-xs py-0.5 rounded-md bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">2+ yrs equivalent</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Projects parsed with inferred engineering scope and stack</p>
</div>
</div>
<button className="flex items-center gap-space-xs px-space-md py-space-xs rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">add</span>
<span>Add Project Manually</span>
</button>
</div>
<div className="flex flex-col gap-space-md" id="projectsList">
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-sm">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm font-semibold text-headline-sm">
                  01
                </div>
<div className="flex flex-col">
<h3 className="font-headline-sm text-headline-sm text-on-surface">E-Commerce Microservices Platform</h3>
<span className="font-label-sm text-label-sm text-secondary">Extracted Role: Backend Engineer (API Design, Auth, Stripe)</span>
</div>
</div>
<div className="flex items-center gap-space-xs">
<button className="px-space-sm py-space-xs rounded-lg hover:bg-surface-container text-secondary hover:text-on-surface font-label-md text-label-md transition-all flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[16px]">edit</span>
<span>Edit Details</span>
</button>
<button className="p-space-xs rounded-lg hover:bg-surface-container text-secondary hover:text-error transition-all"  title="Remove project" type="button">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Designed and deployed modular microservices architecture powering checkout, distributed cart sessions, and webhook listeners with real-time inventory locking.
            </p>
<div className="flex flex-wrap items-center gap-space-xs pt-space-xs">
<span className="font-label-sm text-label-sm text-secondary mr-space-xs">Stack:</span>
<span className="px-space-sm py-0.5 rounded-md bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm">Node.js</span>
<span className="px-space-sm py-0.5 rounded-md bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm">Express</span>
<span className="px-space-sm py-0.5 rounded-md bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm">MongoDB</span>
<span className="px-space-sm py-0.5 rounded-md bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm">Docker</span>
<span className="px-space-sm py-0.5 rounded-md bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm">Redis</span>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-sm">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm font-semibold text-headline-sm">
                  02
                </div>
<div className="flex flex-col">
<h3 className="font-headline-sm text-headline-sm text-on-surface">TaskFlow Kanban App</h3>
<span className="font-label-sm text-label-sm text-secondary">Extracted Role: Frontend / UI Developer</span>
</div>
</div>
<div className="flex items-center gap-space-xs">
<button className="px-space-sm py-space-xs rounded-lg hover:bg-surface-container text-secondary hover:text-on-surface font-label-md text-label-md transition-all flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[16px]">edit</span>
<span>Edit Details</span>
</button>
<button className="p-space-xs rounded-lg hover:bg-surface-container text-secondary hover:text-error transition-all"  title="Remove project" type="button">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Single-page project management workstation with drag-and-drop state synchronization, dynamic board column filtering, and responsive dark/light accessibility modes.
            </p>
<div className="flex flex-wrap items-center gap-space-xs pt-space-xs">
<span className="font-label-sm text-label-sm text-secondary mr-space-xs">Stack:</span>
<span className="px-space-sm py-0.5 rounded-md bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm">React</span>
<span className="px-space-sm py-0.5 rounded-md bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm">Tailwind CSS</span>
<span className="px-space-sm py-0.5 rounded-md bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm">Firebase</span>
<span className="px-space-sm py-0.5 rounded-md bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm">Zustand</span>
</div>
</div>
</div>
</section>
<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">school</span>
</div>
<div>
<h2 className="font-headline-md text-headline-md text-on-surface">Education &amp; Credentials</h2>
<p className="font-body-sm text-body-sm text-secondary">Verified institutional degrees and professional credentials</p>
</div>
</div>
<button className="flex items-center gap-space-xs px-space-md py-space-xs rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">add</span>
<span>Add Item</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between gap-space-sm">
<div className="flex items-start justify-between">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-[24px]">history_edu</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Degree</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface mt-0.5">B.S. in Computer Science</h4>
<p className="font-body-sm text-body-sm text-secondary">State University (2020 – 2024)</p>
</div>
</div>
<button className="text-secondary hover:text-on-surface p-1 rounded-lg hover:bg-surface-container transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
</div>
<div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm mt-space-xs">
<span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
<span>Major GPA: 3.75 / 4.0 detected</span>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between gap-space-sm">
<div className="flex items-start justify-between">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-tertiary text-[24px]">verified</span>
<div className="flex flex-col">
<div className="flex items-center gap-1">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Certification</span>
<span className="px-1.5 py-0.2 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[10px] font-bold">VERIFIED</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface mt-0.5">AWS Certified Cloud Practitioner</h4>
<p className="font-body-sm text-body-sm text-secondary">Issued Feb 2024 • ID #CLF-C02-8849</p>
</div>
</div>
<button className="text-secondary hover:text-on-surface p-1 rounded-lg hover:bg-surface-container transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
</div>
<div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm mt-space-xs">
<span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
<span>Digital credential badge matched</span>
</div>
</div>
</div>
</section>
</div>
<div className="lg:col-span-4 flex flex-col gap-space-lg">
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">auto_graph</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Target Benchmark Match</h3>
<p className="font-body-sm text-body-sm text-secondary">Compared against Fullstack Engineer</p>
</div>
</div>
<div className="flex items-center justify-between p-space-md rounded-xl bg-surface-container-low">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary">Baseline Alignment</span>
<span className="font-headline-xl text-headline-xl text-on-surface font-bold">68%</span>
</div>
<div className="relative w-14 h-14 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-width="3.5"></path>
<path className="text-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="68, 100" stroke-linecap="round" stroke-width="3.5"></path>
</svg>
<span className="material-symbols-outlined absolute text-primary text-[20px]">speed</span>
</div>
</div>
<div className="flex flex-col gap-space-sm">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Immediate Observations</span>
<div className="flex items-start gap-space-xs p-space-sm rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-tertiary text-[18px] shrink-0 mt-0.5">check</span>
<p className="font-body-sm text-body-sm text-on-surface"><strong>Strong Frontend Depth:</strong> React, JavaScript, and CSS core modules comfortably satisfy Senior Tier 1 requirements.</p>
</div>
<div className="flex items-start gap-space-xs p-space-sm rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-amber-700 text-[18px] shrink-0 mt-0.5">info</span>
<p className="font-body-sm text-body-sm text-on-surface"><strong>Cloud &amp; CI/CD Opportunity:</strong> AWS extraction is introductory. Gap analysis will recommend targeting AWS ECS/Lambda modules.</p>
</div>
</div>
</div>
<div className="rounded-xl overflow-hidden shadow-sm relative group">
<div className="bg-cover bg-center w-full h-44 flex flex-col justify-end p-space-md relative" data-alt="Abstract computational intelligence visual with minimalist slate blue geometric lines, clean gradients, high-tech modern aesthetic, serene depth." >
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/40 to-transparent"></div>
<div className="relative z-10 flex flex-col text-inverse-on-surface">
<span className="font-label-sm text-label-sm text-tertiary-fixed font-semibold uppercase tracking-wider">Next Step Preview</span>
<h4 className="font-headline-sm text-headline-sm font-bold text-white mt-0.5">Skill Gap Diagnostic</h4>
<p className="font-body-sm text-body-sm text-surface-container-high opacity-90 mt-1">
              Once approved, we map your confirmed skills against 1,200+ industry job postings.
            </p>
</div>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">Need to re-upload?</span>
<span className="material-symbols-outlined text-secondary text-[18px]">attachment</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">
          If this parser missed significant career chapters, you can re-run with a fresh PDF or DOCX file.
        </p>
<button className="mt-space-xs w-full py-space-xs px-space-md rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all flex items-center justify-center gap-space-xs" type="button">
<span className="material-symbols-outlined text-[18px]">file_upload</span>
<span>Upload Another File</span>
</button>
</div>
</div>
</div>
<div className="sticky bottom-4 z-30 w-full mt-space-md">
<div className="bg-surface-container-lowest/95 backdrop-blur-md rounded-xl p-space-md shadow-xl flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md w-full sm:w-auto justify-between sm:justify-start">
<button onClick={() => navigate('/documentcenterresumeupload')} className="flex items-center gap-space-xs px-space-md py-space-sm rounded-xl text-secondary hover:text-on-surface hover:bg-surface-container transition-all font-label-md text-label-md" type="button">
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
<span>Back to Documents</span>
</button>
<button className="text-error hover:text-error/80 font-label-sm text-label-sm transition-colors underline underline-offset-4" type="button">
          Discard &amp; Re-analyze
        </button>
</div>
<div className="flex items-center gap-space-sm w-full sm:w-auto justify-end">
<span className="hidden md:inline font-body-sm text-body-sm text-secondary mr-space-xs">All changes automatically saved</span>
<button onClick={() => navigate('/analysisconfirmed')} className="w-full sm:w-auto flex items-center justify-center gap-space-sm px-space-xl py-space-sm rounded-xl bg-primary hover:bg-primary-container text-on-primary font-headline-sm text-headline-sm shadow-md hover:shadow-lg transition-all" id="confirmDataBtn" type="button">
<span>Save &amp; Confirm Information</span>
<span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
<div className="fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/40 backdrop-blur-sm hidden" id="addSkillModal">
<div className="bg-surface-container-lowest rounded-xl p-space-lg max-w-md w-full mx-space-md shadow-xl flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<h3 className="font-headline-md text-headline-md text-on-surface">Add Missing Skill</h3>
<button className="text-secondary hover:text-on-surface p-1 rounded-lg" id="closeModalBtn" type="button">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>
<div className="flex flex-col gap-space-sm">
<label className="font-label-md text-label-md text-on-surface flex flex-col gap-1">
<span>Skill Name</span>
<input className="px-space-md py-space-xs rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md outline-none focus:bg-surface-container transition-all" id="newSkillName" placeholder="e.g. GraphQL, Kubernetes, Rust" type="text"/>
</label>
<label className="font-label-md text-label-md text-on-surface flex flex-col gap-1">
<span>Target Category</span>
<select className="px-space-md py-space-xs rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md outline-none focus:bg-surface-container transition-all" id="newSkillCategory">
<option value="frontend">Frontend Architecture</option>
<option value="backend">Backend &amp; Databases</option>
<option value="devops">DevOps &amp; Infrastructure</option>
</select>
</label>
<label className="font-label-md text-label-md text-on-surface flex flex-col gap-1">
<div className="flex justify-between items-center">
<span>Self-Reported Confidence</span>
<span className="font-bold text-primary" id="rangeVal">85%</span>
</div>
<input className="w-full accent-primary cursor-pointer" id="newSkillConfidence" max="100" min="20"  type="range" value="85"/>
</label>
</div>
<div className="flex items-center justify-end gap-space-sm mt-space-xs">
<button className="px-space-md py-space-xs rounded-xl text-secondary hover:bg-surface-container font-label-md text-label-md transition-all" id="cancelModalBtn" type="button">
        Cancel
      </button>
<button className="px-space-lg py-space-xs rounded-xl bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-all" id="saveNewSkillBtn" type="button">
        Add Skill
      </button>
</div>
</div>
</div>
</main>
    </div>
  );
}
