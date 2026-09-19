
export default function SkillGapOverviewReadinessEdupath() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Generated from Stitch UI */}
      <main className="p-8 max-w-7xl w-full mx-auto flex flex-col gap-6">
{/*  Breadcrumbs  */}
<nav className="flex items-center gap-2 text-xs font-semibold text-slate-400">
<a className="hover:text-indigo-600 transition-colors" href="#">Dashboard</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<a className="hover:text-indigo-600 transition-colors" href="#">Skill Gaps</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-slate-700">Readiness Diagnostic</span>
</nav>
{/*  Title & Actions Bar  */}
<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex flex-wrap items-center gap-3">
<h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Your Skill Gaps</h1>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
              Diagnostic v2.4 Active
            </span>
</div>
<p className="text-slate-500 text-sm max-w-3xl">
            We compared your verified capabilities with current benchmark requirements for your target role.
          </p>
{/*  Target Role Metadata Badge Strip  */}
<div className="flex flex-wrap items-center gap-2 pt-1.5">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-semibold shadow-xs">
<span className="material-symbols-outlined text-indigo-600 text-[15px]">work_outline</span>
              Target Role: Full Stack Developer (Level 3)
            </div>
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-500 text-xs font-medium shadow-xs">
<span className="material-symbols-outlined text-[15px] text-slate-400">analytics</span>
              Benchmark: 500+ Live Tech Job Postings (Q1 2025)
            </div>
</div>
</div>
<div className="flex items-center gap-3 self-stretch sm:self-auto shrink-0">
<button className="inline-flex items-center justify-center gap-2 px-4 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-all shadow-xs">
<span className="material-symbols-outlined text-[18px]">download</span>
            Export Diagnostic PDF
          </button>
<button className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-all shadow-sm shadow-indigo-200">
<span className="material-symbols-outlined text-[18px]">share</span>
</button>
</div>
</div>
{/*  Top 4 Summary Metric Cards  */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
{/*  1. Overall Skill Readiness  */}
<div className="flex flex-col justify-between p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
<div className="flex items-center justify-between">
<span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Overall Readiness</span>
<span className="material-symbols-outlined text-indigo-600 text-[20px]">speed</span>
</div>
<div className="my-3 flex items-baseline gap-3">
<span className="text-3xl font-extrabold text-slate-900 tracking-tight">62%</span>
<span className="inline-flex items-center text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
<span className="material-symbols-outlined text-xs mr-0.5">trending_up</span>
              +14%
            </span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
<div className="bg-indigo-600 h-2 rounded-full" ></div>
</div>
<p className="text-xs text-slate-500 mt-2">from 48% onboarding baseline</p>
</div>
{/*  2. Skills Acquired  */}
<div className="flex flex-col justify-between p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
<div className="flex items-center justify-between">
<span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Skills Acquired</span>
<span className="material-symbols-outlined text-emerald-600 text-[20px]">check_circle</span>
</div>
<div className="my-3">
<span className="text-3xl font-extrabold text-slate-900 tracking-tight">8 Skills</span>
</div>
<p className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
<span className="material-symbols-outlined text-xs">verified</span>
            Strong alignment with market demand
          </p>
<p className="text-xs text-slate-400 mt-1">Verified via portfolio and tests</p>
</div>
{/*  3. Skills In Progress  */}
<div className="flex flex-col justify-between p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
<div className="flex items-center justify-between">
<span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">In Progress</span>
<span className="material-symbols-outlined text-indigo-600 text-[20px]">pending_actions</span>
</div>
<div className="my-3">
<span className="text-3xl font-extrabold text-slate-900 tracking-tight">3 Skills</span>
</div>
<p className="text-xs font-semibold text-indigo-600 flex items-center gap-1">
<span className="material-symbols-outlined text-xs">sync</span>
            Partial match &amp; active practice
          </p>
<p className="text-xs text-slate-400 mt-1">Average 55% completion rate</p>
</div>
{/*  4. Critical Skill Gaps  */}
<div className="flex flex-col justify-between p-5 rounded-2xl bg-white border border-red-200 shadow-xs bg-gradient-to-b from-white to-red-50/20">
<div className="flex items-center justify-between">
<span className="text-[11px] font-bold uppercase tracking-wider text-red-600">Critical Gaps</span>
<span className="material-symbols-outlined text-red-600 text-[20px]">error_outline</span>
</div>
<div className="my-3">
<span className="text-3xl font-extrabold text-red-600 tracking-tight">4 Gaps</span>
</div>
<p className="text-xs font-semibold text-red-600 flex items-center gap-1">
<span className="material-symbols-outlined text-xs">priority_high</span>
            Immediate priority for full-stack
          </p>
<p className="text-xs text-slate-400 mt-1">Estimated effort: ~28 hours total</p>
</div>
</div>
{/*  Main 2-Column Content Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
{/*  LEFT COLUMN: 7 Units  */}
<section className="lg:col-span-7 flex flex-col gap-6">
{/*  1. Skill Readiness Breakdown Card  */}
<div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
<div>
<h2 className="text-base font-bold text-slate-900 tracking-tight">Skill Readiness Breakdown</h2>
<p className="text-xs text-slate-500">Proficiency percentage compared to target benchmark</p>
</div>
{/*  Filter Tabs  */}
<div className="inline-flex p-1 bg-slate-100 rounded-xl text-xs font-medium text-slate-600">
<button className="px-3 py-1.5 rounded-lg bg-white text-indigo-700 font-bold shadow-xs">All (15)</button>
<button className="px-2.5 py-1.5 rounded-lg hover:text-slate-900 transition-colors">Acquired (8)</button>
<button className="px-2.5 py-1.5 rounded-lg hover:text-slate-900 transition-colors">In Progress (3)</button>
<button className="px-2.5 py-1.5 rounded-lg hover:text-slate-900 transition-colors">Gaps (4)</button>
</div>
</div>
{/*  Progress Bars List  */}
<div className="flex flex-col gap-5 pt-5">
{/*  JavaScript  */}
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<span className="font-bold text-slate-900 text-sm">JavaScript (ES6+)</span>
<span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">Acquired</span>
</div>
<span className="font-bold text-slate-900 text-sm">90%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
<div className="bg-emerald-500 h-2.5 rounded-full transition-all duration-500" ></div>
</div>
</div>
{/*  React 18  */}
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<span className="font-bold text-slate-900 text-sm">React 18 &amp; State Architecture</span>
<span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">In Progress</span>
</div>
<span className="font-bold text-slate-900 text-sm">65%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
<div className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500" ></div>
</div>
</div>
{/*  Node.js  */}
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<span className="font-bold text-slate-900 text-sm">Node.js &amp; Express REST APIs</span>
<span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">Needs Attention</span>
</div>
<span className="font-bold text-slate-900 text-sm">40%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
<div className="bg-amber-500 h-2.5 rounded-full transition-all duration-500" ></div>
</div>
</div>
{/*  Docker & CI/CD  */}
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<span className="font-bold text-slate-900 text-sm">Docker &amp; CI/CD Pipelines</span>
<span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">Needs Attention</span>
</div>
<span className="font-bold text-slate-900 text-sm">35%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
<div className="bg-amber-500 h-2.5 rounded-full transition-all duration-500" ></div>
</div>
</div>
{/*  PostgreSQL  */}
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<span className="font-bold text-slate-900 text-sm">PostgreSQL &amp; Relational Schemas</span>
<span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-red-50 text-red-700 border border-red-200">Critical Gap</span>
</div>
<span className="font-bold text-slate-900 text-sm">25%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
<div className="bg-red-500 h-2.5 rounded-full transition-all duration-500" ></div>
</div>
</div>
{/*  Cloud / AWS Deployment  */}
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<span className="font-bold text-slate-900 text-sm">Cloud / AWS ECS &amp; Lambda</span>
<span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-red-50 text-red-700 border border-red-200">Critical Gap</span>
</div>
<span className="font-bold text-slate-900 text-sm">10%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
<div className="bg-red-500 h-2.5 rounded-full transition-all duration-500" ></div>
</div>
</div>
</div>
</div>
{/*  2. Current Level vs Target Benchmark Matrix  */}
<div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
<div className="flex items-center justify-between pb-4 border-b border-slate-100">
<div>
<h2 className="text-base font-bold text-slate-900 tracking-tight">Current Level vs Target Benchmark</h2>
<p className="text-xs text-slate-500">Granular competency mapping across evaluation levels (L0 to L4)</p>
</div>
<span className="text-xs font-semibold text-slate-400 hidden sm:inline-block">Updated today</span>
</div>
<div className="overflow-x-auto mt-3">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-400">
<th className="py-3 px-2">Skill / Area</th>
<th className="py-3 px-2">Current Level</th>
<th className="py-3 px-2">Target Role Benchmark</th>
<th className="py-3 px-2 text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 text-xs">
{/*  JavaScript  */}
<tr className="hover:bg-slate-50/60 transition-colors">
<td className="py-3.5 px-2 font-bold text-slate-900 text-sm">JavaScript (ES6+)</td>
<td className="py-3.5 px-2">
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">
                        Advanced (L4)
                      </span>
</td>
<td className="py-3.5 px-2 text-slate-600 font-medium">Advanced (L4)</td>
<td className="py-3.5 px-2 text-right">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="material-symbols-outlined text-[14px]">check</span>
                        Acquired
                      </span>
</td>
</tr>
{/*  React  */}
<tr className="hover:bg-slate-50/60 transition-colors">
<td className="py-3.5 px-2 font-bold text-slate-900 text-sm">React 18 Architecture</td>
<td className="py-3.5 px-2">
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">
                        Intermediate (L2)
                      </span>
</td>
<td className="py-3.5 px-2 text-slate-600 font-medium">Advanced (L3)</td>
<td className="py-3.5 px-2 text-right">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                        Minor Gap
                      </span>
</td>
</tr>
{/*  Node.js  */}
<tr className="hover:bg-slate-50/60 transition-colors">
<td className="py-3.5 px-2 font-bold text-slate-900 text-sm">Node.js Microservices</td>
<td className="py-3.5 px-2">
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">
                        Beginner (L1)
                      </span>
</td>
<td className="py-3.5 px-2 text-slate-600 font-medium">Intermediate (L3)</td>
<td className="py-3.5 px-2 text-right">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                        Priority Gap
                      </span>
</td>
</tr>
{/*  PostgreSQL  */}
<tr className="hover:bg-slate-50/60 transition-colors">
<td className="py-3.5 px-2 font-bold text-slate-900 text-sm">PostgreSQL &amp; Indexing</td>
<td className="py-3.5 px-2">
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">
                        Beginner (L1)
                      </span>
</td>
<td className="py-3.5 px-2 text-slate-600 font-medium">Intermediate (L2)</td>
<td className="py-3.5 px-2 text-right">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                        Priority Gap
                      </span>
</td>
</tr>
{/*  System Design  */}
<tr className="hover:bg-slate-50/60 transition-colors">
<td className="py-3.5 px-2 font-bold text-slate-900 text-sm">System Design &amp; Caching</td>
<td className="py-3.5 px-2">
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-red-50 text-red-700 font-medium border border-red-100">
                        Not Started (L0)
                      </span>
</td>
<td className="py-3.5 px-2 text-slate-600 font-medium">Intermediate (L2)</td>
<td className="py-3.5 px-2 text-right">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-50 text-red-700 border border-red-200">
                        Critical Gap
                      </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
{/*  RIGHT COLUMN: 5 Units  */}
<aside className="lg:col-span-5 flex flex-col gap-6">
{/*  1. EduPath Agent Rationale Card  */}
<div className="bg-white rounded-2xl border-2 border-indigo-100 p-6 shadow-xs relative overflow-hidden">
<div className="absolute -right-6 -top-6 w-24 h-24 bg-indigo-50 rounded-full blur-xl pointer-events-none"></div>
<div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
<div className="p-1.5 rounded-lg bg-indigo-600 text-white">
<span className="material-symbols-outlined text-[18px]">psychology</span>
</div>
<div>
<h3 className="text-sm font-bold text-slate-900">EduPath Agent Rationale</h3>
<p className="text-[11px] text-slate-500">Why this analysis &amp; roadmap sequence?</p>
</div>
</div>
<p className="text-xs text-slate-600 leading-relaxed mt-4">
              Based on your resume parsing and 2 verified projects, your frontend JavaScript fundamentals comfortably meet Senior Full Stack criteria.
            </p>
<div className="my-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
<p className="text-xs font-medium text-slate-700 leading-relaxed">
                However, <strong className="text-indigo-600 font-bold">84% of senior job specs</strong> require proficiency in Node.js backend microservices and relational schema optimization (PostgreSQL). We've prioritized these backend competencies to optimize your trajectory.
              </p>
</div>
<div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-xs text-emerald-600">verified</span>
                Calculated via Live Vector Model
              </span>
<span className="font-semibold text-slate-700">Confidence: 96%</span>
</div>
</div>
{/*  2. Recommended Focus / Priority Gap Identified Card  */}
<div className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-2xl p-6 shadow-md shadow-indigo-100 relative overflow-hidden">
<div className="flex items-center justify-between mb-3">
<span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/20 text-white backdrop-blur-xs">
                Recommended Focus
              </span>
<span className="material-symbols-outlined text-white/80 text-xl">bolt</span>
</div>
<h3 className="text-lg font-extrabold text-white tracking-tight">Priority Gap Identified: Node.js &amp; REST APIs</h3>
<p className="text-xs text-indigo-100 mt-1 mb-5 leading-relaxed">
              Estimated effort: <strong className="text-white">5–7 hours</strong> to bridge from Beginner (L1) to intermediate benchmark (L3).
            </p>
<a className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-indigo-700 font-bold text-xs hover:bg-slate-50 transition-all shadow-sm" href="#">
<span>View Priority Gaps &amp; Objectives</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
{/*  3. Market Demand Metric  */}
<div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
<div className="flex items-center justify-between mb-4">
<h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Market Demand Metric</h4>
<span className="material-symbols-outlined text-slate-400 text-sm">trending_up</span>
</div>
<div className="flex items-start gap-4">
<div className="p-3 rounded-xl bg-indigo-50 text-indigo-600">
<span className="material-symbols-outlined text-2xl">query_stats</span>
</div>
<div className="flex-1">
<p className="text-2xl font-extrabold text-slate-900 tracking-tight">88% Demand</p>
<p className="text-xs text-slate-500 leading-normal mt-0.5">
                  Full Stack Hiring Index: 88% demand for Node.js + SQL combos across all verified 2025 tech postings.
                </p>
</div>
</div>
<div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
<span>Source: Tech Pulse Index 2025</span>
<span className="text-indigo-600 font-semibold hover:underline cursor-pointer">Explore Trends</span>
</div>
</div>
{/*  4. Quick Contextual Mentor Insight  */}
<div className="bg-white rounded-2xl border border-slate-200 p-5 flex items-start gap-3.5 shadow-xs">
<div className="w-10 h-10 rounded-full bg-cover bg-center shrink-0 border border-slate-200" ></div>
<div>
<p className="text-xs font-bold text-slate-900">Alex Mercer <span className="text-[11px] font-normal text-slate-500">• Senior Staff Engineer</span></p>
<p className="text-xs text-slate-600 mt-1 italic leading-relaxed">
                "Closing your SQL schema modeling and Node middleware gap unlocks over $35k in median salary offers."
              </p>
</div>
</div>
</aside>
</div>
{/*  Bottom Status Bar / Sync Note  */}
<footer className="w-full border-t border-slate-200 mt-6 pt-5 pb-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span>Live Benchmark Engine Synchronized with Tech Industry Feeds</span>
</div>
<p>© 2025 EduPath Learning Systems. All rights reserved.</p>
</footer>
</main>
    </div>
  );
}
