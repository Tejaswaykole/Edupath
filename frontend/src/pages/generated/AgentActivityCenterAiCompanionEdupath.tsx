import React, { useState, useEffect } from 'react';
import { useAgentActivity } from '../../hooks/useAgent';
import { useAssistant } from '../../hooks/useAssistant';
export default function AgentActivityCenterAiCompanionEdupath() {
  const { data: agentEvents, isLoading, isError } = useAgentActivity();
  const { conversations, messages, sendMessage, isSending } = useAssistant(
    conversations && conversations.length > 0 ? conversations[0].id : undefined
  );
  
  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    if (!inputText.trim()) return;
    sendMessage({ content: inputText });
    setInputText("");
  };
  return (
    <div className="min-h-screen bg-surface">
      {/* Generated from Stitch UI */}
      <main className="pt-16 p-8 max-w-7xl w-full mx-auto flex flex-col gap-6"><div className="flex flex-col w-full gap-6">
{/*  Top Page Header / Bayesian Telemetry Indicator  */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-surface-container-lowest p-6 rounded-xl shadow-sm">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-[20px]" >neurology</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">EduPath Agent Activity Center &amp; Learning Companion</h1>
</div>
<p className="font-body-md text-body-md text-secondary">
        Real-time transparent log of how EduPath observes, detects friction, adjusts difficulty, and orchestrates your personalized learning path.
      </p>
</div>
{/*  Live Pulse Telemetry Pill  */}
<div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-low self-start md:self-auto">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tertiary"></span>
</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold tracking-wide">
        Bayesian Telemetry Active <span className="text-secondary font-normal">• Sync Latency 14ms</span>
</span>
</div>
</div>
{/*  Primary Asymmetric Production SaaS Grid: 60% Left / 40% Right  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
{/*  LEFT COLUMN: Agent Observation & Adaptation Feed (7 cols ≈ 58.3%)  */}
<div className="lg:col-span-7 flex flex-col gap-5">
{/*  Feed Filter Navigation Tabs  */}
<div className="flex items-center justify-between gap-2 overflow-x-auto pb-1">
<div className="flex items-center gap-1.5 p-1 bg-surface-container-low rounded-xl">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-primary font-label-sm text-label-sm font-bold shadow-sm transition-colors">
            All Events (9)
          </button>
<button className="px-3 py-1.5 rounded-lg text-secondary hover:text-on-surface font-label-sm text-label-sm transition-colors">
            Plan Updates (3)
          </button>
<button className="px-3 py-1.5 rounded-lg text-secondary hover:text-on-surface font-label-sm text-label-sm transition-colors">
            Friction (2)
          </button>
<button className="px-3 py-1.5 rounded-lg text-secondary hover:text-on-surface font-label-sm text-label-sm transition-colors">
            Prereqs (2)
          </button>
<button className="px-3 py-1.5 rounded-lg text-secondary hover:text-on-surface font-label-sm text-label-sm transition-colors">
            Mentors (1)
          </button>
<button className="px-3 py-1.5 rounded-lg text-secondary hover:text-on-surface font-label-sm text-label-sm transition-colors">
            Reports (1)
          </button>
</div>
<div className="hidden sm:flex items-center gap-1 text-secondary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">tune</span>
<span>Feed Rules: Strict</span>
</div>
</div>
{/*  Feed Timeline Stream (OBSERVE -> DETECT -> ACT -> ADAPT paradigm)  */}
<div className="flex flex-col gap-4">
{isLoading && <p className="text-secondary text-sm">Loading agent telemetry...</p>}
{isError && <p className="text-error text-sm">Failed to load agent telemetry.</p>}
{agentEvents && agentEvents.length === 0 && <p className="text-secondary text-sm">No agent activity recorded yet.</p>}
{agentEvents && agentEvents.map((event: any) => (
<article key={event.id} className="bg-surface-container-lowest rounded-xl p-5 shadow-sm flex flex-col gap-4 relative overflow-hidden">
<div className="absolute top-0 left-0 bottom-0 w-1 bg-primary-container"></div>
<div className="flex items-start justify-between gap-3">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-lg bg-primary-container/40 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[18px]">memory</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface">{event.event_type}</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">{new Date(event.occurred_at).toLocaleString()} • AI Engine</span>
</div>
</div>
<span className="px-2.5 py-1 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm font-semibold tracking-wide">
              {event.event_data?.action}
            </span>
</div>
{/*  Observation & Detection Box  */}
<div className="bg-surface-container-low rounded-lg p-3.5 flex flex-col gap-2">
<div className="flex items-center gap-2 text-on-surface font-label-md text-label-md">
<span className="material-symbols-outlined text-[16px] text-primary-container">visibility</span>
<span className="font-bold">Intervention Reasoning</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              {event.description}
            </p>
</div>
</article>
))}
</div>
</div>
{/*  RIGHT COLUMN: Context-Aware EduPath Learning Companion (5 cols ≈ 41.7%)  */}
<div className="lg:col-span-5 flex flex-col gap-5 sticky top-20">
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col h-[calc(100vh-130px)] max-h-[820px]">
{/*  Companion Header with Context Badge  */}
<div className="p-4 bg-surface-container-lowest flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl bg-primary-container flex items-center justify-center text-white shadow-sm shadow-indigo-200">
<span className="material-symbols-outlined text-[20px]">smart_toy</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface">EduPath Companion</span>
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
</div>
<span className="font-label-sm text-label-sm text-secondary">Model: EduPath Core L4 (Fine-Tuned)</span>
</div>
</div>
<span className="px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-semibold">
            Focus: Node.js Auth • Sprint 04
          </span>
</div>
{/*  Clickable Contextual Prompt Chips Shelf  */}
<div className="px-4 py-3 bg-surface-container-low flex flex-col gap-1.5">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Suggested Inquiries for Current State</span>
<div className="flex flex-wrap gap-1.5">
<button className="px-2.5 py-1 rounded-lg bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm shadow-sm transition-colors text-left inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-primary-container">psychology_alt</span>
              Why was my plan changed today?
            </button>
<button className="px-2.5 py-1 rounded-lg bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm shadow-sm transition-colors text-left inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-primary-container">sync_alt</span>
              Stateless JWT vs Session Cookies
            </button>
<button className="px-2.5 py-1 rounded-lg bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm shadow-sm transition-colors text-left inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-primary-container">timer</span>
              Walk me through Redis SETEX
            </button>
</div>
</div>
{/*  Chat Log Stream (Scrollable)  */}
<div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-surface-bright">
{/*  System Timestamp Note  */}
<div className="flex justify-center">
<span className="font-label-sm text-label-sm text-secondary bg-surface-container px-3 py-0.5 rounded-full">
              Synced with Live Telemetry
            </span>
</div>

{messages?.map((msg) => (
  msg.sender_type === 'USER' ? (
    <div key={msg.id} className="flex items-start justify-end gap-2.5 max-w-[88%] self-end">
    <div className="bg-primary-container text-on-primary p-3.5 rounded-2xl rounded-tr-none shadow-sm flex flex-col gap-1">
    <p className="font-body-md text-body-md">{msg.content}</p>
    <span className="font-label-sm text-label-sm text-on-primary/70 self-end">
      {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
    </span>
    </div>
    </div>
  ) : (
    <div key={msg.id} className="flex items-start gap-2.5 max-w-[92%] self-start">
    <div className="w-7 h-7 rounded-lg bg-primary-container text-white flex items-center justify-center shrink-0 mt-1 shadow-sm">
    <span className="material-symbols-outlined text-[15px]">neurology</span>
    </div>
    <div className="bg-surface-container-lowest text-on-surface p-4 rounded-2xl rounded-tl-none shadow-sm flex flex-col gap-3">
    <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
      {msg.content}
    </p>
    {msg.response_metadata?.recommended_actions && msg.response_metadata.recommended_actions.length > 0 && (
      <div className="p-2.5 rounded-lg bg-surface-container-low flex flex-col gap-1.5">
      <span className="font-label-sm text-label-sm uppercase text-secondary font-bold">Recommended Actions</span>
      <ul className="list-disc pl-4 font-body-sm text-body-sm text-on-surface-variant">
        {msg.response_metadata.recommended_actions.map((action: string, i: number) => (
          <li key={i}>{action}</li>
        ))}
      </ul>
      </div>
    )}
    <div className="flex items-center justify-between text-secondary pt-1">
    <span className="font-label-sm text-label-sm">EduPath Adaptive Engine • {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
    <div className="flex items-center gap-1.5">
    <button aria-label="Helpful response" className="p-1 hover:text-on-surface">
    <span className="material-symbols-outlined text-[16px]">thumb_up</span>
    </button>
    <button aria-label="Unhelpful response" className="p-1 hover:text-on-surface">
    <span className="material-symbols-outlined text-[16px]">thumb_down</span>
    </button>
    </div>
    </div>
    </div>
    </div>
  )
))}
{isSending && (
  <div className="flex items-start gap-2.5 max-w-[92%] self-start">
    <div className="w-7 h-7 rounded-lg bg-primary-container text-white flex items-center justify-center shrink-0 mt-1 shadow-sm">
    <span className="material-symbols-outlined text-[15px]">neurology</span>
    </div>
    <div className="bg-surface-container-lowest text-on-surface p-4 rounded-2xl rounded-tl-none shadow-sm flex flex-col gap-3">
      <p className="font-body-sm text-body-sm text-on-surface leading-relaxed animate-pulse">
        Thinking...
      </p>
    </div>
  </div>
)}
</div>
{/*  Chat Input & Privacy Footer  */}
<div className="p-3 bg-surface-container-lowest flex flex-col gap-2">
<div className="relative flex items-center bg-surface-container-low rounded-xl p-1.5">
<button aria-label="Attach code or logs" className="p-2 text-secondary hover:text-on-surface rounded-lg transition-colors">
<span className="material-symbols-outlined text-[20px]">attach_file</span>
</button>
<input className="flex-1 bg-transparent border-none px-2 text-on-surface placeholder:text-secondary font-body-sm text-body-sm focus:outline-none focus:ring-0" placeholder="Ask anything about today's modules, exercises, or schedule..." type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} disabled={isSending}/>
<button aria-label="Insert code snippet" className="p-2 text-secondary hover:text-on-surface rounded-lg transition-colors">
<span className="material-symbols-outlined text-[20px]">code</span>
</button>
<button aria-label="Send query" onClick={handleSend} disabled={isSending} className="w-9 h-9 rounded-lg bg-primary-container hover:bg-primary text-white flex items-center justify-center shadow-sm transition-colors ml-1">
<span className="material-symbols-outlined text-[18px]">send</span>
</button>
</div>
{/*  Strict Compliance & Zero-Spill Assurance  */}
<div className="flex items-center justify-between px-1">
<div className="flex items-center gap-1.5 text-secondary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px] text-tertiary">lock</span>
<span>SOC-2 Type II Zero-Spill Certified. Strict curriculum calibration use only.</span>
</div>
<span className="text-secondary font-label-sm text-label-sm">v4.8</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
    </div>
  );
}
