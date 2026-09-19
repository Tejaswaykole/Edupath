
export default function RoleSelectionEdupath() {
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
<img alt="EduPath Brand Mark" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1UW82HvmiPy5TMo7cU3gRwBiU3baDfcaiEOnyNASWlxwTVH0w0qIkNHoitLzMolXacL-2tGekbbOW8xuiE-cFOTqz3XSg6tMXidYpz4GWTD9ElmxSIusWHfPloyzQX4ShPK6uAbsckWXk0QAmTGvpHPR8UpvJbzypQPbEy08-huoIQrDNTtxARo_QwXykp2DRz9wjaWKAk9oBlNnhorpC0KbV5ertGX9YPXANETHdtirg"/>
</div>
<div className="flex flex-col text-left">
<span className="font-headline-md text-headline-md tracking-tight text-on-surface font-bold">EduPath</span>
<span className="font-label-sm text-label-sm text-secondary font-medium tracking-wide">Learn. Grow. Belong.</span>
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
<input defaultChecked className="peer sr-only" id="role-learner" name="user_role" type="radio" value="learner"/>
<div className="h-full rounded-xl p-6 lg:p-7 flex flex-col justify-between transition-all duration-200 bg-surface-container-lowest shadow-sm peer-defaultChecked:shadow-md peer-defaultChecked:bg-surface-container-lowest peer-defaultChecked:ring-2 peer-defaultChecked:ring-primary-container relative overflow-hidden hover:shadow-md">
{/*  Top Status & Indicator  */}
<div>
<div className="flex items-center justify-between gap-3 mb-5">
<span className="inline-flex items-center px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold bg-secondary-container text-on-secondary-container">
                  Primary Path
                </span>
{/*  Radio Custom Icon  */}
<div className="w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200 peer-defaultChecked:bg-primary-container bg-surface-container text-on-primary">
<span className="material-symbols-outlined text-[16px] text-white opacity-100 peer-defaultChecked:opacity-100">
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
<input className="peer sr-only" id="role-mentor" name="user_role" type="radio" value="mentor"/>
<div className="h-full rounded-xl p-6 lg:p-7 flex flex-col justify-between transition-all duration-200 bg-surface-container-lowest shadow-sm peer-defaultChecked:shadow-md peer-defaultChecked:bg-surface-container-lowest peer-defaultChecked:ring-2 peer-defaultChecked:ring-primary-container relative overflow-hidden hover:shadow-md">
{/*  Top Status & Indicator  */}
<div>
<div className="flex items-center justify-between gap-3 mb-5">
<span className="inline-flex items-center px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold bg-surface-container text-secondary">
                  Professional Track
                </span>
{/*  Radio Custom Icon  */}
<div className="w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200 bg-surface-container text-surface peer-defaultChecked:bg-primary-container peer-defaultChecked:text-on-primary">
<span className="material-symbols-outlined text-[16px] opacity-0 peer-defaultChecked:opacity-100">
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
    </div>
</div></main>
</div>
  );
}
