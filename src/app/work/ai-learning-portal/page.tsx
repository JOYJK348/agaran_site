"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function CaseStudyAILearningPortal() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] pt-20 sm:pt-28 pb-16 sm:pb-24 px-3 sm:px-8 lg:px-16 font-sans selection:bg-[#2563EB] selection:text-white">

        <article className="max-w-[1440px] mx-auto bg-white border border-slate-200/90 shadow-[0_4px_30px_rgba(15,23,42,0.03)] rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden">

          {/* ── Top Document Header Bar ── */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 sm:mb-8 border-b border-slate-200 text-xs sm:text-sm font-semibold text-slate-500">
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <Link href="/" className="hover:text-[#2563EB] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/work" className="hover:text-[#2563EB] transition-colors">Case Studies</Link>
              <span>/</span>
              <span className="text-[#0F172A] font-bold truncate max-w-[200px] sm:max-w-none">ZHI Early Learning Platform</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] font-extrabold text-[10px] sm:text-xs uppercase tracking-wider shadow-2xs self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
              OFFICIAL TECHNICAL WHITEPAPER &bull; CASE STUDY REPORT
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              PROJECT TITLE & METADATA — OVERHAULED EXECUTIVE HERO
          ══════════════════════════════════════════════════════════ */}
          <header className="mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] font-extrabold text-[10px] sm:text-xs uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              EdTech SaaS &bull; Pre-KG to 1st Std Foundation &bull; B2C Parent &amp; B2B School Pack
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.75rem] font-black tracking-tight text-[#0F172A] leading-[1.12] mb-6">
              ZHI — <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] via-[#0284C7] to-[#0D9488]">Learn While Playing</span>
            </h1>

            <div className="p-5 sm:p-7 rounded-2xl bg-slate-50/80 border border-slate-200/90 mb-8 space-y-3">
              <p className="text-sm sm:text-lg md:text-xl font-medium leading-relaxed text-slate-700 text-left sm:text-justify">
                ZHI is a <strong className="font-extrabold text-[#2563EB]">production-grade, multi-portal EdTech SaaS platform</strong> purpose-built for early childhood foundation learning (<strong className="font-extrabold text-slate-900">Pre-KG, LKG, UKG, and 1st Standard</strong>). It combines <strong className="font-extrabold text-[#2563EB]">four distinct authenticated portals</strong> — Super Admin, School Admin, Parent, and Student — each with its own role-specific dashboard and business logic. The platform serves two distinct customer segments: <strong className="font-extrabold text-slate-900">B2C individual parents</strong> via Razorpay subscription plans, and <strong className="font-extrabold text-slate-900">B2B school institutions</strong> via manual invoice and bank transfer activation.
              </p>
            </div>

            {/* Document Metadata Grid — Rich Executive Micro-Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl sm:rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] space-y-1">
                <div className="font-extrabold text-[#2563EB] uppercase tracking-wider text-[9px] sm:text-xs">Platform Name</div>
                <div className="font-black text-[#0F172A] text-xs sm:text-sm">ZHI (Agaran EdTech)</div>
                <div className="text-[10px] text-slate-500 font-medium">Multi-Role SaaS Platform</div>
              </div>
              <div className="p-4 rounded-xl sm:rounded-2xl bg-sky-50 border border-sky-200 space-y-1">
                <div className="font-extrabold text-[#0284C7] uppercase tracking-wider text-[9px] sm:text-xs">Target Grades</div>
                <div className="font-black text-[#0F172A] text-xs sm:text-sm">Pre-KG, LKG, UKG, 1st Std</div>
                <div className="text-[10px] text-slate-500 font-medium">Ages 3 to 7 Foundation</div>
              </div>
              <div className="p-4 rounded-xl sm:rounded-2xl bg-purple-50 border border-purple-200 space-y-1">
                <div className="font-extrabold text-purple-700 uppercase tracking-wider text-[9px] sm:text-xs">Portals Built</div>
                <div className="font-black text-[#0F172A] text-xs sm:text-sm">4 Role-Based Systems</div>
                <div className="text-[10px] text-slate-500 font-medium">JWT Authenticated Scopes</div>
              </div>
              <div className="p-4 rounded-xl sm:rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
                <div className="font-extrabold text-emerald-700 uppercase tracking-wider text-[9px] sm:text-xs">Deployment</div>
                <div className="font-black text-emerald-700 flex items-center gap-1.5 text-xs sm:text-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Live Production System
                </div>
                <div className="text-[10px] text-slate-500 font-medium">Vercel + Railway Deploy</div>
              </div>
            </div>
          </header>

          {/* ── Hero Visual / Interactive Browser Dashboard Mockup ── */}
          <div className="mb-12 sm:mb-16 relative">
            <div className="w-full rounded-2xl overflow-hidden bg-[#F8FAFC] border border-slate-200 shadow-2xs relative p-4 sm:p-6 text-slate-800 flex flex-col justify-between gap-5">
              
              {/* Mockup Browser Window Control Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 text-xs font-mono gap-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                  <div className="ml-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-[11px] font-mono flex items-center gap-2 shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>https://app.zhi-learning.com</span>
                  </div>
                </div>
                <div className="text-[10px] font-mono uppercase bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] px-3 py-1 rounded-md font-bold self-start sm:self-auto flex items-center gap-1.5 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                  ZHI PLATFORM v3.1 — 4 PORTALS ACTIVE
                </div>
              </div>

              {/* 4 Portal Cards Mockup Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs font-sans">
                
                {/* Super Admin Mock Card */}
                <div className="p-4 bg-white rounded-xl border border-[#BFDBFE] space-y-2 hover:border-[#2563EB] transition-colors shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#2563EB] text-[10px] font-black uppercase tracking-wider bg-[#EFF6FF] px-2 py-0.5 rounded border border-[#BFDBFE]">PORTAL 01</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <div className="font-extrabold text-slate-900 text-sm">Super Admin HQ</div>
                  <div className="text-slate-500 text-[11px] leading-snug">Platform Command Center for global operations.</div>
                  <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1 text-[9px] font-mono text-slate-600">
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">Schools List</span>
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">Revenue KPIs</span>
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">Approvals</span>
                  </div>
                </div>

                {/* School Admin Mock Card */}
                <div className="p-4 bg-white rounded-xl border border-sky-200 space-y-2 hover:border-sky-400 transition-colors shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#0284C7] text-[10px] font-black uppercase tracking-wider bg-sky-50 px-2 py-0.5 rounded border border-sky-200">PORTAL 02</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <div className="font-extrabold text-slate-900 text-sm">School Admin HQ</div>
                  <div className="text-slate-500 text-[11px] leading-snug">Principal portal with scoped school dataset.</div>
                  <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1 text-[9px] font-mono text-slate-600">
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">Student Roster</span>
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">Class Pulse</span>
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">Billing</span>
                  </div>
                </div>

                {/* Parent Portal Mock Card */}
                <div className="p-4 bg-white rounded-xl border border-emerald-200 space-y-2 hover:border-emerald-400 transition-colors shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-700 text-[10px] font-black uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">PORTAL 03</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <div className="font-extrabold text-slate-900 text-sm">Parent Dashboard</div>
                  <div className="text-slate-500 text-[11px] leading-snug">Real-time learning monitoring for parents.</div>
                  <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1 text-[9px] font-mono text-slate-600">
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">Child Switcher</span>
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">Quiz Log</span>
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">Timer</span>
                  </div>
                </div>

                {/* Student Portal Mock Card */}
                <div className="p-4 bg-white rounded-xl border border-amber-200 space-y-2 hover:border-amber-400 transition-colors shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-amber-700 text-[10px] font-black uppercase tracking-wider bg-amber-50 px-2 py-0.5 rounded border border-amber-200">PORTAL 04</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <div className="font-extrabold text-slate-900 text-sm">Kids Learning Hub</div>
                  <div className="text-slate-500 text-[11px] leading-snug">Interactive gamified student interface.</div>
                  <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1 text-[9px] font-mono text-slate-600">
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">TTS Mascot</span>
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">WordSorter</span>
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">Badges</span>
                  </div>
                </div>

              </div>

              {/* Bottom Visual Subtitle */}
              <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-slate-500 font-mono gap-1">
                <span>[ PLATFORM ARCHITECTURE TOPOLOGY &bull; DUAL-MODEL EDTECH SYSTEM ]</span>
                <span className="text-[#2563EB] font-bold">Figure 1.0 — Four Role-Based Authenticated Portals</span>
              </div>
            </div>
          </div>

          <hr className="border-slate-200 my-10 sm:my-14" />

          {/* ══════════════════════════════════════════════════════════
              01 — PROJECT OVERVIEW — REDESIGNED EXECUTIVE SPLIT LAYOUT
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-12 sm:mb-16 scroll-mt-24" id="overview">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2.5 py-1 rounded">01</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">PROJECT OVERVIEW</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start w-full">
              
              {/* Left Column (2/3) — Deep Narrative with Callout Box */}
              <div className="lg:col-span-2 space-y-5 text-slate-700 font-medium text-sm sm:text-base leading-relaxed text-left sm:text-justify w-full">
                <p>
                  ZHI is a full-stack, production-grade early childhood learning platform that replaces fragmented PDF worksheets and passive YouTube playlists with a <strong className="font-extrabold text-[#2563EB]">structured, interactive digital curriculum</strong>. The platform was engineered to serve two distinct business models simultaneously: <strong className="font-extrabold text-slate-900">B2C individual parents</strong> who subscribe to monthly plans for their child&apos;s home learning, and <strong className="font-extrabold text-slate-900">B2B school institutions</strong> that pay a per-student monthly fee to unlock full curriculum access for every enrolled student.
                </p>

                {/* Highlight Executive Callout Box */}
                <div className="p-5 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] text-slate-800 space-y-2 my-4 shadow-2xs">
                  <div className="text-xs font-black uppercase tracking-wider text-[#2563EB] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                    Dual Monetization Architecture
                  </div>
                  <p className="text-xs sm:text-sm font-semibold leading-relaxed text-slate-700">
                    B2C parents subscribe via automated monthly Razorpay plans (Free 14-day trial, Focus ₹149, Premium ₹399, Ultimate ₹699) with countdown trial timers and instant activation. B2B schools pay ₹50/child/month via GST invoice and bank transfer, activated via Super Admin control.
                  </p>
                </div>

                <p>
                  The core challenge of building ZHI was not just building a learning portal — it was building <strong className="font-extrabold text-[#2563EB]">four fundamentally different applications</strong> that share a unified Next.js backend architecture, and a common authentication system with <strong className="font-extrabold text-slate-900">strict role-based access control</strong>. Each portal serves a completely different user persona with entirely different data needs, UI flows, and business rules.
                </p>
                <p>
                  Agaran designed and engineered the complete system from <strong className="font-extrabold text-[#2563EB]">multi-role JWT authentication middleware</strong>, secure platform architecture, <strong className="font-extrabold text-slate-900">payment integration with webhook fallback safety</strong>, and four full frontend portals — all delivered as a cohesive, live production system.
                </p>
              </div>

              {/* Right Column (1/3) — Executive Snapshot & Key Pillars */}
              <div className="lg:col-span-1 p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-5 w-full">
                <div className="text-xs font-black uppercase tracking-wider text-[#0F172A] pb-3 border-b border-slate-200 flex items-center justify-between">
                  <span>EXECUTIVE SUMMARY</span>
                  <span className="text-[#2563EB] font-bold">ZHI PLATFORM</span>
                </div>

                <div className="space-y-3.5 text-xs">
                  <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1 shadow-2xs">
                    <div className="font-extrabold text-[#2563EB]">4 Authenticated Portals</div>
                    <p className="text-slate-500 leading-snug">Super Admin HQ, School Admin HQ, Parent Dashboard &amp; Kids Learning Hub.</p>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1 shadow-2xs">
                    <div className="font-extrabold text-[#0284C7]">Dual Revenue Model</div>
                    <p className="text-slate-500 leading-snug">B2C Razorpay subscriptions + B2B manual school GST invoice flow.</p>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1 shadow-2xs">
                    <div className="font-extrabold text-emerald-700">Gamified Foundation Curriculum</div>
                    <p className="text-slate-500 leading-snug">English Phonics (-at/-an/-ig), Tamil, Early Maths &amp; EVS with TTS Mascot Voice.</p>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1 shadow-2xs">
                    <div className="font-extrabold text-purple-700">Bilingual Engine</div>
                    <p className="text-slate-500 leading-snug">Multilingual English + Tamil i18n support powered by next-intl.</p>
                  </div>
                </div>

                {/* Quick Metric Badges */}
                <div className="pt-3 border-t border-slate-200 grid grid-cols-2 gap-2 text-center text-[10px] font-bold">
                  <div className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700">
                    <div className="text-[#2563EB] text-xs font-black">50+ Modules</div>
                    <div>Curriculum Library</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700">
                    <div className="text-emerald-600 text-xs font-black">₹0 Lost</div>
                    <div>Payment Failures</div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              02 — THE CHALLENGE
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-10 sm:mb-14 scroll-mt-24" id="challenge">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded">02</span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">THE CHALLENGE</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-rose-50/60 border border-rose-200/80 space-y-2">
                <div className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-rose-700 flex items-center gap-1.5">
                  <span>✕</span> No Structured Curriculum
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900">PDF &amp; YouTube Dependency</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-left sm:text-justify">
                  Schools and parents had <strong className="font-extrabold text-rose-700">no structured digital curriculum</strong> for Pre-KG to 1st Std. Learning happened through scattered WhatsApp PDFs, random YouTube videos, and printed sheets — with <strong className="font-extrabold text-slate-900">zero tracking, zero progress data</strong>, and zero engagement feedback for parents or teachers.
                </p>
              </div>
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-2">
                <div className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-amber-700 flex items-center gap-1.5">
                  <span>✕</span> Payment &amp; Access Chaos
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900">Past Payment Failures</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-left sm:text-justify">
                  Prior EdTech systems faced a critical failure mode: parents would pay via Razorpay, but webhook misses or race conditions meant course access never activated. Money was deducted with <strong className="font-extrabold text-amber-800">zero access granted</strong> — a trust-destroying user experience that ZHI required a <strong className="font-extrabold text-[#2563EB]">bulletproof verification engine</strong> to solve.
                </p>
              </div>
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-sky-50/60 border border-sky-200/80 space-y-2">
                <div className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-sky-700 flex items-center gap-1.5">
                  <span>✕</span> Multi-Role Complexity
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900">Four Different Users, One System</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-left sm:text-justify">
                  Super admins, school principals, parents, and young students each require completely different interfaces, data scopes, and access permissions. Building four coherent portals on a shared backend <strong className="font-extrabold text-[#2563EB]">without data leakage between tenants</strong> was a fundamental architectural challenge.
                </p>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              03 — PORTAL ARCHITECTURE — THE FOUR USER SYSTEMS
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-10 sm:mb-14 scroll-mt-24" id="portals">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded">03</span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">PORTAL ARCHITECTURE — FOUR USER SYSTEMS</h2>
            </div>

            <p className="text-xs sm:text-base font-medium text-slate-600 leading-relaxed text-left sm:text-justify mb-6 sm:mb-8">
              ZHI is not a single portal with a &ldquo;role toggle.&rdquo; It is <strong className="font-extrabold text-[#2563EB]">four fully independent, purpose-designed user systems</strong> — each with its own frontend routes, access permissions, data visibility rules, and business logic — served from a shared Next.js backend with <strong className="font-extrabold text-slate-900">centralized JWT authentication middleware</strong>.
            </p>

            <div className="space-y-4 sm:space-y-6">

              {/* Portal 01 — Super Admin */}
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3 sm:space-y-4">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-[#2563EB] bg-[#EFF6FF] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-[#BFDBFE]">PORTAL 01</span>
                  <h3 className="text-base sm:text-xl font-extrabold text-[#0F172A]">Super Admin — Platform Command Center</h3>
                  <span className="text-[10px] sm:text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">LIVE</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-left sm:text-justify">
                  The Super Admin portal is the <strong className="font-extrabold text-[#2563EB]">master control layer</strong> for the entire ZHI platform. This is an internal operations dashboard accessible only to Agaran/ZHI platform administrators. It provides full visibility across every school, student, parent, and payment in the system.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
                  {[
                    { title: "School Registration & Management", desc: "Create new school accounts, assign school admins, set student capacity limits, view active/inactive school plans, and soft-delete institutions from the platform." },
                    { title: "Platform KPI Dashboard", desc: "Real-time metrics: total students, total parents, active schools, platform revenue, lesson completion rate, avg quiz score, engagement score, and avg session minutes." },
                    { title: "Pending Registration Approvals", desc: "Review and approve parent+student account creation requests. Every new parent registration triggers a pending approval queue before the account is activated." },
                    { title: "Payment Verification Center", desc: "Track all subscription revenues, verify unverified school bank transfers (mark UTR, confirm credit), and force-activate access for parents whose payment cleared but auto-webhook failed." },
                    { title: "Curriculum Settings", desc: "Map education boards, add grades, manage chapters and lessons, publish quizzes, and maintain the entire content library across all subjects and terms." },
                    { title: "Alert System", desc: "Live alert panel: pending_approvals count, pending_payments unverified, expiring_plans near renewal — with severity ratings (High / Medium / Soon)." },
                  ].map((item) => (
                    <div key={item.title} className="p-3 sm:p-3.5 rounded-lg sm:rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                      <div className="text-xs font-extrabold text-[#2563EB]">{item.title}</div>
                      <p className="text-[11px] text-slate-500 leading-relaxed text-left sm:text-justify">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Portal 02 — School Admin */}
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3 sm:space-y-4">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-[#0284C7] bg-sky-50 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-sky-200">PORTAL 02</span>
                  <h3 className="text-base sm:text-xl font-extrabold text-[#0F172A]">School Admin — Institution Management Portal</h3>
                  <span className="text-[10px] sm:text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">LIVE</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-left sm:text-justify">
                  The School Admin portal is issued to the principal or administrator of each enrolled institution. Each school admin has a <strong className="font-extrabold text-[#0284C7]">strictly scoped data view</strong> — they can see only their own school&apos;s students, parents, and analytics. They cannot access data from any other school. This is enforced via <strong className="font-extrabold text-slate-900">JWT-bound school_id claims</strong> on every request.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
                  {[
                    { title: "School Dashboard KPIs", desc: "Real-time stats for their school: total students enrolled, students active today (within last 24h), total stars given out platform-wide within the school, and number of unique grade sections active." },
                    { title: "Students Directory", desc: "Full student roster management — view all enrolled students, add new students, update roll numbers and section assignments, and remove students. Bulk import of student records from school management systems." },
                    { title: "Class Pulse — Grade Analytics", desc: "Per-grade average progress tracking. Visual progress bar per grade (LKG, UKG, Grade 1) showing what % of the curriculum each class has completed on average. Color-coded green/amber/red based on progress thresholds." },
                    { title: "Needs Attention Panel", desc: "Smart alert system that surfaces students with overall_progress < 30% or who have had no activity in the last 7 days. School admin can identify at-risk learners and follow up with parents." },
                    { title: "Top Performers Leaderboard", desc: "Star-based ranking of the top 5 performers in the school by total_stars_earned. Encourages healthy academic competition and highlights consistent learners for recognition." },
                    { title: "Parents Directory & Plan Billing", desc: "View all parent profiles linked to their school students. Access school subscription plan details and billing status (Bank transfer / Invoice-based activation confirmed by Super Admin)." },
                  ].map((item) => (
                    <div key={item.title} className="p-3 sm:p-3.5 rounded-lg sm:rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                      <div className="text-xs font-extrabold text-[#0284C7]">{item.title}</div>
                      <p className="text-[11px] text-slate-500 leading-relaxed text-left sm:text-justify">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Portal 03 — Parent */}
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3 sm:space-y-4">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-emerald-200">PORTAL 03</span>
                  <h3 className="text-base sm:text-xl font-extrabold text-[#0F172A]">Parent Portal — Child Progress Monitoring Dashboard</h3>
                  <span className="text-[10px] sm:text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">LIVE</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-left sm:text-justify">
                  The Parent Portal gives every parent a <strong className="font-extrabold text-emerald-700">real-time window</strong> into their child&apos;s learning journey. Built with simplicity-first design (parents with limited digital literacy must be able to understand their child&apos;s progress at a glance), the portal provides <strong className="font-extrabold text-[#2563EB]">multi-child switching, per-subject progress tracking, quiz attempt logs, badge achievements, milestone timelines</strong>, and subscription plan management — all in a single unified dashboard.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
                  {[
                    { title: "Multi-Child Switcher", desc: "Parents with multiple children can switch between child profiles using a dropdown selector. The active child's full progress data is pre-fetched and cached using React Query — switching is instant with no load delay." },
                    { title: "Learning Journey KPIs", desc: "Four top-level stats for the active child: Lessons Completed, Learning Streak (consecutive active days), Badges Earned, and Quiz Attempts — all pulled from live platform data." },
                    { title: "Subject-wise Progress Map", desc: "Per-subject completion progress bars (English, Tamil, Maths, EVS, GK) showing percentage of chapters and lessons completed within each subject. Expandable to chapter-level detail with lesson-by-lesson unlock status." },
                    { title: "Quiz History Drawer", desc: "Full quiz attempt log: quiz name, subject, lesson linked, score (e.g., 8/10), percentage, pass/fail status, time taken, and attempt timestamp. Summary metrics: total attempts, total passed, failed count, and average score percentage." },
                    { title: "Recent Milestones Timeline", desc: "Chronological activity feed combining quiz completions, chapter finishes, and learning streaks into a milestone timeline. Parents see what their child did most recently without needing to understand raw progress numbers." },
                    { title: "Subscription Plan & Countdown Timer", desc: "Parents on individual paid plans see their active plan tier and a live countdown timer (DD:HH:MM:SS) showing exactly how much premium access time remains before renewal. Integrated with Razorpay subscription lifecycle." },
                  ].map((item) => (
                    <div key={item.title} className="p-3 sm:p-3.5 rounded-lg sm:rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                      <div className="text-xs font-extrabold text-emerald-700">{item.title}</div>
                      <p className="text-[11px] text-slate-500 leading-relaxed text-left sm:text-justify">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Portal 04 — Student */}
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3 sm:space-y-4">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-amber-700 bg-amber-50 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-amber-200">PORTAL 04</span>
                  <h3 className="text-base sm:text-xl font-extrabold text-[#0F172A]">Student Portal — Kids Interactive Learning Hub</h3>
                  <span className="text-[10px] sm:text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">LIVE</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-left sm:text-justify">
                  The Student Portal is the core learning interface for children aged 3 to 7. It is built with <strong className="font-extrabold text-amber-800">child-first UX principles</strong>: large visual elements, audio-driven instruction, gamified progression, and minimal text. Every lesson includes a <strong className="font-extrabold text-[#2563EB]">mascot-guided TTS voice tutorial</strong>, followed by interactive quiz activities. The portal routes are: /student/Home (dashboard), /student/Learn (lesson library), /student/Quiz (active quizzes), /student/Games (activity mini-games), and /student/profile.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
                  {[
                    { title: "Student Home Dashboard", desc: "Personalized greeting with grade, current overall progress %, total stars earned, badges count, current learning streak, and max streak. Shows today's lessons with thumbnail previews, in-progress status indicators, and next lesson unlock requirements." },
                    { title: "Learn — Structured Lesson Library", desc: "Grade-specific, term-sequenced lesson library. Subjects covered: English Phonics (Capital/Small letters, CVC word families -at/-an/-ig, Sight Words, Rhymes), Early Maths (Numbers 1–100, Shapes, Missing Number Trains), Tamil (உயிர் & மெய் எழுத்துக்கள்), and EVS/GK (Animals, Body Parts, Seasons, Fruits)." },
                    { title: "Mascot Voice Tutorial Engine", desc: "Each lesson launches an audio-visual step-by-step mascot tutorial powered by Web Speech Synthesis TTS. The mascot speaks directly to the child ('Hello Explorer! Let us learn the -at family today!'), animates letter cards, and pronounces every word sound clearly." },
                    { title: "Quiz — Gamified Assessment", desc: "Post-lesson quizzes with interactive formats: WordSorterQuiz (drag letters into word families), PictureLetterMatch (match images to correct letters), MissingLettersTrain (complete the sequence), and RhymesPlayer sing-along activities. Each attempt is submitted to the backend, scored, and stored." },
                    { title: "Games — Mini Activity Engine", desc: "Standalone gamified activity modules beyond lesson-tied quizzes. Includes independent word building games, picture matching challenges, and counting activities. Stars are earned per correct answer and accumulate in the student's global star total." },
                    { title: "Progress Tracking & Badge Rewards", desc: "Every lesson watched, quiz submitted, and activity completed is logged to the student's progress record. Completion unlocks the next sequential lesson. Badge rewards are issued on milestones (First Steps, 10 Lessons, 5-Day Streak, etc.) and synced to the parent dashboard in real-time." },
                  ].map((item) => (
                    <div key={item.title} className="p-3 sm:p-3.5 rounded-lg sm:rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                      <div className="text-xs font-extrabold text-amber-800">{item.title}</div>
                      <p className="text-[11px] text-slate-500 leading-relaxed text-left sm:text-justify">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              04 — PAYMENT ENGINE & SUBSCRIPTION ARCHITECTURE
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-10 sm:mb-14 scroll-mt-24" id="payment">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded">04</span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">PAYMENT ENGINE &amp; SUBSCRIPTION ARCHITECTURE</h2>
            </div>

            <p className="text-xs sm:text-base font-medium text-slate-600 leading-relaxed text-left sm:text-justify mb-5 sm:mb-6">
              ZHI runs a <strong className="font-extrabold text-[#2563EB]">dual-track monetization model</strong>: B2C individual parent subscriptions via Razorpay, and B2B school institution billing via manual invoice and bank transfer. The payment system was engineered with <strong className="font-extrabold text-[#2563EB]">bulletproof idempotency and triple-verification</strong> to prevent the trust-breaking failure mode of &ldquo;payment deducted but access not granted&rdquo; — a critical issue from prior EdTech projects.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6">
              {/* B2C */}
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3 sm:space-y-4">
                <h3 className="font-extrabold text-[#0F172A] text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] shrink-0" />
                  B2C — Individual Parent Subscription Plans (Razorpay)
                </h3>
                <div className="space-y-2.5 text-xs sm:text-sm">
                  {[
                    { name: "Free Plan (₹0)", detail: "14-day full trial. After trial expiry, system locks all content automatically. No manual action needed." },
                    { name: "Focus Plan (₹149/month)", detail: "Single subject access (e.g., Maths only or English only) with full lesson and quiz unlock for that subject." },
                    { name: "Premium Plan (₹399/month)", detail: "All subjects, all video/audio tutorials, all activity games. The most popular individual parent plan." },
                    { name: "Ultimate Plan (₹699/month)", detail: "Everything in Premium + AI Tutor integration (v2). Child can interact directly with an AI mentor for personalized doubt resolution." },
                  ].map((p) => (
                    <div key={p.name} className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold text-sm mt-0.5">&bull;</span>
                      <div>
                        <strong className="text-[#2563EB] font-extrabold">{p.name}:</strong>
                        <span className="text-slate-600 block mt-0.5 leading-relaxed">{p.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 rounded-lg sm:rounded-xl bg-white border border-slate-200 text-[11px] sm:text-xs font-mono text-slate-700 leading-relaxed space-y-1">
                  <div className="font-black text-[#2563EB] text-[10px] uppercase mb-1">Razorpay Payment Flow (Bulletproof)</div>
                  <div>1. Parent clicks Upgrade &rarr; button DISABLED immediately</div>
                  <div>2. Backend creates Razorpay order reference</div>
                  <div>3. Razorpay checkout opens &rarr; UPI / Card / NetBanking</div>
                  <div>4. Payment success &rarr; frontend sends verification payload</div>
                  <div>5. Backend: verify signature &rarr; check idempotency &rarr; secure transaction commit</div>
                  <div>6. Triple check: Razorpay dashboard ✓ + Parent account status = PAID ✓ + Payment log = success ✓</div>
                  <div>7. Webhook backup: if frontend miss, Razorpay webhook auto-triggers backend activation</div>
                  <div>8. Manual override: Super Admin force-activate if webhook also missed</div>
                </div>
              </div>

              {/* B2B */}
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3 sm:space-y-4">
                <h3 className="font-extrabold text-[#0F172A] text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0" />
                  B2B — School Institution Pack (Manual Invoice)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-left sm:text-justify">
                  Schools pay <strong className="font-extrabold text-emerald-700">₹50 per child per month</strong> via bank transfer or cheque. For a school with 500 students, this is <strong className="font-extrabold text-slate-900">₹25,000/month</strong> — a bulk amount that cannot go through standard Razorpay UPI (limit issues, GST invoice requirements, PO approval cycles). The B2B flow is deliberately manual with Super Admin verification as the activation gate.
                </p>
                <div className="p-3 rounded-lg sm:rounded-xl bg-white border border-slate-200 text-[11px] sm:text-xs font-mono text-slate-700 leading-relaxed space-y-1">
                  <div className="font-black text-emerald-700 text-[10px] uppercase mb-1">School Payment Flow</div>
                  <div>1. Agaran sends formal quotation to school management</div>
                  <div>2. School issues Purchase Order (PO) from accounts department</div>
                  <div>3. Agaran Finance raises GST invoice (PDF, custom)</div>
                  <div>4. School transfers via NEFT/IMPS or posts cheque</div>
                  <div>5. Accountant confirms bank statement credit (2–3 day delay)</div>
                  <div>6. Super Admin marks UTR number &rarr; [Mark as Paid] in dashboard</div>
                  <div>7. System activates: all students in school &rarr; FULL ACCESS</div>
                  <div>8. Transaction logged in system billing audit records</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs">
                  <div className="p-3 rounded-lg sm:rounded-xl bg-white border border-slate-200 space-y-1">
                    <div className="font-extrabold text-slate-900">Students Unlocked</div>
                    <div className="text-slate-500 leading-relaxed">All enrolled students in school get full curriculum access immediately upon Super Admin activation.</div>
                  </div>
                  <div className="p-3 rounded-lg sm:rounded-xl bg-white border border-slate-200 space-y-1">
                    <div className="font-extrabold text-slate-900">GST Compliance</div>
                    <div className="text-slate-500 leading-relaxed">Custom GST invoice generated for school accounts department. PO reference number logged in payments record.</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              05 — CURRICULUM ARCHITECTURE
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-10 sm:mb-14 scroll-mt-24" id="curriculum">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded">05</span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">CURRICULUM ARCHITECTURE — SUBJECTS &amp; MODULES</h2>
            </div>

            <p className="text-xs sm:text-base font-medium text-slate-600 leading-relaxed text-left sm:text-justify mb-5 sm:mb-6">
              The ZHI curriculum is organized in a hierarchical structure: <strong className="font-extrabold text-[#2563EB]">Board &rarr; Grade &rarr; Subject &rarr; Chapter &rarr; Lesson &rarr; Activity/Quiz</strong>. Each lesson has a defined position in a term sequence (Term 1, Term 2, Term 3), and the next lesson is unlocked only after the current lesson is completed. This <strong className="font-extrabold text-[#2563EB]">sequential unlock architecture</strong> ensures structured learning and prevents content skipping.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {[
                {
                  subject: "English Phonics & Literacy",
                  grade: "LKG, UKG, Grade 1",
                  color: "text-[#2563EB]",
                  bg: "bg-[#EFF6FF]",
                  border: "border-[#BFDBFE]",
                  chapters: ["Capital Letters A–Z (with mascot pronunciation)", "Small Letters a–z (recognition & matching)", "Capital-to-Small Letter Matching games", "Phonics Soundboard (letter sound isolation)", "CVC Word Families: -at (cat, hat, mat, bat), -an (can, fan, man, van), -ig (big, dig, fig, wig), -op (hop, mop, pop, top)", "Sight Word recognition (the, and, is, was, etc.)", "Story Reading Time (guided reading with TTS)", "Nursery Rhymes Sing-along player (animated)"]
                },
                {
                  subject: "Early Mathematics & Logic",
                  grade: "LKG, UKG, Grade 1",
                  color: "text-[#0284C7]",
                  bg: "bg-sky-50",
                  border: "border-sky-200",
                  chapters: ["Number Counting 1 to 10 (with object visual aids)", "Number Counting 11 to 50 (sequence exercises)", "Number Counting 51 to 100 (complete range mastery)", "Object Counting games (count the apples, stars, etc.)", "Missing Number Train (fill-in-the-blank sequences)", "Shape Recognition (circle, square, triangle, rectangle)", "Color & Pattern Identification exercises", "1st Std Introduction to Visual Addition (1+1, 2+3, etc.)"]
                },
                {
                  subject: "Tamil Language Foundation",
                  grade: "LKG, UKG",
                  color: "text-emerald-700",
                  bg: "bg-emerald-50",
                  border: "border-emerald-200",
                  chapters: ["உயிர் எழுத்துக்கள் — 12 vowels (அ, ஆ, இ, ஈ, உ, ஊ, எ, ஏ, ஐ, ஒ, ஓ, ஔ)", "மெய் எழுத்துக்கள் — 18 consonants recognition", "Tamil letter audio pronunciation with mascot", "Picture-to-word letter matching activities", "Tamil rhymes with animated sing-along player", "Basic Tamil vocabulary building (objects, animals, colors)"]
                },
                {
                  subject: "EVS & General Knowledge",
                  grade: "Pre-KG, LKG, UKG",
                  color: "text-amber-700",
                  bg: "bg-amber-50",
                  border: "border-amber-200",
                  chapters: ["My Body Parts (head, shoulders, eyes, etc. — interactive)", "Animals of the World (domestic & wild — picture quiz)", "Seasons & Weather (summer, winter, rainy — visual cards)", "Fruits & Vegetables identification (picture matching)", "Community Helpers (teacher, doctor, police, etc.)", "Colors & Shapes in nature (environmental awareness)"]
                },
              ].map((sub) => (
                <div key={sub.subject} className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-[#BFDBFE] transition-colors space-y-2.5 sm:space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border ${sub.bg} ${sub.color} ${sub.border}`}>
                      {sub.grade}
                    </span>
                  </div>
                  <h3 className={`text-base sm:text-lg font-extrabold ${sub.color}`}>{sub.subject}</h3>
                  <ul className="space-y-1.5">
                    {sub.chapters.map((ch) => (
                      <li key={ch} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="text-emerald-500 font-bold mt-0.5 shrink-0">✓</span>
                        <span className="leading-snug">{ch}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              06 — HOW IT WORKS — USER JOURNEYS
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-10 sm:mb-14 scroll-mt-24" id="how-it-works">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded">06</span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">HOW IT WORKS — TWO USER JOURNEYS</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3 sm:space-y-4">
                <h3 className="font-extrabold text-[#2563EB] text-sm sm:text-base">B2C Journey — Individual Parent</h3>
                <div className="w-full rounded-lg sm:rounded-xl bg-white border border-slate-200 p-3 sm:p-4 overflow-x-auto">
                  <div className="min-w-[280px] sm:min-w-[400px] flex flex-col gap-2 text-xs font-bold">
                    {[
                      { step: "01", label: "Parent Registers", desc: "Account created → pending registration queue" },
                      { step: "02", label: "Super Admin Approves", desc: "Registration reviewed & approved → account activated" },
                      { step: "03", label: "14-Day Free Trial", desc: "Full content access. Countdown timer active in dashboard." },
                      { step: "04", label: "Parent Subscribes", desc: "Picks plan (₹149/₹399/₹699) → Razorpay checkout" },
                      { step: "05", label: "Triple Verification", desc: "Signature verify → idempotency check → secure transaction commit → Webhook backup" },
                      { step: "06", label: "Access Activated", desc: "Plan tier unlocked. Child begins structured learning journey." },
                    ].map((s, i, arr) => (
                      <div key={s.step}>
                        <div className={`p-2.5 rounded-lg ${i === arr.length - 1 ? 'bg-[#2563EB] text-white' : 'bg-[#EFF6FF] border border-[#BFDBFE] text-[#0F172A]'}`}>
                          <div className={`text-[9px] font-black uppercase ${i === arr.length - 1 ? 'text-sky-200' : 'text-[#2563EB]'}`}>STEP {s.step}</div>
                          <div className={`font-extrabold text-xs ${i === arr.length - 1 ? 'text-white' : 'text-slate-900'}`}>{s.label}</div>
                          <div className={`text-[11px] font-normal ${i === arr.length - 1 ? 'text-sky-100' : 'text-slate-600'} leading-tight mt-0.5`}>{s.desc}</div>
                        </div>
                        {i < arr.length - 1 && <div className="text-center text-slate-400 font-bold text-xs py-0.5">&darr;</div>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3 sm:space-y-4">
                <h3 className="font-extrabold text-emerald-700 text-sm sm:text-base">B2B Journey — School Institution</h3>
                <div className="w-full rounded-lg sm:rounded-xl bg-white border border-slate-200 p-3 sm:p-4 overflow-x-auto">
                  <div className="min-w-[280px] sm:min-w-[400px] flex flex-col gap-2 text-xs font-bold">
                    {[
                      { step: "01", label: "School Onboarding", desc: "Super Admin creates school account, assigns School Admin login credentials" },
                      { step: "02", label: "Student Registration", desc: "School Admin adds students (LKG/UKG/Grade 1, roll numbers, sections)" },
                      { step: "03", label: "Invoice Sent", desc: "Agaran Finance sends GST invoice → ₹50/child/month" },
                      { step: "04", label: "Bank Transfer", desc: "School accounts dept transfers via NEFT/IMPS. Takes 2–3 days." },
                      { step: "05", label: "Super Admin Verifies", desc: "UTR number logged → Mark as Paid → system activation triggered" },
                      { step: "06", label: "All Students Unlocked", desc: "Every student in school gets full curriculum access immediately" },
                    ].map((s, i, arr) => (
                      <div key={s.step}>
                        <div className={`p-2.5 rounded-lg ${i === arr.length - 1 ? 'bg-emerald-600 text-white' : 'bg-emerald-50 border border-emerald-200 text-[#0F172A]'}`}>
                          <div className={`text-[9px] font-black uppercase ${i === arr.length - 1 ? 'text-emerald-100' : 'text-emerald-700'}`}>STEP {s.step}</div>
                          <div className={`font-extrabold text-xs ${i === arr.length - 1 ? 'text-white' : 'text-slate-900'}`}>{s.label}</div>
                          <div className={`text-[11px] font-normal ${i === arr.length - 1 ? 'text-emerald-100' : 'text-slate-600'} leading-tight mt-0.5`}>{s.desc}</div>
                        </div>
                        {i < arr.length - 1 && <div className="text-center text-slate-400 font-bold text-xs py-0.5">&darr;</div>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              07 — SYSTEM ARCHITECTURE
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-10 sm:mb-14 scroll-mt-24" id="architecture">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded">07</span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">SYSTEM ARCHITECTURE</h2>
            </div>

            <div className="w-full rounded-xl sm:rounded-2xl bg-[#F8FAFC] border border-slate-300 p-3.5 sm:p-6 text-[#0F172A] font-mono text-xs overflow-x-auto shadow-xs mb-4 sm:mb-6">
              <div className="text-slate-500 text-[10px] sm:text-[11px] border-b border-slate-200 pb-2 mb-3 font-bold flex items-center justify-between gap-2">
                <span>ZHI ARCHITECTURE TOPOLOGY</span>
                <span className="text-[#2563EB] font-bold shrink-0">v3.1 PRODUCTION</span>
              </div>

              <div className="min-w-[600px] space-y-3">
                <div className="p-3 rounded-lg sm:rounded-xl bg-white border border-slate-200 text-center">
                  <div className="text-[10px] text-[#2563EB] font-black uppercase mb-1">CLIENT LAYER — FOUR AUTHENTICATED PORTALS</div>
                  <div className="grid grid-cols-4 gap-2 text-[10px] sm:text-[11px]">
                    {["Super Admin /admin", "School Admin /school-admin", "Parent /parent", "Student /student"].map(p => (
                      <span key={p} className="bg-[#EFF6FF] px-2 py-1.5 rounded border border-[#BFDBFE] text-[#2563EB] font-bold truncate">{p}</span>
                    ))}
                  </div>
                </div>

                <div className="text-center text-slate-400 font-bold text-[11px]">&darr; Next.js Middleware — JWT Role Validation &darr;</div>

                <div className="p-3 rounded-lg sm:rounded-xl bg-white border border-slate-200 text-center">
                  <div className="text-[10px] text-[#0284C7] font-black uppercase mb-1">CORE SERVICES LAYER</div>
                  <div className="grid grid-cols-4 gap-1.5 sm:gap-2 text-[10px] text-slate-700">
                    {["Admin Management", "School Services", "Parent Services", "Student Engine", "Auth & Roles", "Payment Gateway", "Subscription", "Curriculum Engine"].map(r => (
                      <div key={r} className="bg-[#F1F5F9] p-1.5 rounded border border-slate-200 font-bold truncate">{r}</div>
                    ))}
                  </div>
                </div>

                <div className="text-center text-slate-400 font-bold text-[11px]">&darr; Shared Business Logic Layer &darr;</div>

                <div className="p-3 rounded-lg sm:rounded-xl bg-white border border-slate-200 text-center">
                  <div className="text-[10px] text-emerald-600 font-black uppercase mb-1">PERSISTENCE &amp; STORAGE LAYER</div>
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-[10px] text-slate-700">
                    {["Platform Data Store", "Student Progress Records", "Badge Registry", "Payment Audit Logs", "Curriculum Library", "School Tenant Records"].map(l => (
                      <div key={l} className="bg-[#F1F5F9] p-1.5 rounded border border-slate-200 truncate">{l}</div>
                    ))}
                  </div>
                </div>

                <div className="text-center text-slate-400 font-bold text-[11px]">&darr; External Integrations &darr;</div>

                <div className="p-3 rounded-lg sm:rounded-xl bg-white border border-slate-200">
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-[10px] text-slate-700 text-center">
                    <div className="bg-[#F1F5F9] p-2 rounded border border-slate-200 font-bold">Razorpay Payments</div>
                    <div className="bg-[#F1F5F9] p-2 rounded border border-slate-200 font-bold">TTS Mascot Voice</div>
                    <div className="bg-[#F1F5F9] p-2 rounded border border-slate-200 font-bold">next-intl (EN/Tamil)</div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed text-left sm:text-justify">
              <strong className="font-extrabold text-[#2563EB]">Architectural Design Decisions:</strong> The platform uses Next.js App Router for both frontend rendering and server services. Role-based access is enforced at the middleware layer using JWT claims — every request is validated before reaching business logic. Enterprise data isolation ensures <strong className="font-extrabold text-slate-900">no cross-tenant data leakage between schools</strong>. The i18n architecture (next-intl) supports bilingual content delivery in English and Tamil across all four portals.
            </p>
          </section>

          {/* ══════════════════════════════════════════════════════════
              08 — AGARAN'S ROLE
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-10 sm:mb-14 scroll-mt-24" id="role">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded">08</span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">AGARAN&apos;S ROLE</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 text-xs sm:text-sm font-medium">
              {[
                { title: "Full-Stack System Architecture", desc: "Designed the complete multi-portal system architecture, role management, and frontend routing. Made all key architectural decisions: multi-tenant data scoping, JWT role enforcement strategy, sequential lesson unlock logic, and idempotent payment verification flow." },
                { title: "Four Independent Portal Frontends", desc: "Built all four Next.js frontend portals (Super Admin, School Admin, Parent, Student) with role-specific dashboards, data-fetching with React Query (including prefetching, stale-time tuning, and 30s auto-refresh for critical data), and responsive mobile-first UI." },
                { title: "Bulletproof Payment Engine", desc: "Engineered the Razorpay integration with triple-verification (frontend → webhook → manual override), idempotency key enforcement, database transaction atomicity, audit trail logging, and Super Admin force-activate fallback." },
                { title: "Curriculum Content Engine", desc: "Built the full curriculum data architecture: board → grade → subject → chapter → lesson → activity/quiz hierarchy. Implemented TTS-driven mascot voice tutorial engine, gamified quiz components (WordSorterQuiz, PictureLetterMatch, MissingLettersTrain), and badge reward system." },
                { title: "B2B School Admin System", desc: "Designed and built the school-scoped admin portal with real-time student roster management, grade-wise class pulse analytics, needs-attention smart alerting (progress < 30% or 7-day inactivity), top performer leaderboard, and invoice-based school plan activation flow." },
                { title: "Multi-language i18n Infrastructure", desc: "Implemented next-intl internationalization supporting English and Tamil across all portal routes, content delivery, and UI strings — enabling the platform to serve Tamil-medium schools and parents who prefer their regional language interface." },
              ].map((item) => (
                <div key={item.title} className="p-3.5 sm:p-4 rounded-lg sm:rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1 sm:space-y-1.5">
                  <div className="font-extrabold text-[#2563EB] text-xs sm:text-sm">{item.title}</div>
                  <div className="text-slate-600 text-left sm:text-justify leading-relaxed text-xs sm:text-sm">{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              09 — TECHNOLOGY
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-10 sm:mb-14 scroll-mt-24" id="technology">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded">09</span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">TECHNOLOGY STACK</h2>
            </div>

            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-xs">
                {[
                  { category: "Frontend", techs: ["Next.js 14 (App Router)", "TypeScript", "Tailwind CSS", "Framer Motion", "React Query (TanStack)"] },
                  { category: "Backend & Services", techs: ["Next.js App Router", "JWT Authentication", "Role-based Middleware", "Cloud Infrastructure", "Serverless Functions"] },
                  { category: "Payment & Billing", techs: ["Razorpay (B2C Subscriptions)", "Webhook Handler (Backup)", "Idempotency Key Engine", "Manual Invoice Flow (B2B)", "Audit Trail Engine"] },
                  { category: "Learning Engine", techs: ["Web Speech Synthesis TTS", "Custom Mascot Tutorial Player", "WordSorterQuiz Component", "PictureLetterMatch Component", "MissingLettersTrain Component"] },
                  { category: "i18n & Localisation", techs: ["next-intl (EN + Tamil)", "Locale-scoped routing /[locale]/*", "Bilingual content delivery", "Tamil script rendering", "RTL-ready architecture"] },
                  { category: "Infrastructure", techs: ["Vercel (Frontend)", "Railway (Backend)", "Cloud Infrastructure", "Cron Jobs", "Docker (local dev)"] },
                ].map((group) => (
                  <div key={group.category} className="p-3.5 sm:p-4 rounded-lg sm:rounded-xl bg-white border border-slate-200 space-y-1.5 sm:space-y-2">
                    <div className="text-[10px] font-black text-[#2563EB] uppercase tracking-wider">{group.category}</div>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {group.techs.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-[#F8FAFC] border border-slate-200 text-slate-700 text-[10px] font-bold">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              10 — PROJECT DETAILS — EXECUTIVE MATRIX GRID
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-10 sm:mb-14 scroll-mt-24" id="details">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded">10</span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">PROJECT DETAILS</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
              {[
                {
                  label: "Project Model",
                  title: "Dual Monetization",
                  value: "B2B School SaaS Pack + B2C Parent Subscription",
                  tag: "B2B + B2C",
                  color: "text-[#2563EB]",
                  bg: "bg-[#EFF6FF]",
                  border: "border-[#BFDBFE]"
                },
                {
                  label: "Industry & Domain",
                  title: "Early EdTech SaaS",
                  value: "Early Childhood & Elementary Education Technology",
                  tag: "EdTech",
                  color: "text-[#0284C7]",
                  bg: "bg-sky-50",
                  border: "border-sky-200"
                },
                {
                  label: "Target Audience",
                  title: "Pre-KG to 1st Std",
                  value: "Pre-KG, LKG, UKG & 1st Standard (Ages 3 to 7)",
                  tag: "Foundation",
                  color: "text-amber-700",
                  bg: "bg-amber-50",
                  border: "border-amber-200"
                },
                {
                  label: "Portals Built",
                  title: "4 Scoped Portals",
                  value: "Super Admin, School Admin, Parent Dashboard & Kids Hub",
                  tag: "4 Portals",
                  color: "text-purple-700",
                  bg: "bg-purple-50",
                  border: "border-purple-200"
                },
                {
                  label: "Localization",
                  title: "Bilingual Engine",
                  value: "English + Tamil (i18n powered by next-intl)",
                  tag: "EN + Tamil",
                  color: "text-indigo-700",
                  bg: "bg-indigo-50",
                  border: "border-indigo-200"
                },
                {
                  label: "Deployment",
                  title: "Live Production",
                  value: "Vercel (Frontend) + Railway (Backend Infrastructure)",
                  tag: "Vercel + Railway",
                  color: "text-emerald-700",
                  bg: "bg-emerald-50",
                  border: "border-emerald-200"
                },
                {
                  label: "Current Status",
                  title: "Active Production",
                  value: "Live with continuous curriculum & module expansion",
                  tag: "Active System",
                  color: "text-blue-700",
                  bg: "bg-blue-50",
                  border: "border-blue-200"
                },
                {
                  label: "Agaran Role",
                  title: "Full-Stack Lead",
                  value: "Architecture, all 4 portal frontends, payment engine",
                  tag: "Lead Architect",
                  color: "text-[#2563EB]",
                  bg: "bg-[#EFF6FF]",
                  border: "border-[#BFDBFE]"
                },
              ].map((item) => (
                <div key={item.label} className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-[#BFDBFE] hover:shadow-md transition-all space-y-2.5 flex flex-col justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-400">{item.label}</span>
                      <span className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full border ${item.bg} ${item.color} ${item.border}`}>
                        {item.tag}
                      </span>
                    </div>
                    <div className="text-sm sm:text-base font-extrabold text-slate-900">{item.title}</div>
                  </div>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">{item.value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              11 — OUTCOME
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-10 sm:mb-14 scroll-mt-24" id="outcome">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded">11</span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">OUTCOME &amp; MEASURABLE RESULTS</h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
              {[
                { stat: "4 Portals", label: "Role-Based Systems", sub: "Super Admin, School Admin, Parent, Student", color: "text-[#2563EB]", bg: "bg-[#EFF6FF]", border: "border-[#BFDBFE]" },
                { stat: "₹0 Lost", label: "Payment Failures", sub: "Triple-verified, bulletproof payment engine", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200" },
                { stat: "2 Models", label: "Revenue Streams", sub: "B2C Razorpay + B2B Invoice — Dual monetization", color: "text-[#0284C7]", bg: "bg-sky-50", border: "border-sky-200" },
                { stat: "100%", label: "Syllabus Coverage", sub: "English, Tamil, Maths, EVS, GK — Term 1, 2, 3", color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-200" },
              ].map((item) => (
                <div key={item.label} className={`p-4 sm:p-5 rounded-xl sm:rounded-2xl ${item.bg} border ${item.border} text-center space-y-1`}>
                  <div className={`text-xl sm:text-3xl font-black ${item.color}`}>{item.stat}</div>
                  <div className="text-[9px] sm:text-xs font-extrabold uppercase text-slate-700">{item.label}</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">{item.sub}</div>
                </div>
              ))}
            </div>

            <blockquote className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#F8FAFC] text-[#0F172A] font-medium text-xs sm:text-sm leading-relaxed border border-slate-200 text-left sm:text-justify">
              &ldquo;The ZHI platform completely changed how we track our kindergarten students&apos; learning progress. The school admin dashboard shows us which grade sections are falling behind in real time, and parents love being able to see their child&apos;s quiz scores and chapter completions the same day it happens. The structured term-by-term curriculum also gave our teachers a proper digital framework to follow for the first time.&rdquo;
              <footer className="mt-2.5 sm:mt-3 text-[#2563EB] font-bold text-xs">&mdash; Principal, Partner Kindergarten Institution (South India)</footer>
            </blockquote>
          </section>

          {/* ══════════════════════════════════════════════════════════
              12 — CASE STUDY NAVIGATION
          ══════════════════════════════════════════════════════════ */}
          <section className="pt-6 sm:pt-8 border-t border-slate-200" id="next-project">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded">12</span>
              <h2 className="text-lg sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">CASE STUDY NAVIGATION</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <Link href="/work" className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-[#2563EB] hover:bg-[#EFF6FF]/50 transition-all duration-300 group flex flex-col justify-between">
                <div className="text-[10px] sm:text-xs font-extrabold text-slate-400 uppercase tracking-wider group-hover:text-[#2563EB] transition-colors">
                  &larr; ALL CASE STUDIES
                </div>
                <div className="mt-1.5 sm:mt-2 text-sm sm:text-base font-extrabold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">View All Work</div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1 font-medium">Return to Case Studies index</div>
              </Link>

              <Link href="/work" className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#2563EB] hover:bg-[#EFF6FF]/50 transition-all duration-300 group text-left sm:text-right flex flex-col justify-between">
                <div className="text-[10px] sm:text-xs font-extrabold text-slate-400 uppercase tracking-wider group-hover:text-[#2563EB] transition-colors">
                  NEXT CASE STUDY &rarr;
                </div>
                <div className="mt-1.5 sm:mt-2 text-sm sm:text-base font-extrabold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                  Global EdTech Learning System
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1 font-medium">Live Video Streaming &amp; Real-Time Classrooms</div>
              </Link>
            </div>
          </section>

        </article>
      </main>

      <Footer />
    </>
  );
}
