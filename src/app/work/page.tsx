"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function WorkPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] pt-20 sm:pt-28 pb-16 sm:pb-24 px-3 sm:px-8 lg:px-16 font-sans selection:bg-[#2563EB] selection:text-white">
        
        {/* Ambient Radial Mesh Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#BFDBFE_1px,transparent_1px)] [background-size:32px_32px] opacity-35 pointer-events-none" />

        <div className="relative max-w-[1440px] mx-auto w-full space-y-10 sm:space-y-14">
          
          {/* ══════════════════════════════════════════════════════════
              HEADER SECTION — EXECUTIVE LANDING HERO
          ══════════════════════════════════════════════════════════ */}
          <header className="text-center max-w-5xl mx-auto mb-6">
            <div className="flex justify-center mb-5">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#2563EB] shadow-2xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] animate-pulse" />
                CASE STUDIES &amp; PRODUCTION SYSTEMS
              </div>
            </div>

            <h1 className="text-center text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.4rem] font-black leading-[1.12] tracking-[-0.035em] text-[#0F172A] w-full max-w-5xl mx-auto mb-5">
              Proven Architecture Over{" "}
              <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                Marketing Hype.
              </span>
            </h1>

            <p className="text-center text-sm sm:text-lg lg:text-xl font-medium leading-relaxed text-slate-600 w-full max-w-3xl mx-auto mb-6">
              In-depth technical whitepapers and engineering case studies detailing real multi-tenant SaaS platforms, microservices backend architectures, automated infrastructure, and 24/7 real-time system monitoring shipped for client institutions.
            </p>

            {/* Quick System Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 max-w-3xl mx-auto text-left sm:text-center text-xs">
              <div className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-0.5">
                <div className="text-base sm:text-lg font-black text-[#2563EB]">2 Systems</div>
                <div className="text-slate-500 font-bold text-[10px] uppercase">Live Production</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-0.5">
                <div className="text-base sm:text-lg font-black text-emerald-600">362+ APIs</div>
                <div className="text-slate-500 font-bold text-[10px] uppercase">Contract Endpoints</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-0.5">
                <div className="text-base sm:text-lg font-black text-[#0284C7]">100% Isolated</div>
                <div className="text-slate-500 font-bold text-[10px] uppercase">Row-Level Security</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-0.5">
                <div className="text-base sm:text-lg font-black text-amber-600 flex items-center justify-start sm:justify-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                  24/7 Active
                </div>
                <div className="text-slate-500 font-bold text-[10px] uppercase">System Monitoring</div>
              </div>
            </div>
          </header>

          {/* ══════════════════════════════════════════════════════════
              FEATURED CASE STUDY 01 — ZHI EARLY LEARNING PLATFORM
          ══════════════════════════════════════════════════════════ */}
          <section>
            <Link
              href="/work/ai-learning-portal"
              className="group block p-5 sm:p-8 lg:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_30px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)] hover:border-[#BFDBFE] transition-all duration-300 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                
                {/* Left Narrative Column (7/12) */}
                <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#BFDBFE]">
                      FEATURED CASE STUDY 01 &bull; EDTECH SAAS
                    </span>
                    <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded flex items-center gap-1.5 border border-emerald-200">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      LIVE PRODUCTION
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] group-hover:text-[#2563EB] transition-colors leading-tight">
                    ZHI — Learn While Playing
                  </h2>

                  <p className="text-xs sm:text-base text-slate-600 leading-relaxed text-left sm:text-justify">
                    A production-grade early childhood foundation learning platform for Pre-KG, LKG, UKG, and 1st Standard. Built with 4 authenticated role-based portals (Super Admin, School Admin, Parent, Student), dual monetization (B2C Razorpay monthly subscriptions + B2B school GST invoice pack), mascot voice TTS tutorials, and English/Tamil bilingual i18n delivery.
                  </p>

                  {/* Feature Highlights Matrix */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs">
                    <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-center">
                      <div className="font-extrabold text-[#2563EB] text-xs">4 Portals</div>
                      <div className="text-[10px] text-slate-500 font-medium">Role-Based JWT</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-center">
                      <div className="font-extrabold text-[#0284C7] text-xs">Dual Model</div>
                      <div className="text-[10px] text-slate-500 font-medium">B2C + B2B Invoice</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-center">
                      <div className="font-extrabold text-emerald-700 text-xs">50+ Modules</div>
                      <div className="text-[10px] text-slate-500 font-medium">Phonics &amp; Tamil</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-center">
                      <div className="font-extrabold text-purple-700 text-xs">TTS Mascot</div>
                      <div className="text-[10px] text-slate-500 font-medium">Voice Tutorial</div>
                    </div>
                  </div>

                  <div className="pt-3">
                    <span className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#2563EB] text-white font-extrabold text-xs sm:text-sm shadow-md group-hover:bg-[#1D4ED8] group-hover:shadow-lg transition-all duration-300">
                      <span>Explore Case Study</span>
                      <span className="text-base group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </span>
                  </div>
                </div>

                {/* Right Light Browser Mockup (5/12) */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-4 sm:p-5 text-slate-800 flex flex-col justify-between font-mono text-xs shadow-2xs space-y-3.5">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        <span className="ml-1 text-[10px] text-slate-500 font-bold">https://app.zhi-learning.com</span>
                      </div>
                      <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold text-[10px]">v3.1 LIVE</span>
                    </div>

                    <div className="space-y-2 font-sans text-xs">
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 flex items-center justify-between shadow-2xs">
                        <span className="text-slate-700 font-bold text-[11px]">Super Admin HQ</span>
                        <span className="text-[#2563EB] font-extrabold text-[10px] bg-[#EFF6FF] px-2 py-0.5 rounded border border-[#BFDBFE]">Schools &amp; Revenue</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 flex items-center justify-between shadow-2xs">
                        <span className="text-slate-700 font-bold text-[11px]">School Admin HQ</span>
                        <span className="text-[#0284C7] font-extrabold text-[10px] bg-sky-50 px-2 py-0.5 rounded border border-sky-200">Roster &amp; Billing</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 flex items-center justify-between shadow-2xs">
                        <span className="text-slate-700 font-bold text-[11px]">Parent Dashboard</span>
                        <span className="text-emerald-700 font-extrabold text-[10px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Child Switcher &amp; Quiz Log</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 flex items-center justify-between shadow-2xs">
                        <span className="text-slate-700 font-bold text-[11px]">Kids Learning Hub</span>
                        <span className="text-amber-700 font-extrabold text-[10px] bg-amber-50 px-2 py-0.5 rounded border border-amber-200">TTS Mascot &amp; WordSorter</span>
                      </div>
                    </div>

                    <div className="text-[10px] text-slate-400 text-center pt-1 font-mono">
                      [ CLICK TO READ OFFICIAL WHITEPAPER ]
                    </div>
                  </div>
                </div>

              </div>
            </Link>
          </section>

          {/* ══════════════════════════════════════════════════════════
              FEATURED CASE STUDY 02 — NEET SAAS PLATFORM (CMP)
          ══════════════════════════════════════════════════════════ */}
          <section>
            <Link
              href="/work/neet-saas-platform"
              className="group block p-5 sm:p-8 lg:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_30px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)] hover:border-[#BFDBFE] transition-all duration-300 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                
                {/* Left Narrative Column (7/12) */}
                <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#0284C7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                      FEATURED CASE STUDY 02 &bull; ENTERPRISE MULTI-TENANT
                    </span>
                    <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded flex items-center gap-1.5 border border-emerald-200">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      LIVE PRODUCTION
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] group-hover:text-[#2563EB] transition-colors leading-tight">
                    NEET SaaS Platform (CMP)
                  </h2>

                  <p className="text-xs sm:text-base text-slate-600 leading-relaxed text-left sm:text-justify">
                    An enterprise multi-tenant Education Core Platform built for NEET coaching institutes and test prep academies. Powered by LiveKit real-time live classrooms, Cloudflare Stream DRM pre-recorded video security, Moodle-style modular course builder, NTA format OMR mock test evaluation queues, fee installment ledgers, and 4 authenticated user roles.
                  </p>

                  {/* Feature Highlights Matrix */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs">
                    <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-center">
                      <div className="font-extrabold text-[#2563EB] text-xs">NestJS Monorepo</div>
                      <div className="text-[10px] text-slate-500 font-medium">362+ API Endpoints</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-center">
                      <div className="font-extrabold text-emerald-700 text-xs">PostgreSQL RLS</div>
                      <div className="text-[10px] text-slate-500 font-medium">100% Data Isolated</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-center">
                      <div className="font-extrabold text-[#0284C7] text-xs">LiveKit &amp; DRM</div>
                      <div className="text-[10px] text-slate-500 font-medium">Live &amp; Pre-Recorded</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-center">
                      <div className="font-extrabold text-purple-700 text-xs">Course Builder</div>
                      <div className="text-[10px] text-slate-500 font-medium">Moodle Architecture</div>
                    </div>
                  </div>

                  <div className="pt-3">
                    <span className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#2563EB] text-white font-extrabold text-xs sm:text-sm shadow-md group-hover:bg-[#1D4ED8] group-hover:shadow-lg transition-all duration-300">
                      <span>Explore Case Study</span>
                      <span className="text-base group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </span>
                  </div>
                </div>

                {/* Right Light Browser Mockup (5/12) */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-4 sm:p-5 text-slate-800 flex flex-col justify-between font-mono text-xs shadow-2xs space-y-3.5">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        <span className="ml-1 text-[10px] text-slate-500 font-bold">https://app.neet-platform.com</span>
                      </div>
                      <span className="text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200 font-bold text-[10px]">v1.0 LIVE</span>
                    </div>

                    <div className="space-y-2 font-sans text-xs">
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 flex items-center justify-between shadow-2xs">
                        <span className="text-slate-700 font-bold text-[11px]">Platform Admin HQ</span>
                        <span className="text-[#2563EB] font-extrabold text-[10px] bg-[#EFF6FF] px-2 py-0.5 rounded border border-[#BFDBFE]">Tenant Onboarding</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 flex items-center justify-between shadow-2xs">
                        <span className="text-slate-700 font-bold text-[11px]">Institute Admin HQ</span>
                        <span className="text-[#0284C7] font-extrabold text-[10px] bg-sky-50 px-2 py-0.5 rounded border border-sky-200">Batches &amp; Fee Ledger</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 flex items-center justify-between shadow-2xs">
                        <span className="text-slate-700 font-bold text-[11px]">Tutor Faculty Hub</span>
                        <span className="text-purple-700 font-extrabold text-[10px] bg-purple-50 px-2 py-0.5 rounded border border-purple-200">LiveKit &amp; DRM Vault</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 flex items-center justify-between shadow-2xs">
                        <span className="text-slate-700 font-bold text-[11px]">Learner &amp; Parent Hub</span>
                        <span className="text-emerald-700 font-extrabold text-[10px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Weak-Topic Radar</span>
                      </div>
                    </div>

                    <div className="text-[10px] text-slate-400 text-center pt-1 font-mono">
                      [ CLICK TO READ OFFICIAL WHITEPAPER ]
                    </div>
                  </div>
                </div>

              </div>
            </Link>
          </section>

          {/* ══════════════════════════════════════════════════════════
              BOTTOM ENGINEERING PRINCIPLES SHOWCASE GRID
          ══════════════════════════════════════════════════════════ */}
          <section className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_30px_rgba(15,23,42,0.03)] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-extrabold uppercase tracking-wider text-[#2563EB]">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                  AGARAN ENGINEERING CONSTITUTION
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] leading-tight">
                  We Don&apos;t Build Generic Template Sites. We Architect Production Systems.
                </h3>
              </div>
            </div>

            {/* 5 Engineering Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-3.5">
              <div className="p-4 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] space-y-1.5">
                <div className="text-[10px] font-black uppercase tracking-wider text-[#2563EB]">PILLAR 01 &bull; SECURITY</div>
                <div className="font-extrabold text-slate-900 text-sm">Enterprise Security</div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">Stateless JWT + Silent HttpOnly cookie rotation &amp; zero token leakage.</p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1.5">
                <div className="text-[10px] font-black uppercase tracking-wider text-emerald-700">PILLAR 02 &bull; TENANCY</div>
                <div className="font-extrabold text-slate-900 text-sm">100% Tenant Isolation</div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">Supabase PostgreSQL Row-Level Security (RLS) &amp; Prisma tenant injection.</p>
              </div>

              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 space-y-1.5">
                <div className="text-[10px] font-black uppercase tracking-wider text-[#0284C7]">PILLAR 03 &bull; TYPE SAFETY</div>
                <div className="font-extrabold text-slate-900 text-sm">End-to-End Type Safety</div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">TypeScript, NestJS monorepo, &amp; automated Prisma API contracts.</p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 space-y-1.5">
                <div className="text-[10px] font-black uppercase tracking-wider text-purple-700">PILLAR 04 &bull; DEPLOYMENT</div>
                <div className="font-extrabold text-slate-900 text-sm">Automated CI/CD</div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">Vercel frontend rendering &amp; Railway containerized micro-services.</p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-1.5 col-span-1 sm:col-span-2 lg:col-span-1">
                <div className="text-[10px] font-black uppercase tracking-wider text-amber-700 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                  PILLAR 05 &bull; MONITORING
                </div>
                <div className="font-extrabold text-slate-900 text-sm">24/7 System Monitoring</div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">Continuous uptime tracking, API latency telemetry, &amp; automated alerts.</p>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
