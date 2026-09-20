import { useAuthStore } from '../../store/authStore';

export default function MentorOverviewRequestReviewEdupath() {
  const user = useAuthStore((state) => state.user);
  return (
    <div className="min-h-screen bg-surface">
      {/* Generated from Stitch UI */}
      <main className="w-full pt-16 px-8 pb-12 bg-surface min-h-screen"><div className="flex flex-col w-full">
{/*  Mentor Workspace Mode Banner  */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-wider">Staff Mentor Mode</span>
<span className="text-secondary font-label-sm text-label-sm">• Engineering &amp; Cloud Tracks</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">Welcome, {user?.name?.split(' ')[0] || 'Mentor'}</h1>
<p className="font-body-md text-body-md text-secondary mt-0.5">Manage incoming learner mentorship requests, review code checkpoints, and monitor milestone progression.</p>
</div>
<div className="flex items-center gap-3 self-start md:self-auto">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-container-lowest shadow-sm text-on-surface font-label-md text-label-md">
<span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
<span>Office Hours: <strong>2 Slots Open Today</strong></span>
</div>
<button className="inline-flex items-center gap-2 px-4 py-2 bg-primary-container text-on-primary rounded-xl font-label-md text-label-md shadow-sm hover:opacity-95 transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">add_circle</span>
<span>Create Diagnostic Lab</span>
</button>
</div>
</div>
{/*  Metric Shelf  */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
{/*  Metric 1  */}
<div className="p-5 bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-secondary">Pending Requests</span>
<div className="w-10 h-10 rounded-xl bg-error-container text-on-error-container flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">mark_email_unread</span>
</div>
</div>
<div className="mt-4">
<div className="flex items-baseline gap-2">
<span className="font-headline-xl text-headline-xl text-on-surface">2</span>
<span className="font-label-sm text-label-sm text-error">Requires Review</span>
</div>
<div className="w-full bg-surface-container-low h-1.5 rounded-full mt-3 overflow-hidden">
<div className="bg-primary-container h-full rounded-full" ></div>
</div>
</div>
</div>
{/*  Metric 2  */}
<div className="p-5 bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-secondary">Active Learners</span>
<div className="w-10 h-10 rounded-xl bg-primary-fixed text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">person_celebrate</span>
</div>
</div>
<div className="mt-4">
<div className="flex items-baseline gap-2">
<span className="font-headline-xl text-headline-xl text-on-surface">4</span>
<span className="font-label-sm text-label-sm text-secondary">In-flight Guidance</span>
</div>
<div className="flex items-center gap-1.5 mt-3 text-secondary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[15px] text-tertiary">check_circle</span>
<span>All cohorts on-pace</span>
</div>
</div>
</div>
{/*  Metric 3  */}
<div className="p-5 bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-secondary">Guidance Provided</span>
<div className="w-10 h-10 rounded-xl bg-surface-container-high text-on-surface-variant flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
</div>
</div>
<div className="mt-4">
<div className="flex items-baseline gap-2">
<span className="font-headline-xl text-headline-xl text-on-surface">28</span>
<span className="font-label-sm text-label-sm text-secondary">This Quarter</span>
</div>
<div className="flex items-center gap-1 mt-3 font-label-sm text-label-sm text-tertiary">
<span className="material-symbols-outlined text-[15px]">trending_up</span>
<span>+8 reviews vs. last month</span>
</div>
</div>
</div>
{/*  Metric 4  */}
<div className="p-5 bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-secondary">Velocity Impact</span>
<div className="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">speed</span>
</div>
</div>
<div className="mt-4">
<div className="flex items-baseline gap-2">
<span className="font-headline-xl text-headline-xl text-on-surface">+34%</span>
<span className="font-label-sm text-label-sm text-secondary">Faster Mastery</span>
</div>
<div className="flex items-center gap-1 mt-3 font-label-sm text-label-sm text-secondary">
<span className="material-symbols-outlined text-[15px]">verified</span>
<span>Verified via Checkpoints</span>
</div>
</div>
</div>
</div>
{/*  Primary Workspace Content (Asymmetric 12-column grid)  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
{/*  Left Column: Focus Mentorship Request Card (8 Cols)  */}
<div className="lg:col-span-8 flex flex-col gap-6">
{/*  Detailed Review Panel  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-6 flex flex-col">
{/*  Card Header  */}
<div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-surface-container">
<div className="flex items-center gap-3">
<div className="relative">
<img className="w-12 h-12 rounded-xl object-cover" data-alt="Portrait photo of Tejas Patil, an engineering professional with focused expression, clean lighting, wearing a navy sweater against modern studio background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZhbeiOFOND9kg8T72GfG7sND6ybBkLsfXEFNdnZ0vio6B06N46VE2yk-5ynxfgizjKNsKOoqPj7wxy2ieeuCIPR8gQbLzh5_u65O10-JmQEKuv8CvE3xfWKw_yYPfb-U56p5a3d3LnV0XaYLWajXvV_raXIyNvt38C3nC-s0grzBXw4Z3J-Ok1UEjitBMkvA_Qkkt1cG7WWFNz9bld7T0_t9_10Wi3Nk8j9j3tmBK"/>
<span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-error rounded-full ring-2 ring-surface-container-lowest"></span>
</div>
<div>
<div className="flex items-center gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Alex Learner</h3>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm">Level 3 Full Stack</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Requested 42 minutes ago • Checkpoint Intervention</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="px-2.5 py-1 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
              High Priority Block
            </span>
</div>
</div>
{/*  Request Body Content  */}
<div className="pt-5 space-y-5">
{/*  Topic Box  */}
<div className="bg-surface-container-low p-4 rounded-xl">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Requested Mentorship Topic</span>
<div className="mt-1 flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface">Stateless JWT Revocation &amp; Redis Blacklisting</span>
<span className="font-label-sm text-label-sm text-primary-container font-semibold">Track: Express 5.x REST Core</span>
</div>
</div>
{/*  Diagnostic Signal & Checkpoint Metrics  */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-3.5 bg-surface-container-lowest rounded-xl shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary">Diagnostic Signal</span>
<span className="font-label-sm text-label-sm text-error font-semibold">Score: 58%</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface mt-1">Failed Checkpoint 04: "Token Invalidation Under High Concurrency"</p>
<div className="w-full bg-surface-container h-1.5 rounded-full mt-2.5">
<div className="bg-error h-full rounded-full" ></div>
</div>
</div>
<div className="p-3.5 bg-surface-container-lowest rounded-xl shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary">Target Standard</span>
<span className="font-label-sm text-label-sm text-tertiary font-semibold">Target: 85%</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface mt-1">Expected: Redis TTL auto-expiry &amp; atomic multi-exec pipelines</p>
<div className="w-full bg-surface-container h-1.5 rounded-full mt-2.5">
<div className="bg-tertiary h-full rounded-full" ></div>
</div>
</div>
</div>
{/*  Learner Context Note  */}
<div className="bg-surface-container-low p-4 rounded-xl">
<div className="flex items-center gap-2 mb-2 text-on-surface font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px] text-secondary">chat_bubble_outline</span>
<span>Learner's Explanation</span>
</div>
<p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
              "I'm having trouble implementing clean token revocation using Redis without introducing latency or race conditions in async Express middleware. My middleware occasionally blocks the event loop when querying sets of blacklisted JTI identifiers during stress runs."
            </p>
</div>
{/*  Relevant Lab Snippet Container  */}
<div className="bg-surface-container-low rounded-xl p-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-primary">terminal</span>
<span className="font-label-md text-label-md text-on-surface">Lab #ND-504: Express Middleware Context</span>
</div>
<button className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary hover:underline" type="button">
<span>View Full Workspace Sandbox</span>
<span className="material-symbols-outlined text-[14px]">open_in_new</span>
</button>
</div>
{/*  Code View Mock  */}
<div className="bg-inverse-surface text-inverse-on-surface p-3.5 rounded-lg font-mono text-xs overflow-x-auto leading-relaxed">
<div className="text-secondary-container">// verifyRevocationMiddleware.js</div>
<div><span className="text-primary-fixed-dim">const</span> isRevoked = <span className="text-primary-fixed-dim">await</span> redis.get(<span className="text-tertiary-fixed-dim">`blacklist:$&#123;decoded.jti&#125;`</span>);</div>
<div className="text-error-container">// Bottleneck identified: Synchronous pipeline contention on burst requests</div>
<div><span className="text-primary-fixed-dim">if</span> (isRevoked) &#123; <span className="text-primary-fixed-dim">throw new</span> UnauthorizedError(<span className="text-tertiary-fixed-dim">'Token invalidated'</span>); &#125;</div>
</div>
</div>
{/*  Action Buttons  */}
<div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
<div className="flex items-center gap-2">
<button className="px-4 py-2.5 rounded-xl bg-surface-container-lowest shadow-sm hover:bg-surface-container text-on-surface font-label-md text-label-md transition-all" type="button">
                Decline / Re-route
              </button>
<button className="px-4 py-2.5 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-all" type="button">
                Suggest Async Fix
              </button>
</div>
<button className="px-5 py-2.5 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md shadow-sm hover:bg-primary transition-all flex items-center justify-center gap-2" type="button">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span>Accept Request &amp; Open Workspace</span>
</button>
</div>
</div>
</div>
{/*  Second Pending Request (Condensed Review)  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-xl object-cover" data-alt="Portrait photo of Marcus Vance, senior software engineer with glasses, soft natural daylight, office interior background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoOzA5KUShZ4JgQSxSMOdw3w7XJSAxo5AIzRTeVFkqq_k493z11lbUHTXs-ZQJlIJeBFmNcD89cvb20Cne1mZjISe0U6KGht0FwppruBJULCOMmviilL_P0I5IIaeMfNrBZvDiinfW8gKStDA1KFmUDKdWOoU4I6tOfGj6xnnB8gyWvha1pQA8-rz5KU012--3Q2jBZ2bNhMB7rl5D2U5lLt11yKeLj6l-sqtQ7dvx"/>
<div>
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface">Marcus Vance</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Level 4 DevOps</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Topic: Kubernetes Ingress Controller SSL Termination &amp; Cert-Manager</p>
</div>
</div>
<div className="flex items-center gap-2 self-end sm:self-center">
<button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-all" type="button">
            Inspect Lab
          </button>
<button className="px-3 py-1.5 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm hover:bg-primary transition-all" type="button">
            Review Request
          </button>
</div>
</div>
</div>
{/*  Right Column: Quick Guidance Dispatcher & Calendar (4 Cols)  */}
<div className="lg:col-span-4 flex flex-col gap-6">
{/*  Section: Provide Structured Guidance Tool  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-5 flex flex-col">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-primary">send_time_extension</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Dispatch Guidance</h2>
</div>
<span className="font-label-sm text-label-sm text-secondary">Target: Tejas P.</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mb-4">Send curated documentation, atomic code recipes, or targeted sub-tasks directly into learner's task stream.</p>
{/*  Template Selector  */}
<div className="space-y-3 mb-4">
<div>
<label className="block font-label-sm text-label-sm text-secondary mb-1">Guidance Paradigm</label>
<select className="w-full px-3 py-2 bg-surface-container-low rounded-xl text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container transition-all">
<option>Redis Bloom Filter vs Set Pattern</option>
<option>Atomic Pipeline (MULTI/EXEC) Execution</option>
<option>JWT Blacklist TTL Automation Strategy</option>
<option>Custom Architectural Note</option>
</select>
</div>
<div>
<label className="block font-label-sm text-label-sm text-secondary mb-1">Actionable Recommendation</label>
<textarea className="w-full px-3 py-2 bg-surface-container-low rounded-xl text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container transition-all resize-none" placeholder="Provide actionable debugging steps or links..." rows={3}>Consider swapping the synchronous query out for Redis SETEX with a TTL matching remainder of JWT expiration timestamp. This avoids unbounded key growth.</textarea>
</div>
<div>
<label className="block font-label-sm text-label-sm text-secondary mb-1">Attach Supplementary Resource</label>
<div className="flex items-center gap-2 p-2 bg-surface-container-low rounded-xl">
<span className="material-symbols-outlined text-[18px] text-secondary">link</span>
<span className="font-body-sm text-body-sm text-on-surface truncate">lab-nd504-solution-diff.patch</span>
<span className="material-symbols-outlined text-[16px] text-secondary ml-auto cursor-pointer">close</span>
</div>
</div>
</div>
<button className="w-full py-2.5 bg-primary-container text-on-primary rounded-xl font-label-md text-label-md hover:bg-primary shadow-sm transition-all flex items-center justify-center gap-2" type="button">
<span className="material-symbols-outlined text-[18px]">publish</span>
<span>Publish to Learner Queue</span>
</button>
</div>
{/*  Quick Session Sync Planner  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-5">
<div className="flex items-center justify-between mb-3">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Upcoming Syncs</h2>
<span className="font-label-sm text-label-sm text-primary font-semibold">View Calendar</span>
</div>
<div className="space-y-3">
<div className="p-3 bg-surface-container-low rounded-xl flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-surface-container flex flex-col items-center justify-center text-on-surface">
<span className="font-label-sm text-[10px] uppercase font-bold leading-none">Tomorrow</span>
<span className="font-label-md text-label-md font-bold leading-none mt-0.5">14:00</span>
</div>
<div>
<span className="block font-label-md text-label-md text-on-surface">Carlos Mendez</span>
<span className="font-body-sm text-body-sm text-secondary">Next.js 14 Server Actions</span>
</div>
</div>
<button className="text-secondary hover:text-on-surface" type="button">
<span className="material-symbols-outlined text-[20px]">videocam</span>
</button>
</div>
<div className="p-3 bg-surface-container-low rounded-xl flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-surface-container flex flex-col items-center justify-center text-on-surface">
<span className="font-label-sm text-[10px] uppercase font-bold leading-none">Thu</span>
<span className="font-label-md text-label-md font-bold leading-none mt-0.5">16:30</span>
</div>
<div>
<span className="block font-label-md text-label-md text-on-surface">Alex Jensen</span>
<span className="font-body-sm text-body-sm text-secondary">Docker Multi-Stage Review</span>
</div>
</div>
<button className="text-secondary hover:text-on-surface" type="button">
<span className="material-symbols-outlined text-[20px]">videocam</span>
</button>
</div>
</div>
</div>
</div>
</div>
{/*  Section 2: Active Learners Under Guidance (Comprehensive Roster)  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-6 mb-8">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
<div>
<h2 className="font-headline-md text-headline-md text-on-surface">Active Learners Under Guidance</h2>
<p className="font-body-sm text-body-sm text-secondary">Learners currently assigned to your mentoring cycle with live milestone tracking.</p>
</div>
<div className="flex items-center gap-2">
<span className="px-3 py-1.5 bg-surface-container-low rounded-xl font-label-sm text-label-sm text-secondary">Cohort: Q1 Accelerators</span>
<button className="p-1.5 rounded-xl bg-surface-container-low text-secondary hover:text-on-surface" type="button">
<span className="material-symbols-outlined text-[18px]">filter_list</span>
</button>
</div>
</div>
{/*  Learner Roster Table/Cards  */}
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="text-secondary font-label-sm text-label-sm border-b border-surface-container pb-3">
<th className="pb-3 font-semibold">LEARNER</th>
<th className="pb-3 font-semibold">CURRENT FOCUS &amp; TOPIC</th>
<th className="pb-3 font-semibold">MILESTONE PROGRESS</th>
<th className="pb-3 font-semibold">STATUS</th>
<th className="pb-3 font-semibold text-right">WORKSPACE ACTION</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container">
{/*  Roster Row 1  */}
<tr className="group hover:bg-surface-container-low transition-colors">
<td className="py-4 pr-4">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-xl object-cover" data-alt="Close up professional portrait of Tejas Patil, clear features, soft focus office in background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB22FgU-WpHkWgAWVDhzKMxS66LzU3tvGSu65fmruycTmSiJeNOmnTviTBuag2KYOzgvUVOTI1y4TNdoABFU6sMQ9s3ffe41AWcFhP4v8Zt5IC28Hi67Us8Q4ha2HErQ-ogj-bkcnDjAWJRskHsIQjafIxm8oEJIjp3k_qsTJSaQ-Ap5vSZpsaUJmsAY1uWyxF20Yi268qy0m4T22z5R_6Ma1rFASWs2ZLr0JjFXNy"/>
<div>
<div className="font-label-md text-label-md text-on-surface font-semibold">Alex Learner</div>
<div className="font-body-sm text-body-sm text-secondary">Full Stack Track</div>
</div>
</div>
</td>
<td className="py-4 pr-4">
<span className="font-label-md text-label-md text-on-surface">Node.js Auth &amp; Redis Invalidation</span>
<span className="block font-body-sm text-body-sm text-secondary">Checkpoint 04 Diagnostic</span>
</td>
<td className="py-4 pr-4 w-48">
<div className="flex items-center justify-between font-label-sm text-label-sm text-secondary mb-1">
<span>Phase 2 of 4</span>
<span className="font-semibold text-on-surface">42%</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-primary-container h-full rounded-full" ></div>
</div>
</td>
<td className="py-4 pr-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-error animate-ping"></span>
                Review Pending
              </span>
</td>
<td className="py-4 text-right">
<button className="px-3 py-1.5 bg-primary-container text-on-primary rounded-lg font-label-sm text-label-sm hover:bg-primary transition-all" type="button">
                Review Issue
              </button>
</td>
</tr>
{/*  Roster Row 2  */}
<tr className="group hover:bg-surface-container-low transition-colors">
<td className="py-4 pr-4">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-xl object-cover" data-alt="Portrait photo of Priya Nair, data engineer with a confident smile, wearing glasses and warm beige blouse in a tech campus." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEri45e_ZSwUc1LYrozdoAnvWpw3pPitdeA9tNudhKyoXKFf8ghQDKRrOBynOE8VYGrVTMok5vHJcxKi6NiEoTWTmPEgJUj_9BtXFU26eqVY-zPBvaar6vSrwxCZviehn58dnp5SYM1s81Xys7qDJHuEj2I_Gg0JwQqmcCk4FF2WVGTManSewjtQycn9oO9cVX0yb4EeCYKRNK5XK1KV1YW7wCgyDGUkY-Qe2Fm2ae"/>
<div>
<div className="font-label-md text-label-md text-on-surface font-semibold">Priya Nair</div>
<div className="font-body-sm text-body-sm text-secondary">Database Systems</div>
</div>
</div>
</td>
<td className="py-4 pr-4">
<span className="font-label-md text-label-md text-on-surface">PostgreSQL Query Tuning &amp; Indexes</span>
<span className="block font-body-sm text-body-sm text-secondary">EXPLAIN ANALYZE Optimization</span>
</td>
<td className="py-4 pr-4 w-48">
<div className="flex items-center justify-between font-label-sm text-label-sm text-secondary mb-1">
<span>Phase 3 of 4</span>
<span className="font-semibold text-on-surface">78%</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-tertiary h-full rounded-full" ></div>
</div>
</td>
<td className="py-4 pr-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                Guidance Reviewed
              </span>
</td>
<td className="py-4 text-right">
<button className="px-3 py-1.5 bg-surface-container text-on-surface rounded-lg font-label-sm text-label-sm hover:bg-surface-container-high transition-all" type="button">
                Open Milestones
              </button>
</td>
</tr>
{/*  Roster Row 3  */}
<tr className="group hover:bg-surface-container-low transition-colors">
<td className="py-4 pr-4">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-xl object-cover" data-alt="Portrait photo of Alex Jensen, cloud systems learner in modern tech office, warm ambient lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEL28SdimhR7j9RY-49z7TLRX8BfpnJVmADx59LitHkX1Xo8ZQMYml0Bsd4jkxY_vT2c9wXwrVyNn5gmQ3GHebQ0eJksuSfwKblDI98gpzfvZBVB9i60CYx-EvjGRmxK1GLbkxwvPLZyYcDaMT9jkfwz3M_FcU7UgWsFfNGM-WklaR_hEEl5yVoIzvpczddDgl23KaRoynaZgZdCEmXg9i8VFXjxlwhUMDZbPnbP5K"/>
<div>
<div className="font-label-md text-label-md text-on-surface font-semibold">Alex Jensen</div>
<div className="font-body-sm text-body-sm text-secondary">Cloud Architecture</div>
</div>
</div>
</td>
<td className="py-4 pr-4">
<span className="font-label-md text-label-md text-on-surface">Docker Multi-Stage Builds &amp; Compose</span>
<span className="block font-body-sm text-body-sm text-secondary">Production Image Minimization</span>
</td>
<td className="py-4 pr-4 w-48">
<div className="flex items-center justify-between font-label-sm text-label-sm text-secondary mb-1">
<span>Capstone Phase</span>
<span className="font-semibold text-on-surface">91%</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-tertiary h-full rounded-full" ></div>
</div>
</td>
<td className="py-4 pr-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                Capstone Prep
              </span>
</td>
<td className="py-4 text-right">
<button className="px-3 py-1.5 bg-surface-container text-on-surface rounded-lg font-label-sm text-label-sm hover:bg-surface-container-high transition-all" type="button">
                Assess Artifact
              </button>
</td>
</tr>
{/*  Roster Row 4  */}
<tr className="group hover:bg-surface-container-low transition-colors">
<td className="py-4 pr-4">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-xl object-cover" data-alt="Portrait photo of Carlos Mendez, frontend engineer, candid indoor shot with clean background and gentle smile." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcH8_GCMteax7c-0LgPLO1pRBWz-owLeMO_ZGFLgDh3wH4VWOO6WA4XSJ7AvMzGvI-ne4PDGRLDy6MmIFVPvQa3jaTUiA8M1qJ1TXy97C0EPHqFw6hEjPNkO4vOyY8E4QLNbMlX7BhV_gbIMKSw6hqZytOuDI6b0UZYAoHy4lMdbg8fDr19yEQSB-9w-hlUXa2pqwjx31WD4WBaS0A5J-5Ox-YnA9hOGobXZy1oBpf"/>
<div>
<div className="font-label-md text-label-md text-on-surface font-semibold">Carlos Mendez</div>
<div className="font-body-sm text-body-sm text-secondary">Modern Frontend</div>
</div>
</div>
</td>
<td className="py-4 pr-4">
<span className="font-label-md text-label-md text-on-surface">Next.js 14 Server Actions &amp; Caching</span>
<span className="block font-body-sm text-body-sm text-secondary">Route Handler Refactoring</span>
</td>
<td className="py-4 pr-4 w-48">
<div className="flex items-center justify-between font-label-sm text-label-sm text-secondary mb-1">
<span>Phase 2 of 4</span>
<span className="font-semibold text-on-surface">54%</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-primary-container h-full rounded-full" ></div>
</div>
</td>
<td className="py-4 pr-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                Sync Tomorrow
              </span>
</td>
<td className="py-4 text-right">
<button className="px-3 py-1.5 bg-surface-container text-on-surface rounded-lg font-label-sm text-label-sm hover:bg-surface-container-high transition-all" type="button">
                Prepare Agenda
              </button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/*  Section 3: Diagnostic Signal Summary Bar (Analytical Footer Tile)  */}
<div className="bg-gradient-to-r from-primary-fixed-dim/30 to-surface-container-low rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">insights</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Cohort Bottleneck Detected: Asynchronous Token Management</h3>
<p className="font-body-sm text-body-sm text-secondary">3 out of 5 active full-stack learners have flagged Redis or JWT lifecycle edge cases this week.</p>
</div>
</div>
<button className="px-4 py-2 bg-surface-container-lowest text-primary hover:bg-surface font-label-md text-label-md rounded-xl shadow-sm transition-all whitespace-nowrap" type="button">
      Schedule Cohort Office Hours
    </button>
</div>
</div></main>
    </div>
  );
}
