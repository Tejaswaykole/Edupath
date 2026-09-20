import { useNavigate } from 'react-router-dom';
import { useLearningPath, useSkillGaps } from '../../hooks/useLearning';
import { useAgentActivity } from '../../hooks/useAgent';
import { useReports } from '../../hooks/useReports';
import { useAuthStore } from '../../store/authStore';
import { useUploadStore } from '../../store/uploadStore';

export default function LearnerDashboardEdupathProduction() {
  const navigate = useNavigate();
  const { data: learningPath, isLoading: isLearningPathLoading } = useLearningPath();
  const { data: agentActivity, isLoading: isAgentActivityLoading } = useAgentActivity();
  const { data: skillGaps } = useSkillGaps();
  const { report } = useReports();
  const user = useAuthStore((state) => state.user);
  const { result: uploadResult } = useUploadStore();

  // Compute live stats
  const totalSkills = skillGaps?.length || (uploadResult?.skills?.length ?? 12);
  const acquiredSkills = skillGaps?.filter((g: any) => g.status === 'COMPLETED' || g.current_proficiency?.toLowerCase() === g.required_proficiency?.toLowerCase()).length ?? (report?.acquired_skills?.length ?? (uploadResult ? Math.round(totalSkills * 0.6) : 6));
  
  const overallProgress = report?.progress?.completion_percentage ?? (learningPath?.modules?.length ? Math.min(100, Math.round((learningPath.modules.filter((m: any) => m.status === 'COMPLETED').length / learningPath.modules.length) * 100)) : (uploadResult?.readinessScore ? Math.round(uploadResult.readinessScore * 100) : 42));

  const tasksDoneThisWeek = report?.progress?.completed_modules ?? (learningPath?.modules?.length ? learningPath.modules.filter((m: any) => m.status === 'COMPLETED').length : 4);
  const streakWeeks = 4;
  const currentLevel = overallProgress >= 70 ? 'Level 4' : overallProgress >= 40 ? 'Level 3' : overallProgress >= 20 ? 'Level 2' : 'Level 1';
  const levelTitle = overallProgress >= 70 ? 'Proficient Builder' : overallProgress >= 40 ? 'Learning Explorer' : 'Active Apprentice';

  return (
    <div className="min-h-screen bg-surface">
      {/* Generated from Stitch UI */}
      <main className="pt-16 p-8 max-w-7xl w-full mx-auto flex flex-col gap-6"><div className="flex flex-col w-full gap-6">
{/*  Hero Banner  */}
<div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-surface-container to-surface-container-high shadow-sm min-h-[175px] flex items-center">
<div className="absolute inset-0 bg-cover bg-right md:bg-center opacity-40 mix-blend-multiply pointer-events-none" data-alt="Expansive panoramic serene misty mountain peaks bathed in golden morning light with a solo traveler looking out over the valley, soft atmospheric haze, clean modern cinematic photography with indigo and slate undertones." ></div>
<div className="relative z-10 w-full p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div className="max-w-2xl">
<div className="flex items-center gap-3 mb-2">
<span className="font-headline-xl text-headline-xl text-on-surface">Good morning, {user?.name?.split(' ')[0] || 'Learner'}</span>
<span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-surface-container-lowest shadow-sm text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[15px]">workspace_premium</span>
            {currentLevel}
          </span>
</div>
<p className="font-body-md text-body-md text-secondary mb-3">Consistent learning today creates more opportunities tomorrow.</p>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[16px]">format_quote</span>
<p className="font-body-sm text-body-sm text-secondary italic">"Small steps, when repeated, create big results." <span className="not-italic text-on-surface-variant font-medium">— James Clear</span></p>
</div>
</div>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
<div className="backdrop-blur-md bg-surface-container-lowest/80 px-4 py-2.5 rounded-xl shadow-sm flex items-center gap-2.5">
<span className="material-symbols-outlined text-primary text-[20px]">explore</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Milestone Focus</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Your Learning Journey Matters</span>
</div>
</div>
<div className="backdrop-blur-md bg-surface-container-lowest/80 px-4 py-2.5 rounded-xl shadow-sm flex items-center gap-2.5">
<span className="material-symbols-outlined text-tertiary-container text-[20px]">speed</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Target Velocity</span>
<span className="font-label-md text-label-md text-tertiary-container font-semibold">14 hrs / week</span>
</div>
</div>
</div>
</div>
</div>
{/*  Metric Stat Row  */}
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
{/*  Stat 1  */}
<div onClick={() => navigate('/skillgapoverviewreadiness')} className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-3.5">
<div className="w-11 h-11 rounded-xl bg-secondary-container text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[22px]">menu_book</span>
</div>
<div className="flex flex-col min-w-0 overflow-hidden">
<span className="font-headline-md text-headline-md text-on-surface leading-tight truncate">{acquiredSkills} / {totalSkills}</span>
<span className="font-label-sm text-label-sm text-secondary truncate">Skills Acquired</span>
</div>
</div>
<span className="material-symbols-outlined text-secondary group-hover:translate-x-0.5 group-hover:text-primary transition-all text-[18px]">chevron_right</span>
</div>
{/*  Stat 2  */}
<div onClick={() => navigate('/mylearningworkspacetodaystasks')} className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-3.5">
<div className="w-11 h-11 rounded-xl bg-surface-container text-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-[22px]">bar_chart</span>
</div>
<div className="flex flex-col">
<span className="font-headline-md text-headline-md text-on-surface leading-tight">{overallProgress}%</span>
<span className="font-label-sm text-label-sm text-secondary">Overall Progress</span>
</div>
</div>
<span className="material-symbols-outlined text-secondary group-hover:translate-x-0.5 group-hover:text-primary transition-all text-[18px]">chevron_right</span>
</div>
{/*  Stat 3  */}
<div onClick={() => navigate('/progressintelligenceperformancereports')} className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-3.5">
<div className="w-11 h-11 rounded-xl bg-surface-container-low text-tertiary-container flex items-center justify-center">
<span className="material-symbols-outlined text-[22px]">event_available</span>
</div>
<div className="flex flex-col">
<span className="font-headline-md text-headline-md text-on-surface leading-tight">{tasksDoneThisWeek}</span>
<span className="font-label-sm text-label-sm text-secondary">Tasks Completed</span>
</div>
</div>
<span className="material-symbols-outlined text-secondary group-hover:translate-x-0.5 group-hover:text-primary transition-all text-[18px]">chevron_right</span>
</div>
{/*  Stat 4  */}
<div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-3.5">
<div className="w-11 h-11 rounded-xl bg-error-container/40 text-on-error-container flex items-center justify-center">
<span className="material-symbols-outlined text-[22px]" >local_fire_department</span>
</div>
<div className="flex flex-col min-w-0 overflow-hidden">
<span className="font-headline-md text-headline-md text-on-surface leading-tight truncate">{streakWeeks}</span>
<span className="font-label-sm text-label-sm text-secondary truncate">Week Streak</span>
</div>
</div>
<span className="material-symbols-outlined text-secondary group-hover:translate-x-0.5 group-hover:text-primary transition-all text-[18px]">chevron_right</span>
</div>
{/*  Stat 5  */}
<div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between cursor-pointer group col-span-2 md:col-span-1">
<div className="flex items-center gap-3.5">
<div className="w-11 h-11 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-[22px]" >star</span>
</div>
<div className="flex flex-col">
<span className="font-headline-md text-headline-md text-on-surface leading-tight">{currentLevel}</span>
<span className="font-label-sm text-label-sm text-secondary">{levelTitle}</span>
</div>
</div>
<span className="material-symbols-outlined text-secondary group-hover:translate-x-0.5 group-hover:text-primary transition-all text-[18px]">chevron_right</span>
</div>
</div>
{/*  Two-Column Main Workspace  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
{/*  Left Column (approx 65% on desktop: 8 cols of 12)  */}
<div className="lg:col-span-8 flex flex-col gap-6">
{/*  Today's Learning Card  */}
<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm">
<div className="flex items-center justify-between mb-5">
<div className="flex items-center gap-3">
<h2 className="font-headline-md text-headline-md text-on-surface">Today's Learning</h2>
<span className="font-label-sm text-label-sm text-secondary px-2.5 py-1 rounded-md bg-surface-container-low">Mon, 10 Mar 2025</span>
</div>
<a className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-on-primary-fixed-variant transition-colors" href="#">
            View Plan
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
{/*  Task List  */}
<div className="flex flex-col gap-3 mb-6">
{isLearningPathLoading ? (
  <div className="flex justify-center p-4"><span className="material-symbols-outlined animate-spin text-[24px] text-primary">progress_activity</span></div>
) : learningPath?.modules ? (
  learningPath.modules.slice(0, 3).map((mod: any, idx: number) => (
<div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow transition-shadow">
<div className="flex items-center gap-3.5">
<span className="w-7 h-7 rounded-lg bg-surface-container flex items-center justify-center font-label-sm text-label-sm font-semibold text-secondary">{idx + 1}</span>
<div className="w-8 h-8 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">menu_book</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">{mod.title}</span>
<span className="font-body-sm text-body-sm text-secondary">{mod.description.substring(0, 50)}...</span>
</div>
</div>
<div className="flex items-center gap-4">
<span className="font-label-sm text-label-sm text-secondary">{mod.estimated_minutes} min</span>
<div className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-[16px]">hourglass_top</span>
</div>
</div>
</div>
  ))
) : (
  <p className="font-body-sm text-body-sm text-secondary">No active learning path found.</p>
)}
</div>
{/*  Action Row  */}
<div className="flex flex-wrap items-center gap-3 pt-2">
<button onClick={() => navigate('/mylearningworkspacetodaystasks')} className="px-5 py-2.5 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md flex items-center gap-2 shadow-sm transition-all cursor-pointer">
<span>Start Today's Plan</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
<button onClick={() => navigate('/mylearningworkspacetodaystasks')} className="px-5 py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-2 transition-colors cursor-pointer">
<span className="material-symbols-outlined text-[18px] text-secondary">calendar_month</span>
<span>Plan Details</span>
</button>
</div>
</div>
{/*  Skill Readiness Card  */}
<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm">
<div className="flex items-center justify-between mb-5">
<div>
<h2 className="font-headline-md text-headline-md text-on-surface">Skill Readiness</h2>
<p className="font-body-sm text-body-sm text-secondary">Tracked benchmark against Software Engineer Target</p>
</div>
<button onClick={() => navigate('/skillgapoverviewreadiness')} className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-on-primary-fixed-variant transition-colors cursor-pointer">
            See Details
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
{/*  Skill Bars (7 cols)  */}
<div className="md:col-span-7 flex flex-col gap-4">
{skillGaps && skillGaps.length > 0 ? (
  skillGaps.slice(0, 5).map((gap: any, idx: number) => {
    const isAcquired = gap.current_proficiency?.toLowerCase() === gap.required_proficiency?.toLowerCase() || gap.status === 'COMPLETED';
    const pct = isAcquired ? 95 : gap.current_proficiency === 'INTERMEDIATE' ? 65 : gap.current_proficiency === 'BEGINNER' ? 35 : 20;
    const colorClass = isAcquired ? 'bg-tertiary-container' : pct >= 50 ? 'bg-primary-container' : 'bg-error-container';
    const textClass = isAcquired ? 'text-tertiary' : pct >= 50 ? 'text-primary' : 'text-error';
    return (
      <div key={idx} className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <span className="font-label-md text-label-md text-on-surface">{gap.skill?.name || gap.skill_name || 'Competency'}</span>
          <span className={`font-label-sm text-label-sm font-bold ${textClass}`}>{pct}%</span>
        </div>
        <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
          <div className={`h-full ${colorClass} rounded-full transition-all duration-500`} style={{ width: `${pct}%` }}></div>
        </div>
      </div>
    );
  })
) : uploadResult?.skills && uploadResult.skills.length > 0 ? (
  uploadResult.skills.slice(0, 5).map((sk: any, idx: number) => {
    const pct = Math.round((sk.confidence || 0.8) * 100);
    return (
      <div key={idx} className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <span className="font-label-md text-label-md text-on-surface">{sk.name}</span>
          <span className="font-label-sm text-label-sm font-bold text-primary">{pct}%</span>
        </div>
        <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
          <div className="h-full bg-primary-container rounded-full" style={{ width: `${pct}%` }}></div>
        </div>
      </div>
    );
  })
) : (
  <>
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <span className="font-label-md text-label-md text-on-surface">JavaScript / TypeScript</span>
        <span className="font-label-sm text-label-sm font-bold text-tertiary">90%</span>
      </div>
      <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
        <div className="h-full bg-tertiary-container rounded-full" style={{ width: '90%' }}></div>
      </div>
    </div>
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <span className="font-label-md text-label-md text-on-surface">React & Frontend</span>
        <span className="font-label-sm text-label-sm font-bold text-primary">70%</span>
      </div>
      <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
        <div className="h-full bg-primary-container rounded-full" style={{ width: '70%' }}></div>
      </div>
    </div>
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <span className="font-label-md text-label-md text-on-surface">Node.js & Backend</span>
        <span className="font-label-sm text-label-sm font-bold text-error">40%</span>
      </div>
      <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
        <div className="h-full bg-error rounded-full" style={{ width: '40%' }}></div>
      </div>
    </div>
  </>
)}
</div>
{/*  Priority Skill Gaps Rail (5 cols)  */}
<div className="md:col-span-5 bg-surface-container-low rounded-xl p-4 flex flex-col justify-between h-full">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Priority Skill Gaps</span>
<ul className="mt-3 flex flex-col gap-2 font-body-sm text-body-sm text-on-surface">
{skillGaps && skillGaps.filter((g: any) => g.current_proficiency !== g.required_proficiency).length > 0 ? (
  skillGaps.filter((g: any) => g.current_proficiency !== g.required_proficiency).slice(0, 4).map((gap: any, idx: number) => (
    <li key={idx} className="flex items-center gap-2.5">
      <span className="w-5 h-5 rounded-md bg-surface-container-lowest text-primary font-label-sm text-label-sm font-bold flex items-center justify-center">{idx + 1}</span>
      <span className="truncate">{gap.skill?.name || gap.skill_name || 'Key Gap'}</span>
    </li>
  ))
) : (
  <>
    <li className="flex items-center gap-2.5">
      <span className="w-5 h-5 rounded-md bg-surface-container-lowest text-primary font-label-sm text-label-sm font-bold flex items-center justify-center">1</span>
      <span>System Architecture & APIs</span>
    </li>
    <li className="flex items-center gap-2.5">
      <span className="w-5 h-5 rounded-md bg-surface-container-lowest text-primary font-label-sm text-label-sm font-bold flex items-center justify-center">2</span>
      <span>PostgreSQL Query Optimizations</span>
    </li>
    <li className="flex items-center gap-2.5">
      <span className="w-5 h-5 rounded-md bg-surface-container-lowest text-primary font-label-sm text-label-sm font-bold flex items-center justify-center">3</span>
      <span>Docker & CI/CD Pipelines</span>
    </li>
  </>
)}
</ul>
</div>
<button onClick={() => navigate('/skillgapoverviewreadiness')} className="mt-4 pt-3 flex items-center justify-between text-primary font-label-md text-label-md hover:text-on-primary-fixed-variant transition-colors cursor-pointer w-full text-left">
<span>View Skill Gap Diagnosis</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
</div>
{/*  Motivational Architectural Footer Card  */}
<div className="relative overflow-hidden rounded-2xl bg-surface-container-highest shadow-sm p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="absolute -right-8 -bottom-10 w-64 h-36 opacity-30 bg-cover bg-center rounded-xl pointer-events-none" data-alt="Modern architectural glass facade of an innovative university engineering pavilion during dusk with clean lines and luminous indigo lighting." ></div>
<div className="relative z-10 max-w-lg">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">You're closer than you think.</h3>
<p className="font-body-sm text-body-sm text-secondary mt-1">Keep learning, keep building, and let EduPath guide your personalized career leap.</p>
</div>
<button className="relative z-10 shrink-0 px-5 py-2.5 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md flex items-center gap-2 shadow-sm transition-all cursor-pointer">
<span>Explore Resources</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
{/*  Right Column (approx 35% on desktop: 4 cols of 12)  */}
<div className="lg:col-span-4 flex flex-col gap-6">
{/*  EduPath AI Agent Card  */}
<div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 rounded-lg bg-surface-container text-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">smart_toy</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface">EduPath Agent</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
              Active
            </span>
<button aria-label="Agent options" className="text-secondary hover:text-on-surface transition-colors cursor-pointer">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</div>
{isAgentActivityLoading ? (
  <div className="flex justify-center p-4"><span className="material-symbols-outlined animate-spin text-[24px] text-primary">progress_activity</span></div>
) : agentActivity && agentActivity.length > 0 ? (
  <>
<div className="mb-4 bg-surface-container-low p-3.5 rounded-xl flex flex-col gap-2 border border-surface-container">
  <div className="flex items-center justify-between">
    <span className="font-bold text-xs uppercase text-primary tracking-wide">
      {agentActivity[0].event_type?.replace('_', ' ')}
    </span>
    <span className="text-[11px] px-2 py-0.5 rounded-full bg-primary-container text-white font-semibold">
      {agentActivity[0].event_data?.action || 'ADAPTED'}
    </span>
  </div>
  <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
    {agentActivity[0].description || 'Your learning path was dynamically calibrated for your recent performance.'}
  </p>
  {agentActivity[0].event_data?.weak_topics && agentActivity[0].event_data.weak_topics.length > 0 && (
    <div className="flex flex-wrap gap-1 mt-0.5">
      {agentActivity[0].event_data.weak_topics.slice(0, 2).map((wt: string, i: number) => (
        <span key={i} className="px-2 py-0.5 rounded bg-surface-container-high text-[11px] text-secondary font-medium">
          Reinforcing: {wt}
        </span>
      ))}
    </div>
  )}
</div>
<div className="flex flex-col gap-2 mb-4">
<a className="flex items-center gap-2.5 p-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors group" href="/agentactivitycenteraicompanion">
<span className="material-symbols-outlined text-secondary group-hover:text-primary transition-colors text-[18px]">neurology</span>
<span className="font-label-md text-label-md text-on-surface font-medium">Review Agent Decision Center</span>
</a>
</div>
</>
) : (
  <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 bg-surface-container-low p-3 rounded-xl leading-relaxed">
  Agent is actively monitoring your learning trajectory. Keep building momentum!
  </p>
)}
<a className="inline-flex items-center justify-center gap-1.5 w-full py-2 font-label-md text-label-md text-primary hover:text-on-primary-fixed-variant transition-colors" href="/mylearningworkspacetodaystasks">
<span>View Updated Plan</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
{/*  Your Progress Timeline  */}
<div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Your Progress</h3>
<a className="font-label-sm text-label-sm text-primary hover:text-on-primary-fixed-variant flex items-center gap-1" href="#">
            See All <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</a>
</div>
<div className="relative pl-6 space-y-4">
<div className="absolute top-2.5 bottom-2 left-2.5 w-[2px] bg-surface-container"></div>
<div className="relative flex items-start gap-3">
<div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center ring-4 ring-white">
<span className="material-symbols-outlined text-[12px]">check</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface font-semibold">Resume Analyzed</p>
<span className="font-label-sm text-label-sm text-secondary">Mar 2, 2025</span>
</div>
</div>
<div className="relative flex items-start gap-3">
<div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center ring-4 ring-white">
<span className="material-symbols-outlined text-[12px]">check</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface font-semibold">Skill Gaps Identified</p>
<span className="font-label-sm text-label-sm text-secondary">Mar 3, 2025</span>
</div>
</div>
<div className="relative flex items-start gap-3">
<div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center ring-4 ring-white">
<span className="material-symbols-outlined text-[12px]">check</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface font-semibold">Learning Plan Created</p>
<span className="font-label-sm text-label-sm text-secondary">Mar 3, 2025</span>
</div>
</div>
<div className="relative flex items-start gap-3">
<div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-primary-container text-on-primary flex items-center justify-center ring-4 ring-white">
<span className="w-2 h-2 rounded-full bg-on-primary"></span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface font-semibold">Completed 5 Tasks</p>
<span className="font-label-sm text-label-sm text-secondary">Mar 5, 2025</span>
</div>
</div>
<div className="relative flex items-start gap-3">
<div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-surface-container text-secondary flex items-center justify-center ring-4 ring-white">
<span className="material-symbols-outlined text-[12px]">schedule</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface font-semibold">Next: Authentication Module</p>
<span className="font-label-sm text-label-sm text-secondary">Mar 10, 2025</span>
</div>
</div>
</div>
</div>
{/*  Weekly Plan Mini-Schedule  */}
<div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Weekly Plan</h3>
<div className="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded-lg">
<button aria-label="Previous week" className="text-secondary hover:text-on-surface cursor-pointer flex items-center">
<span className="material-symbols-outlined text-[16px]">chevron_left</span>
</button>
<span className="font-label-sm text-label-sm font-semibold text-on-surface px-1">Week 04</span>
<button aria-label="Next week" className="text-secondary hover:text-on-surface cursor-pointer flex items-center">
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</div>
</div>
<div className="flex flex-col gap-2.5 font-body-sm text-body-sm">
<div className="flex items-center justify-between py-1 px-2 rounded-lg bg-surface-container-low/50">
<span className="font-label-md text-label-md text-secondary w-10">Mon</span>
<span className="flex-1 text-on-surface font-medium truncate px-2">REST API Basics</span>
<span className="material-symbols-outlined text-tertiary text-[18px]">check_circle</span>
</div>
<div className="flex items-center justify-between py-1 px-2 rounded-lg bg-surface-container-low/50">
<span className="font-label-md text-label-md text-secondary w-10">Tue</span>
<span className="flex-1 text-on-surface font-medium truncate px-2">API Routing</span>
<span className="material-symbols-outlined text-tertiary text-[18px]">check_circle</span>
</div>
<div className="flex items-center justify-between py-1 px-2 rounded-lg bg-surface-container text-on-surface font-semibold">
<span className="font-label-md text-label-md text-primary w-10">Wed</span>
<span className="flex-1 truncate px-2 text-primary">Authentication</span>
<span className="material-symbols-outlined text-primary-container text-[18px]">pending</span>
</div>
<div className="flex items-center justify-between py-1 px-2 rounded-lg">
<span className="font-label-md text-label-md text-secondary w-10">Thu</span>
<span className="flex-1 text-secondary truncate px-2">JWT Practice</span>
<span className="w-4 h-4 rounded-full bg-surface-container"></span>
</div>
<div className="flex items-center justify-between py-1 px-2 rounded-lg">
<span className="font-label-md text-label-md text-secondary w-10">Fri</span>
<span className="flex-1 text-secondary truncate px-2">Mini Project</span>
<span className="w-4 h-4 rounded-full bg-surface-container"></span>
</div>
<div className="flex items-center justify-between py-1 px-2 rounded-lg">
<span className="font-label-md text-label-md text-secondary w-10">Sat</span>
<span className="flex-1 text-secondary truncate px-2">Assessment</span>
<span className="w-4 h-4 rounded-full bg-surface-container"></span>
</div>
<div className="flex items-center justify-between py-1 px-2 rounded-lg">
<span className="font-label-md text-label-md text-secondary w-10">Sun</span>
<span className="flex-1 text-secondary truncate px-2">Review &amp; Plan</span>
<span className="w-4 h-4 rounded-full bg-surface-container"></span>
</div>
</div>
</div>
{/*  Quick Actions  */}
<div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Quick Actions</h3>
<div className="flex flex-col gap-2">
<button onClick={() => navigate('/agentactivitycenteraicompanion')} className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-surface-container-low transition-colors group cursor-pointer text-left">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary group-hover:text-primary transition-colors text-[20px]">chat</span>
<span className="font-label-md text-label-md text-on-surface">Ask AI Assistant</span>
</div>
<span className="material-symbols-outlined text-secondary text-[18px]">chevron_right</span>
</button>
<button onClick={() => navigate('/documentcenterresumeupload')} className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-surface-container-low transition-colors group cursor-pointer text-left">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary group-hover:text-primary transition-colors text-[20px]">upload_file</span>
<span className="font-label-md text-label-md text-on-surface">Upload Resume</span>
</div>
<span className="material-symbols-outlined text-secondary text-[18px]">chevron_right</span>
</button>
<button onClick={() => navigate('/practicesandboxlivecodechallenge')} className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-surface-container-low transition-colors group cursor-pointer text-left">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary group-hover:text-primary transition-colors text-[20px]">assignment</span>
<span className="font-label-md text-label-md text-on-surface">Take a Practice Test</span>
</div>
<span className="material-symbols-outlined text-secondary text-[18px]">chevron_right</span>
</button>
<button onClick={() => navigate('/mentoroverviewrequestreview')} className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-surface-container-low transition-colors group cursor-pointer text-left">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary group-hover:text-primary transition-colors text-[20px]">groups</span>
<span className="font-label-md text-label-md text-on-surface">Find a Mentor</span>
</div>
<span className="material-symbols-outlined text-secondary text-[18px]">chevron_right</span>
</button>
</div>
</div>
{/*  Learning Consistency Chart  */}
<div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Learning Consistency</h3>
<span className="font-label-sm text-label-sm text-secondary">Last 4 Weeks</span>
</div>
{/*  Bar Chart Container  */}
<div className="h-28 flex items-end justify-between gap-4 px-2 pt-4">
{/*  W1  */}
<div className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
<div className="w-full bg-secondary-container rounded-t-lg group-hover:bg-primary transition-all duration-300" ></div>
<span className="font-label-sm text-label-sm text-secondary group-hover:text-on-surface font-medium">W1</span>
</div>
{/*  W2  */}
<div className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
<div className="w-full bg-secondary-container rounded-t-lg group-hover:bg-primary transition-all duration-300" ></div>
<span className="font-label-sm text-label-sm text-secondary group-hover:text-on-surface font-medium">W2</span>
</div>
{/*  W3  */}
<div className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
<div className="w-full bg-secondary-container rounded-t-lg group-hover:bg-primary transition-all duration-300" ></div>
<span className="font-label-sm text-label-sm text-secondary group-hover:text-on-surface font-medium">W3</span>
</div>
{/*  W4  */}
<div className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
<div className="w-full bg-primary-container rounded-t-lg group-hover:bg-primary transition-all duration-300" ></div>
<span className="font-label-sm text-label-sm text-primary font-bold">W4</span>
</div>
</div>
</div>
</div>
</div>
</div></main>
    </div>
  );
}
