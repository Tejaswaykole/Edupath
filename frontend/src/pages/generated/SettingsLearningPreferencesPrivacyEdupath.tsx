import { useSettings } from '../../hooks/useSettings';

export default function SettingsLearningPreferencesPrivacyEdupath() {
  const { settings, isUpdating } = useSettings();

  return (
    <div className="min-h-screen bg-surface">
      {/* Generated from Stitch UI */}
      <main className="flex-1 pt-16 bg-background w-full px-8 py-6"><div className="flex flex-col w-full">
<div className="flex flex-col gap-8 max-w-7xl mx-auto w-full pb-16">
{/*  Top Breadcrumbs & Page Metadata Header  */}
<div className="flex flex-col gap-4">
<nav className="flex items-center gap-2 font-label-md text-label-md text-secondary">
<a className="hover:text-primary transition-colors" href="#">Dashboard</a>
<span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
<a className="hover:text-primary transition-colors" href="#">Settings</a>
<span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
<span className="text-on-surface font-semibold">Learning Preferences &amp; Privacy</span>
</nav>
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pt-1">
<div className="flex flex-col gap-1 max-w-3xl">
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">Settings &amp; Preferences</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">
            Manage how EduPath adapts your curriculum, balances study velocity, protects personal documents, and shares context with verified mentors.
          </p>
</div>
<div className="flex items-center gap-2 self-start lg:self-center px-3.5 py-1.5 rounded-full bg-surface-container-low shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
</span>
<span className="font-label-sm text-label-sm text-tertiary font-semibold tracking-wide">Auto-syncing changes with Adaptive Engine</span>
</div>
</div>
{/*  Tab Navigation  */}
<div className="flex items-center gap-2 overflow-x-auto pt-4 border-b border-outline-variant/30">
<button className="px-4 py-2.5 rounded-t-lg font-label-md text-label-md text-secondary hover:text-on-surface hover:bg-surface-container-low transition-all" type="button">
          General &amp; Account
        </button>
<button className="relative px-4 py-2.5 rounded-t-lg font-label-md text-label-md text-primary font-bold bg-surface-container-lowest shadow-sm flex items-center gap-2" type="button">
<span>Learning &amp; Adaptive Engine</span>
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
</button>
<button className="px-4 py-2.5 rounded-t-lg font-label-md text-label-md text-secondary hover:text-on-surface hover:bg-surface-container-low transition-all" type="button">
          Privacy &amp; Data Sharing
        </button>
<button className="px-4 py-2.5 rounded-t-lg font-label-md text-label-md text-secondary hover:text-on-surface hover:bg-surface-container-low transition-all" type="button">
          Accessibility &amp; Display
        </button>
<button className="px-4 py-2.5 rounded-t-lg font-label-md text-label-md text-secondary hover:text-on-surface hover:bg-surface-container-low transition-all" type="button">
          Notification Rules
        </button>
</div>
</div>
{/*  Main Workspace Mosaic  */}
<div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
{/*  Left 8 Columns: Adaptive Parameters & Privacy Management  */}
<div className="xl:col-span-8 flex flex-col gap-8">
{/*  SECTION 1: Adaptive Learning Parameters  */}
<div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col gap-6">
<div className="flex items-start justify-between gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">tune</span>
</div>
<div className="flex flex-col">
<h2 className="font-headline-md text-headline-md text-on-surface">Adaptive Learning Parameters</h2>
<span className="font-body-sm text-body-sm text-secondary">Calibrate pace, modality priority, and automated curriculum assistance</span>
</div>
</div>
<span className="px-2.5 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-semibold">Active Profile</span>
</div>
{/*  Target Role & Career Level Tile  */}
<div className="p-5 rounded-xl bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
<span className="material-symbols-outlined text-[26px]">terminal</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">Current Curriculum Focus</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Full Stack Developer <span className="text-primary font-semibold">(Level 3)</span></span>
<span className="font-body-sm text-body-sm text-secondary">Next evaluation milestone: Week 06 Architecture Defense</span>
</div>
</div>
<button className="px-4 py-2 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md font-semibold transition-colors shadow-sm flex items-center gap-1.5 self-start sm:self-center" type="button">
<span>Change Target</span>
<span className="material-symbols-outlined text-[16px]">open_in_new</span>
</button>
</div>
{/*  Weekly Study Budget & Velocity Guard  */}
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md text-on-surface flex items-center gap-2">
<span>Weekly Study Budget &amp; Velocity Guard</span>
<span className="material-symbols-outlined text-[16px] text-outline cursor-help" title="Governs max sprint allocation per week">info</span>
</label>
<span className="font-headline-sm text-headline-sm text-primary font-bold">{settings?.preferred_study_schedule || '7.5 hrs / week'}</span>
</div>
{/*  Custom Slider Track Representation  */}
<div className="flex flex-col gap-2 pt-2">
<div className="relative w-full h-2 rounded-full bg-surface-container">
<div className="absolute left-0 top-0 h-full rounded-full bg-primary" ></div>
<div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-surface-container-lowest shadow-md cursor-grab" ></div>
</div>
<div className="flex items-center justify-between text-secondary font-label-sm text-label-sm">
<span>3.0 hrs (Casual)</span>
<span className="text-primary font-semibold">Recommended (7.5 hrs)</span>
<span>15.0 hrs (Accelerated)</span>
</div>
</div>
<div className="p-3.5 rounded-lg bg-surface-container-low flex items-start gap-3 mt-1">
<span className="material-symbols-outlined text-[18px] text-primary flex-shrink-0 mt-0.5">verified_user</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
<span className="font-semibold text-on-surface">Cognitive Velocity Guard active:</span> EduPath will never assign &gt;90 min on weekdays to prevent cognitive burnout and protect streak consistency.
              </p>
</div>
</div>
{/*  Modality Preferences  */}
<div className="flex flex-col gap-3">
<span className="font-label-md text-label-md text-on-surface">Learning Modality Preferences (Priority Weighting)</span>
<div className="flex flex-wrap gap-2.5">
<button className="px-3.5 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md flex items-center gap-2 shadow-sm" type="button">
<span className="material-symbols-outlined text-[16px]">code</span>
<span>Interactive Coding Labs (Highest Priority)</span>
</button>
<button className="px-3.5 py-2 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center gap-2 transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">article</span>
<span>Technical Documentation &amp; RFCs</span>
</button>
<button className="px-3.5 py-2 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center gap-2 transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">play_circle</span>
<span>Video Walkthroughs</span>
</button>
<button className="px-3.5 py-2 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center gap-2 transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">psychology</span>
<span>Guided Problem Solving</span>
</button>
</div>
</div>
{/*  Adaptive Interventions Sensitivity (Toggles)  */}
<div className="flex flex-col gap-4 pt-2">
<span className="font-label-md text-label-md text-on-surface">Adaptive Interventions Sensitivity</span>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
{/*  Toggle 1  */}
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col justify-between gap-3">
<div className="flex items-start justify-between gap-2">
<span className="font-label-md text-label-md text-on-surface">Automatic Prerequisite Scaffolding</span>
<div className="w-9 h-5 rounded-full bg-primary p-0.5 flex items-center justify-end cursor-pointer">
<div className="w-4 h-4 rounded-full bg-on-primary shadow-sm"></div>
</div>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-semibold">State: On (Standard)</span>
</div>
{/*  Toggle 2  */}
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col justify-between gap-3">
<div className="flex items-start justify-between gap-2">
<span className="font-label-md text-label-md text-on-surface">Difficulty Auto-Downscale on Friction</span>
<div className="w-9 h-5 rounded-full bg-primary p-0.5 flex items-center justify-end cursor-pointer">
<div className="w-4 h-4 rounded-full bg-on-primary shadow-sm"></div>
</div>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-semibold">State: On (&gt;2 Failures)</span>
</div>
{/*  Toggle 3  */}
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col justify-between gap-3">
<div className="flex items-start justify-between gap-2">
<span className="font-label-md text-label-md text-on-surface">Weekly Progress Digest</span>
<div className="w-9 h-5 rounded-full bg-primary p-0.5 flex items-center justify-end cursor-pointer">
<div className="w-4 h-4 rounded-full bg-on-primary shadow-sm"></div>
</div>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-semibold">State: On (Mondays 08:00)</span>
</div>
</div>
<div className="px-4 py-3 rounded-xl bg-surface-container-lowest shadow-sm flex items-center gap-3">
<span className="material-symbols-outlined text-[18px] text-secondary">lightbulb</span>
<p className="font-body-sm text-body-sm text-secondary">
                EduPath uses these parameters to safely calibrate your schedule without exposing raw AI reasoning or altering standard certification requirements.
              </p>
</div>
</div>
</div>
{/*  SECTION 2: Privacy, Data Sharing & Mentor Context Controls  */}
<div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col gap-6">
<div className="flex items-start justify-between gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">shield</span>
</div>
<div className="flex flex-col">
<h2 className="font-headline-md text-headline-md text-on-surface">Privacy, Data Sharing &amp; Mentor Context</h2>
<span className="font-body-sm text-body-sm text-secondary">Control telemetry boundaries and determine strictly isolated personal data</span>
</div>
</div>
<span className="px-2.5 py-1 rounded-full bg-surface-container-low text-on-surface font-label-sm text-label-sm font-semibold">SOC-2 Type II</span>
</div>
{/*  Mentor Visibility Breakdown  */}
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Transparent Mentor Visibility Protocol</span>
<span className="font-label-sm text-label-sm text-secondary">Preview mode for @Dr. Aris Thorne (Assigned Mentor)</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
{/*  Visible Container  */}
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-3">
<div className="flex items-center gap-2 text-tertiary">
<span className="material-symbols-outlined text-[18px]">visibility</span>
<span className="font-label-md text-label-md font-semibold">Visible to Mentors</span>
</div>
<ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
<span>Verified target role &amp; Level 3 milestones</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
<span>Active skill gap diagnostics &amp; quiz error themes</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
<span>Shared sandbox code diffs &amp; architecture drafts</span>
</li>
</ul>
</div>
{/*  Strictly Private Container  */}
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-3">
<div className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined text-[18px]">lock</span>
<span className="font-label-md text-label-md font-semibold">Strictly Private (Zero-Spill Enforced) {settings?.is_private ? '[ON]' : '[OFF]'}</span>
</div>
<ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">do_not_disturb_on</span>
<span>Uploaded resume files &amp; portfolio raw assets</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">do_not_disturb_on</span>
<span>Compensation history &amp; career salary targets</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">do_not_disturb_on</span>
<span>Unrelated course grades &amp; contact phone/address</span>
</li>
</ul>
</div>
</div>
</div>
{/*  Document Center Privacy  */}
<div className="flex flex-col gap-3 pt-2">
<span className="font-label-md text-label-md text-on-surface">Document Center &amp; Cryptographic Assets</span>
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-center gap-3 min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary flex-shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[20px]">description</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">Tejas_Patil_Resume_2025.pdf</span>
<div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm">
<span>1.4 MB</span>
<span>•</span>
<span className="text-tertiary font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">lock</span>
<span>SOC-2 AES-256 Encrypted</span>
</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 self-start sm:self-center">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md font-semibold transition-colors shadow-sm flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[16px]">download</span>
<span>Download Copy</span>
</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest hover:bg-error-container text-error font-label-md text-label-md font-semibold transition-colors shadow-sm flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[16px]">delete</span>
<span>Delete Document</span>
</button>
</div>
</div>
</div>
{/*  Export & Danger Actions  */}
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-outline-variant/20">
<button className="px-4 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md font-semibold transition-colors flex items-center gap-2" type="button">
<span className="material-symbols-outlined text-[18px] text-secondary">cloud_download</span>
<span>Export My Learning Graph &amp; Checkpoints (JSON / PDF)</span>
</button>
<button className="font-label-md text-label-md text-error hover:underline transition-all" type="button">
              Deactivate or Delete Account
            </button>
</div>
</div>
</div>
{/*  Right 4 Columns: Accessibility, Ergonomics & Telemetry Overview  */}
<div className="xl:col-span-4 flex flex-col gap-8">
{/*  SECTION 3: Accessibility & Ergonomics  */}
<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col gap-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">accessibility_new</span>
</div>
<div className="flex flex-col">
<h2 className="font-headline-md text-headline-md text-on-surface">Accessibility &amp; Display</h2>
<span className="font-body-sm text-body-sm text-secondary">Ergonomics &amp; legibility controls</span>
</div>
</div>
{/*  Information Density  */}
<div className="flex flex-col gap-2">
<span className="font-label-md text-label-md text-on-surface">Interface Density</span>
<div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-surface-container-low">
<button className="py-2 px-3 rounded-lg bg-surface-container-lowest shadow-sm font-label-md text-label-md font-semibold text-primary flex items-center justify-center gap-1.5" type="button">
<span className="material-symbols-outlined text-[16px]">view_agenda</span>
<span>Comfortable</span>
</button>
<button className="py-2 px-3 rounded-lg font-label-md text-label-md text-secondary hover:text-on-surface flex items-center justify-center gap-1.5 transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">density_small</span>
<span>Compact</span>
</button>
</div>
</div>
{/*  Reduced Motion  */}
<div className="flex items-center justify-between p-3.5 rounded-xl bg-surface-container-low">
<div className="flex flex-col pr-2">
<span className="font-label-md text-label-md text-on-surface">Reduced Motion Mode</span>
<span className="font-body-sm text-body-sm text-secondary">Disable canvas loops &amp; progress physics</span>
</div>
<div className="w-9 h-5 rounded-full bg-surface-container p-0.5 flex items-center cursor-pointer">
<div className="w-4 h-4 rounded-full bg-outline shadow-sm"></div>
</div>
</div>
{/*  Font Scaling  */}
<div className="flex flex-col gap-2">
<span className="font-label-md text-label-md text-on-surface">Font Legibility Scale</span>
<div className="grid grid-cols-2 gap-2">
<div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between cursor-pointer">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">Standard</span>
<span className="font-label-sm text-label-sm text-secondary">100% (Baseline)</span>
</div>
<span className="material-symbols-outlined text-[18px] text-primary">radio_button_checked</span>
</div>
<div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between cursor-pointer hover:bg-surface-container transition-colors">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-secondary">Enhanced</span>
<span className="font-label-sm text-label-sm text-secondary">115% (Hi-Res)</span>
</div>
<span className="material-symbols-outlined text-[18px] text-outline">radio_button_unchecked</span>
</div>
</div>
</div>
</div>
{/*  Telemetry & Diagnostic Health Summary Card  */}
<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col gap-5">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">Engine Sync Status</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">Week 04 Synchronized</span>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between font-body-sm text-body-sm">
<span className="text-secondary">Next AI Curriculum Rebalance</span>
<span className="font-semibold text-on-surface">Sunday, 23:59 EST</span>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm">
<span className="text-secondary">Target Pacing Alignment</span>
<span className="font-semibold text-tertiary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">trending_up</span>
<span>+4.2% ahead of cohort</span>
</span>
</div>
<div className="flex items-center justify-between font-body-sm text-body-sm">
<span className="text-secondary">Isolated Personal Data Nodes</span>
<span className="font-semibold text-on-surface">7 / 7 Protected</span>
</div>
</div>
{/*  Micro Sparkline SVG for adaptive pace calibration  */}
<div className="p-3 rounded-xl bg-surface-container-low flex flex-col gap-2">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Daily Load Distribution (Hours)</span>
<div className="h-16 w-full flex items-end justify-between gap-2 pt-2">
<div className="flex-1 flex flex-col items-center gap-1">
<div className="w-full bg-primary rounded-t" ></div>
<span className="font-label-sm text-label-sm text-secondary">M</span>
</div>
<div className="flex-1 flex flex-col items-center gap-1">
<div className="w-full bg-primary rounded-t" ></div>
<span className="font-label-sm text-label-sm text-secondary">T</span>
</div>
<div className="flex-1 flex flex-col items-center gap-1">
<div className="w-full bg-primary rounded-t" ></div>
<span className="font-label-sm text-label-sm text-secondary">W</span>
</div>
<div className="flex-1 flex flex-col items-center gap-1">
<div className="w-full bg-primary rounded-t" ></div>
<span className="font-label-sm text-label-sm text-secondary">T</span>
</div>
<div className="flex-1 flex flex-col items-center gap-1">
<div className="w-full bg-primary rounded-t" ></div>
<span className="font-label-sm text-label-sm text-secondary">F</span>
</div>
<div className="flex-1 flex flex-col items-center gap-1 opacity-40">
<div className="w-full bg-outline rounded-t" ></div>
<span className="font-label-sm text-label-sm text-secondary">S</span>
</div>
<div className="flex-1 flex flex-col items-center gap-1 opacity-40">
<div className="w-full bg-outline rounded-t" ></div>
<span className="font-label-sm text-label-sm text-secondary">S</span>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Sticky Bottom Control Panel & Confirmation Bar  */}
<div className="sticky bottom-4 z-30 w-full p-4 rounded-2xl bg-surface-container-lowest/95 backdrop-blur-md shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface">
{isUpdating ? "Saving..." : <><strong className="font-semibold text-tertiary">✓ Preferences synced</strong> and applied.</>}
        </span>
</div>
<div className="flex items-center gap-3 w-full sm:w-auto justify-end">
<button className="px-4 py-2.5 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container-low font-label-md text-label-md font-semibold transition-colors" type="button">
          Revert to Recommended Defaults
        </button>
<button className="px-6 py-2.5 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md font-semibold transition-colors shadow-sm flex items-center gap-2" type="button">
<span>Save All Changes</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
</div>
</div></main>
    </div>
  );
}
