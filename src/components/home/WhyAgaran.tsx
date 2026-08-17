"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";

const appScreens = [
  {
    id: "automation",
    navLabel: "AI Agent",
    icon: "🤖",
    title: "Autonomous AI Engine",
    subtitle: "Replaces manual tasks 24/7",
    color: "#059669",
    gradient: "from-emerald-500 to-teal-600",
    badge: "ACTIVE",
    badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    content: {
      statusText: "Agent #104 Executing Workflow...",
      steps: [
        { title: "Lead Ingestion", time: "0.1s", status: "Done", color: "text-emerald-400" },
        { title: "AI Decision Model", time: "0.4s", status: "Active", color: "text-blue-400" },
        { title: "Portal Database Sync", time: "0.2s", status: "Queued", color: "text-slate-400" },
      ],
      statLabel: "Manual Overhead Saved",
      statValue: "85%",
    },
  },
  {
    id: "scale",
    navLabel: "Scale",
    icon: "⚡",
    title: "Multi-Tenant Cloud OS",
    subtitle: "Isolated architecture for growth",
    color: "#2563EB",
    gradient: "from-blue-500 to-indigo-600",
    badge: "100k REQ/S",
    badgeBg: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    content: {
      statusText: "Tenant Isolation Layer • Active",
      tenants: [
        { name: "Coaching Platform", load: "88%", status: "Isolated" },
        { name: "University Portal", load: "62%", status: "Isolated" },
        { name: "Enterprise SaaS", load: "45%", status: "Isolated" },
      ],
      statLabel: "Target SLA Uptime",
      statValue: "99.99%",
    },
  },
  {
    id: "velocity",
    navLabel: "Speed",
    icon: "🚀",
    title: "Real-Time Sync Engine",
    subtitle: "Zero latency portal updates",
    color: "#7C3AED",
    gradient: "from-purple-500 to-violet-600",
    badge: "< 40MS",
    badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    content: {
      statusText: "Cross-Portal Data Bridge Live",
      portals: [
        { name: "Admin Dashboard", state: "Synced ⚡" },
        { name: "Student App", state: "Synced ⚡" },
        { name: "Parent Portal", state: "Synced ⚡" },
      ],
      statLabel: "Average Data Latency",
      statValue: "18ms",
    },
  },
  {
    id: "security",
    navLabel: "Trust",
    icon: "🛡️",
    title: "Bank-Grade Shield",
    subtitle: "Continuous security & backups",
    color: "#EA580C",
    gradient: "from-orange-500 to-amber-600",
    badge: "PROTECTED",
    badgeBg: "bg-orange-500/10 text-orange-400 border-orange-500/30",
    content: {
      statusText: "Enterprise Security Guard • Operational",
      checks: [
        { label: "256-Bit SSL Encryption", passed: true },
        { label: "Automated Daily Backups", passed: true },
        { label: "Role-Based Access Control", passed: true },
      ],
      statLabel: "Security Compliance",
      statValue: "100%",
    },
  },
];

export default function WhyAgaran() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto cycle screen tabs every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % appScreens.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const currentScreen = appScreens[activeTab];

  return (
    <section id="why-agaran" className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-slate-50/60 to-white border-t border-slate-200/80 overflow-hidden">
      {/* Background Soft Ambient Lights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:28px_28px] opacity-25 pointer-events-none" />

      <Container as="div">
        <div className="relative z-10 max-w-6xl mx-auto px-2 sm:px-0">
          
          {/* Section Header */}
          <div className="relative text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/90 text-[11px] font-black text-[#2563EB] tracking-[0.18em] uppercase mb-3.5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
              WHY CHOOSE AGARAN
            </div>

            <h2 className="text-[2.1rem] sm:text-[3rem] lg:text-[3.5rem] font-black text-[#0F172A] tracking-[-0.035em] leading-[1.12]">
              Built for{" "}
              <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                Growth
              </span>
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs text-xs font-black text-[#0F172A]">
                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                <span>Practical Engineering</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs text-xs font-black text-[#0F172A]">
                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                <span>Automated Efficiency</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs text-xs font-black text-[#0F172A]">
                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                <span>Reliable Partnership</span>
              </div>
            </div>
          </div>

          {/* ── iPhone 17 Pro Max Interactive Showcase ── */}
          <div
            className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Left/Top Interactive Navigation Controls */}
            <div className="w-full lg:w-5/12 flex flex-col gap-3">
              <div className="text-center lg:text-left mb-2">
                <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">
                  Experience Agaran Technology
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  Tap any screen tab below to preview live mobile app interfaces in real time.
                </p>
              </div>

              {/* Pill Selectors */}
              <div className="grid grid-cols-2 lg:flex lg:flex-col gap-2.5">
                {appScreens.map((screen, idx) => {
                  const isActive = activeTab === idx;
                  return (
                    <button
                      key={screen.id}
                      onClick={() => setActiveTab(idx)}
                      className={`flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl border text-left transition-all ${
                        isActive
                          ? "bg-white border-[#2563EB] shadow-[0_10px_25px_rgba(37,99,235,0.12)] scale-[1.02]"
                          : "bg-slate-50/80 border-slate-200/80 hover:bg-white hover:border-slate-300"
                      }`}
                    >
                      <div
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 border ${
                          isActive
                            ? "bg-blue-50 text-[#2563EB] border-blue-200"
                            : "bg-slate-100 text-slate-600 border-slate-200"
                        }`}
                      >
                        {screen.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className={`text-xs sm:text-sm font-black truncate ${isActive ? "text-[#0F172A]" : "text-slate-700"}`}>
                          {screen.title}
                        </h4>
                        <p className="text-[10.5px] font-medium text-slate-500 truncate mt-0.5">
                          {screen.subtitle}
                        </p>
                      </div>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-ping hidden sm:block" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right/Center Smartphone Frame — Authentic iPhone 17 Pro Max Titanium Chassis */}
            <div className="w-full lg:w-7/12 flex justify-center items-center">
              <div className="relative w-full max-w-[340px] xs:max-w-[360px] sm:max-w-[380px] rounded-[54px] bg-gradient-to-b from-[#3B3E43] via-[#1F2125] to-[#121315] p-3 sm:p-3.5 shadow-[0_35px_80px_rgba(0,0,0,0.45),inset_0_1px_2px_rgba(255,255,255,0.25)] border border-[#484B52]/60">
                
                {/* Left Side iPhone Buttons: Action Button & Volume */}
                <div className="absolute -left-[4px] top-24 w-[4px] h-7 bg-gradient-to-b from-[#484B52] to-[#2B2D31] rounded-l-md shadow-xs" />
                <div className="absolute -left-[4px] top-36 w-[4px] h-12 bg-gradient-to-b from-[#484B52] to-[#2B2D31] rounded-l-md shadow-xs" />
                <div className="absolute -left-[4px] top-52 w-[4px] h-12 bg-gradient-to-b from-[#484B52] to-[#2B2D31] rounded-l-md shadow-xs" />

                {/* Right Side iPhone Buttons: Power & Camera Control Button */}
                <div className="absolute -right-[4px] top-32 w-[4px] h-16 bg-gradient-to-b from-[#484B52] to-[#2B2D31] rounded-r-md shadow-xs" />
                <div className="absolute -right-[4px] top-56 w-[4px] h-10 bg-gradient-to-b from-[#383A3F] to-[#1F2023] rounded-r-md shadow-xs" />

                {/* iPhone 17 Pro Max Super Retina XDR Screen Inner Container */}
                <div className="relative rounded-[44px] bg-slate-950 overflow-hidden border border-slate-800/90 min-h-[510px] flex flex-col justify-between select-none shadow-inner">
                  
                  {/* Top Status Bar with Dynamic Island Pro */}
                  <div className="pt-3 px-6 pb-2 bg-black flex items-center justify-between z-30">
                    <span className="text-[11px] font-semibold text-white tracking-tight">9:41</span>

                    {/* iPhone 17 Pro Max Dynamic Island Pill */}
                    <div className="w-24 h-5 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-between px-2.5 shadow-inner">
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                        <span className="w-1 h-1 rounded-full bg-emerald-400" />
                      </div>
                      <div className="flex items-center gap-0.5">
                        <span className="w-0.5 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        <span className="w-0.5 h-3 bg-emerald-400 rounded-full animate-pulse delay-75" />
                        <span className="w-0.5 h-1.5 bg-emerald-400 rounded-full animate-pulse delay-150" />
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-[10px] font-bold text-white">
                      <span>5G UC</span>
                      <div className="w-5 h-2.5 rounded-xs border border-white/80 p-0.5 flex items-center">
                        <div className="w-full h-full bg-emerald-400 rounded-2xs" />
                      </div>
                    </div>
                  </div>

                  {/* iOS App Navigation Header */}
                  <div className="px-4 py-3 bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-[#1D4ED8] to-[#2563EB] flex items-center justify-center text-white text-xs font-black shadow-sm">
                        A
                      </div>
                      <div>
                        <div className="text-[11.5px] font-black text-white leading-tight tracking-tight">Agaran Intelligence</div>
                        <div className="text-[9px] font-mono text-slate-400">Enterprise Platform • Active</div>
                      </div>
                    </div>
                    <div className={`px-2.5 py-0.5 rounded-full border text-[9.5px] font-mono font-black uppercase ${currentScreen.badgeBg}`}>
                      {currentScreen.badge}
                    </div>
                  </div>

                  {/* iOS Super Retina Screen Content */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentScreen.id}
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1.05, y: -10 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="space-y-4"
                      >
                        {/* iOS Widget Screen Header Card */}
                        <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center gap-3 backdrop-blur-md">
                          <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-xl shadow-xs">
                            {currentScreen.icon}
                          </div>
                          <div>
                            <h4 className="text-sm font-black text-white leading-tight">
                              {currentScreen.title}
                            </h4>
                            <p className="text-[10.5px] font-medium text-slate-400 mt-0.5">
                              {currentScreen.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* iOS Interactive Process Card */}
                        <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-2.5 backdrop-blur-sm">
                          <div className="text-[10px] font-mono font-bold text-slate-400 flex items-center justify-between">
                            <span>PROMOTION PROCESS FLOW</span>
                            <span className="text-emerald-400 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              LIVE
                            </span>
                          </div>

                          {currentScreen.id === "automation" && (
                            <div className="space-y-2">
                              {currentScreen.content.steps?.map((step) => (
                                <div key={step.title} className="flex items-center justify-between p-2 rounded-xl bg-slate-900/90 text-xs font-semibold text-slate-200">
                                  <span>{step.title}</span>
                                  <span className={`font-mono text-[10.5px] ${step.color}`}>{step.status} ({step.time})</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {currentScreen.id === "scale" && (
                            <div className="space-y-2">
                              {currentScreen.content.tenants?.map((t) => (
                                <div key={t.name} className="flex items-center justify-between p-2 rounded-xl bg-slate-900/90 text-xs font-semibold text-slate-200">
                                  <span>{t.name}</span>
                                  <span className="font-mono text-[10.5px] text-blue-400">{t.load} • {t.status}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {currentScreen.id === "velocity" && (
                            <div className="space-y-2">
                              {currentScreen.content.portals?.map((p) => (
                                <div key={p.name} className="flex items-center justify-between p-2 rounded-xl bg-slate-900/90 text-xs font-semibold text-slate-200">
                                  <span>{p.name}</span>
                                  <span className="font-mono text-[10.5px] text-purple-400">{p.state}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {currentScreen.id === "security" && (
                            <div className="space-y-2">
                              {currentScreen.content.checks?.map((c) => (
                                <div key={c.label} className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/90 text-xs font-semibold text-slate-200">
                                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                  <span>{c.label}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* iOS Metric Highlight Banner */}
                        <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30 flex items-center justify-between">
                          <div>
                            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{currentScreen.content.statLabel}</div>
                            <div className="text-lg font-black text-white">{currentScreen.content.statValue}</div>
                          </div>
                          <div className="px-3 py-1.5 rounded-xl bg-[#2563EB] text-white text-xs font-extrabold shadow-sm">
                            Verified ✓
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* iOS Bottom Home Indicator Bar */}
                    <div className="pt-3 flex justify-center z-30">
                      <div className="w-32 h-1 rounded-full bg-white/40" />
                    </div>
                  </div>

                  {/* iOS App Dock Navigation Tabs */}
                  <div className="px-3 py-2 bg-slate-950 border-t border-slate-800 grid grid-cols-4 gap-1 text-center">
                    {appScreens.map((s, i) => (
                      <button
                        key={s.id}
                        onClick={() => setActiveTab(i)}
                        className={`py-1.5 rounded-xl flex flex-col items-center gap-0.5 text-[10px] font-bold transition-all ${
                          activeTab === i
                            ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                            : "text-slate-500 hover:text-slate-400"
                        }`}
                      >
                        <span className="text-xs">{s.icon}</span>
                        <span>{s.navLabel}</span>
                      </button>
                    ))}
                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* ── Signature Bottom Commitment Banner ── */}
          <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-extrabold uppercase tracking-wider">
                AGARAN ENGINEERING GUARANTEE
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Software built for longevity, performance, and real business results.
              </h3>
            </div>
            <a
              href="/what-we-do"
              className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-black text-sm transition-all shadow-md hover:shadow-lg hover:scale-[1.02]"
            >
              <span>Explore Tech Stack</span>
              <span>→</span>
            </a>
          </div>

        </div>
      </Container>
    </section>
  );
}
