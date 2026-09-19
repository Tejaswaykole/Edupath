
export default function LearnerOnboardingEdupath() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Generated from Stitch UI */}
      <main className="w-full bg-surface min-h-screen flex items-center justify-center"><div className="flex flex-col w-full items-center justify-center py-6 px-4">
{/*  Top Navigation & Stepper Header  */}
<div className="w-full max-w-[760px] flex flex-col items-center mb-6">
<div className="w-full flex items-center justify-between pb-5 border-b border-surface-container">
<div className="flex items-center gap-3">
<img alt="EduPath" className="w-9 h-9 object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1UW82HvmiPy5TMo7cU3gRwBiU3baDfcaiEOnyNASWlxwTVH0w0qIkNHoitLzMolXacL-2tGekbbOW8xuiE-cFOTqz3XSg6tMXidYpz4GWTD9ElmxSIusWHfPloyzQX4ShPK6uAbsckWXk0QAmTGvpHPR8UpvJbzypQPbEy08-huoIQrDNTtxARo_QwXykp2DRz9wjaWKAk9oBlNnhorpC0KbV5ertGX9YPXANETHdtirg"/>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface tracking-tight">EduPath</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Diagnostic Setup Engine</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant">Step 1 of 5</span>
<div className="h-4 w-[1px] bg-surface-variant"></div>
<button className="font-label-sm text-label-sm text-primary hover:text-primary-container transition-colors font-medium" type="button">Save &amp; Exit</button>
</div>
</div>
{/*  Stepper Indicator  */}
<div className="w-full pt-5 flex items-center justify-between px-2 sm:px-6">
{/*  Step 1: Active  */}
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm font-semibold shadow-sm">
          1
        </div>
<span className="font-label-sm text-label-sm font-semibold text-primary hidden sm:inline-block">Skills</span>
</div>
<div className="flex-1 h-[2px] mx-2 bg-primary"></div>
{/*  Step 2  */}
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-label-sm text-label-sm font-medium">
          2
        </div>
<span className="font-label-sm text-label-sm text-on-surface-variant hidden sm:inline-block">Level</span>
</div>
<div className="flex-1 h-[2px] mx-2 bg-surface-container"></div>
{/*  Step 3  */}
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-label-sm text-label-sm font-medium">
          3
        </div>
<span className="font-label-sm text-label-sm text-on-surface-variant hidden sm:inline-block">Role</span>
</div>
<div className="flex-1 h-[2px] mx-2 bg-surface-container"></div>
{/*  Step 4  */}
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-label-sm text-label-sm font-medium">
          4
        </div>
<span className="font-label-sm text-label-sm text-on-surface-variant hidden sm:inline-block">Goal</span>
</div>
<div className="flex-1 h-[2px] mx-2 bg-surface-container"></div>
{/*  Step 5  */}
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-label-sm text-label-sm font-medium">
          5
        </div>
<span className="font-label-sm text-label-sm text-on-surface-variant hidden sm:inline-block">Availability</span>
</div>
</div>
</div>
{/*  Main Card Container  */}
<div className="w-full max-w-[720px] bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container overflow-hidden">
{/*  Card Inner Header  */}
<div className="p-6 sm:p-8 pb-5 border-b border-surface-container">
<div className="flex items-center gap-2 mb-2.5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-secondary-container text-on-secondary-container font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          Step 1 of 5 • Diagnostic Setup
        </span>
<span className="font-label-sm text-label-sm text-tertiary-container font-semibold bg-tertiary-fixed/30 px-2 py-0.5 rounded">
          AI Adaptive Baseline
        </span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-1">
        What are your current skills?
      </h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
        Select technologies you have hands-on experience with. Our AI agent evaluates these benchmarks to skip redundant foundations and tailor your trajectory.
      </p>
</div>
{/*  Step 1 Content Body  */}
<div className="p-6 sm:p-8 space-y-6">
{/*  Search Field  */}
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]">search</span>
</div>
<input className="w-full pl-10 pr-4 py-2.5 bg-surface-container-low rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all" id="skill-search" placeholder="Search skills (e.g. React, Python, Docker, PostgreSQL)..." type="text"/>
</div>
{/*  Selected Skills Active Row  */}
<div className="space-y-2">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant font-semibold tracking-wide uppercase">
            Active Baseline Skills (<span id="selected-count">4</span>)
          </span>
<button className="font-label-sm text-label-sm text-primary hover:underline font-medium" id="clear-skills-btn">Clear all</button>
</div>
<div className="flex flex-wrap gap-2 min-h-[38px] p-2.5 rounded-lg bg-surface-container-low/60" id="selected-chips-container">
{/*  Selected Chip Item  */}
<div className="skill-selected-tag inline-flex items-center gap-1.5 pl-2.5 pr-2 py-1 bg-surface-container-lowest rounded-md shadow-sm text-on-surface font-label-md text-label-md">
<span className="material-symbols-outlined text-[16px] text-tertiary-container" >check_circle</span>
<span>JavaScript</span>
<button className="remove-chip-btn text-on-surface-variant hover:text-error ml-1 p-0.5 rounded hover:bg-surface-container transition-colors" type="button">
<span className="material-symbols-outlined text-[14px] block">close</span>
</button>
</div>
<div className="skill-selected-tag inline-flex items-center gap-1.5 pl-2.5 pr-2 py-1 bg-surface-container-lowest rounded-md shadow-sm text-on-surface font-label-md text-label-md">
<span className="material-symbols-outlined text-[16px] text-tertiary-container" >check_circle</span>
<span>React</span>
<button className="remove-chip-btn text-on-surface-variant hover:text-error ml-1 p-0.5 rounded hover:bg-surface-container transition-colors" type="button">
<span className="material-symbols-outlined text-[14px] block">close</span>
</button>
</div>
<div className="skill-selected-tag inline-flex items-center gap-1.5 pl-2.5 pr-2 py-1 bg-surface-container-lowest rounded-md shadow-sm text-on-surface font-label-md text-label-md">
<span className="material-symbols-outlined text-[16px] text-tertiary-container" >check_circle</span>
<span>Node.js</span>
<button className="remove-chip-btn text-on-surface-variant hover:text-error ml-1 p-0.5 rounded hover:bg-surface-container transition-colors" type="button">
<span className="material-symbols-outlined text-[14px] block">close</span>
</button>
</div>
<div className="skill-selected-tag inline-flex items-center gap-1.5 pl-2.5 pr-2 py-1 bg-surface-container-lowest rounded-md shadow-sm text-on-surface font-label-md text-label-md">
<span className="material-symbols-outlined text-[16px] text-tertiary-container" >check_circle</span>
<span>Git</span>
<button className="remove-chip-btn text-on-surface-variant hover:text-error ml-1 p-0.5 rounded hover:bg-surface-container transition-colors" type="button">
<span className="material-symbols-outlined text-[14px] block">close</span>
</button>
</div>
</div>
</div>
{/*  Popular Categories Grid  */}
<div className="space-y-4 pt-1">
{/*  Frontend  */}
<div className="space-y-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary">devices</span>
<span className="font-label-sm text-label-sm font-semibold text-on-surface">Frontend Development</span>
</div>
<div className="flex flex-wrap gap-2">
<button className="skill-toggle-btn px-3 py-1.5 rounded-lg font-body-sm text-body-sm bg-primary text-on-primary font-medium shadow-sm transition-all" data-skill="JavaScript" type="button">
              JavaScript ✓
            </button>
<button className="skill-toggle-btn px-3 py-1.5 rounded-lg font-body-sm text-body-sm bg-primary text-on-primary font-medium shadow-sm transition-all" data-skill="React" type="button">
              React ✓
            </button>
<button className="skill-toggle-btn px-3 py-1.5 rounded-lg font-body-sm text-body-sm bg-surface-container-low text-on-surface hover:bg-surface-container font-medium transition-all" data-skill="TypeScript" type="button">
              TypeScript +
            </button>
<button className="skill-toggle-btn px-3 py-1.5 rounded-lg font-body-sm text-body-sm bg-surface-container-low text-on-surface hover:bg-surface-container font-medium transition-all" data-skill="HTML/CSS" type="button">
              HTML/CSS +
            </button>
<button className="skill-toggle-btn px-3 py-1.5 rounded-lg font-body-sm text-body-sm bg-surface-container-low text-on-surface hover:bg-surface-container font-medium transition-all" data-skill="Next.js" type="button">
              Next.js +
            </button>
<button className="skill-toggle-btn px-3 py-1.5 rounded-lg font-body-sm text-body-sm bg-surface-container-low text-on-surface hover:bg-surface-container font-medium transition-all" data-skill="Tailwind CSS" type="button">
              Tailwind CSS +
            </button>
</div>
</div>
{/*  Backend & Databases  */}
<div className="space-y-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary">dns</span>
<span className="font-label-sm text-label-sm font-semibold text-on-surface">Backend &amp; Databases</span>
</div>
<div className="flex flex-wrap gap-2">
<button className="skill-toggle-btn px-3 py-1.5 rounded-lg font-body-sm text-body-sm bg-primary text-on-primary font-medium shadow-sm transition-all" data-skill="Node.js" type="button">
              Node.js ✓
            </button>
<button className="skill-toggle-btn px-3 py-1.5 rounded-lg font-body-sm text-body-sm bg-surface-container-low text-on-surface hover:bg-surface-container font-medium transition-all" data-skill="Python" type="button">
              Python +
            </button>
<button className="skill-toggle-btn px-3 py-1.5 rounded-lg font-body-sm text-body-sm bg-surface-container-low text-on-surface hover:bg-surface-container font-medium transition-all" data-skill="PostgreSQL" type="button">
              PostgreSQL +
            </button>
<button className="skill-toggle-btn px-3 py-1.5 rounded-lg font-body-sm text-body-sm bg-surface-container-low text-on-surface hover:bg-surface-container font-medium transition-all" data-skill="SQL" type="button">
              SQL +
            </button>
<button className="skill-toggle-btn px-3 py-1.5 rounded-lg font-body-sm text-body-sm bg-surface-container-low text-on-surface hover:bg-surface-container font-medium transition-all" data-skill="Go" type="button">
              Go +
            </button>
<button className="skill-toggle-btn px-3 py-1.5 rounded-lg font-body-sm text-body-sm bg-surface-container-low text-on-surface hover:bg-surface-container font-medium transition-all" data-skill="Express" type="button">
              Express +
            </button>
</div>
</div>
{/*  Tools & DevOps  */}
<div className="space-y-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary">terminal</span>
<span className="font-label-sm text-label-sm font-semibold text-on-surface">Tools &amp; DevOps</span>
</div>
<div className="flex flex-wrap gap-2">
<button className="skill-toggle-btn px-3 py-1.5 rounded-lg font-body-sm text-body-sm bg-primary text-on-primary font-medium shadow-sm transition-all" data-skill="Git" type="button">
              Git ✓
            </button>
<button className="skill-toggle-btn px-3 py-1.5 rounded-lg font-body-sm text-body-sm bg-surface-container-low text-on-surface hover:bg-surface-container font-medium transition-all" data-skill="Docker" type="button">
              Docker +
            </button>
<button className="skill-toggle-btn px-3 py-1.5 rounded-lg font-body-sm text-body-sm bg-surface-container-low text-on-surface hover:bg-surface-container font-medium transition-all" data-skill="AWS" type="button">
              AWS +
            </button>
<button className="skill-toggle-btn px-3 py-1.5 rounded-lg font-body-sm text-body-sm bg-surface-container-low text-on-surface hover:bg-surface-container font-medium transition-all" data-skill="CI/CD" type="button">
              CI/CD +
            </button>
<button className="skill-toggle-btn px-3 py-1.5 rounded-lg font-body-sm text-body-sm bg-surface-container-low text-on-surface hover:bg-surface-container font-medium transition-all" data-skill="Figma" type="button">
              Figma +
            </button>
</div>
</div>
</div>
{/*  Upcoming Steps Preview Summary  */}
<div className="pt-4 border-t border-surface-container space-y-2.5">
<span className="font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase tracking-wider block">
          Upcoming Diagnostic Steps Preview
        </span>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
{/*  Step 2 Accordion Item  */}
<div className="p-3 bg-surface-container-low/70 rounded-lg flex items-center justify-between">
<div className="flex items-center gap-2.5 min-w-0">
<span className="w-5 h-5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm flex items-center justify-center font-bold">2</span>
<div className="truncate">
<p className="font-label-md text-label-md text-on-surface truncate">Experience Level</p>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Intermediate (1-3 yrs)</p>
</div>
</div>
<span className="material-symbols-outlined text-[18px] text-outline">tune</span>
</div>
{/*  Step 3 Preview  */}
<div className="p-3 bg-surface-container-low/70 rounded-lg flex items-center justify-between">
<div className="flex items-center gap-2.5 min-w-0">
<span className="w-5 h-5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm flex items-center justify-center font-bold">3</span>
<div className="truncate">
<p className="font-label-md text-label-md text-on-surface truncate">Target Role</p>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Full Stack Developer</p>
</div>
</div>
<span className="material-symbols-outlined text-[18px] text-outline">work_outline</span>
</div>
{/*  Step 4 Preview  */}
<div className="p-3 bg-surface-container-low/70 rounded-lg flex items-center justify-between">
<div className="flex items-center gap-2.5 min-w-0">
<span className="w-5 h-5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm flex items-center justify-center font-bold">4</span>
<div className="truncate">
<p className="font-label-md text-label-md text-on-surface truncate">Career Goal</p>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Senior Fullstack in 6 mos</p>
</div>
</div>
<span className="material-symbols-outlined text-[18px] text-outline">flag</span>
</div>
{/*  Step 5 Preview  */}
<div className="p-3 bg-surface-container-low/70 rounded-lg flex items-center justify-between">
<div className="flex items-center gap-2.5 min-w-0">
<span className="w-5 h-5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm flex items-center justify-center font-bold">5</span>
<div className="truncate">
<p className="font-label-md text-label-md text-on-surface truncate">Learning Availability</p>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">1 hr/day • 5 days/wk</p>
</div>
</div>
<span className="material-symbols-outlined text-[18px] text-outline">schedule</span>
</div>
</div>
</div>
</div>
{/*  Card Navigation Footer  */}
<div className="px-6 sm:px-8 py-4 bg-surface-container-low/50 border-t border-surface-container flex items-center justify-between">
<button className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg font-label-md text-label-md font-semibold text-secondary hover:text-on-surface hover:bg-surface-container transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
        Back
      </button>
<div className="flex items-center gap-3">
<span className="font-body-sm text-body-sm text-on-surface-variant hidden sm:inline">Baseline saved</span>
<button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-semibold shadow-sm transition-all group" id="continue-btn" type="button">
<span>Continue to Experience Level</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
</button>
</div>
</div>
</div>
{/*  Micro AI Guarantee note  */}
<div className="mt-4 flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px] text-primary">auto_awesome</span>
<span className="font-body-sm text-body-sm">EduPath AI will synthesize your custom roadmap after all 5 steps are completed.</span>
</div>
</div>
</main>
    </div>
  );
}
