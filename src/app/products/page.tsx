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
            <div className="group block p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-[#BFDBFE] shadow-[0_6px_30px_rgba(37,99,235,0.06)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.14)] hover:border-[#2563EB] transition-all duration-300 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                
                {/* Left Narrative Column (7/12) */}
                <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#BFDBFE]">
                      PRODUCT 01 &bull; AI &bull; EDUCATION &bull; AUTOMATION
                    </span>
                    <span className="text-xs font-extrabold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded flex items-center gap-1.5 border border-amber-200">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                      Status: In Development
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] group-hover:text-[#2563EB] transition-colors leading-tight">
                    AI Education Automation Platform
                  </h2>

                  <p className="text-base sm:text-xl font-extrabold text-[#2563EB]">
                    A Smarter Way to Run Education.
                  </p>

                  <p className="text-xs sm:text-base text-slate-600 leading-relaxed text-left sm:text-justify">
                    An intelligent education platform designed to bring learning, academic management, assessments, communication and everyday institutional workflows into one connected system. Instead of making institutions manage multiple tools and repeat the same tasks every day, the platform uses AI and automation to handle repetitive work, connect information and assist people when they need it.
                  </p>

                  {/* Feature Highlights Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
                    <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200">
                      <div className="font-extrabold text-[#2563EB]">Admissions &amp; Forms</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Online verification &amp; tracking</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200">
                      <div className="font-extrabold text-[#0284C7]">Course &amp; Learning</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Live &amp; recorded content</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200">
                      <div className="font-extrabold text-purple-700">AI Learning Support</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Contextual AI explanations</div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/products/ai-education-platform"
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300 group/btn"
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
                        <span className="ml-1 text-[10px] text-slate-500 font-mono font-bold">PLANNED WORKFLOW ARCHITECTURE</span>
                      </div>
                      <span className="text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-bold text-[10px] uppercase">IN DEV</span>
                    </div>

                    {/* Workflow Chain Visual */}
                    <div className="space-y-2 text-xs">
                      <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between shadow-2xs">
                        <span className="font-bold text-slate-800">01. Admissions &amp; Forms</span>
                        <span className="text-xs text-[#2563EB] font-mono font-bold">Automated</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between shadow-2xs">
                        <span className="font-bold text-slate-800">02. Course &amp; Exams</span>
                        <span className="text-xs text-[#0284C7] font-mono font-bold">Connected</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between shadow-2xs">
                        <span className="font-bold text-slate-800">03. AI Support &amp; Updates</span>
                        <span className="text-xs text-purple-700 font-mono font-bold">Assisted</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#2563EB] text-white text-center font-bold text-xs shadow-xs">
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
            <div className="group block p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-[#BFDBFE] shadow-[0_6px_30px_rgba(37,99,235,0.06)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.14)] hover:border-[#2563EB] transition-all duration-300 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                
                {/* Left Narrative Column (7/12) */}
                <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      PRODUCT 02 &bull; AI &bull; WHATSAPP &bull; BUSINESS AUTOMATION
                    </span>
                    <span className="text-xs font-extrabold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded flex items-center gap-1.5 border border-amber-200">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                      Status: In Development
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] group-hover:text-emerald-700 transition-colors leading-tight">
                    WhatsApp Business Automation Platform
                  </h2>

                  <p className="text-base sm:text-xl font-extrabold text-emerald-700">
                    Your Business, Running Smarter on WhatsApp.
                  </p>

                  <p className="text-xs sm:text-base text-slate-600 leading-relaxed text-left sm:text-justify">
                    A customizable WhatsApp automation platform designed to adapt to the way different businesses work. Businesses can configure their own services, products, FAQs, customer workflows and business rules, while an AI-powered WhatsApp assistant handles conversations, enquiries, follow-ups and routine tasks.
                  </p>

                  {/* Feature Highlights Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
                    <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200">
                      <div className="font-extrabold text-emerald-700">Multi-Business Config</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Adaptable to any industry</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200">
                      <div className="font-extrabold text-[#2563EB]">AI Chat Assistant</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Responds using your business data</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200">
                      <div className="font-extrabold text-[#0284C7]">Automated Workflows</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Follow-ups, leads &amp; bookings</div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/products/whatsapp-automation"
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300 group/btn"
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
                        <span className="text-[11px] font-extrabold text-slate-800">WHATSAPP AUTOMATION PIPELINE</span>
                      </div>
                      <span className="text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-bold text-[10px] uppercase">IN DEV</span>
                    </div>

                    {/* Chat Bubble Flow Preview */}
                    <div className="space-y-2.5 text-xs font-sans">
                      <div className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-2xs">
                        <div className="text-[10px] font-bold text-slate-400 uppercase mb-0.5">CUSTOMER MESSAGE</div>
                        <div>&ldquo;Hi, what are your service timings and booking availability?&rdquo;</div>
                      </div>
                      <div className="p-3 rounded-xl bg-emerald-600 text-white font-medium shadow-2xs ml-4">
                        <div className="text-[10px] font-extrabold text-emerald-200 uppercase mb-0.5">AI ASSISTANT RESPONSE</div>
                        <div>&ldquo;We are open Mon-Sat 9AM-8PM. Would you like to check available slots for today?&rdquo;</div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white border border-emerald-200 text-center font-extrabold text-emerald-700 text-xs">
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
