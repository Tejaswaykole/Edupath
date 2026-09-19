
export default function MentorRegistrationEdupath() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Generated from Stitch UI */}
      <main className="w-full bg-surface min-h-screen flex items-center justify-center"><div className="flex flex-col w-full items-center justify-center py-10 px-4">
{/*  Subtle Ambient Glow Background  */}
<div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center -z-10">
<div className="w-[600px] h-[600px] bg-primary-fixed-dim/25 rounded-full blur-3xl -top-20"></div>
<div className="w-[450px] h-[450px] bg-secondary-container/40 rounded-full blur-2xl -bottom-10"></div>
</div>
{/*  Main Card Container  */}
<div className="w-full max-w-[560px] bg-surface-container-lowest rounded-xl shadow-md p-8 sm:p-10 transition-all">
{/*  Header & Brand  */}
<div className="flex flex-col items-center text-center mb-6">
<div className="flex items-center gap-3 mb-4">
<img alt="EduPath Logo Mark" className="w-10 h-10 object-contain rounded-lg shadow-sm" src="https://lh3.googleusercontent.com/aida/AEtjO1UW82HvmiPy5TMo7cU3gRwBiU3baDfcaiEOnyNASWlxwTVH0w0qIkNHoitLzMolXacL-2tGekbbOW8xuiE-cFOTqz3XSg6tMXidYpz4GWTD9ElmxSIusWHfPloyzQX4ShPK6uAbsckWXk0QAmTGvpHPR8UpvJbzypQPbEy08-huoIQrDNTtxARo_QwXykp2DRz9wjaWKAk9oBlNnhorpC0KbV5ertGX9YPXANETHdtirg"/>
<span className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">EduPath</span>
</div>
<div className="flex items-center gap-2 mb-3">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[14px]">work</span>
<span>Role: Mentor</span>
</div>
<span className="text-outline text-[12px]">•</span>
<a className="font-label-sm text-label-sm text-primary font-semibold hover:underline" href="#">Switch to Learner</a>
</div>
<h1 className="font-headline-xl text-headline-xl text-on-surface mb-2 tracking-tight">Create your Mentor Account</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-sm">Guide future engineers and share your domain expertise on EduPath.</p>
</div>
{/*  Form Section  */}
<form className="space-y-4" >
{/*  Full Name  */}
<div>
<label className="block font-label-md text-label-md text-on-surface mb-1.5" htmlFor="fullname">Full Name</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3.5 text-outline text-[20px] pointer-events-none">person</span>
<input className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface placeholder:text-outline focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container transition-all" id="fullname" placeholder="e.g. Dr. Alex Mercer" required type="text"/>
</div>
</div>
{/*  Professional Email  */}
<div>
<label className="block font-label-md text-label-md text-on-surface mb-1.5" htmlFor="email">Professional Email</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3.5 text-outline text-[20px] pointer-events-none">mail</span>
<input className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface placeholder:text-outline focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container transition-all" id="email" placeholder="alex@company.com" required type="email"/>
</div>
</div>
{/*  Password with Eye Toggle  */}
<div>
<label className="block font-label-md text-label-md text-on-surface mb-1.5" htmlFor="password">Password</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3.5 text-outline text-[20px] pointer-events-none">lock</span>
<input className="w-full pl-10 pr-11 py-2.5 rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface placeholder:text-outline focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container transition-all" id="password" placeholder="Create a secure password" required type="password"/>
<button className="absolute right-3 text-outline hover:text-on-surface focus:outline-none p-1 flex items-center justify-center" id="passwordToggle"  type="button">
<span className="material-symbols-outlined text-[20px]" id="eyeIcon">visibility</span>
</button>
</div>
</div>
{/*  Professional Role & Experience Grid  */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
<div>
<label className="block font-label-md text-label-md text-on-surface mb-1.5" htmlFor="role">Professional Role</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3.5 text-outline text-[20px] pointer-events-none">badge</span>
<input className="w-full pl-10 pr-3 py-2.5 rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface placeholder:text-outline focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container transition-all" id="role" placeholder="e.g. Staff Software Eng" required type="text"/>
</div>
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface mb-1.5" htmlFor="experience">Years of Experience</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3.5 text-outline text-[20px] pointer-events-none">history_edu</span>
<select className="w-full pl-10 pr-8 py-2.5 rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container appearance-none cursor-pointer transition-all" id="experience" required>
<option disabled defaultValue="" value="">Select experience</option>
<option value="3-5">3-5 years</option>
<option value="5-8">5-8 years</option>
<option value="8-12">8-12 years</option>
<option value="12+">12+ years</option>
</select>
<span className="material-symbols-outlined absolute right-3 text-outline text-[18px] pointer-events-none">expand_more</span>
</div>
</div>
</div>
{/*  Primary Expertise Interactive Chips  */}
<div>
<div className="flex items-center justify-between mb-1.5">
<label className="block font-label-md text-label-md text-on-surface">Primary Expertise</label>
<span className="font-label-sm text-label-sm text-outline">Select at least one</span>
</div>
<div className="flex flex-wrap gap-2 pt-1" id="chipContainer">
<button className="chip-item inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-body-sm text-body-sm transition-all bg-surface-container text-on-surface-variant hover:bg-surface-container-high"  type="button">
<span>System Architecture</span>
<span className="material-symbols-outlined text-[15px] hidden chip-check">check</span>
</button>
<button className="chip-item inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-body-sm text-body-sm transition-all bg-primary-container text-on-primary font-semibold shadow-sm"  type="button">
<span>Cloud &amp; DevOps</span>
<span className="material-symbols-outlined text-[15px] chip-check">check</span>
</button>
<button className="chip-item inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-body-sm text-body-sm transition-all bg-surface-container text-on-surface-variant hover:bg-surface-container-high"  type="button">
<span>Full Stack Development</span>
<span className="material-symbols-outlined text-[15px] hidden chip-check">check</span>
</button>
<button className="chip-item inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-body-sm text-body-sm transition-all bg-surface-container text-on-surface-variant hover:bg-surface-container-high"  type="button">
<span>Engineering Leadership</span>
<span className="material-symbols-outlined text-[15px] hidden chip-check">check</span>
</button>
<button className="chip-item inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-body-sm text-body-sm transition-all bg-surface-container text-on-surface-variant hover:bg-surface-container-high"  type="button">
<span>Data Engineering</span>
<span className="material-symbols-outlined text-[15px] hidden chip-check">check</span>
</button>
</div>
</div>
{/*  Guidelines Checkbox  */}
<div className="pt-2">
<label className="flex items-start gap-3 cursor-pointer group select-none">
<input className="mt-0.5 rounded text-primary-container focus:ring-primary-container h-4 w-4 rounded-sm bg-surface-container cursor-pointer" id="tos" required type="checkbox"/>
<span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface leading-normal">
            I agree to the <a className="text-primary font-semibold hover:underline" href="#">EduPath Mentor Code of Conduct</a> and <a className="text-primary font-semibold hover:underline" href="#">Terms of Service</a>
</span>
</label>
</div>
{/*  Submit CTA Button  */}
<div className="pt-2">
<button className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-lg bg-primary-container hover:bg-on-primary-fixed-variant text-on-primary font-label-md text-label-md font-semibold transition-all shadow-sm group" type="submit">
<span>Create Mentor Account</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
</button>
</div>
</form>
{/*  Footer Note  */}
<div className="text-center pt-6 mt-6 bg-surface-container-low/50 rounded-lg p-3">
<p className="font-body-sm text-body-sm text-on-surface-variant">
        Already registered as a mentor?
        <a className="text-primary font-semibold hover:underline ml-1" href="#">Sign In</a>
</p>
</div>
</div>
{/*  Mentorship Community Assurance Footer  */}
<div className="flex items-center justify-center gap-6 mt-6 text-outline font-label-sm text-label-sm">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-tertiary">verified_user</span>
<span>Verified Expert Roster</span>
</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-tertiary">schedule</span>
<span>Flexible 1-on-1 Sessions</span>
</div>
</div>
</div>
</main>
    </div>
  );
}
