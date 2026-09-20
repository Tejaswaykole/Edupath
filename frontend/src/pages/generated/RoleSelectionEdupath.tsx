import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RoleSelectionEdupath() {
  const navigate = useNavigate();
  const [role, setRole] = useState<'learner'|'mentor'>('learner');

  const handleContinue = () => {
    if (role === 'mentor') {
      navigate('/mentorregistration');
    } else {
      navigate('/learnerregistration');
    }
  };
  return (
    <div className="min-h-screen bg-surface">
      {/* Generated from Stitch UI */}
      <main className="w-full bg-surface min-h-screen flex items-center justify-center"><div className="flex flex-col w-full">
<div className="relative w-full min-h-screen bg-surface-bright flex flex-col items-center justify-between px-gutter py-8 md:py-12 overflow-hidden selection:bg-secondary-container selection:text-on-secondary-container">
{/*  Background Architectural Ambience  */}
<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-primary-fixed-dim/25 via-surface-container-low/40 to-transparent rounded-full blur-3xl opacity-70"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[450px] bg-secondary-container/30 rounded-full blur-3xl opacity-60"></div>
</div>
{/*  Top Navigation / Brand Anchor  */}
<header className="relative z-10 flex flex-col items-center justify-center text-center max-w-xl mx-auto space-y-3">
<div className="inline-flex items-center gap-3 group cursor-default">
<div className="w-11 h-11 rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-center p-2 transition-transform duration-300 group-hover:scale-105">
<img alt="EduPath Logo" className="w-full h-full object-contain rounded-lg" src="/logo.png"/>
</div>
<div className="flex flex-col text-left">
<span className="font-headline-md text-headline-md tracking-tight text-on-surface font-bold">EduPath</span>
<span className="font-label-sm text-label-sm text-secondary font-medium tracking-wide">LEARN • GROW • GO FURTHER</span>
</div>
</div>
<div className="pt-4 space-y-1.5">
<h1 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
          Join EduPath
        </h1>
<p className="font-body-md text-body-md text-secondary max-w-md">
          Choose the experience that fits you. Tailor your trajectory from day one.
        </p>
</div>
</header>
{/*  Interactive Role Selection Grid  */}
<main className="relative z-10 w-full max-w-4xl mx-auto my-6 md:my-8">
<form className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6" id="roleSelectionForm">
{/*  OPTION 1: LEARNER (DEFAULT SELECTED)  */}
<label className="relative group cursor-pointer block text-left" htmlFor="role-learner">
<input checked={role === 'learner'} onChange={() => setRole('learner')} className="peer sr-only" id="role-learner" name="user_role" type="radio" value="learner"/>
<div className="h-full rounded-xl p-6 lg:p-7 flex flex-col justify-between transition-all duration-200 bg-surface-container-lowest shadow-sm peer-checked:shadow-md peer-checked:bg-surface-container-lowest peer-checked:ring-2 peer-checked:ring-primary-container relative overflow-hidden hover:shadow-md">
{/*  Top Status & Indicator  */}
<div>
<div className="flex items-center justify-between gap-3 mb-5">
<span className="inline-flex items-center px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold bg-secondary-container text-on-secondary-container">
                  Primary Path
                </span>
{/*  Radio Custom Icon  */}
<div className="w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200 peer-checked:bg-primary-container bg-surface-container text-on-primary">
<span className="material-symbols-outlined text-[16px] text-white opacity-100 peer-checked:opacity-100">
                    check
                  </span>
</div>
</div>
{/*  Header Info  */}
<div className="space-y-1 mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-[20px]">school</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">Learner</h2>
</div>
<p className="font-body-md text-body-md text-secondary pt-1">
                  Build your personalized learning journey with executive-grade precision.
                </p>
</div>
{/*  Key Capabilities  */}
<div className="pt-2 space-y-3">
<div className="flex items-start gap-3 text-on-surface">
<span className="material-symbols-outlined text-tertiary text-[18px] mt-0.5 shrink-0" >
                    check_circle
                  </span>
<span className="font-body-sm text-body-sm text-on-surface">
                    Identify skill gaps based on your target industry role
                  </span>
</div>
<div className="flex items-start gap-3 text-on-surface">
<span className="material-symbols-outlined text-tertiary text-[18px] mt-0.5 shrink-0" >
                    check_circle
                  </span>
<span className="font-body-sm text-body-sm text-on-surface">
                    Adaptive daily learning plan &amp; smart practice assessments
                  </span>
</div>
<div className="flex items-start gap-3 text-on-surface">
<span className="material-symbols-outlined text-tertiary text-[18px] mt-0.5 shrink-0" >
                    check_circle
                  </span>
<span className="font-body-sm text-body-sm text-on-surface">
                    Track real-time progress &amp; build verified project portfolio
                  </span>
</div>
</div>
</div>
{/*  Learner Highlight Shelf  */}
<div className="mt-6 pt-4 bg-surface-container-low/60 rounded-lg p-3.5 flex items-center justify-between text-on-secondary-container">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-primary-container text-[20px]">smart_toy</span>
<span className="font-label-md text-label-md">EduPath AI Copilot included</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary font-semibold tracking-wide uppercase">Active</span>
</div>
</div>
</label>
{/*  OPTION 2: MENTOR (SECONDARY TRACK)  */}
<label className="relative group cursor-pointer block text-left" htmlFor="role-mentor">
<input checked={role === 'mentor'} onChange={() => setRole('mentor')} className="peer sr-only" id="role-mentor" name="user_role" type="radio" value="mentor"/>
<div className="h-full rounded-xl p-6 lg:p-7 flex flex-col justify-between transition-all duration-200 bg-surface-container-lowest shadow-sm peer-checked:shadow-md peer-checked:bg-surface-container-lowest peer-checked:ring-2 peer-checked:ring-primary-container relative overflow-hidden hover:shadow-md">
{/*  Top Status & Indicator  */}
<div>
<div className="flex items-center justify-between gap-3 mb-5">
<span className="inline-flex items-center px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold bg-surface-container text-secondary">
                  Professional Track
                </span>
{/*  Radio Custom Icon  */}
<div className="w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200 bg-surface-container text-surface peer-checked:bg-primary-container peer-checked:text-on-primary">
<span className="material-symbols-outlined text-[16px] opacity-0 peer-checked:opacity-100">
                    check
                  </span>
</div>
</div>
{/*  Header Info  */}
<div className="space-y-1 mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-[20px]">co_present</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">Mentor</h2>
</div>
<p className="font-body-md text-body-md text-secondary pt-1">
                  Guide learners using your professional expertise and engineering insight.
                </p>
</div>
{/*  Key Capabilities  */}
<div className="pt-2 space-y-3">
<div className="flex items-start gap-3 text-on-surface">
<span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 shrink-0">
                    check_circle
                  </span>
<span className="font-body-sm text-body-sm text-on-surface">
                    Review and evaluate learner project code submissions
                  </span>
</div>
<div className="flex items-start gap-3 text-on-surface">
<span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 shrink-0">
                    check_circle
                  </span>
<span className="font-body-sm text-body-sm text-on-surface">
                    Host 1-on-1 milestone review &amp; roadmap strategy sessions
                  </span>
</div>
<div className="flex items-start gap-3 text-on-surface">
<span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 shrink-0">
                    check_circle
                  </span>
<span className="font-body-sm text-body-sm text-on-surface">
                    Share industry guidance, technical playbooks &amp; interview insights
                  </span>
</div>
</div>
</div>
{/*  Mentor Highlight Shelf  */}
<div className="mt-6 pt-4 bg-surface-container-low/60 rounded-lg p-3.5 flex items-center justify-between text-secondary">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-secondary text-[20px]">verified_user</span>
<span className="font-label-md text-label-md">Verified industry credentials</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-semibold tracking-wide uppercase">Optional</span>
</div>
</div>
</label>
</form>
</main>
{/* Bottom Actions and Secondary Links */}
<footer className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center text-center space-y-4 pt-2">
<button onClick={handleContinue} className="w-full sm:w-80 py-3 px-6 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-headline-sm text-headline-sm transition-all duration-200 shadow-sm flex items-center justify-center gap-2 group" id="submitBtn" type="button">
<span>Continue</span>
<span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:translate-x-1">
          arrow_forward
        </span>
</button>
<p className="font-body-sm text-body-sm text-secondary max-w-sm">
        You can collaborate or connect mentor credentials at any time in settings.
      </p>
<div className="pt-2 flex items-center gap-1.5 font-body-sm text-body-sm">
<span className="text-secondary">Already have an account?</span>
<button onClick={() => navigate('/learnerlogin')} className="text-primary-container font-semibold hover:underline decoration-primary-container underline-offset-4 focus:outline-none focus:ring-1 focus:ring-primary-container rounded-sm px-1">
          Sign In
        </button>
</div>
</footer>
    </div>
  </div>
</main>
</div>
  );
}
