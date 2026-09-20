import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import client from '../../api/client';

export default function LearnerLoginEdupath() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  
  const [email, setEmail] = useState('nikhil.demo@edupath.local');
  const [password, setPassword] = useState('password123');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);
    try {
      const response = await client.post('/auth/login', { email, password });
      const { access_token, user } = response.data;
      login(user, access_token);
      navigate('/learnerdashboardproduction');
    } catch (err: any) {
      const detail = err.response?.data?.detail || 'Invalid email or password';
      setErrorMessage(detail);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-surface">
      {/* Generated from Stitch UI */}
      <main className="w-full bg-surface min-h-screen flex items-center justify-center"><div className="flex flex-col w-full items-center justify-center py-10 px-4">
<div className="relative w-full max-w-[480px] bg-surface-container-lowest rounded-xl shadow-xl p-8 sm:p-10 flex flex-col items-center">
{/*  Brand Header  */}
<div className="flex flex-col items-center text-center w-full">
<div className="flex items-center gap-3 mb-5">
<img alt="EduPath Logo" className="w-11 h-11 object-contain rounded-lg shadow-sm" src="/logo.png"/>
<span className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">EduPath</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-on-surface mb-2">Welcome back</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-[360px]">
        Sign in to continue your personalized learning journey and track your career milestones.
      </p>
</div>
{errorMessage && (
  <div className="mt-4 w-full p-3 rounded-lg bg-red-50 text-red-700 text-sm border border-red-200">
    {errorMessage}
  </div>
)}
{/*  Active Streak Badge Teaser  */}
<div className="mt-6 w-full bg-secondary-container/40 rounded-lg p-3 flex items-center justify-between">
<div className="flex items-center gap-2.5">
<span className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
<span className="material-symbols-outlined text-headline-sm leading-none" >local_fire_department</span>
</span>
<div className="flex flex-col text-left">
<span className="font-label-md text-label-md text-on-surface">5-Week Streak Active</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Log in today to preserve your milestone</span>
</div>
</div>
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed-dim opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
</span>
</div>
{/*  Login Form  */}
<form onSubmit={handleSubmit} className="w-full mt-6 space-y-4" id="loginForm" >
{/*  Email Address Field  */}
<div className="space-y-1.5 text-left w-full">
<label className="font-label-md text-label-md text-on-surface flex items-center justify-between" htmlFor="emailInput">
<span>Email address</span>
</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant/70 select-none text-headline-sm pointer-events-none">
            mail
          </span>
<input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full pl-10 pr-4 py-2.5 bg-surface-container-low font-body-md text-body-md text-on-surface rounded-lg outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all placeholder:text-on-surface-variant/60" id="emailInput" name="email" placeholder="name@example.com" required type="email"/>
</div>
</div>
{/*  Password Field  */}
<div className="space-y-1.5 text-left w-full">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md text-on-surface" htmlFor="passwordInput">
            Password
          </label>
<a className="font-label-sm text-label-sm text-primary hover:underline transition-colors" href="#">
            Forgot Password?
          </a>
</div>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant/70 select-none text-headline-sm pointer-events-none">
            lock
          </span>
<input value={password} onChange={(e) => setPassword(e.target.value)} className="w-full pl-10 pr-10 py-2.5 bg-surface-container-low font-body-md text-body-md text-on-surface rounded-lg outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all placeholder:text-on-surface-variant/60" id="passwordInput" name="password" placeholder="••••••••••••" required type="password"/>
<button aria-label="Toggle password visibility" className="absolute right-3 text-on-surface-variant/70 hover:text-on-surface focus:outline-none transition-colors p-1" id="passwordToggleBtn" type="button">
<span className="material-symbols-outlined text-headline-sm select-none" id="eyeIcon">
              visibility
            </span>
</button>
</div>
</div>
{/*  Remember Me Checkbox  */}
<div className="flex items-center pt-1">
<label className="flex items-center gap-2.5 cursor-pointer select-none">
<input defaultChecked className="w-4 h-4 rounded text-primary-container focus:ring-primary-container bg-surface-container-low accent-primary-container cursor-pointer" id="rememberMe" name="remember" type="checkbox"/>
<span className="font-body-sm text-body-sm text-on-surface-variant">Keep me signed in for 30 days</span>
</label>
</div>
{/*  Primary Action Button  */}
<button className="w-full mt-2 py-3 px-5 bg-primary-container text-on-primary font-headline-sm text-headline-sm rounded-lg hover:bg-primary transition-all shadow-sm flex items-center justify-center gap-2 group cursor-pointer" type="submit">
<span>Sign In</span>
<span className="material-symbols-outlined text-headline-sm group-hover:translate-x-1 transition-transform">
          arrow_forward
        </span>
</button>
</form>
{/*  SSO Divider  */}
<div className="relative w-full my-6 flex items-center justify-center">
<div className="w-full h-px bg-surface-container"></div>
<span className="absolute bg-surface-container-lowest px-3 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
        Or sign in with
      </span>
</div>
{/*  Social Sign-in Buttons  */}
<div className="grid grid-cols-2 gap-3 w-full">
<button className="flex items-center justify-center gap-2.5 py-2.5 px-4 bg-surface-container-lowest hover:bg-surface-container-low text-on-surface font-label-md text-label-md rounded-lg shadow-sm transition-colors cursor-pointer" type="button">
<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"></path>
</svg>
<span>Google</span>
</button>
<button className="flex items-center justify-center gap-2.5 py-2.5 px-4 bg-surface-container-lowest hover:bg-surface-container-low text-on-surface font-label-md text-label-md rounded-lg shadow-sm transition-colors cursor-pointer" type="button">
<svg className="w-4 h-4 fill-current text-on-surface" viewBox="0 0 24 24">
<path clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill-rule="evenodd"></path>
</svg>
<span>GitHub</span>
</button>
</div>
{/*  Registration Link  */}
<div className="pt-8 w-full flex items-center justify-center gap-1.5">
<span className="font-body-md text-body-md text-on-surface-variant">Don't have an account yet?</span>
<button type="button" onClick={() => navigate('/roleselection')} className="font-label-md text-label-md text-primary hover:underline decoration-primary underline-offset-4 focus:outline-none rounded-sm px-1">
          Create Account
        </button>
</div>
{/*  Trust Indicator Footer  */}
<div className="mt-6 pt-5 w-full flex items-center justify-center gap-2 text-on-surface-variant/80">
<span className="material-symbols-outlined text-label-md">verified_user</span>
<span className="font-label-sm text-label-sm tracking-normal">Secured with enterprise-grade encryption</span>
</div>
</div>
</div>
</main>
    </div>
  );
}
