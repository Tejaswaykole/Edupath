
export default function PrioritySkillGapsDetailEdupath() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Generated from Stitch UI */}
      <main className="w-full pt-16 bg-background px-space-xl py-space-xl min-h-screen"><div className="flex flex-col w-full gap-space-lg pb-space-xl">
{/*  Dynamic Route Synchronization  */}

{/*  Top Context / Breadcrumb & Header Row  */}
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
{/*  Minimalist Breadcrumb  */}
<nav aria-label="Breadcrumb" className="flex items-center gap-2 text-secondary">
<a className="font-label-sm text-label-sm text-secondary hover:text-primary transition-colors flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-[15px]">dashboard</span>
          Dashboard
        </a>
<span className="material-symbols-outlined text-[13px] text-outline-variant">chevron_right</span>
<a className="font-label-sm text-label-sm text-secondary hover:text-primary transition-colors" href="#">Skill Gaps</a>
<span className="material-symbols-outlined text-[13px] text-outline-variant">chevron_right</span>
<span className="font-label-sm text-label-sm text-secondary">Priority Gaps</span>
<span className="material-symbols-outlined text-[13px] text-outline-variant">chevron_right</span>
<span className="font-label-sm text-label-sm text-primary font-semibold">Node.js Deep Dive</span>
</nav>
<div className="flex items-center gap-space-sm mt-1">
<h1 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">Priority Skill Gaps</h1>
<span className="px-space-sm py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">4 Actionable Gaps</span>
</div>
<p className="font-body-md text-body-md text-secondary">
        Ranked by target role impact and real-time market demand for <span className="text-on-surface font-medium">Full Stack Developer</span> roles.
      </p>
</div>
{/*  Filters & Utility Sorters  */}
<div className="flex flex-wrap items-center gap-space-sm bg-surface-container-lowest p-1.5 rounded-xl shadow-sm">
<div className="flex items-center gap-1 bg-surface-container-low p-1 rounded-lg" id="filter-tabs">
<button className="px-3 py-1.5 rounded-md font-label-md text-label-md bg-surface-container-lowest text-on-surface shadow-xs font-semibold transition-all" type="button">All Gaps (4)</button>
<button className="px-3 py-1.5 rounded-md font-label-md text-label-md text-secondary hover:text-on-surface transition-all" type="button">High Priority (2)</button>
<button className="px-3 py-1.5 rounded-md font-label-md text-label-md text-secondary hover:text-on-surface transition-all" type="button">Medium Priority (2)</button>
</div>
<div className="h-5 w-px bg-surface-container-high hidden sm:block"></div>
<div className="relative flex items-center">
<span className="material-symbols-outlined text-[16px] text-secondary absolute left-2.5 pointer-events-none">swap_vert</span>
<select aria-label="Sort skill gaps" className="appearance-none pl-8 pr-8 py-1.5 bg-surface-container-low text-on-surface font-label-md text-label-md rounded-lg outline-none cursor-pointer hover:bg-surface-container transition-colors">
<option>Market Impact (Highest)</option>
<option>Fastest to Close (Effort)</option>
<option>Prerequisite Readiness</option>
</select>
<span className="material-symbols-outlined text-[16px] text-secondary absolute right-2 pointer-events-none">expand_more</span>
</div>
</div>
</div>
{/*  Metrics Shelf: Real-time Gap Velocity & Impact Stats  */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center gap-space-md">
<div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[20px]">flag</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-headline-md text-headline-md text-on-surface font-bold leading-tight">4 Gaps</span>
<span className="font-label-sm text-label-sm text-secondary truncate">Identified for Target Role</span>
</div>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center gap-space-md">
<div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-fixed shrink-0">
<span className="material-symbols-outlined text-[20px]">schedule</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-headline-md text-headline-md text-on-surface font-bold leading-tight">19–26 hrs</span>
<span className="font-label-sm text-label-sm text-secondary truncate">Estimated Total Time</span>
</div>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center gap-space-md">
<div className="w-10 h-10 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary shrink-0">
<span className="material-symbols-outlined text-[20px]">trending_up</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-headline-md text-headline-md text-on-surface font-bold leading-tight">+38%</span>
<span className="font-label-sm text-label-sm text-secondary truncate">Market Alignment Gain</span>
</div>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center gap-space-md">
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary-container shrink-0">
<span className="material-symbols-outlined text-[20px]">verified</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-headline-md text-headline-md text-on-surface font-bold leading-tight">3 Prerequisites</span>
<span className="font-label-sm text-label-sm text-secondary truncate">Already Verified</span>
</div>
</div>
</div>
{/*  Master-Detail Work Canvas (5:7 Split)  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
{/*  LEFT COLUMN: Prioritized Gap Cards (5 cols)  */}
<div className="lg:col-span-5 flex flex-col gap-space-md">
<div className="flex items-center justify-between px-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Priority Queue</span>
<span className="font-label-sm text-label-sm text-secondary">Ordered by Market Weight</span>
</div>
{/*  CARD 1: Selected / Active (Node.js)  */}
<article className="relative bg-surface-container-lowest p-space-lg rounded-xl shadow-md transition-all cursor-pointer group">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary rounded-l-xl"></div>
<div className="flex flex-col gap-space-sm pl-1">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-space-xs">
<span className="w-6 h-6 rounded-md bg-primary text-on-primary font-label-sm text-label-sm font-bold flex items-center justify-center shrink-0">1</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">Node.js Runtime &amp; Microservices</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold shrink-0">High Priority</span>
</div>
{/*  Progression Track Pill  */}
<div className="flex items-center justify-between bg-surface-container-low px-space-md py-space-xs rounded-lg">
<div className="flex items-center gap-1.5 font-label-sm text-label-sm">
<span className="text-secondary">Current:</span>
<span className="font-semibold text-on-surface">Beginner (L1)</span>
</div>
<span className="material-symbols-outlined text-[14px] text-primary">arrow_forward</span>
<div className="flex items-center gap-1.5 font-label-sm text-label-sm">
<span className="text-secondary">Target:</span>
<span className="font-bold text-primary">Intermediate (L3)</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Core prerequisite for building production backend services, async streaming pipelines, and Express APIs in Full Stack engineering roles.
          </p>
<div className="flex items-center justify-between pt-space-xs text-secondary font-label-sm text-label-sm">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">schedule</span>
<span>5–7 hrs focused effort</span>
</div>
<span className="text-primary font-semibold flex items-center gap-0.5">
              Active Focus
              <span className="material-symbols-outlined text-[14px]">check_circle</span>
</span>
</div>
</div>
</article>
{/*  CARD 2: PostgreSQL  */}
<article className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer group">
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-space-xs">
<span className="w-6 h-6 rounded-md bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-bold flex items-center justify-center shrink-0">2</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">PostgreSQL &amp; Relational Schemas</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold shrink-0">High Priority</span>
</div>
<div className="flex items-center justify-between bg-surface-container-low px-space-md py-space-xs rounded-lg">
<div className="flex items-center gap-1.5 font-label-sm text-label-sm">
<span className="text-secondary">Current:</span>
<span className="font-semibold text-on-surface">Beginner (L1)</span>
</div>
<span className="material-symbols-outlined text-[14px] text-secondary">arrow_forward</span>
<div className="flex items-center gap-1.5 font-label-sm text-label-sm">
<span className="text-secondary">Target:</span>
<span className="font-bold text-on-surface">Intermediate (L2)</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            84% of target engineering positions require schema migrations, indexing strategies, and ORM query tuning over raw client wrappers.
          </p>
<div className="flex items-center justify-between pt-space-xs text-secondary font-label-sm text-label-sm">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">schedule</span>
<span>6–8 hrs focused effort</span>
</div>
<span className="text-secondary group-hover:text-primary font-semibold flex items-center gap-0.5 transition-colors">
              Inspect Gap
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
</span>
</div>
</div>
</article>
{/*  CARD 3: JWT & Authentication  */}
<article className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer group">
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-space-xs">
<span className="w-6 h-6 rounded-md bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-bold flex items-center justify-center shrink-0">3</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">JWT &amp; OAuth2 Authentication</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold shrink-0">Medium Priority</span>
</div>
<div className="flex items-center justify-between bg-surface-container-low px-space-md py-space-xs rounded-lg">
<div className="flex items-center gap-1.5 font-label-sm text-label-sm">
<span className="text-secondary">Current:</span>
<span className="font-semibold text-secondary">Incomplete (L0)</span>
</div>
<span className="material-symbols-outlined text-[14px] text-secondary">arrow_forward</span>
<div className="flex items-center gap-1.5 font-label-sm text-label-sm">
<span className="text-secondary">Target:</span>
<span className="font-bold text-on-surface">Intermediate (L2)</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Required to secure microservice endpoints, handle session lifecycle, refresh token rotations, and role-based access control (RBAC).
          </p>
<div className="flex items-center justify-between pt-space-xs text-secondary font-label-sm text-label-sm">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">schedule</span>
<span>4–5 hrs focused effort</span>
</div>
<span className="text-secondary group-hover:text-primary font-semibold flex items-center gap-0.5 transition-colors">
              Inspect Gap
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
</span>
</div>
</div>
</article>
{/*  CARD 4: Docker & Container Deployment  */}
<article className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer group">
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-space-xs">
<span className="w-6 h-6 rounded-md bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-bold flex items-center justify-center shrink-0">4</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">Docker &amp; Container Deployment</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold shrink-0">Medium Priority</span>
</div>
<div className="flex items-center justify-between bg-surface-container-low px-space-md py-space-xs rounded-lg">
<div className="flex items-center gap-1.5 font-label-sm text-label-sm">
<span className="text-secondary">Current:</span>
<span className="font-semibold text-on-surface">Beginner (L1)</span>
</div>
<span className="material-symbols-outlined text-[14px] text-secondary">arrow_forward</span>
<div className="flex items-center gap-1.5 font-label-sm text-label-sm">
<span className="text-secondary">Target:</span>
<span className="font-bold text-on-surface">Intermediate (L2)</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Standardization of local development, multi-stage image builds, and production container orchestration on cloud runtimes.
          </p>
<div className="flex items-center justify-between pt-space-xs text-secondary font-label-sm text-label-sm">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">schedule</span>
<span>4–6 hrs focused effort</span>
</div>
<span className="text-secondary group-hover:text-primary font-semibold flex items-center gap-0.5 transition-colors">
              Inspect Gap
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
</span>
</div>
</div>
</article>
</div>
{/*  RIGHT COLUMN: Deep Gap Detail for Node.js (7 cols)  */}
<div className="lg:col-span-7 flex flex-col gap-space-lg">
{/*  Main Inspection Card  */}
<section className="bg-surface-container-lowest rounded-xl shadow-md p-space-xl flex flex-col gap-space-lg">
{/*  Header & Badges  */}
<div className="flex flex-col gap-space-sm pb-space-md bg-surface-container-low/50 -m-space-xl p-space-xl rounded-t-xl">
<div className="flex flex-wrap items-center justify-between gap-2">
<div className="flex items-center gap-space-xs">
<span className="px-2.5 py-1 rounded-md bg-primary text-on-primary font-label-sm text-label-sm font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">star</span>
                Priority #1
              </span>
<span className="px-2.5 py-1 rounded-md bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-medium">
                Estimated Effort: 5–7 Hours
              </span>
</div>
<span className="px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
              Ready for Curriculum
            </span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
            Deep Gap Analysis: Node.js &amp; Express Architecture
          </h2>
<p className="font-body-md text-body-md text-secondary">
            In-depth evaluation against standard enterprise Full Stack technical benchmarks and automated codebase assessments.
          </p>
</div>
{/*  Capability Comparison Banner (Current vs Target)  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md p-space-md bg-surface-container-low rounded-xl">
{/*  Current Capability  */}
<div className="flex flex-col gap-space-xs p-space-md bg-surface-container-lowest rounded-lg shadow-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Current Capability</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm font-semibold text-on-surface">Beginner (L1)</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-normal">
              Basic script execution, file-system reading, and simple npm package setup without structured architectural patterns.
            </p>
<div className="w-full bg-surface-container-high h-1.5 rounded-full mt-2 overflow-hidden">
<div className="bg-secondary h-full rounded-full w-1/3"></div>
</div>
</div>
{/*  Target Milestone  */}
<div className="flex flex-col gap-space-xs p-space-md bg-surface-container-lowest rounded-lg shadow-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold">Target Milestone</span>
<span className="px-2 py-0.5 rounded bg-primary-fixed text-primary font-label-sm text-label-sm font-bold">Intermediate (L3)</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-normal">
              Production REST APIs, middleware pipelines, async error handling, clustering, and database connection pooling.
            </p>
<div className="w-full bg-surface-container-high h-1.5 rounded-full mt-2 overflow-hidden">
<div className="bg-primary h-full rounded-full w-4/5"></div>
</div>
</div>
</div>
{/*  Why It Matters For Full Stack (Agent Insight Card)  */}
<div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col gap-space-sm relative overflow-hidden">
<div className="flex items-center gap-space-xs text-primary font-label-md text-label-md font-semibold">
<span className="material-symbols-outlined text-[18px]">psychology</span>
            EduPath Intelligence Insight
          </div>
<p className="font-body-md text-body-md text-on-surface leading-relaxed">
            Your verified frontend strength (<span className="font-semibold text-tertiary">React 90%</span>) means mastering Node.js backend controllers will immediately unlock end-to-end full stack competence. Market analysis indicates candidates with verified Node.js experience ramp up to interview invitations <strong className="text-primary font-bold">42% faster</strong>.
          </p>
<div className="flex items-center gap-space-lg pt-1 text-secondary font-label-sm text-label-sm">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-tertiary">check</span>
<span>Complements your React fluency</span>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-tertiary">trending_up</span>
<span>High-tier market hiring signal</span>
</div>
</div>
</div>
{/*  Core Competency Tree (Interactive Breakdown)  */}
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">What you need to master</h3>
<p className="font-body-sm text-body-sm text-secondary">Modular breakdown of targeted competency outcomes.</p>
</div>
<span className="font-label-sm text-label-sm text-secondary">4 Modules</span>
</div>
<div className="flex flex-col gap-space-xs" id="competency-accordion">
{/*  Module 1  */}
<div className="bg-surface-container-low rounded-xl p-space-md hover:bg-surface-container transition-colors cursor-pointer">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold flex items-center justify-center">1</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">Node.js Event Loop, Async/Await &amp; Non-blocking I/O</span>
<span className="font-body-sm text-body-sm text-secondary">Microtasks, call stack execution, streams, and event emitters</span>
</div>
</div>
<div className="flex items-center gap-space-md">
<span className="font-label-sm text-label-sm text-secondary font-medium">1.5 hrs</span>
<span className="material-symbols-outlined text-[18px] text-secondary">expand_more</span>
</div>
</div>
</div>
{/*  Module 2  */}
<div className="bg-surface-container-low rounded-xl p-space-md hover:bg-surface-container transition-colors cursor-pointer">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold flex items-center justify-center">2</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">Express.js Middleware, Routing &amp; Request Lifecycle</span>
<span className="font-body-sm text-body-sm text-secondary">Chaining custom middleware, sub-routers, REST endpoint structure</span>
</div>
</div>
<div className="flex items-center gap-space-md">
<span className="font-label-sm text-label-sm text-secondary font-medium">1.5 hrs</span>
<span className="material-symbols-outlined text-[18px] text-secondary">expand_more</span>
</div>
</div>
</div>
{/*  Module 3  */}
<div className="bg-surface-container-low rounded-xl p-space-md hover:bg-surface-container transition-colors cursor-pointer">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold flex items-center justify-center">3</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">Error Handling, Validation (Zod) &amp; Security Best Practices</span>
<span className="font-body-sm text-body-sm text-secondary">Centralized error interceptors, rate limiting, CORS, input sanitization</span>
</div>
</div>
<div className="flex items-center gap-space-md">
<span className="font-label-sm text-label-sm text-secondary font-medium">1.0 hr</span>
<span className="material-symbols-outlined text-[18px] text-secondary">expand_more</span>
</div>
</div>
</div>
{/*  Module 4  */}
<div className="bg-surface-container-low rounded-xl p-space-md hover:bg-surface-container transition-colors cursor-pointer">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold flex items-center justify-center">4</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">Database Integration with Prisma / PostgreSQL</span>
<span className="font-body-sm text-body-sm text-secondary">Connection pooling, data migrations, transactional queries in handlers</span>
</div>
</div>
<div className="flex items-center gap-space-md">
<span className="font-label-sm text-label-sm text-secondary font-medium">2.0 hrs</span>
<span className="material-symbols-outlined text-[18px] text-secondary">expand_more</span>
</div>
</div>
</div>
</div>
</div>
{/*  Recommended Prerequisites  */}
<div className="p-space-md bg-surface-container-low rounded-xl flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary shrink-0">
<span className="material-symbols-outlined text-[18px]">verified</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">Prerequisite Satisfied</span>
<span className="font-body-sm text-body-sm text-secondary">Modern JavaScript (ES6+, Promises, Modules, Closure)</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">90% Verified</span>
</div>
</div>
{/*  Primary Action Footer  */}
<div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-sm">
<button className="w-full sm:w-auto px-space-xl py-3 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-bold shadow-sm transition-all flex items-center justify-center gap-2" type="button">
            Generate Structured Learning Objectives
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
<div className="flex items-center gap-space-sm w-full sm:w-auto justify-end">
<button className="px-space-md py-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md font-semibold transition-all" type="button">
              View Next Gap (PostgreSQL)
            </button>
<button aria-label="Target Seniority Adjustments" className="p-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container text-secondary hover:text-on-surface transition-all" type="button">
<span className="material-symbols-outlined text-[20px]">tune</span>
</button>
</div>
</div>
</section>
{/*  Bottom Contextual Motivation Strip (Consistent with App Aesthetic)  */}
<div className="relative bg-surface-container-lowest rounded-xl p-space-lg shadow-sm overflow-hidden flex flex-col md:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md z-10">
<div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[24px]">target</span>
</div>
<div className="flex flex-col">
<h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">Ready to bridge your #1 backend bottleneck?</h4>
<p className="font-body-sm text-body-sm text-secondary">Target completion within 5 days keeps your full stack target date on track for April 2025.</p>
</div>
</div>
<a className="px-space-md py-2 rounded-xl bg-surface-container-high hover:bg-primary-fixed text-primary font-label-md text-label-md font-semibold transition-all shrink-0 z-10" href="#">
          Add to Weekly Plan
        </a>
</div>
</div>
</div>
</div></main>
    </div>
  );
}
