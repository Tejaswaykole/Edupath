import React from 'react';
import { useMentorship } from '../../hooks/useMentorship';

export default function MentorshipWorkspaceActiveGuidanceEdupath() {
  const { activeMentorships, isLoadingActiveMentorships } = useMentorship();
  const activeMentorship = activeMentorships && activeMentorships.length > 0 ? activeMentorships[0] : null;
  return (
    <div className="min-h-screen bg-surface">
      {/* Generated from Stitch UI */}
      <main className="w-full pt-16 px-8 pb-12 bg-surface min-h-screen"><div className="flex flex-col w-full gap-6">
{/*  Top Breadcrumb & Status Navigation  */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 font-label-sm text-label-sm text-secondary">
<a className="hover:text-primary transition-colors" href="#">Dashboard</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<a className="hover:text-primary transition-colors" href="#">Mentors</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-on-surface font-semibold">Active Mentorship {activeMentorship ? `(${activeMentorship.mentor.professional_title})` : ''}</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Mentorship Workspace {activeMentorship ? `— ${activeMentorship.mentor.professional_title}` : ''}</h1>
</div>
<div className="flex items-center gap-3 self-start md:self-auto">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 font-label-sm text-label-sm shadow-sm">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span>Active Mentorship • Sync Complete</span>
</div>
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">more_horiz</span>
<span>Workspace Options</span>
</button>
</div>
</div>
{/*  Top Mentorship Context Bar  */}
<div className="w-full bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6">
<div className="flex items-center gap-4 min-w-0">
<div className="relative flex-shrink-0">
<img className="w-16 h-16 rounded-2xl object-cover shadow-sm" alt="Mentor" src={activeMentorship?.mentor.linkedin_url || "https://lh3.googleusercontent.com/aida-public/AB6AXuCYO9p_ACAIsspjr0MtiD_tsXBHlqZCXEhXuQrWLKM1-qAVnXjghpmqZUhuu84Fur4IW9U-jTLsidYd8V-Sla2unrWoicGwW-BKLvSKxXAgVN66byG_c8ST1_FqBujwGhfYf6_ZOR5RBztlCgLBXejqgaG5499BV0I26Nb0E-X5nAXm4dprMMJGix-lkdFgio81ZWcEggF1o0B9pVVAJP697Fl_21GOakIcgz_4CaUG"}/>
<div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-surface-container-lowest flex items-center justify-center">
<span className="w-3.5 h-3.5 rounded-full bg-emerald-500"></span>
</div>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">{activeMentorship?.mentor.professional_title || "Rahul Sharma"}</span>
<span className="px-2.5 py-0.5 rounded-md bg-surface-container-low text-secondary font-label-sm text-label-sm font-medium">Staff Backend Engineer @ Stripe</span>
</div>
<div className="flex items-center gap-2 mt-1">
<span className="material-symbols-outlined text-primary text-[18px]">code</span>
<span className="font-label-md text-label-md text-primary font-semibold truncate">Focus: JWT Invalidation &amp; Distributed Redis Blacklisting</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-0.5 flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-secondary">schedule</span>
          Async Code Review &amp; 30m Check-in scheduled for Fri, Mar 14 at 5:30 PM PST
        </p>
</div>
</div>
<div className="flex items-center gap-3 w-full xl:w-auto justify-end flex-wrap">
<button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-all shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">calendar_month</span>
<span>Add to Calendar</span>
</button>
<button className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md shadow-sm hover:opacity-95 transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">videocam</span>
<span>Join Video Room</span>
</button>
</div>
</div>
{/*  Main 2-Column Asymmetric Workspace  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
{/*  Left Column: Guidance & Action Plan (60% / 7 cols)  */}
<div className="lg:col-span-7 flex flex-col gap-6">
{/*  Primary Guidance Card  */}
<div className="w-full bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col gap-5 relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-container via-surface-tint to-primary"></div>
{/*  Guidance Header  */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">architecture</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Guidance from Rahul Sharma</span>
<span className="font-label-sm text-label-sm text-secondary">Received Today at 2:15 PM • Direct Annotated Review</span>
</div>
</div>
<span className="inline-flex items-center gap-1.5 self-start sm:self-auto px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed-variant font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            Architectural Pattern Recommendation
          </span>
</div>
{/*  Guidance Narrative  */}
<div className="p-4 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md leading-relaxed">
{activeMentorship?.guidance && activeMentorship.guidance.length > 0 ? (
  <p>{activeMentorship.guidance[0].content}</p>
) : (
  <p>
    Hi Tejas, great progress on your Express routes. I reviewed your Lab #ND-504 code. The reason you're hitting latency issues is storing full decoded claims in Redis on every hit. Instead, only store the <code className="px-1.5 py-0.5 rounded bg-surface-container-high text-primary font-mono text-[12px]">jti</code> (JWT ID) in a Redis SET with a TTL matching your token expiration window. Check out the token rotation sample I annotated below.
  </p>
)}
</div>
{/*  Annotated Code Snippet Box  */}
<div className="flex flex-col rounded-xl overflow-hidden bg-inverse-surface text-inverse-on-surface shadow-sm">
<div className="flex items-center justify-between px-4 py-2.5 bg-inverse-surface/80 border-b border-outline/20">
<div className="flex items-center gap-2 font-mono text-[12px] text-secondary-fixed-dim">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed">terminal</span>
<span>redis-token-blacklist.ts</span>
</div>
<span className="px-2 py-0.5 rounded text-[11px] bg-outline/30 text-surface-bright font-mono">Redis 7.2 Cluster</span>
</div>
<pre className="p-4 font-mono text-[13px] leading-6 overflow-x-auto text-on-primary-container"><code><span className="text-secondary-fixed-dim">// 1. Optimized low-memory footprint: Store minimal key</span>
<span className="text-secondary-fixed-dim">// Key schema format: blacklist:jti:&lt;id&gt;</span>
<span className="text-tertiary-fixed">async function</span> <span className="text-surface-bright">revokeToken</span>(jti: <span className="text-tertiary-fixed">string</span>, remainingTtlSec: <span className="text-tertiary-fixed">number</span>): <span className="text-tertiary-fixed">Promise</span>&lt;<span className="text-tertiary-fixed">void</span>&gt; &#123;
  <span className="text-surface-tint">const</span> key = `blacklist:jti:$&#123;jti&#125;`;
  <span className="text-secondary-fixed-dim">// Set the revocation flag with automatic expiration</span>
  <span className="text-tertiary-fixed">await</span> redisClient.set(key, <span className="text-surface-bright">"1"</span>, &#123;
    EX: Math.ceil(remainingTtlSec) <span className="text-secondary-fixed-dim">// Auto-evicts once token naturally expires</span>
  &#125;);
&#125;

<span className="text-secondary-fixed-dim">// 2. O(1) verify execution in auth middleware</span>
<span className="text-tertiary-fixed">async function</span> <span className="text-surface-bright">isBlacklisted</span>(jti: <span className="text-tertiary-fixed">string</span>): <span className="text-tertiary-fixed">Promise</span>&lt;<span className="text-tertiary-fixed">boolean</span>&gt; &#123;
  <span className="text-surface-tint">return</span> (<span className="text-tertiary-fixed">await</span> redisClient.exists(`blacklist:jti:$&#123;jti&#125;`)) === 1;
&#125;</code></pre>
</div>
{/*  Recommended Next Actions  */}
<div className="flex flex-col gap-3 pt-2">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface">Recommended Next Actions</span>
<span className="font-label-sm text-label-sm text-secondary">2 Mandatory Milestones</span>
</div>
<div className="grid grid-cols-1 gap-3">
{/*  Action Item 1  */}
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-surface-container transition-all">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[18px]">terminal</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-semibold">Action 1: Refactor Lab #ND-504</span>
<span className="px-2 py-0.2 rounded text-[10px] font-bold bg-amber-100 text-amber-900">Priority Lab</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-0.5">Complete Refactored Practice Lab: Redis TTL Token Blacklist</p>
</div>
</div>
<button className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md shadow-sm hover:opacity-90 transition-all flex-shrink-0" type="button">
<span>Open Guided Lab</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
{/*  Action Item 2  */}
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-surface-container transition-all">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-lg bg-surface-variant text-on-surface flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[18px]">menu_book</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-semibold">Action 2: Technical Standard Specification</span>
<span className="px-2 py-0.2 rounded text-[10px] font-bold bg-surface-container-highest text-secondary">Reading</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-0.5">Review RFC 7519 Best Practices on Key Rotation &amp; JWT Expiration Limits</p>
</div>
</div>
<button className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all flex-shrink-0" type="button">
<span className="material-symbols-outlined text-[16px]">visibility</span>
<span>View Resource</span>
</button>
</div>
</div>
</div>
{/*  Learner Confirmation Control  */}
<div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 bg-surface-container p-4 rounded-xl" id="guidance-status-container">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-[24px]">task_alt</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold" id="confirmation-text-title">Review Pending Learner Sign-off</span>
<span className="font-body-sm text-body-sm text-secondary" id="confirmation-text-subtitle">Acknowledge this architectural review to unlock Week 04 checkpoint</span>
</div>
</div>
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-on-primary font-label-md text-label-md shadow-sm hover:opacity-95 transition-all" id="mark-applied-btn"  type="button">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span>Mark Guidance as Reviewed &amp; Applied</span>
</button>
</div>
</div>
{/*  Integrated Visual Lab Preview  */}
<div className="w-full bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]">science</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Associated Lab Artifact #ND-504</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">Node.js Express + Docker Redis v7</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="relative rounded-xl overflow-hidden h-36 bg-surface-container flex flex-col justify-end p-4">
<div className="absolute inset-0 bg-cover bg-center" data-alt="Modern ultra-minimalist backend server architecture interface with interactive cluster visualization nodes, deep slate and indigo dashboard aesthetic with soft green telemetry indicators" >
</div>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/40 to-transparent"></div>
<div className="relative z-10 text-on-primary">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed">Target Environment</span>
<p className="font-label-md text-label-md font-semibold text-inverse-on-surface">Microservice Session Broker</p>
</div>
</div>
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col justify-between">
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Benchmark Assessment</span>
<div className="flex items-baseline gap-2">
<span className="font-headline-md text-headline-md text-on-surface font-bold">1.4ms</span>
<span className="font-label-sm text-label-sm text-emerald-600 font-semibold">↓ 86% latency drop</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Projected Redis SET hit latency vs previous payload claim deserialization.</p>
</div>
<div className="w-full bg-surface-variant h-2 rounded-full overflow-hidden mt-3">
<div className="bg-primary h-full rounded-full w-4/5"></div>
</div>
</div>
</div>
</div>
</div>
{/*  Right Column: Diagnostics, Bridge & Learning Loop (40% / 5 cols)  */}
<div className="lg:col-span-5 flex flex-col gap-6">
{/*  Active Bridge to My Learning  */}
<div className="w-full bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col gap-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[18px]">sync_alt</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface">Active Bridge to My Learning</span>
</div>
<span className="px-2.5 py-1 rounded-md bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold">Week 04</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">
          Guidance accepted in this workspace automatically synchronizes with your personal roadmap, adjusting estimated completion dates.
        </p>
{/*  Dynamic Impact Visualization Metric  */}
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">Impact on Skill Gap: Node.js Auth</span>
<span className="font-label-md text-label-md text-primary font-bold">+26% Gain</span>
</div>
<div className="flex items-center gap-4">
<div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center">
<svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container-highest" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-width="3.5"></path>
<path className="text-primary transition-all duration-700 ease-out" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="84, 100" stroke-linecap="round" stroke-width="3.5"></path>
</svg>
<span className="absolute font-label-md text-label-md text-on-surface font-bold">84%</span>
</div>
<div className="flex flex-col gap-1 min-w-0">
<div className="flex items-center gap-2">
<span className="font-body-sm text-body-sm text-secondary">Current Baseline:</span>
<span className="font-label-sm text-label-sm font-semibold text-on-surface">58%</span>
</div>
<div className="flex items-center gap-2">
<span className="font-body-sm text-body-sm text-secondary">Target Completion:</span>
<span className="font-label-sm text-label-sm font-semibold text-emerald-700">84% (Ready)</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">Unlocks Level 4 Backend Certification</span>
</div>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-surface-container text-on-surface font-body-sm text-body-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-primary">event_available</span>
<span>Week 04 Schedule Updated</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-semibold">Today, 2:16 PM</span>
</div>
</div>
{/*  Guidance History & Milestones Timeline  */}
<div className="w-full bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]">timeline</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Guidance History &amp; Milestones</span>
</div>
<button className="font-label-sm text-label-sm text-primary hover:underline" type="button">Full Log</button>
</div>
{/*  Vertical Continuous Timeline  */}
<div className="relative pl-6 flex flex-col gap-6 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-surface-variant">
{/*  Node 1: Completed  */}
<div className="relative flex flex-col gap-1">
<span className="absolute -left-6 top-0.5 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[12px]">
<span className="material-symbols-outlined text-[14px]">check</span>
</span>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">Mentorship Requested</span>
<span className="font-label-sm text-label-sm text-secondary">Mar 11, 09:30 AM</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Tejas flagged Lab #ND-504 Redis latency bottleneck.</p>
</div>
{/*  Node 2: Completed  */}
<div className="relative flex flex-col gap-1">
<span className="absolute -left-6 top-0.5 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[12px]">
<span className="material-symbols-outlined text-[14px]">check</span>
</span>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">Accepted by Rahul Sharma</span>
<span className="font-label-sm text-label-sm text-secondary">Mar 11, 01:15 PM</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Repository access granted and profile benchmarks analyzed.</p>
</div>
{/*  Node 3: Active Now  */}
<div className="relative flex flex-col gap-1">
<span className="absolute -left-6 top-0.5 w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-[12px] ring-4 ring-primary-fixed">
<span className="w-2 h-2 rounded-full bg-white"></span>
</span>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-primary font-bold">Architectural Guidance Provided</span>
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-primary-fixed text-primary">Active Step</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface font-medium">Detailed token revocation model with Redis TTL shared for review.</p>
</div>
{/*  Node 4: Upcoming  */}
<div className="relative flex flex-col gap-1 opacity-70">
<span className="absolute -left-6 top-0.5 w-5 h-5 rounded-full bg-surface-container-lowest border-2 border-secondary flex items-center justify-center text-[12px]"></span>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">30m Milestone Sync &amp; Unblocking</span>
<span className="font-label-sm text-label-sm text-secondary">Fri, Mar 14</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Live code walkthrough and Capstone architecture sign-off.</p>
</div>
</div>
</div>
{/*  Need to ask a follow-up question? Structured Async Box  */}
<div className="w-full bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col gap-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[18px]">chat</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface">Need to ask a follow-up?</span>
<span className="font-label-sm text-label-sm text-secondary">Rahul usually responds within 4 hours</span>
</div>
</div>
<div className="flex flex-col gap-2.5">
<div className="relative">
<textarea className="w-full p-3 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm placeholder:text-secondary focus:outline-none focus:bg-surface-container transition-all resize-none" id="followup-input" placeholder="e.g., Should we also handle sliding session extension for active JWT refresh tokens?" rows={3}></textarea>
</div>
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2 text-secondary">
<button className="p-1.5 rounded-lg hover:bg-surface-container hover:text-on-surface transition-all" title="Attach Code Snippet" type="button">
<span className="material-symbols-outlined text-[18px]">code</span>
</button>
<button className="p-1.5 rounded-lg hover:bg-surface-container hover:text-on-surface transition-all" title="Link Lab Branch" type="button">
<span className="material-symbols-outlined text-[18px]">alt_route</span>
</button>
<span className="font-label-sm text-label-sm">Markdown supported</span>
</div>
<button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md shadow-sm hover:opacity-95 transition-all"  type="button">
<span>Send Note</span>
<span className="material-symbols-outlined text-[16px]">send</span>
</button>
</div>
{/*  Async Notification Toast container (hidden by default)  */}
<div className="hidden p-3 rounded-xl bg-emerald-50 text-emerald-900 font-label-sm text-label-sm flex items-center gap-2" id="async-alert">
<span className="material-symbols-outlined text-[18px] text-emerald-600">check_circle</span>
<span>Follow-up question sent to Rahul Sharma's priority mentor inbox.</span>
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
