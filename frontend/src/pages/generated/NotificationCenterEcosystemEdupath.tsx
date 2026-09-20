import React from 'react';
import { useNotifications } from '../../hooks/useNotifications';

export default function NotificationCenterEcosystemEdupath() {
  const { notifications, unreadCount, markAllAsRead, markAsRead, isLoading } = useNotifications();
  return (
    <div className="min-h-screen bg-surface">
      {/* Generated from Stitch UI */}
      <main className="flex-1 pt-16 bg-background w-full px-8 py-6"><div className="flex flex-col w-full gap-6">
{/*  Breadcrumbs & Meta Top Strip  */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex flex-col gap-1">
<nav className="flex items-center gap-2 font-label-sm text-label-sm text-secondary">
<a className="hover:text-primary transition-colors flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-[16px]">grid_view</span>
<span>Dashboard</span>
</a>
<span className="material-symbols-outlined text-[14px] text-outline-variant">chevron_right</span>
<span className="text-on-surface font-semibold">Notifications</span>
</nav>
<div className="flex items-baseline gap-3 mt-1">
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">Notification Center</h1>
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          {unreadCount} Unread
        </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
        Stay updated on adaptive learning plan calibrations, mentor feedback, assessment checkpoints, and system activity.
      </p>
</div>
{/*  Header Quick Actions  */}
<div className="flex items-center gap-3 self-start md:self-center flex-shrink-0">
<button onClick={() => markAllAsRead()} className="group flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-on-surface shadow-sm hover:shadow transition-all" type="button">
<span className="material-symbols-outlined text-[18px] text-secondary group-hover:text-primary transition-colors">done_all</span>
<span className="font-label-md text-label-md">Mark All as Read</span>
</button>
<button className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">settings</span>
<span className="font-label-md text-label-md">Preferences</span>
</button>
</div>
</div>
{/*  Filter Category Chips Bar  */}
<div className="flex items-center justify-between gap-4 overflow-x-auto pb-1">
<div className="flex items-center gap-2 min-w-max">
<button className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-sm" type="button">
<span>All</span>
<span className="px-1.5 py-0.5 rounded-md bg-on-primary/20 text-on-primary font-label-sm text-label-sm leading-none font-bold">7</span>
</button>
<button className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-label-md text-label-md" type="button">
<span>Learning</span>
<span className="px-1.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-sm text-label-sm leading-none font-semibold">2</span>
</button>
<button className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-label-md text-label-md" type="button">
<span>Plan Updates</span>
<span className="px-1.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-sm text-label-sm leading-none font-semibold">2</span>
</button>
<button className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-label-md text-label-md" type="button">
<span>Assessments</span>
<span className="px-1.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-sm text-label-sm leading-none font-semibold">1</span>
</button>
<button className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-label-md text-label-md" type="button">
<span>Mentorship</span>
<span className="px-1.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-sm text-label-sm leading-none font-semibold">1</span>
</button>
<button className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-label-md text-label-md" type="button">
<span>System</span>
<span className="px-1.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-sm text-label-sm leading-none font-semibold">1</span>
</button>
</div>
{/*  View & Density Switchers  */}
<div className="hidden lg:flex items-center gap-2 flex-shrink-0 text-secondary">
<span className="font-label-sm text-label-sm text-outline">Viewing active feed</span>
<div className="h-4 w-px bg-outline-variant/40 mx-1"></div>
<button className="p-1 rounded text-primary hover:bg-surface-container-low transition-colors" title="Detailed Feed View" type="button">
<span className="material-symbols-outlined text-[18px]">view_agenda</span>
</button>
<button className="p-1 rounded text-outline hover:text-on-surface hover:bg-surface-container-low transition-colors" title="Compact Table View" type="button">
<span className="material-symbols-outlined text-[18px]">reorder</span>
</button>
</div>
</div>
{/*  Main Asymmetric Workspace Layout  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
{/*  Primary Feed Stream (70% column / col-span-8)  */}
<div className="lg:col-span-8 flex flex-col gap-6">
{isLoading ? (
  <div className="flex justify-center p-8"><span className="material-symbols-outlined animate-spin text-[32px] text-primary">progress_activity</span></div>
) : notifications?.length === 0 ? (
  <div className="text-center p-8 text-on-surface-variant">No notifications.</div>
) : (
  <div className="flex flex-col gap-3">
    {notifications?.map(n => (
      <div key={n.id} className="relative bg-surface-container-lowest rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row gap-4">
        {!n.is_read && <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-primary"></div>}
        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
          <span className="material-symbols-outlined text-[24px]">notifications</span>
        </div>
        <div className="flex-1 flex flex-col gap-2 min-w-0">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="font-label-md text-label-md text-on-surface font-bold">{n.title}</span>
              <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">{n.notification_type}</span>
            </div>
            <span className="font-label-sm text-label-sm text-secondary flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">schedule</span>
              {new Date(n.created_at).toLocaleDateString()}
            </span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {n.message}
          </p>
          {!n.is_read && (
            <div className="flex items-center gap-3 pt-2">
              <button onClick={() => markAsRead(n.id)} className="px-3.5 py-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all font-label-md text-label-md" type="button">
                Mark as read
              </button>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
)}
</div>
{/*  Secondary Right Column (30% column / col-span-4)  */}
<div className="lg:col-span-4 flex flex-col gap-6">
{/*  Interactive Bell Dropdown Preview Simulation (Screen 2 Context)  */}
<div className="bg-surface-container-lowest rounded-2xl shadow-xl p-5 relative overflow-hidden">
{/*  Accent Top Header  */}
<div className="flex items-center justify-between pb-3.5 border-b border-surface-container">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></div>
<span className="font-headline-sm text-headline-sm text-on-surface">Notifications Peek</span>
</div>
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold">3 unread</span>
<button className="text-secondary hover:text-primary transition-colors text-label-sm font-semibold" type="button">Mark read</button>
</div>
</div>
<div className="text-[11px] text-secondary font-label-sm tracking-wide uppercase py-2">Preview of Shell Bell Dropdown</div>
{/*  Dropdown Items Sequence  */}
<div className="flex flex-col divide-y divide-surface-container">
{/*  Dropdown Mini Item 1  */}
<div className="py-3 flex items-start gap-3 hover:bg-surface-container-low -mx-2 px-2 rounded-lg transition-colors cursor-pointer group">
<div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[18px]">auto_awesome</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-1">
<span className="font-label-md text-label-md text-on-surface font-semibold truncate group-hover:text-primary transition-colors">Adaptive Plan Calibrated</span>
<span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1 mt-0.5">
                45m JWT revocation drill added to daily stack
              </p>
<span className="font-label-sm text-label-sm text-outline mt-1 block">18m ago • Plan Update</span>
</div>
</div>
{/*  Dropdown Mini Item 2  */}
<div className="py-3 flex items-start gap-3 hover:bg-surface-container-low -mx-2 px-2 rounded-lg transition-colors cursor-pointer group">
<img className="w-8 h-8 rounded-lg object-cover flex-shrink-0 mt-0.5" data-alt="Square portrait avatar of male mentor with sharp lighting and clean background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMdSAPJ2JohN6WOA2KxH93QdDkNrThisELNYGmluFCTENsINqN9HBW4ePxRW-vC1Q4FEe4HzAAx2AO--dLrvN9iIHsV7sBOPwRGuOgiL0wu6esvSKPlWCcuZe7yd2XC6M77D3RQ1qoZD7RAUxyK4sF_ruW5UXk5uKqjJbW25Ko3zgzcV2NLef04PWk5AMU1UiI3cTpot5UaVIN-6UXVdjkfpjXkmsF6xdrxXfFRYmR"/>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-1">
<span className="font-label-md text-label-md text-on-surface font-semibold truncate group-hover:text-primary transition-colors">Rahul Sharma Accepted</span>
<span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1 mt-0.5">
                Confirmed Friday 5:30 PM session on Redis
              </p>
<span className="font-label-sm text-label-sm text-outline mt-1 block">2h ago • Mentorship</span>
</div>
</div>
{/*  Dropdown Mini Item 3  */}
<div className="py-3 flex items-start gap-3 hover:bg-surface-container-low -mx-2 px-2 rounded-lg transition-colors cursor-pointer group">
<div className="w-8 h-8 rounded-lg bg-tertiary-container/15 text-tertiary flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[18px]">assignment_turned_in</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-1">
<span className="font-label-md text-label-md text-on-surface font-semibold truncate group-hover:text-primary transition-colors">Checkpoint 04 Scored</span>
<span className="font-label-sm text-[10px] text-tertiary font-bold">80%</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1 mt-0.5">
                API Architecture prerequisite passed
              </p>
<span className="font-label-sm text-label-sm text-outline mt-1 block">Yesterday • Diagnostic</span>
</div>
</div>
</div>
{/*  Full-width View All Button  */}
<div className="pt-3 border-t border-surface-container mt-1">
<button className="w-full py-2.5 px-4 rounded-xl bg-surface-container text-primary hover:bg-primary hover:text-on-primary font-label-md text-label-md flex items-center justify-center gap-2 transition-all" type="button">
<span>View All 7 Notifications</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
{/*  Quick Delivery Preferences Card  */}
<div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[18px]">tune</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface">Active Delivery</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-semibold">Pro Tier</span>
</div>
<div className="flex flex-col gap-2.5 pt-1">
<div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low text-on-surface">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[18px] text-primary">web_asset</span>
<span className="font-body-sm text-body-sm font-medium">In-app notifications</span>
</div>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
              Enabled
            </span>
</div>
<div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low text-on-surface">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[18px] text-secondary">mail</span>
<span className="font-body-sm text-body-sm font-medium">Email digests</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-semibold">Weekly (Mondays)</span>
</div>
<div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low text-on-surface">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[18px] text-primary">bolt</span>
<span className="font-body-sm text-body-sm font-medium">Mentor direct pings</span>
</div>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              Instant Push
            </span>
</div>
</div>
<button className="w-full py-2 px-3 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md text-center" type="button">
          Manage Delivery Settings
        </button>
</div>
{/*  Focus Mode / Quiet Hours Indicator Card  */}
<div className="bg-surface-container-low rounded-2xl p-5 shadow-sm flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-on-surface">
<span className="material-symbols-outlined text-[20px] text-secondary">do_not_disturb_on</span>
<span className="font-headline-sm text-headline-sm">Focus Mode Scheduled</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-tertiary/15 text-tertiary font-label-sm text-label-sm font-bold">Auto-Sync</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Alerts will automatically mute non-urgent banners during scheduled study sessions (<span className="text-on-surface font-semibold">7:00 PM – 9:00 PM</span>).
        </p>
{/*  Progress Timeline Micro Indicator  */}
<div className="flex items-center justify-between text-secondary pt-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
<span className="font-label-sm text-label-sm">Calendar Sync: Active</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-semibold cursor-pointer hover:underline">Edit Hours</span>
</div>
</div>
{/*  Verified Mentor Network Thumbnail Banner  */}
<div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm flex items-center gap-4">
<img className="w-16 h-16 rounded-xl object-cover flex-shrink-0" data-alt="High tech minimal flat illustration representing smart AI notifications, subtle indigo and teal network nodes on white background, modern corporate vector aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE9l_xNd_4Tz97cIwJV2RtQaaYJhkAXsW98glQmMkww0D5qVjv7d0fSUJ60-GW8teHfabjecyWe165YZhO5tNyUIabyct8kmtLDX0xFAd351uhDMXISVLQ9AovIJYwKVSDpWxTtDk00fbdgPp3-ahw7KA2dCRnGr83VfkyjkD7RVR2itbvaxmH6G9SnIx6xwNsnkoSNWOQUcRm25ISKDr6VEYgVnI1EOhDeX0Oj3hX"/>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface">EduPath Assistant</span>
<p className="font-body-sm text-body-sm text-secondary line-clamp-2">
            AI automatically synthesizes recurring progress alerts into a Saturday executive summary.
          </p>
</div>
</div>
</div>
</div>
</div></main>
    </div>
  );
}
