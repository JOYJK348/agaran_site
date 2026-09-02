"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ProductWhatsAppPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] pt-20 sm:pt-28 pb-16 sm:pb-24 px-3 sm:px-8 lg:px-16 font-sans selection:bg-[#2563EB] selection:text-white">

        <article className="max-w-[1440px] mx-auto bg-white border border-slate-200/90 shadow-[0_4px_30px_rgba(15,23,42,0.03)] rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden">

          {/* ── Top Navigation Bar ── */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 sm:mb-8 border-b border-slate-200 text-xs sm:text-sm font-semibold text-slate-500">
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <Link href="/" className="hover:text-[#2563EB] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-[#2563EB] transition-colors">Products</Link>
              <span>/</span>
              <span className="text-[#0F172A] font-bold truncate">WhatsApp Business Automation Platform</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-amber-50 border border-amber-200/90 text-amber-800 font-extrabold text-[10px] sm:text-xs uppercase tracking-wider shadow-2xs self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              PRODUCT SPECIFICATION &bull; STATUS: IN DEVELOPMENT
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              HEADER — PRODUCT TITLE & HERO NARRATIVE
          ══════════════════════════════════════════════════════════ */}
          <header className="mb-10 sm:mb-14">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 font-extrabold text-[10px] sm:text-xs uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                AI &bull; WHATSAPP &bull; BUSINESS AUTOMATION
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 font-extrabold text-[10px] sm:text-xs uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                Status: In Development
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.75rem] font-black tracking-tight text-[#0F172A] leading-[1.12] mb-4">
              WhatsApp Business Automation Platform
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-[#0284C7] to-[#2563EB] mb-6">
              Your Business, Running Smarter on WhatsApp.
            </p>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50/80 border border-slate-200/90 mb-8 space-y-4 text-slate-700 text-sm sm:text-lg font-medium leading-relaxed">
              <p>Every business works differently.</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs sm:text-sm font-bold text-slate-800 pt-1">
                <span className="p-2.5 rounded-xl bg-white border border-slate-200 text-center">A salon doesn&apos;t work like a gym.</span>
                <span className="p-2.5 rounded-xl bg-white border border-slate-200 text-center">A fashion brand doesn&apos;t work like a restaurant.</span>
                <span className="p-2.5 rounded-xl bg-white border border-slate-200 text-center">A coaching centre doesn&apos;t work like a service firm.</span>
                <span className="p-2.5 rounded-xl bg-white border border-slate-200 text-center">A clinic doesn&apos;t work like a store.</span>
              </div>
              <p className="pt-2 text-left sm:text-justify">
                That&apos;s why Agaran is building a WhatsApp automation platform that can adapt to each business instead of forcing every business into the same workflow.
              </p>
            </div>
          </header>

          {/* ── Product UI Visual / WhatsApp Chat Simulation Mockup ── */}
          <div className="mb-12 sm:mb-16 relative">
            <div className="w-full rounded-2xl overflow-hidden bg-[#F8FAFC] border border-slate-200 shadow-2xs relative p-4 sm:p-6 text-slate-800 flex flex-col justify-between gap-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 text-xs font-mono gap-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="font-bold text-slate-800 text-xs">WHATSAPP AI AUTOMATION STUDIO</span>
                </div>
                <div className="text-[10px] font-mono uppercase bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1 rounded-md font-bold self-start sm:self-auto flex items-center gap-1.5 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  PLANNED SYSTEM ARCHITECTURE &bull; IN DEVELOPMENT
                </div>
              </div>

              {/* Chat Simulation Container */}
              <div className="p-4 sm:p-6 rounded-2xl bg-[#075E54]/5 border border-emerald-200 space-y-3 font-sans text-xs">
                <div className="p-3 rounded-2xl bg-white border border-slate-200 max-w-md shadow-2xs">
                  <span className="text-[10px] font-bold text-slate-400 block mb-0.5">CUSTOMER ENQUIRY</span>
                  <span>&ldquo;Hello! Can I see your current product catalog and pricing details?&rdquo;</span>
                </div>

                <div className="p-3 rounded-2xl bg-[#DCF8C6] border border-emerald-300 max-w-md ml-auto text-slate-900 shadow-2xs">
                  <span className="text-[10px] font-bold text-emerald-800 block mb-0.5">AGARAN AI WHATSAPP ASSISTANT</span>
                  <span>&ldquo;Welcome! Here is our current catalog. Tap below to select items or book a service consultation directly!&rdquo;</span>
                </div>

                <div className="p-3 rounded-2xl bg-white border border-emerald-200 text-center font-bold text-emerald-700 text-xs shadow-2xs">
                  Automated Order &bull; Lead Saved &bull; Follow-Up Scheduled
                </div>
              </div>
            </div>
          </div>

          <hr className="border-slate-200 my-10 sm:my-14" />

          {/* ══════════════════════════════════════════════════════════
              01 — THE PROBLEM
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-12 sm:mb-16 scroll-mt-24" id="problem">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-black uppercase tracking-widest text-white bg-rose-600 px-2.5 py-1 rounded">01</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">THE PROBLEM</h2>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] mb-4">
              Every Business Has Repetitive Conversations.
            </h3>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-6 text-justify">
              Businesses receive the same types of questions every day from customers regarding products, services, pricing, availability, timings, appointments, orders, status updates, and location directions. Business owners or staff often have to answer these manually. Then there are follow-ups, reminders, customer updates and other repetitive tasks.
            </p>

            <div className="p-6 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-4">
              <div className="text-xs font-black uppercase tracking-wider text-rose-700 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-600" />
                Common Daily Customer Enquiries:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-xs font-bold text-slate-700 text-center">
                {["Products", "Services", "Pricing", "Availability", "Timings", "Appointments", "Orders", "Status Updates", "Locations", "General Info"].map((item) => (
                  <div key={item} className="p-2.5 rounded-xl bg-white border border-rose-200/80 shadow-2xs">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              02 — THE IDEA & HOW IT WORKS
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-12 sm:mb-16 scroll-mt-24" id="how-it-works">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-black uppercase tracking-widest text-white bg-[#2563EB] px-2.5 py-1 rounded">02</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">THE IDEA &amp; WORKFLOW</h2>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] mb-4">
              One Platform. Different Businesses. Their Own Rules.
            </h3>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-6 text-justify">
              The platform doesn&apos;t assume that every business works the same way. Instead, each business can configure its own information, products, services, FAQs, customer workflows, automated responses, follow-up rules, and AI assistant behaviour.
            </p>

            {/* How It Works 6-Step Visual Chain */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-[#0284C7] text-white shadow-lg space-y-4 mb-6">
              <div className="text-xs font-black uppercase tracking-widest text-emerald-200">HOW IT WORKS &bull; 6-STEP WORKFLOW</div>
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-3 text-center text-xs font-extrabold">
                {[
                  { step: "01", label: "Connect", sub: "WhatsApp Business" },
                  { step: "02", label: "Configure", sub: "Services & Rules" },
                  { step: "03", label: "Teach", sub: "Train AI Engine" },
                  { step: "04", label: "Automate", sub: "Routine Flows" },
                  { step: "05", label: "Assist", sub: "AI Customer Chat" },
                  { step: "06", label: "Improve", sub: "Update & Scale" },
                ].map((s) => (
                  <div key={s.step} className="p-3 rounded-2xl bg-white/15 border border-white/25 space-y-1">
                    <div className="text-[10px] font-mono text-emerald-200">{s.step}</div>
                    <div className="text-sm font-black">{s.label}</div>
                    <div className="text-[10px] text-white/80 font-normal">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              03 — WHAT IT CAN HANDLE & INDUSTRY WORKFLOWS
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-12 sm:mb-16 scroll-mt-24" id="capabilities">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2.5 py-1 rounded">03</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">BUILT FOR DIFFERENT BUSINESSES</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                { industry: "Salon & Spa", flow: "Services → Availability → Appointment → Reminder", color: "text-[#2563EB]" },
                { industry: "Fashion & Retail", flow: "Product → Enquiry → Order → Status Update", color: "text-emerald-700" },
                { industry: "Gym & Fitness", flow: "Membership → Enquiry → Follow-up → Renewal", color: "text-[#0284C7]" },
                { industry: "Restaurant & Cafe", flow: "Menu → Enquiry → Order → Delivery Update", color: "text-amber-800" },
                { industry: "Coaching / Training", flow: "Course → Enquiry → Registration → Follow-up", color: "text-purple-700" },
                { industry: "Service Business", flow: "Service → Requirement → Quote → Follow-up", color: "text-[#2563EB]" },
              ].map((ind) => (
                <div key={ind.industry} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3 hover:border-emerald-500 transition-colors">
                  <div className={`font-black text-lg ${ind.color}`}>{ind.industry}</div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-extrabold text-slate-800">
                    {ind.flow}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] text-slate-800 text-xs sm:text-sm font-bold text-center">
              The platform remains the same. <strong className="font-extrabold text-[#2563EB]">The business configuration changes.</strong>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              04 — AI + AUTOMATION & BUSINESS CONFIGURATION
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-12 sm:mb-16 scroll-mt-24" id="ai-engine">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2.5 py-1 rounded">04</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">AI + AUTOMATION ENGINE</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4">
                <h3 className="text-lg font-extrabold text-[#0F172A]">AI Engine</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                  Understands customer questions and responds using the business context provided during configuration.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2 font-mono">
                  <div className="font-extrabold text-emerald-800">01. Initial WhatsApp Lead Message &amp; Capture</div>
                  <div className="text-emerald-600 font-bold">&darr; 02. AI Intent Understanding &amp; Qualification</div>
                  <div className="text-[#2563EB] font-bold">&darr; 03. System Checks Catalog, Pricing &amp; Rules</div>
                  <div className="text-[#0284C7] font-bold">&darr; 04. Instant Response, Booking or Quote Generated</div>
                  <div className="text-purple-700 font-bold">&darr; 05. Automated Follow-Up &amp; Lead Conversion</div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4">
                <h3 className="text-lg font-extrabold text-[#0F172A]">Business Configuration Panel</h3>
                <div className="grid grid-cols-2 gap-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="text-slate-900 block mb-0.5">Business Profile</strong>
                    <span className="text-[11px] text-slate-500">Name, location, timings, contact</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="text-slate-900 block mb-0.5">Products &amp; Services</strong>
                    <span className="text-[11px] text-slate-500">Offers, prices, details</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="text-slate-900 block mb-0.5">FAQs &amp; Rules</strong>
                    <span className="text-[11px] text-slate-500">Common questions &amp; answers</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="text-slate-900 block mb-0.5">AI Behaviour</strong>
                    <span className="text-[11px] text-slate-500">Tone, scope, limits</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              05 — CURRENT DEVELOPMENT STATUS & VISION
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-12 sm:mb-16 scroll-mt-24" id="status-vision">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-sky-50 border border-emerald-200 text-slate-800 space-y-6 shadow-xs">
              <div className="flex items-center justify-between border-b border-emerald-200 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-widest text-emerald-700">CURRENT STATUS &bull; IN DEVELOPMENT</span>
                </div>
                <span className="text-xs font-extrabold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  Active Engineering
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-black text-[#0F172A] mb-2">Current Development Focus</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed text-justify mb-4">
                    The platform is currently being designed and developed. The focus is on building the core multi-business architecture, business configuration system, WhatsApp integration, AI assistant layer and automation workflows.
                  </p>
                  <ul className="grid grid-cols-2 gap-2 text-xs font-bold text-emerald-700">
                    <li className="p-2 rounded-xl bg-white border border-emerald-200 flex items-center gap-1.5 shadow-2xs">
                      <span className="text-emerald-500 font-bold">✓</span> Multi-business architecture
                    </li>
                    <li className="p-2 rounded-xl bg-white border border-emerald-200 flex items-center gap-1.5 shadow-2xs">
                      <span className="text-emerald-500 font-bold">✓</span> WhatsApp API integration
                    </li>
                    <li className="p-2 rounded-xl bg-white border border-emerald-200 flex items-center gap-1.5 shadow-2xs">
                      <span className="text-emerald-500 font-bold">✓</span> Business onboarding panel
                    </li>
                    <li className="p-2 rounded-xl bg-white border border-emerald-200 flex items-center gap-1.5 shadow-2xs">
                      <span className="text-emerald-500 font-bold">✓</span> Custom catalog configuration
                    </li>
                    <li className="p-2 rounded-xl bg-white border border-emerald-200 flex items-center gap-1.5 shadow-2xs">
                      <span className="text-emerald-500 font-bold">✓</span> AI assistant prompt engine
                    </li>
                    <li className="p-2 rounded-xl bg-white border border-emerald-200 flex items-center gap-1.5 shadow-2xs">
                      <span className="text-emerald-500 font-bold">✓</span> Lead &amp; booking automation
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-black text-[#0F172A] mb-2">The Bigger Vision</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed text-justify mb-4">
                    WhatsApp is already where many businesses communicate with customers. The goal is to make it more than a messaging channel — a place where customers ask, discover, book, order, and get support while the business automates the work behind those conversations.
                  </p>
                  <div className="p-4 rounded-2xl bg-white border border-emerald-200 space-y-2 text-xs">
                    <div className="font-extrabold text-slate-900">Why We Build Differently:</div>
                    <p className="text-slate-600 leading-relaxed text-justify">
                      Every business gets its own isolated environment, custom context, and rules — delivering authentic customer engagement without generic bot responses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              BOTTOM NAVIGATION & CTA
          ══════════════════════════════════════════════════════════ */}
          <footer className="pt-8 border-t border-slate-200 space-y-8">
            <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-[#0284C7] text-white text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl font-black">What Could Your Business Automate?</h2>
              <p className="text-xs sm:text-sm text-emerald-100 max-w-xl mx-auto">
                Tell us how your business currently handles customer conversations and repetitive work. We&apos;ll explore what could be automated.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-emerald-700 font-black text-xs sm:text-sm shadow-md hover:bg-slate-50 transition-all"
                >
                  <span>Start a Conversation</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-bold text-slate-500">
              <Link href="/products" className="hover:text-[#2563EB] transition-colors">&larr; Back to Products</Link>
              <Link href="/products/ai-education-platform" className="hover:text-[#2563EB] transition-colors">Previous Product: AI Education Platform &rarr;</Link>
            </div>
          </footer>

        </article>

      </main>

      <Footer />
    </>
  );
}
