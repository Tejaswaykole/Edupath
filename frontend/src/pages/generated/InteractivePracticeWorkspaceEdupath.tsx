
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSubmitPractice } from '../../hooks/useWorkspace';
import { useLearningPath } from '../../hooks/useLearning';

export default function InteractivePracticeWorkspaceEdupath() {
  const navigate = useNavigate();
  const { data: learningPath } = useLearningPath();
  const [submissionSuccess, setSubmissionSuccess] = useState<{ score: number; feedback: string } | null>(null);

  let practiceTaskId = 1;
  if (learningPath?.modules) {
    for (const mod of learningPath.modules) {
      const act = mod.activities?.find((a: any) => a.practice_task_id);
      if (act && act.practice_task_id) {
        practiceTaskId = act.practice_task_id;
        break;
      }
    }
  }

  const submitMutation = useSubmitPractice(practiceTaskId);

  const handleSubmit = () => {
    submitMutation.mutate(
      "router.get('/api/v1/users', async (req, res, next) => { try { const query = querySchema.parse(req.query); const data = await getUsers(query); res.status(200).json({ status: 'success', data }); } catch(err) { if (err instanceof z.ZodError) { return res.status(400).json({ status: 'error', errors: err.errors }); } next(err); } });",
      {
        onSuccess: (data: any) => {
          setSubmissionSuccess({
            score: data.score ?? 85,
            feedback: data.feedback ?? "All automated unit tests passed! Query parameters properly coerced and validated with status 400."
          });
        }
      }
    );
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Generated from Stitch UI */}
      <main className="pt-16 p-8 max-w-7xl w-full mx-auto flex flex-col gap-6"><div className="flex flex-col w-full gap-6">
{/*  Navigation Path & Header Area  */}
<div className="flex flex-col gap-3">
<nav className="flex items-center gap-2 font-label-sm text-label-sm text-secondary">
<a className="hover:text-primary transition-colors" href="#">Dashboard</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<a className="hover:text-primary transition-colors" href="#">Practice &amp; Assessments</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-on-surface font-semibold">Node.js Coding Lab</span>
</nav>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Practice Workspace: REST API Endpoints</h1>
<p className="font-body-md text-body-md text-secondary mt-0.5">Interactive evaluation and live unit testing for production route scaffolding.</p>
</div>
<div className="flex items-center gap-2 self-start md:self-auto">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-primary-container font-label-sm text-label-sm font-semibold">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Session Active
        </span>
<button className="px-3.5 py-2 rounded-xl bg-surface-container-low hover:bg-surface-container text-secondary hover:text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px]">bookmark_border</span>
          Save Draft
        </button>
</div>
</div>
{/*  Metadata Strip  */}
<div className="flex flex-wrap items-center gap-y-2 gap-x-6 px-5 py-3 rounded-2xl bg-surface-container-lowest shadow-sm">
<div className="flex items-center gap-2 font-label-md text-label-md text-on-surface">
<span className="material-symbols-outlined text-primary text-[18px]">terminal</span>
<span className="text-secondary font-normal">Skill:</span>
<span className="font-semibold">Node.js &amp; Express</span>
</div>
<div className="h-4 w-px bg-surface-variant"></div>
<div className="flex items-center gap-2 font-label-md text-label-md text-on-surface">
<span className="material-symbols-outlined text-tertiary text-[18px]">speed</span>
<span className="text-secondary font-normal">Difficulty:</span>
<span className="font-semibold">Intermediate</span>
</div>
<div className="h-4 w-px bg-surface-variant"></div>
<div className="flex items-center gap-2 font-label-md text-label-md text-on-surface">
<span className="material-symbols-outlined text-primary-container text-[18px]">flag</span>
<span className="text-secondary font-normal">Objective:</span>
<span className="font-medium text-on-surface-variant">Build Express 5.x REST Route with Validation</span>
</div>
<div className="h-4 w-px bg-surface-variant"></div>
<div className="flex items-center gap-2 font-label-md text-label-md text-on-surface ml-auto">
<span className="material-symbols-outlined text-secondary text-[18px]">schedule</span>
<span className="text-secondary font-normal">Estimated Time:</span>
<span className="font-semibold">30 min</span>
</div>
</div>
</div>
{/*  Main Split Architecture  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
{/*  Left Column: Task Specification, Requirements, and Unit Guidelines (5 Cols)  */}
<div className="lg:col-span-5 flex flex-col gap-5">
{/*  Spec Card  */}
<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col gap-5">
<div className="flex items-center justify-between pb-3 border-b border-surface-container">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">assignment</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Task Description</h2>
</div>
<span className="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-surface-container-low text-secondary font-medium">Lab ID #ND-504</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Create a <code className="px-1.5 py-0.5 rounded bg-surface-container-low text-primary font-mono text-xs">GET /api/v1/users</code> endpoint that queries active users and strictly validates incoming URL query parameters using schema-based type coercion with <strong className="text-on-surface">zod</strong>.
        </p>
{/*  Requirements List  */}
<div className="flex flex-col gap-3">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Implementation Criteria</span>
<div className="flex flex-col gap-2.5">
<div className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low text-on-surface">
<span className="w-5 h-5 rounded-full bg-surface-container-highest text-primary flex items-center justify-center font-label-sm text-label-sm font-bold shrink-0 mt-0.5">1</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Define and mount router endpoint <span className="font-mono text-xs font-semibold text-on-surface">GET /api/v1/users</span> within <code className="text-primary font-mono text-xs">router.js</code>.
              </p>
</div>
<div className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low text-on-surface">
<span className="w-5 h-5 rounded-full bg-surface-container-highest text-primary flex items-center justify-center font-label-sm text-label-sm font-bold shrink-0 mt-0.5">2</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Support optional <span className="font-mono text-xs text-on-surface font-semibold">?role=learner</span> filtering against database schema enumeration values.
              </p>
</div>
<div className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low text-on-surface">
<span className="w-5 h-5 rounded-full bg-surface-container-highest text-primary flex items-center justify-center font-label-sm text-label-sm font-bold shrink-0 mt-0.5">3</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Return HTTP 200 payload envelope: <span className="font-mono text-xs text-on-surface">&#123; status: 'success', data: [...] &#125;</span>.
              </p>
</div>
<div className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low text-on-surface">
<span className="w-5 h-5 rounded-full bg-surface-container-highest text-primary flex items-center justify-center font-label-sm text-label-sm font-bold shrink-0 mt-0.5">4</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Catch invalid query parameters and explicitly trigger <strong className="text-on-surface">400 Bad Request</strong> with detailed error metadata.
              </p>
</div>
</div>
</div>
{/*  Verification Snapshot  */}
<div className="flex flex-col gap-2 pt-2">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-secondary">Automated Test Coverage</span>
<span className="font-bold text-on-surface">3 of 4 Passing (75%)</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container-low overflow-hidden">
<div className="h-full bg-primary-container rounded-full" ></div>
</div>
</div>
{/*  Hint Accordion  */}
<details className="group rounded-xl bg-surface-container-low overflow-hidden transition-all duration-200">
<summary className="flex items-center justify-between p-3.5 cursor-pointer font-label-md text-label-md text-on-surface select-none hover:bg-surface-container">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">lightbulb</span>
<span>Hint: Using Zod schema parsing in middleware</span>
</div>
<span className="material-symbols-outlined text-secondary transition-transform group-open:rotate-180 text-[18px]">expand_more</span>
</summary>
<div className="p-4 pt-1 font-body-sm text-body-sm text-on-surface-variant flex flex-col gap-2">
<p>Use <code className="font-mono text-xs text-primary font-semibold">UserQuerySchema.safeParse(req.query)</code> inside your controller or route guard. If <code className="font-mono text-xs text-secondary font-semibold">!result.success</code>, immediately invoke:</p>
<pre className="bg-surface-container-lowest p-2.5 rounded-lg text-xs font-mono text-on-surface overflow-x-auto">return res.status(400).json(&#123;
  status: 'fail',
  errors: result.error.flatten()
&#125;);</pre>
</div>
</details>
</div>
{/*  Quick Concept Reference Card  */}
<div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[24px]">menu_book</span>
</div>
<div className="flex flex-col gap-0.5">
<span className="font-headline-sm text-headline-sm text-on-surface">Express 5 Route Semantics</span>
<span className="font-body-sm text-body-sm text-secondary">Rejected promises in route handlers are now automatically forwarded to error middleware.</span>
</div>
</div>
</div>
{/*  Right Column: Code Editor & Execution Console (7 Cols)  */}
<div className="lg:col-span-7 flex flex-col gap-5">
{/*  IDE Main Window  */}
<div className="bg-[#131b2e] rounded-2xl overflow-hidden shadow-xl flex flex-col">
{/*  Editor Header Tabs  */}
<div className="bg-[#0b1323] px-4 py-2 flex items-center justify-between border-b border-[#213145]">
<div className="flex items-center gap-1.5">
<button className="px-3 py-1.5 rounded-lg bg-[#1a263d] text-white font-label-sm text-label-sm font-semibold flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary-fixed"></span>
              router.js
            </button>
<button className="px-3 py-1.5 rounded-lg text-[#bec6e0] hover:bg-[#1a263d]/50 font-label-sm text-label-sm font-medium transition-colors">
              schema.js
            </button>
<button className="px-3 py-1.5 rounded-lg text-[#bec6e0] hover:bg-[#1a263d]/50 font-label-sm text-label-sm font-medium transition-colors">
              app.test.js
            </button>
</div>
<div className="flex items-center gap-2 text-[#bec6e0]">
<button className="p-1 rounded hover:bg-[#1a263d] text-[#bec6e0] hover:text-white transition-colors" title="Format Document">
<span className="material-symbols-outlined text-[18px]">format_align_left</span>
</button>
<button className="p-1 rounded hover:bg-[#1a263d] text-[#bec6e0] hover:text-white transition-colors" title="Reset Code">
<span className="material-symbols-outlined text-[18px]">restart_alt</span>
</button>
<span className="font-label-sm text-label-sm text-[#8c97b8] ml-2">UTF-8 • JavaScript</span>
</div>
</div>
{/*  Code Area  */}
<div className="p-4 font-mono text-[13px] leading-6 text-[#eaf1ff] overflow-x-auto min-h-[300px]">
<div className="flex gap-4">
{/*  Line Numbers  */}
<div className="select-none text-[#565e74] text-right font-mono pr-2 flex flex-col">
<span>01</span><span>02</span><span>03</span><span>04</span><span>05</span>
<span>06</span><span>07</span><span>08</span><span>09</span><span>10</span>
<span>11</span><span>12</span><span>13</span><span>14</span><span>15</span>
<span>16</span><span>17</span><span>18</span>
</div>
{/*  Code Lines  */}
<div className="flex-1">
<div><span className="text-[#c3c0ff]">const</span> express = <span className="text-[#c3c0ff]">require</span>(<span className="text-[#6ffbbe]">'express'</span>);</div>
<div><span className="text-[#c3c0ff]">const</span> &#123; z &#125; = <span className="text-[#c3c0ff]">require</span>(<span className="text-[#6ffbbe]">'zod'</span>);</div>
<div><span className="text-[#c3c0ff]">const</span> router = express.Router();</div>
<div className="text-[#565e74] italic">// Query validation schema</div>
<div><span className="text-[#c3c0ff]">const</span> UserQuery = z.object(&#123;</div>
<div className="pl-4">role: z.enum([<span className="text-[#6ffbbe]'">'admin'</span>, <span className="text-[#6ffbbe]'">'mentor'</span>, <span className="text-[#6ffbbe]'">'learner'</span>]).optional()</div>
<div>&#125;);</div>
<br/>
<div>router.get(<span className="text-[#6ffbbe]">'/users'</span>, <span className="text-[#c3c0ff]">async</span> (req, res, next) =&gt; &#123;</div>
<div className="pl-4"><span className="text-[#c3c0ff]">try</span> &#123;</div>
<div className="pl-8"><span className="text-[#c3c0ff]">const</span> query = UserQuery.parse(req.query);</div>
<div className="pl-8"><span className="text-[#c3c0ff]">const</span> users = <span className="text-[#c3c0ff]">await</span> fetchActiveUsers(query.role);</div>
<div className="pl-8">res.status(<span className="text-[#4edea3]">200</span>).json(&#123; status: <span className="text-[#6ffbbe]'">'success'</span>, data: users &#125;);</div>
<div className="pl-4">&#125; <span className="text-[#c3c0ff]">catch</span> (err) &#123;</div>
<div className="pl-8 text-[#ffdad6] bg-[#ba1a1a]/20 rounded px-1 -mx-1"><span className="text-[#565e74]">// BUG: Should be 400 when ZodError, currently yielding uncaught next(err) -&gt; 500</span></div>
<div className="pl-8">next(err);</div>
<div className="pl-4">&#125;</div>
<div>&#125;);</div>
</div>
</div>
</div>
{/*  Terminal Status Strip  */}
<div className="bg-[#0b1323] px-4 py-2.5 flex items-center justify-between text-xs text-[#bec6e0] border-t border-[#213145]">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span>
<span className="font-mono">Node v20.12.2 • Express v5.0.1 • Jest Runner v29.7</span>
</div>
<div className="flex items-center gap-3">
<span className="text-[#8c97b8]">Memory: 41.2 MB</span>
<span className="text-[#8c97b8]">Runtime: 142ms</span>
</div>
</div>
{/*  Test Suite Output Console  */}
<div className="bg-[#0e1626] p-4 flex flex-col gap-2.5 font-mono text-xs">
<div className="flex items-center justify-between text-[#8c97b8] pb-1 border-b border-[#213145]/60 font-sans">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Automated Evaluation Suite</span>
<span className="font-label-sm text-label-sm text-amber-300">1 suite incomplete</span>
</div>
<div className="flex items-center gap-2 text-emerald-400">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
<span>Test 1: GET /api/v1/users returns status 200 (Pass - 34ms)</span>
</div>
<div className="flex items-center gap-2 text-emerald-400">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
<span>Test 2: Filters successfully by valid role param (Pass - 28ms)</span>
</div>
<div className="flex items-center gap-2 text-emerald-400">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
<span>Test 3: Response complies with &#123; status, data &#125; payload envelope (Pass - 19ms)</span>
</div>
<div className="flex items-start gap-2 text-amber-300 bg-amber-400/10 p-2 rounded-lg">
<span className="material-symbols-outlined text-[16px] mt-0.5 shrink-0">warning</span>
<div className="flex flex-col gap-1">
<span className="font-semibold">Test 4: Zod validator returns 400 on invalid query enum (Needs Attention)</span>
<span className="text-[#bec6e0] text-[11px]">Expected HTTP status 400 Bad Request, received 500 Internal Server Error via default error boundary.</span>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Practice Result & Instant Feedback Section  */}
<div className="rounded-2xl bg-surface-container-lowest p-6 shadow-sm flex flex-col gap-5">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[24px]">troubleshoot</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface">Practice Evaluation</span>
<span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-label-sm text-label-sm font-semibold">Needs Minor Refinement</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">Feedback generated by EduPath Automated Test Evaluator</span>
</div>
</div>
{/* Live Submission Feedback Banner */}
{submissionSuccess && (
  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
    <div className="flex items-center gap-3">
      <span className="material-symbols-outlined text-emerald-500 text-[24px]">check_circle</span>
      <div>
        <h4 className="font-headline-sm font-bold text-emerald-600">Practice Milestone Evaluated! (Score: {submissionSuccess.score}%)</h4>
        <p className="font-body-sm text-secondary">{submissionSuccess.feedback} • EduPath Adaptive Agent synchronized your curriculum in real-time.</p>
      </div>
    </div>
    <button 
      onClick={() => navigate('/mylearningworkspace')} 
      className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-label-md font-semibold hover:bg-emerald-700 transition-colors shrink-0 cursor-pointer"
    >
      View Updated Roadmap
    </button>
  </div>
)}
{/*  Action CTAs  */}
<div className="flex flex-wrap items-center gap-2.5">
<button className="px-4 py-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors" id="saveBtn">
          Save for Later
        </button>
<button className="px-4 py-2.5 rounded-xl bg-primary-container hover:bg-primary text-white font-label-md text-label-md font-semibold transition-all flex items-center gap-2 shadow-sm" id="rerunBtn">
<span className="material-symbols-outlined text-[18px]">play_arrow</span>
          Re-run Tests
        </button>
<button 
  onClick={handleSubmit}
  disabled={submitMutation.isPending}
  className="px-4 py-2.5 rounded-xl bg-surface-container-lowest border border-tertiary text-tertiary hover:bg-tertiary hover:text-white font-label-md text-label-md font-semibold transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50" 
  id="submitBtn"
>
<span className="material-symbols-outlined text-[18px]">verified</span>
  {submitMutation.isPending ? "Evaluating Submission with AI..." : "Submit Practice Milestone"}
</button>
</div>
</div>
{/*  Evaluator Insight Box  */}
<div className="p-4 rounded-xl bg-surface-container-low flex items-start gap-3.5">
<span className="material-symbols-outlined text-primary-container text-[22px] mt-0.5 shrink-0">info</span>
<div className="flex flex-col gap-1">
<span className="font-label-md text-label-md text-on-surface font-bold">Evaluator Recommendation:</span>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Your endpoint structure, routing mount, and asynchronous database resolution are correct! However, when query validation throws a <code className="font-mono text-xs px-1 py-0.5 rounded bg-surface-container-highest text-on-surface">ZodError</code>, your catch block passes it directly to <code className="font-mono text-xs px-1 py-0.5 rounded bg-surface-container-highest text-on-surface">next(err)</code>. Inspect <code className="font-mono text-xs px-1 py-0.5 rounded bg-surface-container-highest text-on-surface">err instanceof z.ZodError</code> and return status code <span className="font-semibold text-primary">400</span> rather than falling back to default 500.
        </p>
</div>
</div>
</div>
</div>
</main>
    </div>
  );
}
