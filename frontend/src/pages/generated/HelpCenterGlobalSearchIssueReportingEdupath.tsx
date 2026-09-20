import React, { useState } from 'react';
import { useIssues } from '../../hooks/useIssues';

export default function HelpCenterGlobalSearchIssueReportingEdupath() {
  const { submitIssue, isSubmitting, isSuccess } = useIssues();
  const [formData, setFormData] = useState({ category: 'adaptive', title: '', description: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitIssue(formData);
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Generated from Stitch UI */}
      <main className="flex-1 pt-16 bg-background w-full px-8 py-6"><div className="flex flex-col w-full">
{/*  Top Breadcrumb & Quick Actions Bar  */}
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<a className="font-label-sm text-label-sm text-secondary hover:text-primary transition-colors flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-[15px]">home</span>
        Dashboard
      </a>
<span className="font-label-sm text-label-sm text-outline-variant">/</span>
<span className="font-label-sm text-label-sm text-primary font-semibold">Help &amp; Support</span>
<span className="font-label-sm text-label-sm text-outline-variant">/</span>
<span className="font-label-sm text-label-sm text-secondary">Knowledge Base</span>
</div>
{/*  Live Telemetry Quick Chip  */}
<div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-surface-container-lowest shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed-dim opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary-container"></span>
</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Core Engine: <strong className="text-on-surface font-semibold">Nominal</strong> (99.98%)</span>
<span className="text-outline-variant">·</span>
<span className="font-label-sm text-label-sm text-primary cursor-pointer hover:underline" >Live Telemetry</span>
</div>
</div>
{/*  Hero Header & High-Agency Search Section  */}
<div className="relative bg-surface-container-lowest rounded-xl shadow-sm p-8 mb-6 overflow-hidden">
{/*  Subtle gradient background sheen  */}
<div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-primary-fixed/40 blur-3xl pointer-events-none"></div>
<div className="absolute right-64 -bottom-20 w-64 h-64 rounded-full bg-surface-container-highest/60 blur-2xl pointer-events-none"></div>
<div className="relative z-10 max-w-3xl">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm mb-3">
<span className="material-symbols-outlined text-[14px]">auto_awesome</span>
        Adaptive Diagnostic Support Hub
      </div>
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight leading-tight mb-2">
        Help Center &amp; Knowledge Base
      </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-6">
        Find answers to how adaptive calibration works, explore platform guides, or submit a technical issue report to the engineering team.
      </p>
{/*  Search Input Container  */}
<div className="relative group">
<div className="flex items-center bg-surface-container-low rounded-xl px-4 py-3 shadow-inner focus-within:bg-surface-container-lowest focus-within:shadow-md transition-all">
<span className="material-symbols-outlined text-outline text-[22px] mr-3">search</span>
<input className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none" id="global-search-input" placeholder="Search guides, FAQs, adaptive algorithms, or billing... (Press '/' to search)" type="text" value="JWT Authentication"/>
<div className="flex items-center gap-2 ml-2">
<button className="px-2 py-1 bg-surface-container rounded font-label-sm text-label-sm text-secondary hover:text-on-surface transition-colors flex items-center gap-1" id="clear-search-btn"  type="button">
<span>Toggle Preview</span>
<kbd className="text-[10px] bg-surface-container-lowest px-1 rounded shadow-xs">ESC</kbd>
</button>
<div className="h-4 w-px bg-outline-variant"></div>
<kbd className="hidden sm:inline-block font-label-sm text-label-sm text-outline bg-surface-container px-2 py-0.5 rounded font-mono shadow-xs">/</kbd>
</div>
</div>
{/*  Floating Quick-Search Overlay (Screen 13: Instant Categorized Search)  */}
<div className="absolute top-full left-0 right-0 mt-2 bg-surface-container-lowest rounded-xl shadow-xl z-30 p-4 transition-all" id="search-overlay">
<div className="flex items-center justify-between pb-3 mb-3 bg-surface-container-low/50 px-3 py-2 rounded-lg">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">manage_search</span>
<span className="font-label-md text-label-md text-on-surface">4 Live Results for <span className="text-primary font-bold">"JWT Authentication"</span></span>
</div>
<span className="font-label-sm text-label-sm text-secondary">Press <kbd className="px-1.5 py-0.5 bg-surface-container rounded text-on-surface">↵</kbd> to view all</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
{/*  Item 1: Skills Gap  */}
<a className="group/item flex items-start gap-3 p-3 rounded-lg hover:bg-surface-container-low transition-colors" href="#">
<div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-on-primary transition-colors flex-shrink-0">
<span className="material-symbols-outlined text-[18px]">tune</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm uppercase tracking-wide text-secondary">Skills Taxonomy</span>
<span className="font-label-sm text-[10px] px-1.5 py-0.2 rounded bg-surface-container text-secondary">Level 3</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface truncate group-hover/item:text-primary transition-colors">
                  JWT &amp; Stateless Session Invalidation
                </span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Master cryptographic verification &amp; distributed session revocation</span>
</div>
</a>
{/*  Item 2: Learning Plan  */}
<a className="group/item flex items-start gap-3 p-3 rounded-lg hover:bg-surface-container-low transition-colors" href="#">
<div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-container group-hover/item:bg-primary-container group-hover/item:text-on-primary transition-colors flex-shrink-0">
<span className="material-symbols-outlined text-[18px]">map</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm uppercase tracking-wide text-secondary">Learning Plan</span>
<span className="font-label-sm text-[10px] px-1.5 py-0.2 rounded bg-surface-container text-secondary">Sprint 04</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface truncate group-hover/item:text-primary transition-colors">
                  Week 04, Day 03: Token Expiry &amp; Redis Blacklist
                </span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Scheduled: Tomorrow at 10:00 AM • 45 min deep dive</span>
</div>
</a>
{/*  Item 3: Interactive Lab  */}
<a className="group/item flex items-start gap-3 p-3 rounded-lg hover:bg-surface-container-low transition-colors" href="#">
<div className="w-9 h-9 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-fixed group-hover/item:bg-secondary group-hover/item:text-on-secondary transition-colors flex-shrink-0">
<span className="material-symbols-outlined text-[18px]">terminal</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm uppercase tracking-wide text-secondary">Interactive Lab</span>
<span className="font-label-sm text-[10px] px-1.5 py-0.2 rounded bg-tertiary-fixed text-on-tertiary-fixed font-semibold">Active Sandbox</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface truncate group-hover/item:text-primary transition-colors">
                  Lab #ND-504: Express Route Middleware
                </span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Automated Jest unit tests with mock auth headers</span>
</div>
</a>
{/*  Item 4: Vetted Mentor  */}
<a className="group/item flex items-start gap-3 p-3 rounded-lg hover:bg-surface-container-low transition-colors" href="#">
<img className="w-9 h-9 rounded-lg object-cover flex-shrink-0" data-alt="Close up professional portrait of a senior engineering mentor Rahul Sharma, warm natural lighting, modern high-tech office background, confident friendly expression, crisp corporate aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuATq0eW44yFQi7l_AloRm2vBIfWQcj6lulbEDY8Cv2ZZ1PUpVbFZuun73Im9S52_7qr46qIYbrn1Pssh0_Gmj1N5XFqL3SlOcSPj-K5fgNUqKVZlAcjiwaxFw0qSYhNfcXRJkgfWZRCuID2FLuQjXjF6_lbJpfftkWxsNJLqZfh4S4DGhidfg3OW0LqDz8Apv8yT9PdzDpZJyrBxZAAo4jQpz8jlgomSKlbmptXllrR"/>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm uppercase tracking-wide text-secondary">Vetted Mentor</span>
<span className="font-label-sm text-[10px] px-1.5 py-0.2 rounded bg-primary-fixed text-on-primary-fixed-variant font-bold">98% Match</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface truncate group-hover/item:text-primary transition-colors">
                  Rahul Sharma (Stripe)
                </span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Available Today • Next slot: 4:30 PM PST</span>
</div>
</a>
</div>
<div className="mt-3 pt-3 flex items-center justify-between text-on-surface-variant bg-surface-container-lowest">
<span className="font-body-sm text-body-sm text-secondary">Looking for something else? Try searching by error code or algorithm version.</span>
<button className="text-primary font-label-md text-label-md hover:underline flex items-center gap-1" type="button">
              Deep Search Knowledge Base
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
</div>
{/*  Primary Asymmetric Grid: 60% Left (FAQs & Categorized Hub) / 40% Right (Bug Report Form & Real-Time Status)  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
{/*  LEFT COLUMN (Spans 7 of 12 columns = ~58-60%)  */}
<div className="lg:col-span-7 flex flex-col gap-6">
{/*  Category Quick Browsing Shelves  */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
<a className="bg-surface-container-lowest p-3.5 rounded-xl shadow-sm hover:shadow-md hover:bg-surface-container-low transition-all group flex flex-col" href="#faq-section">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:scale-105 transition-transform mb-2">
<span className="material-symbols-outlined text-[18px]">auto_stories</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors leading-tight mb-0.5">Curriculum &amp; Tests</span>
<span className="font-body-sm text-body-sm text-secondary line-clamp-1">Adaptive paths, re-calibrations</span>
</a>
<a className="bg-surface-container-lowest p-3.5 rounded-xl shadow-sm hover:shadow-md hover:bg-surface-container-low transition-all group flex flex-col" href="#faq-section">
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-container group-hover:scale-105 transition-transform mb-2">
<span className="material-symbols-outlined text-[18px]">handshake</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors leading-tight mb-0.5">Mentorship</span>
<span className="font-body-sm text-body-sm text-secondary line-clamp-1">1:1 bookings, video privacy</span>
</a>
<a className="bg-surface-container-lowest p-3.5 rounded-xl shadow-sm hover:shadow-md hover:bg-surface-container-low transition-all group flex flex-col" href="#faq-section">
<div className="w-8 h-8 rounded-lg bg-secondary-container flex items-center justify-center text-secondary group-hover:scale-105 transition-transform mb-2">
<span className="material-symbols-outlined text-[18px]">description</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors leading-tight mb-0.5">Parsing &amp; Docs</span>
<span className="font-body-sm text-body-sm text-secondary line-clamp-1">Resume &amp; syllabus ingestion</span>
</a>
<a className="bg-surface-container-lowest p-3.5 rounded-xl shadow-sm hover:shadow-md hover:bg-surface-container-low transition-all group flex flex-col" href="#faq-section">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface-variant group-hover:scale-105 transition-transform mb-2">
<span className="material-symbols-outlined text-[18px]">credit_card</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors leading-tight mb-0.5">Billing &amp; Pro</span>
<span className="font-body-sm text-body-sm text-secondary line-clamp-1">Receipts, enterprise tiers</span>
</a>
</div>
{/*  Main FAQ Accordion Component  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-6" id="faq-section">
<div className="flex items-center justify-between pb-4 mb-4 bg-surface-container-low/40 px-4 py-3 rounded-lg">
<div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">psychology</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Adaptive Engine Architecture &amp; FAQs</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Clear operational answers on how dynamic skill recalibration governs your plan.</p>
</div>
<span className="font-label-sm text-label-sm text-secondary px-2 py-1 bg-surface-container rounded">Engine v4.2</span>
</div>
<div className="flex flex-col gap-3">
{/*  FAQ Item 1 (Expanded by default)  */}
<div className="rounded-lg bg-surface-container-low p-4 transition-all">
<button className="w-full flex items-start justify-between text-left gap-4"  type="button">
<div className="flex items-center gap-3">
<span className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm flex-shrink-0">1</span>
<span className="font-headline-sm text-headline-sm text-on-surface">How does EduPath's Adaptive Engine decide to change my plan?</span>
</div>
<span className="material-symbols-outlined accordion-chevron text-on-surface-variant text-[20px] transition-transform rotate-180">expand_more</span>
</button>
<div className="mt-3 pl-9 text-on-surface-variant font-body-md text-body-md leading-relaxed">
              When your assessment accuracy on sub-concepts falls below 70% or practice test suites fail repeatedly, EduPath automatically inserts prerequisite fundamentals drills and adjusts weekly hours to prevent cognitive overload. The calibration runs asynchronously after every evaluated submission.
              
              <div className="mt-3 p-3 rounded bg-surface-container-lowest flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-[18px]">tune</span>
<span className="font-body-sm text-body-sm text-on-surface">Threshold: &lt; 70% diagnostic accuracy triggers an automatic 4-stage remedial branch.</span>
</div>
</div>
</div>
{/*  FAQ Item 2  */}
<div className="rounded-lg bg-surface-container-low p-4 transition-all">
<button className="w-full flex items-start justify-between text-left gap-4"  type="button">
<div className="flex items-center gap-3">
<span className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center font-label-sm text-label-sm flex-shrink-0">2</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Will changing my weekly availability delete existing completed milestones?</span>
</div>
<span className="material-symbols-outlined accordion-chevron text-on-surface-variant text-[20px] transition-transform">expand_more</span>
</button>
<div className="mt-3 pl-9 text-on-surface-variant font-body-md text-body-md leading-relaxed hidden">
              No. All verified credentials, acquired skills, and test scores are permanently preserved. Only future unstarted tasks are re-sequenced to fit your updated weekly calendar commitment without penalty or loss of historical telemetry.
            </div>
</div>
{/*  FAQ Item 3  */}
<div className="rounded-lg bg-surface-container-low p-4 transition-all">
<button className="w-full flex items-start justify-between text-left gap-4"  type="button">
<div className="flex items-center gap-3">
<span className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center font-label-sm text-label-sm flex-shrink-0">3</span>
<span className="font-headline-sm text-headline-sm text-on-surface">How does mentor matching work with my skill gaps?</span>
</div>
<span className="material-symbols-outlined accordion-chevron text-on-surface-variant text-[20px] transition-transform">expand_more</span>
</button>
<div className="mt-3 pl-9 text-on-surface-variant font-body-md text-body-md leading-relaxed hidden">
              Mentors are ranked based on their verified production engineering stack matching your active deficit areas. For instance, if your system marks "Redis Invalidation" as a high-friction node, mentors with high-throughput distributed cache architectural experience at tier-1 companies receive highest ranking priority.
            </div>
</div>
{/*  FAQ Item 4  */}
<div className="rounded-lg bg-surface-container-low p-4 transition-all">
<button className="w-full flex items-start justify-between text-left gap-4"  type="button">
<div className="flex items-center gap-3">
<span className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center font-label-sm text-label-sm flex-shrink-0">4</span>
<span className="font-headline-sm text-headline-sm text-on-surface">What data is shared with mentors during a 1:1 session?</span>
</div>
<span className="material-symbols-outlined accordion-chevron text-on-surface-variant text-[20px] transition-transform">expand_more</span>
</button>
<div className="mt-3 pl-9 text-on-surface-variant font-body-md text-body-md leading-relaxed hidden">
              Only the specific diagnostic checkpoint and attached code sandbox are shared under strict zero-spill privacy. Personal identifiers, billing history, and wider curriculum analytics outside the requested sprint focus remain completely sealed.
            </div>
</div>
</div>
{/*  Additional Guides & Docs Callout  */}
<div className="mt-6 pt-4 bg-surface-container-lowest flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-surface-container text-primary">
<span className="material-symbols-outlined text-[20px]">menu_book</span>
</div>
<div>
<div className="font-headline-sm text-headline-sm text-on-surface">Explore Official Documentation</div>
<div className="font-body-sm text-body-sm text-secondary">Read full whitepapers on Bayesian knowledge tracing and sandbox virtualization.</div>
</div>
</div>
<a className="px-4 py-2 rounded-lg bg-surface-container text-primary hover:bg-primary-container hover:text-on-primary font-label-md text-label-md transition-colors flex items-center gap-1.5 flex-shrink-0" href="#">
<span>Read Docs</span>
<span className="material-symbols-outlined text-[16px]">open_in_new</span>
</a>
</div>
</div>
{/*  Human Support Contact Banner  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-6 relative overflow-hidden">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-center gap-4">
<img className="w-12 h-12 rounded-xl object-cover shadow-sm flex-shrink-0" data-alt="Modern technical support engineer wearing discreet headphone headset in high tech developer studio, soft neon accent lighting, professional, focused friendly smile." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHa0Gk-5MrvYKp3liWS8IeXpK1jF4HktVQwjIJomiVUz4v7PwyNdqrx6cucp4nLxu1ujLkUO3LPPUrK0-UFWlIYQh0U-pSMvWY1HAHNQsaCz803p9Fvgglk2gJbl7jePdT0vh36h5KApcCgRjdyyx7rY8n08maGmSKfcQI3Jj6kRLJrxgvZpY0K-Rgw8shzAGkrTbk-7UkEQfbMnw5mocwH7EYaxwGldKk3D2TmZSQ"/>
<div>
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface">Need engineering pair-debugging?</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-[10px] uppercase font-bold">Priority SLA</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Pro Tier subscribers receive on-demand triage with an EduPath curriculum engineer within 2 business hours.
              </p>
</div>
</div>
<button className="px-4 py-2.5 rounded-lg bg-surface-container-high text-primary hover:bg-primary hover:text-on-primary font-label-md text-label-md font-semibold transition-all flex items-center gap-2 flex-shrink-0" type="button">
<span className="material-symbols-outlined text-[18px]">support_agent</span>
<span>Request Staff Triage</span>
</button>
</div>
</div>
</div>
{/*  RIGHT COLUMN (Spans 5 of 12 columns = ~40%)  */}
<div className="lg:col-span-5 flex flex-col gap-6">
{/*  Report an Issue / Diagnostic Submission Form (Screen 12)  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-6">
<div className="flex items-center justify-between pb-3 mb-4 bg-surface-container-low/40 px-4 py-2.5 rounded-lg">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">bug_report</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Report an Issue</h2>
</div>
<span className="font-label-sm text-label-sm text-secondary">Auto-Telemetry ON</span>
</div>
{/*  Success Toast indicator (Toggled upon submission or preview)  */}
{isSuccess && (
<div className="mb-4 p-3 rounded-lg bg-tertiary-container text-on-tertiary flex items-start gap-2.5 shadow-sm" id="submission-toast">
<span className="material-symbols-outlined text-[18px] flex-shrink-0 mt-0.5">check_circle</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold">Diagnostic report received</span>
<span className="font-body-sm text-body-sm opacity-90">Telemetry capture validated. Response estimated within 4 hours.</span>
</div>
</div>
)}
<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
{/*  Issue Category Selector  */}
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface">Issue Category</label>
<div className="relative">
<select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full bg-surface-container-low rounded-lg px-3 py-2.5 font-body-sm text-body-sm text-on-surface focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary focus:outline-none appearance-none cursor-pointer">
<option value="adaptive">Adaptive Plan &amp; Curriculum Calibration</option>
<option value="sandbox">IDE Sandbox / Cloud Runtime</option>
<option value="assessment">Assessment Scoring &amp; Unit Tests</option>
<option value="mentor">Mentor Connection &amp; Video Bridge</option>
<option value="bug">User Interface / General Bug</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-2.5 text-[20px] text-secondary pointer-events-none">expand_more</span>
</div>
</div>
{/*  Summary / Subject Input  */}
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface">Summary / Subject</label>
<input value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required className="w-full bg-surface-container-low rounded-lg px-3 py-2.5 font-body-sm text-body-sm text-on-surface focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary focus:outline-none" placeholder="e.g., Redis mock test suite timeout on Lab #ND-504" type="text"/>
</div>
{/*  Auto-attached Context Snapshot Pill  */}
<div className="p-3 rounded-lg bg-surface-container-low flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Diagnostic Environment</span>
<span className="font-label-sm text-label-sm text-tertiary-container font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">sensors</span> Verified
              </span>
</div>
<div className="flex items-center gap-2 mt-1">
<span className="material-symbols-outlined text-primary text-[16px]">verified</span>
<span className="font-body-sm text-body-sm text-on-surface font-mono text-[12px]">
                Auto-attaching: Lab #ND-504, Chrome 122, macOS, Sprint 04
              </span>
</div>
</div>
{/*  Description Textarea  */}
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface">Description &amp; Observed Behavior</label>
<textarea value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} required className="w-full bg-surface-container-low rounded-lg p-3 font-body-sm text-body-sm text-on-surface focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary focus:outline-none resize-none" placeholder="Describe what occurred, any error codes produced in the sandbox terminal, or steps to reproduce..." rows={3}></textarea>
</div>
{/*  Attachments Drag & Drop Area  */}
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface">Screen Recording or Terminal Logs (Optional)</label>
<div className="border-2 border-dashed border-outline-variant/60 hover:border-primary rounded-xl p-4 flex flex-col items-center justify-center text-center cursor-pointer bg-surface-container-low/50 hover:bg-surface-container-low transition-colors group">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-secondary group-hover:text-primary mb-2 transition-colors">
<span className="material-symbols-outlined text-[20px]">cloud_upload</span>
</div>
<span className="font-label-md text-label-md text-on-surface font-semibold">Click to upload or drag &amp; drop</span>
<span className="font-label-sm text-label-sm text-secondary mt-0.5">TAR, LOG, PNG, MP4 up to 25MB</span>
<div className="mt-2 flex items-center gap-2 px-2 py-1 rounded bg-surface-container-lowest font-mono text-[11px] text-on-surface-variant">
<span className="material-symbols-outlined text-[13px] text-tertiary">check</span>
<span>container_err_0224.log (14.2 KB)</span>
</div>
</div>
</div>
{/*  Submit Button  */}
<button disabled={isSubmitting} className="mt-2 w-full py-3 px-4 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-headline-sm text-headline-sm font-semibold transition-all shadow-sm flex items-center justify-center gap-2 group disabled:opacity-50" type="submit">
<span>{isSubmitting ? 'Submitting...' : 'Submit Diagnostic Report'}</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">send</span>
</button>
</form>
</div>
{/*  Platform System Health & State Panel (Screen 18)  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-6" id="system-status-card">
<div className="flex items-center justify-between pb-3 mb-4 bg-surface-container-low/40 px-4 py-2.5 rounded-lg">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">dns</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Platform System Health</h3>
</div>
{/*  Live Emerald Badge  */}
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-container text-on-tertiary font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary animate-pulse"></span>
            All Systems Operational
          </span>
</div>
<div className="flex flex-col gap-3">
{/*  Metric 1: Adaptive Telemetry  */}
<div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[18px]">speed</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface">Adaptive Telemetry Stream</span>
<span className="font-body-sm text-body-sm text-secondary">Real-time Bayesian scoring pipe</span>
</div>
</div>
<div className="flex flex-col items-end">
<span className="font-label-md text-label-md text-tertiary-container font-semibold">Nominal</span>
<span className="font-mono text-[11px] text-secondary">14ms latency</span>
</div>
</div>
{/*  Metric 2: Interactive Cloud Sandboxes  */}
<div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-[18px]">terminal</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface">Interactive Cloud Sandboxes</span>
<span className="font-body-sm text-body-sm text-secondary">Container pods (AWS us-east-1)</span>
</div>
</div>
<div className="flex flex-col items-end">
<span className="font-label-md text-label-md text-tertiary-container font-semibold">Operational</span>
<span className="font-mono text-[11px] text-secondary">99.98% uptime</span>
</div>
</div>
{/*  Metric 3: Third Party Sync  */}
<div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[18px]">save_as</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface">Google Meet / Calendar Sync</span>
<span className="font-body-sm text-body-sm text-secondary">OAuth2 token dispatcher</span>
</div>
</div>
<div className="flex flex-col items-end">
<span className="font-label-md text-label-md text-tertiary-container font-semibold">Connected</span>
<span className="font-mono text-[11px] text-secondary">Sync active</span>
</div>
</div>
</div>
{/*  Inline SVG Mini Latency Graph  */}
<div className="mt-4 pt-3 bg-surface-container-lowest">
<div className="flex items-center justify-between text-secondary font-label-sm text-label-sm mb-1">
<span>24h API Latency Response</span>
<span className="text-on-surface font-mono">Avg: 16.4ms</span>
</div>
<svg className="w-full h-10 text-primary" fill="none" preserveAspectRatio="none" viewBox="0 0 300 40">
<path d="M0,25 Q25,20 50,26 T100,18 T150,22 T200,12 T250,15 T300,18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"></path>
<path d="M0,25 Q25,20 50,26 T100,18 T150,22 T200,12 T250,15 T300,18 L300,40 L0,40 Z" fill="currentColor" fill-opacity="0.08"></path>
</svg>
</div>
{/*  Status Page Direct Link  */}
<div className="mt-3 flex items-center justify-between">
<span className="font-body-sm text-body-sm text-secondary">Incident history &amp; scheduled updates</span>
<a className="font-label-md text-label-md text-primary hover:underline flex items-center gap-1" href="#">
<span>status.edupath.dev</span>
<span className="material-symbols-outlined text-[14px]">arrow_outward</span>
</a>
</div>
</div>
</div>
</div>
</div>
</main>
    </div>
  );
}
