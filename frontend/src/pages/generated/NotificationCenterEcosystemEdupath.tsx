
export default function NotificationCenterEcosystemEdupath() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Generated from Stitch UI */}
      <main className="flex-1 pt-16 bg-background w-full px-8 py-6"><div className="flex flex-col w-full gap-6">
{/*  Breadcrumbs & Meta Top Strip  */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex flex-col gap-1">
<nav className="flex items-center gap-2 font-label-sm text-label-sm text-secondary">
<a className="hover:text-primary transition-colors flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-[16px]">grid_view</span>
<span>Dashboard</span>
</a>
<span className="material-symbols-outlined text-[14px] text-outline-variant">chevron_right</span>
<span className="text-on-surface font-semibold">Notifications</span>
</nav>
<div className="flex items-baseline gap-3 mt-1">
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">Notification Center</h1>
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          2 Unread
        </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
        Stay updated on adaptive learning plan calibrations, mentor feedback, assessment checkpoints, and system activity.
      </p>
</div>
{/*  Header Quick Actions  */}
<div className="flex items-center gap-3 self-start md:self-center flex-shrink-0">
<button className="group flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-on-surface shadow-sm hover:shadow transition-all" type="button">
<span className="material-symbols-outlined text-[18px] text-secondary group-hover:text-primary transition-colors">done_all</span>
<span className="font-label-md text-label-md">Mark All as Read</span>
</button>
<button className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">settings</span>
<span className="font-label-md text-label-md">Preferences</span>
</button>
</div>
</div>
{/*  Filter Category Chips Bar  */}
<div className="flex items-center justify-between gap-4 overflow-x-auto pb-1">
<div className="flex items-center gap-2 min-w-max">
<button className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-sm" type="button">
<span>All</span>
<span className="px-1.5 py-0.5 rounded-md bg-on-primary/20 text-on-primary font-label-sm text-label-sm leading-none font-bold">7</span>
</button>
<button className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-label-md text-label-md" type="button">
<span>Learning</span>
<span className="px-1.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-sm text-label-sm leading-none font-semibold">2</span>
</button>
<button className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-label-md text-label-md" type="button">
<span>Plan Updates</span>
<span className="px-1.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-sm text-label-sm leading-none font-semibold">2</span>
</button>
<button className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-label-md text-label-md" type="button">
<span>Assessments</span>
<span className="px-1.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-sm text-label-sm leading-none font-semibold">1</span>
</button>
<button className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-label-md text-label-md" type="button">
<span>Mentorship</span>
<span className="px-1.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-sm text-label-sm leading-none font-semibold">1</span>
</button>
<button className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-label-md text-label-md" type="button">
<span>System</span>
<span className="px-1.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-sm text-label-sm leading-none font-semibold">1</span>
</button>
</div>
{/*  View & Density Switchers  */}
<div className="hidden lg:flex items-center gap-2 flex-shrink-0 text-secondary">
<span className="font-label-sm text-label-sm text-outline">Viewing active feed</span>
<div className="h-4 w-px bg-outline-variant/40 mx-1"></div>
<button className="p-1 rounded text-primary hover:bg-surface-container-low transition-colors" title="Detailed Feed View" type="button">
<span className="material-symbols-outlined text-[18px]">view_agenda</span>
</button>
<button className="p-1 rounded text-outline hover:text-on-surface hover:bg-surface-container-low transition-colors" title="Compact Table View" type="button">
<span className="material-symbols-outlined text-[18px]">reorder</span>
</button>
</div>
</div>
{/*  Main Asymmetric Workspace Layout  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
{/*  Primary Feed Stream (70% column / col-span-8)  */}
<div className="lg:col-span-8 flex flex-col gap-6">
{/*  Today Group  */}
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between px-1">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface">Today</span>
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
<span className="font-label-sm text-label-sm text-secondary">2 priority alerts</span>
</div>
<span className="font-label-sm text-label-sm text-outline">Sync interval: Realtime</span>
</div>
{/*  Notification 1: Adaptive Plan Calibrated (Unread)  */}
<div className="relative bg-surface-container-lowest rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row gap-4">
{/*  Unread Accent Indicator  */}
<div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-primary"></div>
{/*  Category Icon Box  */}
<div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
<span className="material-symbols-outlined text-[24px]">auto_awesome</span>
</div>
{/*  Content Body  */}
<div className="flex-1 flex flex-col gap-2 min-w-0">
<div className="flex flex-wrap items-baseline justify-between gap-2">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-bold">Adaptive Plan Calibrated — Node.js Authentication</span>
<span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">New Path</span>
</div>
<span className="font-label-sm text-label-sm text-secondary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">schedule</span>
                18 min ago
              </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              EduPath added a 45-min foundational drill on stateless JWT revocation and rescheduled your Capstone to Saturday based on Checkpoint 04 diagnostic.
            </p>
{/*  Inline Micro-Insight Card  */}
<div className="bg-surface-container-low rounded-xl p-3 flex items-center justify-between gap-3 text-on-surface-variant">
<div className="flex items-center gap-2.5 min-w-0">
<span className="material-symbols-outlined text-primary text-[20px] flex-shrink-0">tune</span>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">Target: Stateless JWT Revocation &amp; In-Memory Denylists</span>
<span className="font-body-sm text-body-sm text-secondary truncate">Estimated effort: +45m • Capstone Milestone date shifted +48h</span>
</div>
</div>
<span className="px-2 py-1 rounded bg-surface-container font-label-sm text-label-sm text-primary font-semibold flex-shrink-0">Impact: High</span>
</div>
{/*  Action Strip  */}
<div className="flex items-center gap-3 pt-2">
<button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-sm hover:bg-primary-container transition-all" type="button">
<span>View Updated Plan</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
<button className="px-3.5 py-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all font-label-md text-label-md" type="button">
                Dismiss
              </button>
</div>
</div>
</div>
{/*  Notification 2: Mentorship Accepted (Unread)  */}
<div className="relative bg-surface-container-lowest rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row gap-4">
{/*  Unread Accent Indicator  */}
<div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-primary"></div>
{/*  Mentor Avatar / Icon Box  */}
<div className="relative w-11 h-11 flex-shrink-0">
<img className="w-11 h-11 rounded-xl object-cover" data-alt="Close up professional portrait photo of a senior male software architect in his early 30s with friendly expression, dark glasses, soft studio lighting with subtle cool blue tones in background, sharp focus, modern executive editorial look." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA49YWMgggJ_kQc4wClmrkqDzghEGt0jRaK5f7OIgHNpo1zct7F-cggCbChhXbFgue_wMMSTT6ZgNkzayaqnF0Ps7NwfrNcgnFtfjiKe1bNS4U17mf4OnlyCgja-3P-LAoqhFHfZOLyAtpXz0BKyoI7cL8R0ZiCAGKbKuI_HVPtCWP_02aIHTDjacjyDwGwlIWHmBkTLZ6Zh4DHeRJESfrhcUtpot8Bo3OjJAuyNMA8"/>
<div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center ring-2 ring-surface-container-lowest">
<span className="material-symbols-outlined text-[12px]">check</span>
</div>
</div>
{/*  Content Body  */}
<div className="flex-1 flex flex-col gap-2 min-w-0">
<div className="flex flex-wrap items-baseline justify-between gap-2">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-bold">Mentorship Request Accepted by Rahul Sharma</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary font-label-sm text-label-sm font-semibold">Confirmed</span>
</div>
<span className="font-label-sm text-label-sm text-secondary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">schedule</span>
                2 hours ago
              </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Staff Backend Engineer @ Stripe accepted your request on <span className="text-on-surface font-medium">“Token Invalidation &amp; Redis Blacklisting”</span>. Milestone session scheduled for Friday 5:30 PM PST.
            </p>
{/*  Calendar Event Preview Box  */}
<div className="bg-surface-container-low rounded-xl p-3 flex items-center justify-between gap-3 text-on-surface-variant">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex flex-col items-center justify-center font-bold text-primary flex-shrink-0">
<span className="text-[9px] uppercase tracking-wider text-secondary">FRI</span>
<span className="text-[14px] leading-tight">28</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">1:1 Milestone Deep-Dive: Token Security</span>
<span className="font-body-sm text-body-sm text-secondary">5:30 PM – 6:15 PM PST • Google Meet (Syncing to Google Calendar)</span>
</div>
</div>
<span className="px-2 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">videocam</span>
                Direct Join Ready
              </span>
</div>
{/*  Action Strip  */}
<div className="flex items-center gap-3 pt-2">
<button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-sm hover:bg-primary-container transition-all" type="button">
<span>Open Mentorship Workspace</span>
<span className="material-symbols-outlined text-[16px]">open_in_new</span>
</button>
<button className="px-3.5 py-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all font-label-md text-label-md" type="button">
                Reschedule
              </button>
</div>
</div>
</div>
</div>
{/*  Earlier This Week Group  */}
<div className="flex flex-col gap-3 pt-2">
<div className="flex items-center justify-between px-1">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface">Earlier this week</span>
<span className="font-label-sm text-label-sm text-secondary">3 archived alerts</span>
</div>
<button className="font-label-sm text-label-sm text-primary hover:underline" type="button">Collapse read</button>
</div>
{/*  Notification 3: Read Assessment  */}
<div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm hover:shadow transition-all flex flex-col sm:flex-row gap-4 opacity-95">
{/*  Icon  */}
<div className="w-11 h-11 rounded-xl bg-tertiary-container/15 flex items-center justify-center flex-shrink-0 text-tertiary">
<span className="material-symbols-outlined text-[24px]">assignment_turned_in</span>
</div>
{/*  Content Body  */}
<div className="flex-1 flex flex-col gap-2 min-w-0">
<div className="flex flex-wrap items-baseline justify-between gap-2">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-semibold">Knowledge Check 04 Results Available</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm">Passed (80%)</span>
</div>
<span className="font-label-sm text-label-sm text-outline flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">history</span>
                Yesterday at 4:15 PM
              </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              You scored 80% on API Architecture &amp; Authentication. Prerequisite Milestone 02 unlocked with targeted feedback on CSRF headers.
            </p>
<div className="flex items-center gap-3 pt-1">
<button className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all font-label-md text-label-md" type="button">
<span>Review Diagnostic</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</div>
</div>
</div>
{/*  Notification 4: Read Learning Daily Sprint  */}
<div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm hover:shadow transition-all flex flex-col sm:flex-row gap-4 opacity-95">
{/*  Icon  */}
<div className="w-11 h-11 rounded-xl bg-surface-container flex items-center justify-center flex-shrink-0 text-primary">
<span className="material-symbols-outlined text-[24px]">menu_book</span>
</div>
{/*  Content Body  */}
<div className="flex-1 flex flex-col gap-2 min-w-0">
<div className="flex flex-wrap items-baseline justify-between gap-2">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-semibold">Daily Sprint Ready — 4 Scheduled Modules</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm">Daily Track</span>
</div>
<span className="font-label-sm text-label-sm text-outline flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">history</span>
                2 days ago
              </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Day 03 tasks for Node.js Express 5.x routing and controller middleware are queued in your workspace.
            </p>
<div className="flex items-center gap-3 pt-1">
<button className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all font-label-md text-label-md" type="button">
<span>Start Daily Sprint</span>
<span className="material-symbols-outlined text-[16px]">play_circle</span>
</button>
</div>
</div>
</div>
{/*  Notification 5: Read System Verification  */}
<div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm hover:shadow transition-all flex flex-col sm:flex-row gap-4 opacity-95">
{/*  Icon  */}
<div className="w-11 h-11 rounded-xl bg-surface-container-high flex items-center justify-center flex-shrink-0 text-on-secondary-fixed">
<span className="material-symbols-outlined text-[24px]">verified_user</span>
</div>
{/*  Content Body  */}
<div className="flex-1 flex flex-col gap-2 min-w-0">
<div className="flex flex-wrap items-baseline justify-between gap-2">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-semibold">Document Center Verification Complete</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm">System Verified</span>
</div>
<span className="font-label-sm text-label-sm text-outline flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">history</span>
                3 days ago
              </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Your uploaded resume (<span className="font-mono text-body-sm text-on-surface">Resume_2025_FullStack.pdf</span>) was verified. 8 skills confirmed and 4 priority gaps synchronized.
            </p>
<div className="flex items-center gap-3 pt-1">
<button className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all font-label-md text-label-md" type="button">
<span>Inspect Verified Skills</span>
<span className="material-symbols-outlined text-[16px]">tune</span>
</button>
</div>
</div>
</div>
</div>
</div>
{/*  Secondary Right Column (30% column / col-span-4)  */}
<div className="lg:col-span-4 flex flex-col gap-6">
{/*  Interactive Bell Dropdown Preview Simulation (Screen 2 Context)  */}
<div className="bg-surface-container-lowest rounded-2xl shadow-xl p-5 relative overflow-hidden">
{/*  Accent Top Header  */}
<div className="flex items-center justify-between pb-3.5 border-b border-surface-container">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></div>
<span className="font-headline-sm text-headline-sm text-on-surface">Notifications Peek</span>
</div>
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold">3 unread</span>
<button className="text-secondary hover:text-primary transition-colors text-label-sm font-semibold" type="button">Mark read</button>
</div>
</div>
<div className="text-[11px] text-secondary font-label-sm tracking-wide uppercase py-2">Preview of Shell Bell Dropdown</div>
{/*  Dropdown Items Sequence  */}
<div className="flex flex-col divide-y divide-surface-container">
{/*  Dropdown Mini Item 1  */}
<div className="py-3 flex items-start gap-3 hover:bg-surface-container-low -mx-2 px-2 rounded-lg transition-colors cursor-pointer group">
<div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[18px]">auto_awesome</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-1">
<span className="font-label-md text-label-md text-on-surface font-semibold truncate group-hover:text-primary transition-colors">Adaptive Plan Calibrated</span>
<span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1 mt-0.5">
                45m JWT revocation drill added to daily stack
              </p>
<span className="font-label-sm text-label-sm text-outline mt-1 block">18m ago • Plan Update</span>
</div>
</div>
{/*  Dropdown Mini Item 2  */}
<div className="py-3 flex items-start gap-3 hover:bg-surface-container-low -mx-2 px-2 rounded-lg transition-colors cursor-pointer group">
<img className="w-8 h-8 rounded-lg object-cover flex-shrink-0 mt-0.5" data-alt="Square portrait avatar of male mentor with sharp lighting and clean background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMdSAPJ2JohN6WOA2KxH93QdDkNrThisELNYGmluFCTENsINqN9HBW4ePxRW-vC1Q4FEe4HzAAx2AO--dLrvN9iIHsV7sBOPwRGuOgiL0wu6esvSKPlWCcuZe7yd2XC6M77D3RQ1qoZD7RAUxyK4sF_ruW5UXk5uKqjJbW25Ko3zgzcV2NLef04PWk5AMU1UiI3cTpot5UaVIN-6UXVdjkfpjXkmsF6xdrxXfFRYmR"/>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-1">
<span className="font-label-md text-label-md text-on-surface font-semibold truncate group-hover:text-primary transition-colors">Rahul Sharma Accepted</span>
<span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1 mt-0.5">
                Confirmed Friday 5:30 PM session on Redis
              </p>
<span className="font-label-sm text-label-sm text-outline mt-1 block">2h ago • Mentorship</span>
</div>
</div>
{/*  Dropdown Mini Item 3  */}
<div className="py-3 flex items-start gap-3 hover:bg-surface-container-low -mx-2 px-2 rounded-lg transition-colors cursor-pointer group">
<div className="w-8 h-8 rounded-lg bg-tertiary-container/15 text-tertiary flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[18px]">assignment_turned_in</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-1">
<span className="font-label-md text-label-md text-on-surface font-semibold truncate group-hover:text-primary transition-colors">Checkpoint 04 Scored</span>
<span className="font-label-sm text-[10px] text-tertiary font-bold">80%</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1 mt-0.5">
                API Architecture prerequisite passed
              </p>
<span className="font-label-sm text-label-sm text-outline mt-1 block">Yesterday • Diagnostic</span>
</div>
</div>
</div>
{/*  Full-width View All Button  */}
<div className="pt-3 border-t border-surface-container mt-1">
<button className="w-full py-2.5 px-4 rounded-xl bg-surface-container text-primary hover:bg-primary hover:text-on-primary font-label-md text-label-md flex items-center justify-center gap-2 transition-all" type="button">
<span>View All 7 Notifications</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
{/*  Quick Delivery Preferences Card  */}
<div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[18px]">tune</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface">Active Delivery</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-semibold">Pro Tier</span>
</div>
<div className="flex flex-col gap-2.5 pt-1">
<div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low text-on-surface">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[18px] text-primary">web_asset</span>
<span className="font-body-sm text-body-sm font-medium">In-app notifications</span>
</div>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
              Enabled
            </span>
</div>
<div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low text-on-surface">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[18px] text-secondary">mail</span>
<span className="font-body-sm text-body-sm font-medium">Email digests</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-semibold">Weekly (Mondays)</span>
</div>
<div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low text-on-surface">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[18px] text-primary">bolt</span>
<span className="font-body-sm text-body-sm font-medium">Mentor direct pings</span>
</div>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              Instant Push
            </span>
</div>
</div>
<button className="w-full py-2 px-3 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md text-center" type="button">
          Manage Delivery Settings
        </button>
</div>
{/*  Focus Mode / Quiet Hours Indicator Card  */}
<div className="bg-surface-container-low rounded-2xl p-5 shadow-sm flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-on-surface">
<span className="material-symbols-outlined text-[20px] text-secondary">do_not_disturb_on</span>
<span className="font-headline-sm text-headline-sm">Focus Mode Scheduled</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-tertiary/15 text-tertiary font-label-sm text-label-sm font-bold">Auto-Sync</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Alerts will automatically mute non-urgent banners during scheduled study sessions (<span className="text-on-surface font-semibold">7:00 PM – 9:00 PM</span>).
        </p>
{/*  Progress Timeline Micro Indicator  */}
<div className="flex items-center justify-between text-secondary pt-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
<span className="font-label-sm text-label-sm">Calendar Sync: Active</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-semibold cursor-pointer hover:underline">Edit Hours</span>
</div>
</div>
{/*  Verified Mentor Network Thumbnail Banner  */}
<div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm flex items-center gap-4">
<img className="w-16 h-16 rounded-xl object-cover flex-shrink-0" data-alt="High tech minimal flat illustration representing smart AI notifications, subtle indigo and teal network nodes on white background, modern corporate vector aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE9l_xNd_4Tz97cIwJV2RtQaaYJhkAXsW98glQmMkww0D5qVjv7d0fSUJ60-GW8teHfabjecyWe165YZhO5tNyUIabyct8kmtLDX0xFAd351uhDMXISVLQ9AovIJYwKVSDpWxTtDk00fbdgPp3-ahw7KA2dCRnGr83VfkyjkD7RVR2itbvaxmH6G9SnIx6xwNsnkoSNWOQUcRm25ISKDr6VEYgVnI1EOhDeX0Oj3hX"/>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface">EduPath Assistant</span>
<p className="font-body-sm text-body-sm text-secondary line-clamp-2">
            AI automatically synthesizes recurring progress alerts into a Saturday executive summary.
          </p>
</div>
</div>
</div>
</div>
</div></main>
    </div>
  );
}
