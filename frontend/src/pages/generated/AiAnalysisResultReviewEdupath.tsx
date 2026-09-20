import { useNavigate } from 'react-router-dom';
import { useUploadStore } from '../../store/uploadStore';

// Group skills by category
function groupSkillsByCategory(skills: { name: string; proficiency: string; confidence: number; category: string }[]) {
  return skills.reduce((acc, skill) => {
    const cat = skill.category || 'General';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);
}

const proficiencyColor: Record<string, string> = {
  EXPERT: 'text-emerald-700',
  ADVANCED: 'text-emerald-700',
  INTERMEDIATE: 'text-sky-700',
  BEGINNER: 'text-amber-700',
};

export default function AiAnalysisResultReviewEdupath() {
  const navigate = useNavigate();
  const { result } = useUploadStore();

  // If no upload result (e.g. direct navigation), show empty state
  if (!result) {
    return (
      <div className="min-h-screen bg-surface flex flex-col items-center justify-center gap-space-md p-8">
        <span className="material-symbols-outlined text-[48px] text-secondary">upload_file</span>
        <h2 className="font-headline-md text-headline-md text-on-surface">No Resume Uploaded</h2>
        <p className="font-body-md text-body-md text-secondary text-center max-w-md">
          Please upload a resume first so EduPath can analyze your skills and experience.
        </p>
        <button
          onClick={() => navigate('/documentcenterresumeupload')}
          className="px-space-lg py-space-sm rounded-xl bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-all"
          type="button"
        >
          Go to Document Center
        </button>
      </div>
    );
  }

  const grouped = groupSkillsByCategory(result.skills);
  const totalSkills = result.skills.length;
  const totalProjects = result.projects.length;
  const totalEducation = result.education.length;

  return (
    <div className="min-h-screen bg-surface">
      {/* Generated from Stitch UI */}
      <main className="w-full pt-16 bg-background px-space-xl py-space-xl min-h-screen"><div className="flex flex-col w-full gap-space-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs text-primary font-label-sm uppercase tracking-wider mb-space-xs">
<span className="material-symbols-outlined text-[18px]">neurology</span>
<span>Resume Parsing Engine v2.4</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">Here's what EduPath found</h1>
<p className="font-body-lg text-body-lg text-secondary max-w-2xl mt-space-xs">
  Review the information we've extracted from your resume before continuing. You can edit anything that doesn't look right.
</p>
</div>
<div className="flex items-center gap-space-sm self-start md:self-auto">
<span className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container font-label-md text-label-md text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
  Parsed: <strong className="text-on-surface font-semibold">{result.fileName}</strong>
</span>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md shadow-sm">
<div className="flex items-start gap-space-md">
<div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[22px]">tune</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">Human-in-the-Loop Validation</span>
<span className="px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed-variant font-label-sm text-label-sm">Step 2 of 4</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 max-w-3xl">
  EduPath Agent identified <strong>{totalSkills} skill{totalSkills !== 1 ? 's' : ''}</strong>{totalProjects > 0 ? `, <strong>${totalProjects} project${totalProjects !== 1 ? 's' : ''}</strong>` : ''}{totalEducation > 0 ? `, <strong>${totalEducation} education entr${totalEducation !== 1 ? 'ies' : 'y'}</strong>` : ''}. Review and confirm before proceeding to Skill Gap Analysis.
</p>
</div>
</div>
<div className="flex items-center gap-space-sm shrink-0">
<span className="font-label-sm text-label-sm text-secondary">Readiness Score:</span>
<div className="flex items-center gap-space-xs px-space-sm py-space-xs rounded-lg bg-surface-container-lowest text-tertiary font-label-md text-label-md font-bold shadow-sm">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span>{result.readinessScore}%</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
<div className="lg:col-span-8 flex flex-col gap-space-lg">

{/* Skills section */}
<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">psychology</span>
</div>
<div>
<h2 className="font-headline-md text-headline-md text-on-surface">Detected Technical Skills</h2>
<p className="font-body-sm text-body-sm text-secondary">Identified from resume text and project descriptions</p>
</div>
</div>
</div>

{totalSkills === 0 ? (
  <div className="p-space-md rounded-xl bg-surface-container-low text-center">
    <p className="font-body-sm text-body-sm text-secondary">No skills detected. Try uploading a more detailed resume.</p>
  </div>
) : (
  <div className="flex flex-col gap-space-md">
  {Object.entries(grouped).map(([category, skills]) => (
    <div key={category} className="flex flex-col gap-space-xs">
      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">{category}</span>
      <div className="flex flex-wrap gap-space-xs">
        {skills.map((skill, i) => (
          <div key={i} className="group relative flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-all">
            <span>{skill.name}</span>
            <span className={`font-label-sm text-label-sm font-normal ${proficiencyColor[skill.proficiency] || 'text-secondary'}`}>
              {skill.confidence}%
            </span>
          </div>
        ))}
      </div>
    </div>
  ))}
  </div>
)}
</section>

{/* Experience & Projects */}
{(result.projects.length > 0 || result.experience.length > 0) && (
<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">terminal</span>
</div>
<div>
<div className="flex items-center gap-space-xs">
<h2 className="font-headline-md text-headline-md text-on-surface">Extracted Experience &amp; Projects</h2>
{result.experience.length > 0 && (
  <span className="px-space-xs py-0.5 rounded-md bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">
    {result.experience.reduce((s, e) => s + (e.years || 0), 0).toFixed(1)}+ yrs equivalent
  </span>
)}
</div>
<p className="font-body-sm text-body-sm text-secondary">Parsed with inferred engineering scope and stack</p>
</div>
</div>
</div>

<div className="flex flex-col gap-space-md" id="projectsList">
{result.projects.map((project, i) => (
  <div key={i} className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-sm">
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-space-sm">
        <div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm font-semibold text-headline-sm">
          {String(i + 1).padStart(2, '0')}
        </div>
        <div className="flex flex-col">
          <h3 className="font-headline-sm text-headline-sm text-on-surface">{project.name}</h3>
          <span className="font-label-sm text-label-sm text-secondary">Stack: {project.stack}</span>
        </div>
      </div>
    </div>
    <p className="font-body-sm text-body-sm text-on-surface-variant">{project.description}</p>
  </div>
))}

{result.experience.map((exp, i) => (
  <div key={`exp-${i}`} className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-sm">
    <div className="flex items-start justify-between">
      <div className="flex flex-col">
        <h3 className="font-headline-sm text-headline-sm text-on-surface">{exp.role}</h3>
        <span className="font-label-sm text-label-sm text-secondary">{exp.company} • {exp.years} yr{exp.years !== 1 ? 's' : ''}</span>
      </div>
    </div>
    <p className="font-body-sm text-body-sm text-on-surface-variant">{exp.description}</p>
  </div>
))}
</div>
</section>
)}

{/* Education */}
{result.education.length > 0 && (
<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">school</span>
</div>
<div>
<h2 className="font-headline-md text-headline-md text-on-surface">Education &amp; Credentials</h2>
<p className="font-body-sm text-body-sm text-secondary">Verified institutional degrees and professional credentials</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
{result.education.map((edu, i) => (
  <div key={i} className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between gap-space-sm">
    <div className="flex items-start gap-space-sm">
      <span className="material-symbols-outlined text-primary text-[24px]">history_edu</span>
      <div className="flex flex-col">
        <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Degree</span>
        <h4 className="font-headline-sm text-headline-sm text-on-surface mt-0.5">{edu.degree}</h4>
        <p className="font-body-sm text-body-sm text-secondary">{edu.institution}{edu.year ? ` • ${edu.year}` : ''}</p>
      </div>
    </div>
  </div>
))}
</div>
</section>
)}

{/* Summary */}
{result.summary && (
<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center gap-space-sm mb-space-sm">
<span className="material-symbols-outlined text-primary text-[20px]">summarize</span>
<h2 className="font-headline-md text-headline-md text-on-surface">AI Summary</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{result.summary}</p>
</section>
)}

</div>

{/* Right sidebar */}
<div className="lg:col-span-4 flex flex-col gap-space-lg">
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">auto_graph</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Profile Summary</h3>
<p className="font-body-sm text-body-sm text-secondary">From your uploaded resume</p>
</div>
</div>
<div className="flex items-center justify-between p-space-md rounded-xl bg-surface-container-low">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary">Readiness Score</span>
<span className="font-headline-xl text-headline-xl text-on-surface font-bold">{result.readinessScore}%</span>
</div>
<div className="relative w-14 h-14 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
<path className="text-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray={`${result.readinessScore}, 100`} strokeLinecap="round" strokeWidth="3.5"></path>
</svg>
<span className="material-symbols-outlined absolute text-primary text-[20px]">speed</span>
</div>
</div>
<div className="flex flex-col gap-space-sm">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Extraction Counts</span>
<div className="grid grid-cols-3 gap-2">
<div className="flex flex-col items-center p-2 rounded-lg bg-surface-container-low text-center">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">{totalSkills}</span>
<span className="font-label-sm text-label-sm text-secondary">Skills</span>
</div>
<div className="flex flex-col items-center p-2 rounded-lg bg-surface-container-low text-center">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">{totalProjects}</span>
<span className="font-label-sm text-label-sm text-secondary">Projects</span>
</div>
<div className="flex flex-col items-center p-2 rounded-lg bg-surface-container-low text-center">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">{totalEducation}</span>
<span className="font-label-sm text-label-sm text-secondary">Education</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">Need to re-upload?</span>
<span className="material-symbols-outlined text-secondary text-[18px]">attachment</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">
  If this parser missed significant career chapters, you can re-run with a fresh PDF or DOCX file.
</p>
<button
  onClick={() => navigate('/documentcenterresumeupload')}
  className="mt-space-xs w-full py-space-xs px-space-md rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all flex items-center justify-center gap-space-xs"
  type="button"
>
<span className="material-symbols-outlined text-[18px]">file_upload</span>
<span>Upload Another File</span>
</button>
</div>
</div>
</div>

{/* Sticky bottom bar */}
<div className="sticky bottom-4 z-30 w-full mt-space-md">
<div className="bg-surface-container-lowest/95 backdrop-blur-md rounded-xl p-space-md shadow-xl flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md w-full sm:w-auto justify-between sm:justify-start">
<button onClick={() => navigate('/documentcenterresumeupload')} className="flex items-center gap-space-xs px-space-md py-space-sm rounded-xl text-secondary hover:text-on-surface hover:bg-surface-container transition-all font-label-md text-label-md" type="button">
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
<span>Back to Documents</span>
</button>
</div>
<div className="flex items-center gap-space-sm w-full sm:w-auto justify-end">
<span className="hidden md:inline font-body-sm text-body-sm text-secondary mr-space-xs">All changes automatically saved</span>
<button onClick={() => navigate('/analysisconfirmed')} className="w-full sm:w-auto flex items-center justify-center gap-space-sm px-space-xl py-space-sm rounded-xl bg-primary hover:bg-primary-container text-on-primary font-headline-sm text-headline-sm shadow-md hover:shadow-lg transition-all" id="confirmDataBtn" type="button">
<span>Save &amp; Confirm Information</span>
<span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
</div>
</div>
</div>

</div></main>
    </div>
  );
}
