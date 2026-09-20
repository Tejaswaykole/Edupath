import { useNavigate } from 'react-router-dom';

export default function LandingPageEdupath() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-surface">
      {/* Generated from Stitch UI */}
      <main className="w-full bg-surface min-h-screen flex items-center justify-center"><div className="flex flex-col w-full">
{/*  Brand Top Navigation Bar  */}
<header className="w-full bg-surface-container-lowest sticky top-0 z-40 shadow-sm">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center space-x-3">
<img alt="EduPath Logo" className="w-10 h-10 object-contain rounded-lg shadow-sm" src="/logo.png"/>
<div className="flex flex-col">
<div className="flex items-center space-x-1.5">
<span className="font-headline-md text-headline-md text-on-surface tracking-tight font-bold">EduPath</span>
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
</div>
<span className="font-label-sm text-label-sm text-secondary tracking-normal -mt-0.5">LEARN • GROW • GO FURTHER</span>
</div>
</div>
<nav className="hidden md:flex items-center space-x-8">
<a className="font-body-md text-body-md text-secondary hover:text-on-surface transition-colors" href="#how-it-works">How It Works</a>
<a className="font-body-md text-body-md text-secondary hover:text-on-surface transition-colors" href="#skills">Skills &amp; Roles</a>
<a className="font-body-md text-body-md text-secondary hover:text-on-surface transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); navigate('/learnerlogin'); }}>For Mentors</a>
<a className="font-body-md text-body-md text-secondary hover:text-on-surface transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); navigate('/roleselection'); }}>Platform Engine</a>
</nav>
<div className="flex items-center space-x-3">
<button onClick={() => navigate('/learnerlogin')} className="px-4 py-2 font-label-md text-label-md text-on-surface bg-surface-container-lowest hover:bg-surface-container-low rounded-lg transition-colors shadow-sm">
          Sign In
        </button>
<button onClick={() => navigate('/roleselection')} className="px-5 py-2 font-label-md text-label-md text-on-primary bg-primary-container hover:bg-primary rounded-lg transition-all shadow-sm flex items-center space-x-2">
<span>Get Started</span>
<span className="material-symbols-outlined text-sm leading-none">arrow_forward</span>
</button>
</div>
</div>
</header>
{/*  Hero Section  */}
<section className="w-full relative overflow-hidden pt-12 pb-16 px-6">
<div className="max-w-6xl mx-auto flex flex-col items-center text-center">
{/*  Badge  */}
<div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-surface-container-low text-primary rounded-full shadow-sm mb-6">
<span className="material-symbols-outlined text-sm leading-none text-primary-container">auto_awesome</span>
<span className="font-label-sm text-label-sm font-semibold tracking-wide uppercase">AI-Powered Career &amp; Skill Acceleration</span>
</div>
{/*  Main Headline  */}
<h1 className="font-headline-xl text-headline-xl md:text-[44px] md:leading-[52px] text-on-surface font-bold max-w-3xl tracking-tight mb-5">
        Your learning path, <br className="hidden sm:inline"/>built around you.
      </h1>
{/*  Supporting Text  */}
<p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto mb-8">
        Understand your skills. Find your gaps. Build a personalized learning journey that continuously adapts as you advance.
      </p>
{/*  CTA Row  */}
<div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
<button onClick={() => navigate('/roleselection')} className="px-6 py-3 font-label-md text-label-md text-on-primary bg-primary-container hover:bg-primary rounded-lg transition-all shadow-md flex items-center space-x-2">
<span>Get Started Today</span>
<span className="material-symbols-outlined text-sm leading-none">arrow_forward</span>
</button>
<button onClick={() => navigate('/interactivepracticeworkspace')} className="px-6 py-3 font-label-md text-label-md text-on-surface bg-surface-container-lowest hover:bg-surface-container-low rounded-lg transition-colors shadow-sm flex items-center space-x-2">
<span className="material-symbols-outlined text-sm text-secondary">explore</span>
<span>Explore Sandbox</span>
</button>
</div>
{/*  Proof Strip  */}
<div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-surface-container-lowest rounded-xl p-4 flex items-center space-x-3.5 shadow-sm text-left">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-container shrink-0">
<span className="material-symbols-outlined text-xl">account_tree</span>
</div>
<div>
<div className="font-headline-sm text-headline-sm text-on-surface font-semibold">15+ Core Frameworks</div>
<div className="font-label-sm text-label-sm text-secondary">Fullstack, AI/ML &amp; Systems Architecture</div>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-4 flex items-center space-x-3.5 shadow-sm text-left">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-tertiary shrink-0">
<span className="material-symbols-outlined text-xl">trending_up</span>
</div>
<div>
<div className="font-headline-sm text-headline-sm text-on-surface font-semibold">42% Faster Ramp-up</div>
<div className="font-label-sm text-label-sm text-secondary">Accelerated role readiness in 8 weeks</div>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-4 flex items-center space-x-3.5 shadow-sm text-left">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-container shrink-0">
<span className="material-symbols-outlined text-xl">check_circle</span>
</div>
<div>
<div className="font-headline-sm text-headline-sm text-on-surface font-semibold">Adaptive Milestones</div>
<div className="font-label-sm text-label-sm text-secondary">Daily dynamic 15-min modules</div>
</div>
</div>
</div>
</div>
</section>
{/*  Interactive Workflow Concept Loop Section  */}
<section className="w-full px-6 py-12 bg-surface-bright" id="how-it-works">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
<div>
<div className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider mb-2">Architected Progression</div>
<h2 className="font-headline-xl text-headline-xl text-on-surface">The Continuous Career Loop</h2>
</div>
<p className="font-body-md text-body-md text-secondary max-w-md mt-2 md:mt-0">
          EduPath continuously benchmarks your outputs against live tech job specifications, automatically calibrating your daily objectives.
        </p>
</div>
{/*  Dashboard Interactive Workflow Preview  */}
<div className="w-full bg-surface-container-lowest rounded-2xl p-6 lg:p-8 shadow-sm">
{/*  Step Flow Bar  */}
<div className="grid grid-cols-2 md:grid-cols-5 gap-3 pb-8 mb-8">
<div className="flex items-center space-x-3 bg-surface-container-low p-3 rounded-lg">
<div className="w-7 h-7 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold">1</div>
<div className="min-w-0">
<div className="font-label-md text-label-md text-on-surface truncate">Profile Intake</div>
<div className="font-label-sm text-label-sm text-secondary truncate">Resume &amp; Github</div>
</div>
</div>
<div className="flex items-center space-x-3 bg-surface-container p-3 rounded-lg">
<div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold">2</div>
<div className="min-w-0">
<div className="font-label-md text-label-md text-on-surface truncate">Skill Audit</div>
<div className="font-label-sm text-label-sm text-secondary truncate">Diagnostics</div>
</div>
</div>
<div className="flex items-center space-x-3 bg-surface-container-low p-3 rounded-lg">
<div className="w-7 h-7 rounded-full bg-surface-container-highest text-primary flex items-center justify-center font-label-sm text-label-sm font-bold">3</div>
<div className="min-w-0">
<div className="font-label-md text-label-md text-on-surface truncate">Plan Synthesis</div>
<div className="font-label-sm text-label-sm text-secondary truncate">Micro-Syllabus</div>
</div>
</div>
<div className="flex items-center space-x-3 bg-surface-container-low p-3 rounded-lg">
<div className="w-7 h-7 rounded-full bg-surface-container-highest text-primary flex items-center justify-center font-label-sm text-label-sm font-bold">4</div>
<div className="min-w-0">
<div className="font-label-md text-label-md text-on-surface truncate">Execution</div>
<div className="font-label-sm text-label-sm text-secondary truncate">5-Week Streak</div>
</div>
</div>
<div className="flex items-center space-x-3 bg-surface-container-low p-3 rounded-lg col-span-2 md:col-span-1">
<div className="w-7 h-7 rounded-full bg-surface-container-highest text-primary flex items-center justify-center font-label-sm text-label-sm font-bold">5</div>
<div className="min-w-0">
<div className="font-label-md text-label-md text-on-surface truncate">Agent Re-route</div>
<div className="font-label-sm text-label-sm text-secondary truncate">Dynamic Tuning</div>
</div>
</div>
</div>
{/*  3-Column Dashboard Slice (Faithfully styled like reference)  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
{/*  Column 1: Today's Learning + Skill Readiness (5 cols)  */}
<div className="lg:col-span-5 flex flex-col space-y-6">
{/*  Active Tasks  */}
<div className="bg-surface-container-low p-5 rounded-xl flex flex-col justify-between">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center space-x-2">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Today's Learning</span>
<span className="font-label-sm text-label-sm text-secondary">Mon, 10 Mar</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-semibold cursor-pointer">View Plan →</span>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-lg shadow-sm">
<div className="flex items-center space-x-3">
<span className="w-6 h-6 rounded-full bg-surface-container-high text-primary flex items-center justify-center text-xs font-semibold">1</span>
<span className="material-symbols-outlined text-primary-container text-lg">play_circle</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium">Watch: API Fundamentals</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">15 min</span>
</div>
<div className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-lg shadow-sm">
<div className="flex items-center space-x-3">
<span className="w-6 h-6 rounded-full bg-surface-container-high text-primary flex items-center justify-center text-xs font-semibold">2</span>
<span className="material-symbols-outlined text-primary-container text-lg">code</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium">Complete 2 practice tasks</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">30 min</span>
</div>
<div className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-lg shadow-sm">
<div className="flex items-center space-x-3">
<span className="w-6 h-6 rounded-full bg-surface-container-high text-primary flex items-center justify-center text-xs font-semibold">3</span>
<span className="material-symbols-outlined text-primary-container text-lg">description</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium">Take 10-question assessment</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">20 min</span>
</div>
</div>
<button className="mt-4 w-full py-2.5 bg-primary-container text-on-primary font-label-md text-label-md rounded-lg flex items-center justify-center space-x-2">
<span>Start Today's Plan</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
{/*  Skill Readiness Snapshot  */}
<div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm">
<div className="flex items-center justify-between mb-4">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Skill Diagnostics</span>
<span className="font-label-sm text-label-sm text-primary font-semibold">Full Breakdown →</span>
</div>
<div className="space-y-3.5">
<div>
<div className="flex justify-between font-label-sm text-label-sm mb-1">
<span className="text-on-surface font-medium">JavaScript Architecture</span>
<span className="text-tertiary font-bold">90%</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-tertiary h-2 rounded-full" ></div>
</div>
</div>
<div>
<div className="flex justify-between font-label-sm text-label-sm mb-1">
<span className="text-on-surface font-medium">React &amp; State Orchestration</span>
<span className="text-primary-container font-bold">65%</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-primary-container h-2 rounded-full" ></div>
</div>
</div>
<div>
<div className="flex justify-between font-label-sm text-label-sm mb-1">
<span className="text-on-surface font-medium">Node.js Microservices</span>
<span className="text-on-surface-variant font-bold">40%</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-secondary h-2 rounded-full" ></div>
</div>
</div>
</div>
</div>
</div>
{/*  Column 2: EduPath Agent + Weekly Track (4 cols)  */}
<div className="lg:col-span-4 flex flex-col space-y-6">
{/*  AI Agent Insight Box  */}
<div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-3">
<div className="flex items-center space-x-2">
<span className="material-symbols-outlined text-primary-container">psychology</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">EduPath Agent</span>
</div>
<span className="px-2 py-0.5 bg-surface-container-high text-tertiary font-label-sm text-label-sm rounded-full font-bold flex items-center space-x-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
<span>Active</span>
</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mb-4 leading-relaxed">
                  "You've been struggling with API authentication. I've added a short JWT exercise before your next topic."
                </p>
<div className="space-y-2">
<div className="p-2.5 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface flex items-center space-x-2">
<span className="material-symbols-outlined text-primary text-base">menu_book</span>
<span className="text-xs">Review authentication basics</span>
</div>
<div className="p-2.5 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface flex items-center space-x-2">
<span className="material-symbols-outlined text-primary text-base">terminal</span>
<span className="text-xs">Try a hands-on token exercise</span>
</div>
<div className="p-2.5 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface flex items-center space-x-2">
<span className="material-symbols-outlined text-primary text-base">lightbulb</span>
<span className="text-xs">Take a smaller step first</span>
</div>
</div>
</div>
<div className="mt-4 pt-3 text-center">
<span className="font-label-sm text-label-sm text-primary font-semibold cursor-pointer">View Updated Dynamic Plan →</span>
</div>
</div>
{/*  Weekly Milestone Schedule  */}
<div className="bg-surface-container-low p-5 rounded-xl">
<div className="flex items-center justify-between mb-3">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Weekly Plan</span>
<span className="font-label-sm text-label-sm text-secondary">Week 04</span>
</div>
<div className="space-y-2.5 font-body-sm text-body-sm">
<div className="flex items-center justify-between">
<span className="text-secondary w-10">Mon</span>
<span className="text-on-surface font-medium truncate">REST API Basics</span>
<span className="material-symbols-outlined text-tertiary text-sm">check_circle</span>
</div>
<div className="flex items-center justify-between">
<span className="text-secondary w-10">Tue</span>
<span className="text-on-surface font-medium truncate">API Routing &amp; Verbs</span>
<span className="material-symbols-outlined text-tertiary text-sm">check_circle</span>
</div>
<div className="flex items-center justify-between">
<span className="text-secondary w-10">Wed</span>
<span className="text-on-surface font-medium truncate">Authentication Tokens</span>
<span className="w-2 h-2 rounded-full bg-primary-container mr-1"></span>
</div>
<div className="flex items-center justify-between text-secondary">
<span className="w-10">Thu</span>
<span className="truncate">JWT Practice</span>
<span className="w-2 h-2 rounded-full bg-surface-variant mr-1"></span>
</div>
<div className="flex items-center justify-between text-secondary">
<span className="w-10">Fri</span>
<span className="truncate">Mini Project Integration</span>
<span className="w-2 h-2 rounded-full bg-surface-variant mr-1"></span>
</div>
</div>
</div>
</div>
{/*  Column 3: Consistency & Progress Rail (3 cols)  */}
<div className="lg:col-span-3 flex flex-col space-y-6">
{/*  Timeline Status  */}
<div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold block mb-4">Milestone Tracker</span>
<div className="space-y-4 relative">
<div className="flex items-start space-x-3">
<span className="material-symbols-outlined text-tertiary text-base mt-0.5">check_circle</span>
<div>
<div className="font-label-md text-label-md text-on-surface">Resume Parsed</div>
<div className="font-label-sm text-label-sm text-secondary">Mar 2, 2025</div>
</div>
</div>
<div className="flex items-start space-x-3">
<span className="material-symbols-outlined text-tertiary text-base mt-0.5">check_circle</span>
<div>
<div className="font-label-md text-label-md text-on-surface">Gaps Identified</div>
<div className="font-label-sm text-label-sm text-secondary">Mar 3, 2025</div>
</div>
</div>
<div className="flex items-start space-x-3">
<div className="w-4 h-4 rounded-full bg-primary-container flex items-center justify-center mt-0.5">
<div className="w-1.5 h-1.5 rounded-full bg-on-primary"></div>
</div>
<div>
<div className="font-label-md text-label-md text-primary font-bold">5 Tasks Completed</div>
<div className="font-label-sm text-label-sm text-secondary">Mar 5, 2025</div>
</div>
</div>
<div className="flex items-start space-x-3 opacity-60">
<div className="w-4 h-4 rounded-full border border-secondary mt-0.5"></div>
<div>
<div className="font-label-md text-label-md text-on-surface">Auth Module Mastery</div>
<div className="font-label-sm text-label-sm text-secondary">Target: Mar 10</div>
</div>
</div>
</div>
</div>
{/*  Consistency Sparkline Widget  */}
<div className="bg-surface-container-low p-5 rounded-xl">
<div className="flex justify-between items-center mb-3">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Streak</span>
<span className="font-label-sm text-label-sm text-secondary">Last 4 Weeks</span>
</div>
<div className="flex items-end justify-between h-20 px-2 pt-4">
<div className="flex flex-col items-center space-y-1">
<div className="w-4 bg-primary-container rounded-t" ></div>
<span className="font-label-sm text-label-sm text-secondary">W1</span>
</div>
<div className="flex flex-col items-center space-y-1">
<div className="w-4 bg-primary-container rounded-t" ></div>
<span className="font-label-sm text-label-sm text-secondary">W2</span>
</div>
<div className="flex flex-col items-center space-y-1">
<div className="w-4 bg-primary-container rounded-t" ></div>
<span className="font-label-sm text-label-sm text-secondary">W3</span>
</div>
<div className="flex flex-col items-center space-y-1">
<div className="w-4 bg-primary rounded-t" ></div>
<span className="font-label-sm text-label-sm text-on-surface font-bold">W4</span>
</div>
</div>
<div className="mt-4 pt-3 bg-surface-container-lowest rounded-lg p-2.5 text-center shadow-sm">
<span className="font-label-sm text-label-sm text-on-surface font-medium">🔥 5 Week Consistency Streak</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Value Proposition Grid  */}
<section className="w-full px-6 py-20 bg-surface" id="skills">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<div className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider mb-2">Engineered For Mastery</div>
<h2 className="font-headline-xl text-headline-xl text-on-surface font-bold">Why professionals switch to EduPath</h2>
<p className="font-body-lg text-body-lg text-secondary mt-3">
          Traditional tutorials leave knowledge holes. EduPath continuously stress-tests your conceptual map.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{/*  Card 1  */}
<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary-container mb-5">
<span className="material-symbols-outlined text-2xl">analytics</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold mb-2.5">Objective Skill Diagnostics</h3>
<p className="font-body-md text-body-md text-secondary leading-relaxed">
              Compare against real industry engineering roles with transparent scoring, highlighting syntax vs architecture gaps.
            </p>
</div>
<div className="mt-6 pt-4 flex items-center text-primary font-label-md text-label-md font-semibold">
<span>Explore rubrics</span>
<span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
</div>
</div>
{/*  Card 2  */}
<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary-container mb-5">
<span className="material-symbols-outlined text-2xl">tune</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold mb-2.5">Adaptive Micro-Syllabus</h3>
<p className="font-body-md text-body-md text-secondary leading-relaxed">
              Tailored daily 15-30 min tasks that expand or compact dynamically based on hands-on code assessments.
            </p>
</div>
<div className="mt-6 pt-4 flex items-center text-primary font-label-md text-label-md font-semibold">
<span>View sample tasks</span>
<span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
</div>
</div>
{/*  Card 3  */}
<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary-container mb-5">
<span className="material-symbols-outlined text-2xl">smart_toy</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold mb-2.5">EduPath Agent Co-pilot</h3>
<p className="font-body-md text-body-md text-secondary leading-relaxed">
              Contextual guidance that flags conceptual friction points before you abandon hard architectural modules.
            </p>
</div>
<div className="mt-6 pt-4 flex items-center text-primary font-label-md text-label-md font-semibold">
<span>See the agent</span>
<span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
</div>
</div>
{/*  Card 4  */}
<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary-container mb-5">
<span className="material-symbols-outlined text-2xl">verified_user</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold mb-2.5">Verified Mentor Insights</h3>
<p className="font-body-md text-body-md text-secondary leading-relaxed">
              Experienced engineering leaders validating your project milestones and conducting system design dry runs.
            </p>
</div>
<div className="mt-6 pt-4 flex items-center text-primary font-label-md text-label-md font-semibold">
<span>Meet leaders</span>
<span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
</div>
</div>
</div>
</div>
</section>
{/*  Pre-Footer Banner  */}
<section className="w-full px-6 py-12 bg-surface">
<div className="max-w-6xl mx-auto bg-surface-container-lowest rounded-2xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
<div className="max-w-xl z-10">
<h2 className="font-headline-xl text-headline-xl text-on-surface font-bold mb-3">You're closer than you think.</h2>
<p className="font-body-lg text-body-lg text-secondary">
          Keep learning, keep building, and let EduPath formulate the exact route to your target technical level.
        </p>
</div>
<div className="flex items-center space-x-4 z-10">
<button className="px-6 py-3 font-label-md text-label-md text-on-primary bg-primary-container hover:bg-primary rounded-lg transition-all shadow-md flex items-center space-x-2">
<span>Start Free Evaluation</span>
<span className="material-symbols-outlined text-sm leading-none">arrow_forward</span>
</button>
</div>
</div>
</section>
{/*  Clean Minimalist Footer  */}
<footer className="w-full bg-surface-container-lowest py-12 px-6 shadow-sm">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center space-x-3">
<img alt="EduPath Logo" className="w-8 h-8 object-contain rounded-md" src="/logo.png"/>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">EduPath</span>
<span className="text-secondary font-label-sm text-label-sm">© 2025 EduPath Systems, Inc. All rights reserved.</span>
</div>
<div className="flex items-center space-x-8 font-body-sm text-body-sm text-secondary">
<a className="hover:text-on-surface transition-colors" href="#privacy">Privacy</a>
<a className="hover:text-on-surface transition-colors" href="#terms">Terms of Service</a>
<a className="hover:text-on-surface transition-colors" href="#security">Security</a>
<a className="hover:text-on-surface transition-colors" href="#status">System Status</a>
</div>
</div>
</footer>
</div></main>
    </div>
  );
}
