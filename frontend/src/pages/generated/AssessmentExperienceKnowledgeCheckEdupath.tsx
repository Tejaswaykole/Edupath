
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSubmitAssessment, useStartAssessment } from '../../hooks/useWorkspace';
import { useLearningPath } from '../../hooks/useLearning';

export default function AssessmentExperienceKnowledgeCheckEdupath() {
  const navigate = useNavigate();
  const { data: learningPath } = useLearningPath();
  const [selectedOption, setSelectedOption] = useState('B');
  const [submissionSuccess, setSubmissionSuccess] = useState<{ score: number } | null>(null);

  let assessmentId = 1;
  if (learningPath?.modules) {
    for (const mod of learningPath.modules) {
      const act = mod.activities?.find((a: any) => a.assessment_id);
      if (act && act.assessment_id) {
        assessmentId = act.assessment_id;
        break;
      }
    }
  }

  const startMutation = useStartAssessment(assessmentId);
  const submitMutation = useSubmitAssessment(1);

  const handleSubmit = () => {
    if (submissionSuccess) {
      navigate('/mylearningworkspace');
      return;
    }

    startMutation.mutate(undefined, {
      onSuccess: (data: any) => {
        const attemptId = data?.attempt_id || 1;
        submitMutation.mutate([
          { question_id: 1, provided_answer: selectedOption }
        ], {
          onSuccess: (res: any) => {
            setSubmissionSuccess({ score: res.score ?? 80 });
          }
        });
      },
      onError: () => {
        submitMutation.mutate([
          { question_id: 1, provided_answer: selectedOption }
        ], {
          onSuccess: (res: any) => {
            setSubmissionSuccess({ score: res.score ?? 80 });
          }
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Generated from Stitch UI */}
      <main className="pt-16 p-8 max-w-7xl w-full mx-auto flex flex-col gap-6"><div className="flex flex-col w-full gap-6">
{/*  Nav Breadcrumb & Session Metadata  */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-2 font-label-md text-label-md text-secondary">
<a className="hover:text-primary transition-colors" href="#">Dashboard</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<a className="hover:text-primary transition-colors" href="#">Practice &amp; Assessments</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-on-surface font-semibold">Knowledge Check 04</span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-container-lowest shadow-sm">
<span className="material-symbols-outlined text-[18px] text-tertiary">timer</span>
<span className="font-label-md text-label-md text-on-surface">06:45 <span className="text-secondary font-normal">/ 15:00</span></span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-container-low font-label-sm text-label-sm text-secondary">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
        Secure Session Active
      </div>
</div>
</div>
{/*  Assessment Top Header Card  */}
<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col gap-5">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
<div>
<div className="flex items-center gap-2.5 mb-1.5">
<span className="px-2.5 py-0.5 rounded-full bg-secondary-container font-label-sm text-label-sm text-on-secondary-fixed-variant">Backend Specialization</span>
<span className="px-2.5 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-primary-container">Milestone 02 Evaluation</span>
</div>
<h1 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">Knowledge Check: API Architecture &amp; Authentication</h1>
</div>
<div className="flex items-center gap-4 bg-surface-container-low px-4 py-2.5 rounded-xl self-start lg:self-auto">
<div className="flex flex-col text-right">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Current Item</span>
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">Question 4 of 10</span>
</div>
<div className="w-10 h-10 rounded-lg bg-primary-container text-white flex items-center justify-center font-bold font-headline-sm text-headline-sm">
          40%
        </div>
</div>
</div>
{/*  Progress Tracker Bar  */}
<div className="flex flex-col gap-2">
<div className="flex justify-between items-center font-label-sm text-label-sm text-secondary">
<span>Completion Progress</span>
<span>4 Completed • 1 Flagged • 5 Remaining</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
<div className="h-full bg-primary-container rounded-full transition-all duration-300" ></div>
</div>
</div>
</div>
{/*  Interactive Question Card  */}
<div className="bg-surface-container-lowest rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col gap-6">
<div className="flex items-start justify-between gap-4">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded-lg bg-surface-container text-primary font-bold font-label-md text-label-md flex items-center justify-center">04</span>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Single Choice • 10 Points</span>
</div>
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-container-low hover:bg-surface-container text-secondary transition-colors font-label-md text-label-md" id="flagBtn" >
<span className="material-symbols-outlined text-[18px]">bookmark</span>
<span>Mark for Review</span>
</button>
</div>
{/*  Question Prompt  */}
<div className="space-y-2">
<p className="font-headline-md text-headline-md text-on-surface font-semibold leading-relaxed">
        When implementing JSON Web Tokens (JWT) in a stateless REST API, which mechanism is best practice for preventing expired or invalidated tokens from accessing protected routes prior to natural expiration?
      </p>
<p className="font-body-sm text-body-sm text-secondary">
        Select the architecture pattern that preserves stateless performance characteristics while maintaining revokability.
      </p>
</div>
{/*  Multiple Choice Options  */}
<fieldset aria-label="Question 4 Options" className="flex flex-col gap-3">
{/*  Option A  */}
<label className={`group relative flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all ${selectedOption === 'A' ? 'bg-primary-container/10 border border-primary' : 'bg-surface-container-low/60 hover:bg-surface-container-low'}`}>
<input checked={selectedOption === 'A'} onChange={() => setSelectedOption('A')} className="mt-1 w-4 h-4 text-primary-container border-outline-variant focus:ring-0 cursor-pointer" name="assessment_q4" type="radio" value="A"/>
<div className="flex flex-col gap-0.5">
<span className="font-label-md text-label-md font-semibold text-on-surface">Option A</span>
<span className="font-body-md text-body-md text-on-surface-variant">Increase token lifespan to 30 days and rely strictly on client-side browser cache clearing.</span>
</div>
</label>
{/*  Option B (Selected)  */}
<label className={`group relative flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all ${selectedOption === 'B' ? 'bg-primary-container/10 border border-primary' : 'bg-surface-container-low/60 hover:bg-surface-container-low'}`}>
<input checked={selectedOption === 'B'} onChange={() => setSelectedOption('B')} className="mt-1 w-4 h-4 text-primary-container border-outline-variant focus:ring-0 cursor-pointer" name="assessment_q4" type="radio" value="B"/>
<div className="flex flex-col gap-0.5">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md font-bold text-primary">Option B</span>
{selectedOption === 'B' && <span className="px-2 py-0.2 rounded-full bg-primary-container text-white font-label-sm text-label-sm scale-90">Selected</span>}
</div>
<span className="font-body-md text-body-md text-on-surface font-medium">Use short-lived Access Tokens (e.g., 15 mins) paired with HttpOnly Refresh Tokens stored in a Redis blocklist/rotation table.</span>
</div>
</label>
{/*  Option C  */}
<label className={`group relative flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all ${selectedOption === 'C' ? 'bg-primary-container/10 border border-primary' : 'bg-surface-container-low/60 hover:bg-surface-container-low'}`}>
<input checked={selectedOption === 'C'} onChange={() => setSelectedOption('C')} className="mt-1 w-4 h-4 text-primary-container border-outline-variant focus:ring-0 cursor-pointer" name="assessment_q4" type="radio" value="C"/>
<div className="flex flex-col gap-0.5">
<span className="font-label-md text-label-md font-semibold text-on-surface">Option C</span>
<span className="font-body-md text-body-md text-on-surface-variant">Store the full user password hash in the JWT payload and compare on each incoming request.</span>
</div>
</label>
{/*  Option D  */}
<label className={`group relative flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all ${selectedOption === 'D' ? 'bg-primary-container/10 border border-primary' : 'bg-surface-container-low/60 hover:bg-surface-container-low'}`}>
<input checked={selectedOption === 'D'} onChange={() => setSelectedOption('D')} className="mt-1 w-4 h-4 text-primary-container border-outline-variant focus:ring-0 cursor-pointer" name="assessment_q4" type="radio" value="D"/>
<div className="flex flex-col gap-0.5">
<span className="font-label-md text-label-md font-semibold text-on-surface">Option D</span>
<span className="font-body-md text-body-md text-on-surface-variant">Hardcode an immutable secret key in client environment files for direct token validation.</span>
</div>
</label>
</fieldset>
{/*  Question Control Navigation  */}
<div className="pt-4 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
<button className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
        Previous Question
      </button>
<div className="flex items-center gap-3 w-full sm:w-auto">
<button className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-primary-container hover:bg-primary text-white font-label-md text-label-md shadow-sm transition-all flex items-center justify-center gap-2">
          Next Question
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
</div>
{/*  Performance Summary & Milestone Benchmark (Result Preview)  */}
<div className="bg-surface-container-lowest rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col gap-6">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
<div className="flex items-center gap-3.5">
<div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-[28px]" >verified</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-headline-md text-headline-md font-bold text-on-surface">Checkpoint Evaluation Result</span>
<span className="px-2.5 py-0.5 rounded-full bg-tertiary/15 text-tertiary font-label-sm text-label-sm font-bold">Passed</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Verified by EduPath Adaptive Assessment Engine</p>
</div>
</div>
<div className="flex items-center gap-6 bg-surface-container-low px-5 py-3 rounded-xl">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Overall Score</span>
<div className="flex items-baseline gap-1">
<span className="font-headline-xl text-headline-xl font-extrabold text-on-surface">80%</span>
<span className="font-label-md text-label-md text-secondary">(8/10 Correct)</span>
</div>
</div>
<div className="h-8 w-[1px] bg-outline-variant/40"></div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Mastery Benchmark</span>
<span className="font-label-md text-label-md font-bold text-tertiary flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
            Objective Achieved
          </span>
</div>
</div>
</div>
{/*  Diagnostic Breakdown Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
{/*  Strengths  */}
<div className="bg-surface-container-low/70 rounded-xl p-5 flex flex-col gap-3.5">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-tertiary">check_circle</span>
            Demonstrated Strengths
          </span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">100% Accuracy</span>
</div>
<div className="space-y-2.5">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface font-medium">JWT Structure &amp; Claims Integrity</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">3/3 Correct</span>
</div>
<div className="w-full h-1.5 rounded-full bg-surface-container overflow-hidden">
<div className="h-full bg-tertiary rounded-full" ></div>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm pt-1">
<span className="text-on-surface font-medium">REST HTTP Verbs &amp; Idempotency</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">3/3 Correct</span>
</div>
<div className="w-full h-1.5 rounded-full bg-surface-container overflow-hidden">
<div className="h-full bg-tertiary rounded-full" ></div>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm pt-1">
<span className="text-on-surface font-medium">Middleware Execution Sequencing</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">2/2 Correct</span>
</div>
<div className="w-full h-1.5 rounded-full bg-surface-container overflow-hidden">
<div className="h-full bg-tertiary rounded-full" ></div>
</div>
</div>
</div>
{/*  Practice Areas  */}
<div className="bg-surface-container-low/70 rounded-xl p-5 flex flex-col gap-3.5">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-error">info</span>
            Targeted Skill Gaps
          </span>
<span className="font-label-sm text-label-sm text-error font-bold">Review Suggested</span>
</div>
<div className="space-y-2.5">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface font-medium">Token Invalidation &amp; Redis Blacklisting</span>
<span className="font-label-sm text-label-sm text-secondary font-semibold">60% (1/2 Missed)</span>
</div>
<div className="w-full h-1.5 rounded-full bg-surface-container overflow-hidden">
<div className="h-full bg-secondary rounded-full" ></div>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm pt-1">
<span className="text-on-surface font-medium">CSRF vs CORS Configuration Headers</span>
<span className="font-label-sm text-label-sm text-secondary font-semibold">50% (1/2 Missed)</span>
</div>
<div className="w-full h-1.5 rounded-full bg-surface-container overflow-hidden">
<div className="h-full bg-secondary rounded-full" ></div>
</div>
<p className="font-body-sm text-body-sm text-secondary pt-1">
            Revisit the distributed session storage architecture lab to shore up these topics before final capstone submission.
          </p>
</div>
</div>
</div>
{/*  Agent Synchronized Banner  */}
<div className="bg-surface-container rounded-xl p-4 flex items-start sm:items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-primary-container text-white flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">smart_toy</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface font-medium">
<span className="font-semibold text-primary">EduPath Agent:</span> Assessment data synchronized. This result satisfies Prerequisite Milestone 02 and unlocks the Capstone Project Module.
        </p>
</div>
<span className="hidden md:inline-flex px-2.5 py-1 rounded-full bg-surface-container-lowest text-primary font-label-sm text-label-sm font-bold shrink-0">Ready to Advance</span>
</div>
{/*  Action Bar  */}
<div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
<button onClick={() => navigate('/mylearningworkspace')} className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors flex items-center justify-center gap-2 cursor-pointer">
<span className="material-symbols-outlined text-[18px]">visibility</span>
        Review Detailed Answers
      </button>
<button 
  onClick={handleSubmit}
  disabled={submitMutation.isPending || startMutation.isPending}
  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-primary-container hover:bg-primary text-white font-label-md text-label-md shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
>
  {submitMutation.isPending || startMutation.isPending ? "Submitting to AI Agent..." : (submissionSuccess ? "Proceed to Dashboard" : "Submit & Evaluate Knowledge Check")}
  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
</div>
</main>
    </div>
  );
}
