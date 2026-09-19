
export default function LearnerProfileEdupath() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Generated from Stitch UI */}
      <main className="w-full pt-16 bg-background px-space-xl py-space-xl min-h-screen"><div className="flex flex-col w-full gap-space-lg pb-12">
{/*  Page Header & Narrative Intro  */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div>
<div className="flex items-center gap-space-xs mb-1 text-secondary">
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Account &amp; Journey Setup</span>
<span>•</span>
<span className="font-label-sm text-label-sm text-primary font-semibold">Live Profile Sync</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight font-bold">Your Profile</h1>
<p className="font-body-md text-body-md text-secondary mt-1 max-w-2xl">
        Help EduPath understand where you are today so it can build the most precise, high-velocity learning path for your career transition.
      </p>
</div>
<div className="flex items-center gap-space-sm self-start md:self-auto shrink-0">
<button className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface transition-all font-label-md text-label-md shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">share</span>
<span>Share Public Snapshot</span>
</button>
<button className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-xl bg-primary-container hover:bg-primary text-on-primary transition-all font-label-md text-label-md shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">save</span>
<span>Save Changes</span>
</button>
</div>
</div>
{/*  Profile Readiness & Onboarding Banner  */}
<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm relative overflow-hidden">
<div className="absolute -right-16 -top-16 w-64 h-64 bg-primary/5 rounded-full pointer-events-none blur-2xl"></div>
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg relative z-10">
{/*  Left: Metric & Progress  */}
<div className="flex-1">
<div className="flex items-center justify-between gap-space-md mb-2">
<div className="flex items-center gap-space-sm">
<span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-surface-container-low text-primary">
<span className="material-symbols-outlined text-[20px]">verified_user</span>
</span>
<h2 className="font-headline-md text-headline-md text-on-surface font-bold">Profile Readiness</h2>
</div>
<div className="flex items-baseline gap-1">
<span className="font-headline-xl text-headline-xl text-primary font-bold">82%</span>
<span className="font-label-sm text-label-sm text-secondary">Complete</span>
</div>
</div>
{/*  Custom high-contrast progress rail  */}
<div className="w-full h-2.5 bg-surface-container-low rounded-full overflow-hidden mb-space-md">
<div className="h-full bg-primary-container rounded-full transition-all duration-700 ease-out" ></div>
</div>
{/*  Checklist Grid  */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-sm pt-1">
<div className="flex items-center gap-space-xs bg-surface-container-low/60 px-space-sm py-1.5 rounded-lg">
<span className="material-symbols-outlined text-tertiary-container text-[18px]" >check_circle</span>
<span className="font-label-sm text-label-sm text-on-surface truncate">Basic Info</span>
</div>
<div className="flex items-center gap-space-xs bg-surface-container-low/60 px-space-sm py-1.5 rounded-lg">
<span className="material-symbols-outlined text-tertiary-container text-[18px]" >check_circle</span>
<span className="font-label-sm text-label-sm text-on-surface truncate">4 Skills Logged</span>
</div>
<div className="flex items-center gap-space-xs bg-surface-container-low/60 px-space-sm py-1.5 rounded-lg">
<span className="material-symbols-outlined text-tertiary-container text-[18px]" >check_circle</span>
<span className="font-label-sm text-label-sm text-on-surface truncate">Target: Full Stack</span>
</div>
<div className="flex items-center gap-space-xs bg-surface-container-low/60 px-space-sm py-1.5 rounded-lg">
<span className="material-symbols-outlined text-tertiary-container text-[18px]" >check_circle</span>
<span className="font-label-sm text-label-sm text-on-surface truncate">Goal: 6 Months</span>
</div>
<div className="flex items-center gap-space-xs bg-amber-500/10 px-space-sm py-1.5 rounded-lg">
<span className="material-symbols-outlined text-amber-600 text-[18px]">radio_button_unchecked</span>
<span className="font-label-sm text-label-sm text-amber-900 font-semibold truncate">Resume Sync Pending</span>
</div>
</div>
</div>
{/*  Right: Primary CTA card  */}
<div className="flex flex-col sm:flex-row lg:flex-col items-stretch lg:items-end justify-center gap-space-xs lg:w-72 shrink-0 lg:pl-space-md">
<button className="group flex items-center justify-center gap-space-xs px-space-md py-space-sm rounded-xl bg-primary-container hover:bg-primary text-on-primary transition-all font-label-md text-label-md shadow-md text-center" type="button">
<span className="material-symbols-outlined text-[18px]">upload_file</span>
<span>Upload Resume for 100%</span>
<span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
</button>
<span className="font-label-sm text-label-sm text-secondary text-center lg:text-right">Unlocks adaptive AI study plan tailoring</span>
</div>
</div>
</section>
{/*  Metric Pulse Highlights  */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center gap-space-md">
<div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[22px]">target</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold truncate">L4 Target</span>
<span className="font-label-sm text-label-sm text-secondary truncate">Career Band</span>
</div>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center gap-space-md">
<div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-tertiary-container shrink-0">
<span className="material-symbols-outlined text-[22px]">speed</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold truncate">1 hr / day</span>
<span className="font-label-sm text-label-sm text-secondary truncate">Study Velocity</span>
</div>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center gap-space-md">
<div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[22px]">code_blocks</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold truncate">2 Projects</span>
<span className="font-label-sm text-label-sm text-secondary truncate">Verified Portfolio</span>
</div>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center gap-space-md">
<div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-tertiary-container shrink-0">
<span className="material-symbols-outlined text-[22px]">psychology_alt</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold truncate">Mid-Level</span>
<span className="font-label-sm text-label-sm text-secondary truncate">Benchmark Tier</span>
</div>
</div>
</div>
{/*  Primary Profile Workspace: Split 2-Column Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
{/*  Left Column: Core Identity & Career Trajectory (7 cols)  */}
<div className="lg:col-span-7 flex flex-col gap-space-lg">
{/*  Card 1: Personal Information  */}
<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[22px]">account_circle</span>
<h2 className="font-headline-md text-headline-md text-on-surface font-bold">Personal Information</h2>
</div>
<button className="inline-flex items-center gap-1 text-primary hover:text-on-primary-fixed-variant transition-colors font-label-md text-label-md font-semibold" type="button">
<span className="material-symbols-outlined text-[16px]">edit</span>
<span>Edit</span>
</button>
</div>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-lg p-space-md bg-surface-container-low/50 rounded-xl mb-space-md">
<div className="relative shrink-0">
<img alt="Tejas Patil" className="w-20 h-20 rounded-xl object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida/AEtjO1XydgpqPJIQ5eyUJCBDEYe6_xw8vIcX2_mKk3w8bNDievib2qQhUvJvmmryQ4STIulqFgNoPdGbXxjqdbdHPYOxP6Kk9IU5ZBYhyuRjCczhlDnq3XyHMzCWA2hEdd5KpZO7DpKluK0sYk5QUXlHvz4qG-RL7NthITwJ9fp4g_Uy6JxJwGm5xkj-YIoYx_H-bOr4TdyKt2sTIPT_yGExC7kkEDkI2iOdPpfTqc_zegTPaw"/>
<span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-tertiary-container ring-2 ring-surface-container-lowest flex items-center justify-center text-on-tertiary" title="Active Account">
<span className="material-symbols-outlined text-[12px]">check</span>
</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-headline-md text-headline-md text-on-surface font-bold">Tejas Patil</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-label-sm">Pro Learner</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-0.5">Focusing on high-concurrency Node.js architectures &amp; reactive frontends.</p>
<div className="flex items-center gap-space-md mt-space-xs text-secondary font-label-sm text-label-sm flex-wrap">
<span className="inline-flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">mail</span> tejas@example.com</span>
<span className="inline-flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">location_on</span> San Francisco, CA</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div className="p-space-sm bg-surface-container-low/30 rounded-lg">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">Platform Role</span>
<p className="font-body-md text-body-md text-on-surface font-medium mt-0.5">Software Engineering Fellow</p>
</div>
<div className="p-space-sm bg-surface-container-low/30 rounded-lg">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">Timezone &amp; Cadence</span>
<p className="font-body-md text-body-md text-on-surface font-medium mt-0.5">PST (UTC-8) • Evening Batch</p>
</div>
</div>
</section>
{/*  Card 2: Career Direction & Targets  */}
<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[22px]">explore</span>
<h2 className="font-headline-md text-headline-md text-on-surface font-bold">Career Direction &amp; Goals</h2>
</div>
<span className="px-2 py-0.5 rounded bg-tertiary-fixed/30 text-tertiary font-label-sm text-label-sm font-semibold">Paced</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div className="p-space-md rounded-xl bg-surface-container-low/40 flex flex-col justify-between">
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">Target Engineering Role</span>
<p className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">Full Stack Developer</p>
<p className="font-body-sm text-body-sm text-secondary mt-1">Targeting modern microservices stacks and enterprise React SPA architectures.</p>
</div>
<div className="mt-space-md pt-space-xs flex items-center gap-2">
<span className="inline-flex items-center text-primary text-label-sm font-semibold">
<span className="material-symbols-outlined text-[16px] mr-1">trending_up</span> 14 open matches in cohort
              </span>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low/40 flex flex-col justify-between">
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">Career Milestone</span>
<p className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">Senior Fullstack in 6 Months</p>
<p className="font-body-sm text-body-sm text-secondary mt-1">Achieving technical readiness for Tier-1 engineering interview evaluations.</p>
</div>
<div className="mt-space-md pt-space-xs flex items-center gap-2">
<span className="inline-flex items-center text-tertiary-container text-label-sm font-semibold">
<span className="material-symbols-outlined text-[16px] mr-1">schedule</span> Target: Late Q3 2025
              </span>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low/40">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">Experience Benchmark</span>
<div className="flex items-center justify-between mt-1">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Intermediate</span>
<span className="font-label-md text-label-md text-primary font-bold">1–3 Years</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-1">Core programming established; bridging into distributed computing and cloud deployments.</p>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low/40">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">Learning Availability</span>
<div className="flex items-center justify-between mt-1">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">1 hr / day</span>
<span className="font-label-md text-label-md text-secondary-container text-secondary font-bold">5-Week Pacing</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-1">Optimized for micro-commitments with 1 extended deep-work weekend lab.</p>
</div>
</div>
</section>
{/*  Card 3: Experience & Projects  */}
<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[22px]">source</span>
<h2 className="font-headline-md text-headline-md text-on-surface font-bold">Experience &amp; Key Projects</h2>
</div>
<button className="inline-flex items-center gap-1 text-primary hover:text-on-primary-fixed-variant transition-colors font-label-md text-label-md font-semibold" type="button">
<span className="material-symbols-outlined text-[18px]">add_circle</span>
<span>Add Project</span>
</button>
</div>
<div className="flex flex-col gap-space-md">
{/*  Project 1  */}
<div className="p-space-md rounded-xl bg-surface-container-low/40 hover:bg-surface-container-low transition-colors group">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs mb-space-xs">
<div className="flex items-center gap-space-sm">
<span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-[18px]">layers</span>
</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">E-Commerce Microservices Platform</h3>
</div>
<span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold self-start sm:self-auto">Backend Lead</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mb-space-sm pl-0 sm:pl-10">
              Architected event-driven checkout services handling simulated concurrent traffic spikes, integrated Redis caching layers, and containerized deployment specs.
            </p>
<div className="flex items-center justify-between flex-wrap gap-space-sm pl-0 sm:pl-10">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="px-2 py-0.5 rounded bg-surface-container-lowest font-label-sm text-label-sm text-secondary font-medium">Node.js</span>
<span className="px-2 py-0.5 rounded bg-surface-container-lowest font-label-sm text-label-sm text-secondary font-medium">Express</span>
<span className="px-2 py-0.5 rounded bg-surface-container-lowest font-label-sm text-label-sm text-secondary font-medium">MongoDB</span>
<span className="px-2 py-0.5 rounded bg-surface-container-lowest font-label-sm text-label-sm text-secondary font-medium">Docker</span>
</div>
<a className="text-primary hover:underline font-label-sm text-label-sm inline-flex items-center gap-1" href="#">
                View Repository <span className="material-symbols-outlined text-[14px]">open_in_new</span>
</a>
</div>
</div>
{/*  Project 2  */}
<div className="p-space-md rounded-xl bg-surface-container-low/40 hover:bg-surface-container-low transition-colors group">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs mb-space-xs">
<div className="flex items-center gap-space-sm">
<span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-[18px]">view_kanban</span>
</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">TaskFlow Kanban App</h3>
</div>
<span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed-variant font-label-sm text-label-sm font-semibold self-start sm:self-auto">Full Stack</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mb-space-sm pl-0 sm:pl-10">
              Real-time collaboration board with responsive drag-and-drop mechanics, optimistic UI synchronization, and granular Firebase security rules.
            </p>
<div className="flex items-center justify-between flex-wrap gap-space-sm pl-0 sm:pl-10">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="px-2 py-0.5 rounded bg-surface-container-lowest font-label-sm text-label-sm text-secondary font-medium">React</span>
<span className="px-2 py-0.5 rounded bg-surface-container-lowest font-label-sm text-label-sm text-secondary font-medium">Tailwind CSS</span>
<span className="px-2 py-0.5 rounded bg-surface-container-lowest font-label-sm text-label-sm text-secondary font-medium">Firebase</span>
</div>
<a className="text-primary hover:underline font-label-sm text-label-sm inline-flex items-center gap-1" href="#">
                View Live Demo <span className="material-symbols-outlined text-[14px]">open_in_new</span>
</a>
</div>
</div>
</div>
</section>
</div>
{/*  Right Column: Skills Architecture & Quick Tools (5 cols)  */}
<div className="lg:col-span-5 flex flex-col gap-space-lg">
{/*  Current Skills & Verified Proficiency  */}
<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div>
<h2 className="font-headline-md text-headline-md text-on-surface font-bold">Current Skills</h2>
<span className="font-label-sm text-label-sm text-secondary">4 verified competencies logged</span>
</div>
<button className="inline-flex items-center gap-1 px-space-sm py-1 rounded-lg bg-surface-container-low hover:bg-surface-container text-primary font-label-md text-label-md font-semibold transition-all" type="button">
<span className="material-symbols-outlined text-[16px]">add</span>
<span>Add Skill</span>
</button>
</div>
<div className="flex flex-col gap-space-sm">
{/*  Skill Item 1  */}
<div className="p-space-sm bg-surface-container-low/40 rounded-xl flex items-center justify-between">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[18px]">javascript</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold truncate">JavaScript</span>
<span className="font-label-sm text-label-sm text-secondary">ES6+, Asynchronous IO, Closures</span>
</div>
</div>
<span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-label-sm text-label-sm font-semibold shrink-0">Advanced</span>
</div>
{/*  Skill Item 2  */}
<div className="p-space-sm bg-surface-container-low/40 rounded-xl flex items-center justify-between">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[18px]">token</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold truncate">React</span>
<span className="font-label-sm text-label-sm text-secondary">Hooks, Context API, Redux</span>
</div>
</div>
<span className="px-2.5 py-1 rounded-full bg-sky-50 text-sky-800 font-label-sm text-label-sm font-semibold shrink-0">Intermediate</span>
</div>
{/*  Skill Item 3  */}
<div className="p-space-sm bg-surface-container-low/40 rounded-xl flex items-center justify-between">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[18px]">data_object</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold truncate">Node.js</span>
<span className="font-label-sm text-label-sm text-secondary">REST, Express, Middleware</span>
</div>
</div>
<span className="px-2.5 py-1 rounded-full bg-sky-50 text-sky-800 font-label-sm text-label-sm font-semibold shrink-0">Intermediate</span>
</div>
{/*  Skill Item 4  */}
<div className="p-space-sm bg-surface-container-low/40 rounded-xl flex items-center justify-between">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[18px]">fork_right</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold truncate">Git &amp; GitHub</span>
<span className="font-label-sm text-label-sm text-secondary">Branching, Rebasing, CI actions</span>
</div>
</div>
<span className="px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-800 font-label-sm text-label-sm font-semibold shrink-0">Proficient</span>
</div>
</div>
{/*  Inline skill gap radar snapshot  */}
<div className="mt-space-md p-space-md bg-surface-container-low/30 rounded-xl">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">Curriculum Gap Alerts</span>
<a className="font-label-sm text-label-sm text-primary font-semibold hover:underline" href="#">Assess Gaps</a>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            To reach your <strong className="text-on-surface">Senior Fullstack</strong> objective, EduPath recommends testing for <strong className="text-primary">PostgreSQL</strong> and <strong className="text-primary">System Design</strong> competencies next.
          </p>
</div>
</section>
{/*  Resume & Automated Portfolio Analyzer Rail  */}
<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">document_scanner</span>
<h2 className="font-headline-md text-headline-md text-on-surface font-bold">Resume &amp; Proof of Work</h2>
</div>
<span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 font-label-sm text-label-sm font-semibold">1 Missing</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mb-space-md">
          Synchronize your latest CV or LinkedIn export for automatic skill mapping.
        </p>
{/*  Drop area box  */}
<div className="border-2 border-dashed border-outline-variant/60 hover:border-primary/60 transition-colors rounded-xl p-space-lg text-center bg-surface-container-low/20 flex flex-col items-center justify-center cursor-pointer group">
<div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform mb-2">
<span className="material-symbols-outlined text-[24px]">cloud_upload</span>
</div>
<span className="font-label-md text-label-md text-on-surface font-bold">Drop your resume here, or <span className="text-primary underline">browse</span></span>
<span className="font-label-sm text-label-sm text-secondary mt-1">Supports PDF, DOCX up to 10MB</span>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between text-secondary font-label-sm text-label-sm">
<span className="inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-tertiary-container">lock</span>
            Encrypted &amp; private
          </span>
<span>Last parsed: None</span>
</div>
</section>
{/*  Study Plan Recalibration Assistant Box  */}
<div className="bg-gradient-to-br from-surface-container to-surface-container-low p-space-md rounded-xl shadow-sm flex items-start gap-space-md">
<div className="w-9 h-9 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[20px]">smart_toy</span>
</div>
<div className="flex-1 min-w-0">
<h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">Need a tailored study path?</h4>
<p className="font-body-sm text-body-sm text-secondary mt-0.5">
            Your personalized weekly roadmap dynamically refactors every time you update your skills or target availability.
          </p>
<div className="mt-space-xs">
<a className="inline-flex items-center gap-1 text-primary font-label-md text-label-md font-semibold hover:underline" href="#">
<span>View Current Learning Roadmap</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div></main>
    </div>
  );
}
