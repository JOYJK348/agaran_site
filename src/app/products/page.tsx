"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] pt-20 sm:pt-28 pb-16 sm:pb-24 px-3 sm:px-8 lg:px-16 font-sans selection:bg-[#2563EB] selection:text-white relative overflow-hidden">
        
        {/* Ambient Radial Mesh Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#BFDBFE_1px,transparent_1px)] [background-size:32px_32px] opacity-35 pointer-events-none" />

        <div className="relative max-w-[1440px] mx-auto w-full space-y-10 sm:space-y-14">
          
          {/* ══════════════════════════════════════════════════════════
              HEADER SECTION — EXECUTIVE PRODUCTS HERO
          ══════════════════════════════════════════════════════════ */}
          <header className="text-center w-full max-w-5xl mx-auto mb-8 sm:mb-12">
            <div className="flex justify-center mb-5">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#2563EB] shadow-2xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] animate-pulse" />
                AGARAN PRODUCTS &bull; OWN IP &amp; PLATFORMS
              </div>
            </div>

            <h1 className="text-center text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.4rem] font-black leading-[1.12] tracking-[-0.035em] text-[#0F172A] w-full max-w-5xl mx-auto mb-5">
              Things We&apos;re{" "}
              <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                Building.
              </span>
            </h1>

            <p className="text-center text-sm sm:text-lg lg:text-xl font-medium leading-relaxed text-slate-600 w-full max-w-4xl mx-auto mb-6 text-justify sm:text-center">
              Agaran is building its own technology products to solve real problems across education, business, communication and everyday operations. Our products are designed around a simple idea: <strong className="font-extrabold text-[#0F172A]">technology should reduce unnecessary work, not create more of it.</strong>
            </p>

            {/* In Development Assurance Banner */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-amber-50 border border-amber-200/90 text-amber-800 text-xs sm:text-sm font-bold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>Authentic Engineering: All products below are actively <strong>In Development</strong>.</span>
            </div>
          </header>

          {/* ══════════════════════════════════════════════════════════
              PRODUCT 01 — AI EDUCATION AUTOMATION PLATFORM
          ══════════════════════════════════════════════════════════ */}
          <section className="scroll-mt-24" id="ai-education">
            <div className="group block p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-[#BFDBFE] shadow-[0_8px_35px_rgba(37,99,235,0.08)] hover:shadow-[0_22px_55px_rgba(37,99,235,0.16)] hover:border-[#2563EB] transition-all duration-300 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                
                {/* Left Narrative Column (7/12) */}
                <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10.5px] sm:text-xs font-black uppercase tracking-wider text-[#2563EB] bg-[#EFF6FF] px-3.5 py-1.5 rounded-full border border-[#BFDBFE] shadow-2xs">
                      PRODUCT 01 &bull; AI &bull; EDUCATION &bull; AUTOMATION
                    </span>
                    <span className="text-xs font-black text-amber-800 bg-amber-50 px-3 py-1 rounded-full flex items-center gap-1.5 border border-amber-200 shadow-2xs">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                      Status: In Development
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] group-hover:text-[#2563EB] transition-colors leading-tight tracking-tight">
                    AI Education Automation Platform
                  </h2>

                  <p className="text-base sm:text-xl font-black bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                    A Smarter Way to Run Education.
                  </p>

                  <p className="text-xs sm:text-base text-slate-600 font-medium leading-relaxed text-left sm:text-justify">
                    An intelligent education platform designed to bring <strong className="font-extrabold text-[#0F172A]">student lead capture</strong>, <strong className="font-extrabold text-[#2563EB]">online admissions</strong>, <strong className="font-extrabold text-[#0284C7]">learning management (LMS)</strong>, <strong className="font-extrabold text-purple-700">digital/offline exams</strong>, and <strong className="font-extrabold text-[#0F172A]">parent communication</strong> into one connected system. From the first student inquiry to ongoing academic progress, the platform automates repetitive work seamlessly.
                  </p>

                  {/* Feature Highlights Grid — Bold & Colorful Pills */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-xs">
                    <div className="p-3.5 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] shadow-2xs hover:scale-[1.02] transition-transform">
                      <div className="font-black text-[#2563EB] flex items-center gap-1.5 text-xs sm:text-sm">
                        <span className="text-emerald-500 font-bold">✓</span> Admissions &amp; Forms
                      </div>
                      <div className="text-[11px] font-bold text-slate-500 mt-1">Lead capture &amp; verification</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 shadow-2xs hover:scale-[1.02] transition-transform">
                      <div className="font-black text-[#0284C7] flex items-center gap-1.5 text-xs sm:text-sm">
                        <span className="text-emerald-500 font-bold">✓</span> Course &amp; Learning
                      </div>
                      <div className="text-[11px] font-bold text-slate-500 mt-1">Live &amp; Cloud video LMS</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-purple-50 border border-purple-200 shadow-2xs hover:scale-[1.02] transition-transform">
                      <div className="font-black text-purple-700 flex items-center gap-1.5 text-xs sm:text-sm">
                        <span className="text-emerald-500 font-bold">✓</span> AI Doubt Support
                      </div>
                      <div className="text-[11px] font-bold text-slate-500 mt-1">24/7 AI tutor explanations</div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/products/ai-education-platform"
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] hover:shadow-[0_10px_25px_rgba(37,99,235,0.3)] text-white font-black text-xs sm:text-sm transition-all duration-300 group/btn shadow-md"
                    >
                      <span>View Product Details</span>
                      <span className="text-base group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                    </Link>
                  </div>
                </div>

                {/* Right Visual Interactive Pipeline Mockup (5/12) */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-gradient-to-br from-[#EFF6FF] via-white to-[#DBEAFE]/40 border border-[#BFDBFE] p-5 sm:p-6 text-slate-800 flex flex-col justify-between font-sans text-xs shadow-2xs space-y-4">
                    <div className="flex items-center justify-between border-b border-[#BFDBFE] pb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        <span className="ml-1 text-[11px] text-slate-800 font-black">PLANNED WORKFLOW ARCHITECTURE</span>
                      </div>
                      <span className="text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200 font-black text-[10px] uppercase">IN DEV</span>
                    </div>

                    {/* Workflow Chain Visual */}
                    <div className="space-y-2.5 text-xs">
                      <div className="p-3 rounded-xl bg-white border border-[#BFDBFE] flex items-center justify-between shadow-2xs">
                        <span className="font-black text-[#0F172A]">01. Lead Capture &amp; Admissions</span>
                        <span className="text-xs text-[#2563EB] font-black uppercase bg-[#EFF6FF] px-2 py-0.5 rounded border border-[#BFDBFE]">Automated</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-sky-200 flex items-center justify-between shadow-2xs">
                        <span className="font-black text-[#0F172A]">02. LMS &amp; Exam Engine</span>
                        <span className="text-xs text-[#0284C7] font-black uppercase bg-sky-50 px-2 py-0.5 rounded border border-sky-200">Connected</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-purple-200 flex items-center justify-between shadow-2xs">
                        <span className="font-black text-[#0F172A]">03. AI Tutor &amp; Parent Reports</span>
                        <span className="text-xs text-purple-700 font-black uppercase bg-purple-50 px-2 py-0.5 rounded border border-purple-200">Assisted</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] text-white text-center font-black text-xs shadow-xs uppercase tracking-wider">
                      Manage &rarr; Automate &rarr; Assist &rarr; Improve
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              PRODUCT 02 — WHATSAPP BUSINESS AUTOMATION PLATFORM
          ══════════════════════════════════════════════════════════ */}
          <section className="scroll-mt-24" id="whatsapp-automation">
            <div className="group block p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-emerald-200 shadow-[0_8px_35px_rgba(16,185,129,0.08)] hover:shadow-[0_22px_55px_rgba(16,185,129,0.16)] hover:border-emerald-500 transition-all duration-300 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                
                {/* Left Narrative Column (7/12) */}
                <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10.5px] sm:text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 shadow-2xs">
                      PRODUCT 02 &bull; AI &bull; WHATSAPP &bull; BUSINESS AUTOMATION
                    </span>
                    <span className="text-xs font-black text-amber-800 bg-amber-50 px-3 py-1 rounded-full flex items-center gap-1.5 border border-amber-200 shadow-2xs">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                      Status: In Development
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] group-hover:text-emerald-700 transition-colors leading-tight tracking-tight">
                    WhatsApp Business Automation Platform
                  </h2>

                  <p className="text-base sm:text-xl font-black bg-gradient-to-r from-emerald-600 via-[#0284C7] to-[#2563EB] bg-clip-text text-transparent">
                    Your Business, Running Smarter on WhatsApp.
                  </p>

                  <p className="text-xs sm:text-base text-slate-600 font-medium leading-relaxed text-left sm:text-justify">
                    A customizable WhatsApp automation platform designed to automate your entire business workflow starting right from <strong className="font-extrabold text-[#0F172A]">initial lead capture</strong>. Businesses configure their products, services, and rules, while an <strong className="font-extrabold text-emerald-700">AI-powered WhatsApp assistant</strong> handles <strong className="font-extrabold text-[#2563EB]">lead generation</strong>, <strong className="font-extrabold text-[#0284C7]">quotes &amp; follow-ups</strong> automatically.
                  </p>

                  {/* Feature Highlights Grid — Bold & Colorful Pills */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-xs">
                    <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 shadow-2xs hover:scale-[1.02] transition-transform">
                      <div className="font-black text-emerald-800 flex items-center gap-1.5 text-xs sm:text-sm">
                        <span className="text-emerald-600 font-bold">✓</span> Multi-Business Config
                      </div>
                      <div className="text-[11px] font-bold text-slate-500 mt-1">Adaptable to any industry</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200 shadow-2xs hover:scale-[1.02] transition-transform">
                      <div className="font-black text-[#2563EB] flex items-center gap-1.5 text-xs sm:text-sm">
                        <span className="text-emerald-600 font-bold">✓</span> AI Chat Assistant
                      </div>
                      <div className="text-[11px] font-bold text-slate-500 mt-1">Responds using business data</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 shadow-2xs hover:scale-[1.02] transition-transform">
                      <div className="font-black text-[#0284C7] flex items-center gap-1.5 text-xs sm:text-sm">
                        <span className="text-emerald-600 font-bold">✓</span> Lead Workflows
                      </div>
                      <div className="text-[11px] font-bold text-slate-500 mt-1">Follow-ups, leads &amp; bookings</div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/products/whatsapp-automation"
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-[#0284C7] hover:shadow-[0_10px_25px_rgba(16,185,129,0.3)] text-white font-black text-xs sm:text-sm transition-all duration-300 group/btn shadow-md"
                    >
                      <span>View Product Details</span>
                      <span className="text-base group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                    </Link>
                  </div>
                </div>

                {/* Right Visual Chat Workflow Visual (5/12) */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-sky-50 border border-emerald-200 p-5 sm:p-6 text-slate-800 flex flex-col justify-between font-sans text-xs shadow-2xs space-y-4">
                    <div className="flex items-center justify-between border-b border-emerald-200 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        <span className="text-[11px] font-black text-slate-800">WHATSAPP AUTOMATION PIPELINE</span>
                      </div>
                      <span className="text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200 font-black text-[10px] uppercase">IN DEV</span>
                    </div>

                    {/* Chat Bubble Flow Preview */}
                    <div className="space-y-2.5 text-xs font-sans">
                      <div className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-2xs">
                        <div className="text-[10px] font-black text-slate-400 uppercase mb-0.5">CUSTOMER ENQUIRY</div>
                        <div className="font-semibold">&ldquo;Hi, what are your service timings and booking availability?&rdquo;</div>
                      </div>
                      <div className="p-3 rounded-xl bg-emerald-600 text-white font-medium shadow-2xs ml-4">
                        <div className="text-[10px] font-black text-emerald-200 uppercase mb-0.5">AI ASSISTANT RESPONSE</div>
                        <div className="font-bold">&ldquo;We are open Mon-Sat 9AM-8PM. Would you like to check available slots for today?&rdquo;</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-700 to-emerald-600 text-white text-center font-black text-xs shadow-xs uppercase tracking-wider">
                      Connect &rarr; Configure &rarr; Teach &rarr; Automate
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              FINAL CALL TO ACTION
          ══════════════════════════════════════════════════════════ */}
          <section className="pt-6 sm:pt-10">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] text-white shadow-xl text-center space-y-4">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
                Want to Explore Product Capabilities for Your Organization?
              </h2>
              <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto font-medium">
                We are actively refining these platforms. Tell us your institutional or business requirements and we&apos;ll explore how our technology can help.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-white text-[#2563EB] font-black text-sm shadow-md hover:bg-slate-50 hover:scale-105 transition-all duration-300"
                >
                  <span>Start a Conversation</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </section>

        </div>

      </main>

      <Footer />
    </>
  );
}
