import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

export default function LearnerRegistrationEdupath() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ id: 2, email: 'newlearner@example.com', role: 'learner', name: 'New Learner' }, 'mock-token-reg');
    navigate('/learneronboardingedupath');
  };
  return (
    <div className="min-h-screen bg-surface">
      {/* Generated from Stitch UI */}
      <main className="w-full bg-surface min-h-screen flex items-center justify-center"><div className="flex flex-col w-full items-center justify-center py-10 px-4">
<div className="relative w-full max-w-[480px] bg-surface-container-lowest rounded-xl shadow-md p-8 md:p-10 flex flex-col">
{/*  Top Brand Header  */}
<div className="flex flex-col items-center text-center mb-7">
<div className="flex items-center gap-2.5 mb-3">
<img alt="EduPath Logo Mark" className="w-9 h-9 object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1UW82HvmiPy5TMo7cU3gRwBiU3baDfcaiEOnyNASWlxwTVH0w0qIkNHoitLzMolXacL-2tGekbbOW8xuiE-cFOTqz3XSg6tMXidYpz4GWTD9ElmxSIusWHfPloyzQX4ShPK6uAbsckWXk0QAmTGvpHPR8UpvJbzypQPbEy08-huoIQrDNTtxARo_QwXykp2DRz9wjaWKAk9oBlNnhorpC0KbV5ertGX9YPXANETHdtirg"/>
<span className="font-headline-md text-headline-md tracking-tight text-on-surface">EduPath</span>
</div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-low text-primary mb-3">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
<span className="font-label-sm text-label-sm">Role: Learner</span>
<button onClick={() => navigate('/roleselectionedupath')} className="text-on-surface-variant hover:text-primary transition-colors ml-1 underline decoration-outline-variant hover:decoration-primary font-label-sm text-label-sm" type="button">Switch</button>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface mb-1">Create your Learner Account</h1>
<p className="font-body-sm text-body-sm text-on-surface-variant">Start your personalized skill journey with EduPath.</p>
</div>
{/*  Registration Form  */}
<form onSubmit={handleSubmit} className="flex flex-col gap-4" >
{/*  Full Name Field  */}
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface flex items-center justify-between" htmlFor="fullName">
          Full Name
        </label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-outline text-[18px] pointer-events-none">person</span>
<input className="w-full pl-9 pr-3.5 py-2.5 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline outline-none focus:bg-surface-bright shadow-sm transition-all" id="fullName" name="fullName" placeholder="e.g. Tejas Patil" required type="text"/>
</div>
</div>
{/*  Email Field  */}
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface flex items-center justify-between" htmlFor="email">
          Work or Personal Email
        </label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-outline text-[18px] pointer-events-none">mail</span>
<input className="w-full pl-9 pr-3.5 py-2.5 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline outline-none focus:bg-surface-bright shadow-sm transition-all" id="email" name="email" placeholder="tejas@example.com" required type="email"/>
</div>
</div>
{/*  Password Field  */}
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface flex items-center justify-between" htmlFor="password">
          Password
        </label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-outline text-[18px] pointer-events-none">lock</span>
<input className="w-full pl-9 pr-10 py-2.5 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline outline-none focus:bg-surface-bright shadow-sm transition-all" id="password" name="password" placeholder="Create password" required type="password"/>
<button aria-label="Toggle password visibility" className="absolute right-3 text-outline hover:text-on-surface flex items-center justify-center p-0.5" id="togglePassword" type="button">
<span className="material-symbols-outlined text-[18px]" id="eyeIcon">visibility</span>
</button>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
<span className="material-symbols-outlined text-[14px] text-tertiary">check_circle</span>
          Must be at least 8 characters
        </p>
</div>
{/*  Confirm Password Field  */}
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface" htmlFor="confirmPassword">
          Confirm Password
        </label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-outline text-[18px] pointer-events-none">lock_reset</span>
<input className="w-full pl-9 pr-3.5 py-2.5 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline outline-none focus:bg-surface-bright shadow-sm transition-all" id="confirmPassword" name="confirmPassword" placeholder="Re-enter password" required type="password"/>
</div>
</div>
{/*  Terms Checkbox  */}
<div className="flex items-start gap-2.5 pt-1">
<input className="mt-0.5 w-4 h-4 rounded text-primary-container focus:ring-0 cursor-pointer accent-[#4f46e5]" id="terms" name="terms" required type="checkbox"/>
<label className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer select-none" htmlFor="terms">
          I agree to EduPath's 
          <a className="text-primary hover:underline font-label-md" href="#">Terms of Service</a> 
          and 
          <a className="text-primary hover:underline font-label-md" href="#">Privacy Policy</a>.
        </label>
</div>
{/*  Primary Action CTA  */}
<button className="w-full mt-2 py-3 px-4 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-headline-sm text-headline-sm flex items-center justify-center gap-2 shadow-sm hover:shadow transition-all" type="submit">
<span>Create Account</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</form>
{/*  Divider Section  */}
<div className="relative my-6 flex items-center justify-center">
<div className="w-full h-px bg-surface-container"></div>
<span className="absolute bg-surface-container-lowest px-3 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
        Or continue with
      </span>
</div>
{/*  SSO Action Row  */}
<div className="grid grid-cols-2 gap-3">
{/*  Google Auth  */}
<button className="flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-lg bg-surface-bright hover:bg-surface-container-low text-on-surface font-label-md text-label-md transition-colors shadow-sm" type="button">
<svg className="w-4 h-4" viewBox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"></path>
</svg>
<span>Google</span>
</button>
{/*  GitHub Auth  */}
<button className="flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-lg bg-surface-bright hover:bg-surface-container-low text-on-surface font-label-md text-label-md transition-colors shadow-sm" type="button">
<svg className="w-4 h-4 fill-current text-on-surface" viewBox="0 0 24 24">
<path clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill-rule="evenodd"></path>
</svg>
<span>GitHub</span>
</button>
</div>
{/*  Sign In Link  */}
<div className="mt-5 text-center">
<span className="font-body-sm text-body-sm text-on-surface-variant">Already have an account? </span>
<button type="button" onClick={() => navigate('/learnerloginedupath')} className="font-label-md text-label-md text-primary hover:underline font-semibold ml-1 focus:outline-none">
        Sign in
      </button>
</div>
</div>
</div>
</main>
    </div>
  );
}
