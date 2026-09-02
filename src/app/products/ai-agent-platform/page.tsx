"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ProductAIAgentPlatformPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] pt-20 sm:pt-28 pb-16 sm:pb-24 px-3 sm:px-8 lg:px-16 font-sans selection:bg-[#2563EB] selection:text-white">

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[1440px] mx-auto bg-white border border-slate-200/90 shadow-[0_4px_30px_rgba(15,23,42,0.03)] rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden"
        >

          {/* ── Top Navigation Bar ── */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 sm:mb-8 border-b border-slate-200 text-xs sm:text-sm font-semibold text-slate-500">
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <Link href="/" className="hover:text-[#2563EB] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-[#2563EB] transition-colors">Products</Link>
              <span>/</span>
              <span className="text-[#0F172A] font-bold truncate">AI Agent Platform</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] font-extrabold text-[10px] sm:text-xs uppercase tracking-wider shadow-2xs self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
              PRODUCT CONCEPT &bull; STATUS: EXPLORING
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              HEADER — PRODUCT TITLE & HERO NARRATIVE
          ══════════════════════════════════════════════════════════ */}
          <header className="mb-10 sm:mb-14">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] font-extrabold text-[10px] sm:text-xs uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                AI &bull; AGENTS &bull; BUSINESS OPERATIONS
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#DBEAFE] border border-[#BFDBFE] text-[#1D4ED8] font-extrabold text-[10px] sm:text-xs uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                Status: Exploring Concept
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.75rem] font-black tracking-tight text-[#0F172A] leading-[1.12] mb-4">
              AI Agent Platform
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] mb-6">
              A Company Where AI Agents Work Alongside People.
            </p>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50/80 border border-slate-200/90 mb-8 space-y-4 text-slate-700 text-sm sm:text-lg font-medium leading-relaxed">
              <p className="text-left sm:text-justify">
                Running a company involves hundreds of small decisions and repetitive tasks every day.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs sm:text-sm font-bold text-slate-800 pt-1">
                <span className="p-2.5 rounded-xl bg-white border border-slate-200">Respond to enquiries</span>
                <span className="p-2.5 rounded-xl bg-white border border-slate-200">Follow up with leads</span>
                <span className="p-2.5 rounded-xl bg-white border border-slate-200">Prepare business reports</span>
                <span className="p-2.5 rounded-xl bg-white border border-slate-200">Answer internal questions</span>
                <span className="p-2.5 rounded-xl bg-white border border-slate-200">Monitor daily operations</span>
                <span className="p-2.5 rounded-xl bg-white border border-slate-200">Coordinate workflow tasks</span>
              </div>
              <p className="pt-2 text-left sm:text-justify font-extrabold text-[#0F172A]">
                What if many of these responsibilities could be handled by specialised AI agents working together as a digital team? That&apos;s the idea we are exploring.
              </p>
            </div>
          </header>

          {/* ── Visual Digital Workforce Architecture Mockup ── */}
          <div className="mb-12 sm:mb-16 relative">
            <div className="w-full rounded-2xl overflow-hidden bg-[#F8FAFC] border border-slate-200 shadow-2xs relative p-4 sm:p-6 text-slate-800 flex flex-col justify-between gap-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 text-xs font-mono gap-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#2563EB]" />
                  <span className="font-bold text-slate-800 text-xs">AGARAN DIGITAL WORKFORCE STUDIO</span>
                </div>
                <div className="text-[10px] font-mono uppercase bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] px-3 py-1 rounded-md font-bold self-start sm:self-auto flex items-center gap-1.5 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                  EXPLORING CONCEPT ARCHITECTURE
                </div>
              </div>

              {/* Inter-Agent Network Visual */}
              <div className="p-4 sm:p-6 rounded-2xl bg-[#EFF6FF]/60 border border-[#BFDBFE] space-y-3 font-sans text-xs">
                <div className="text-center font-extrabold text-[#1D4ED8] text-sm">
                  AI Agent &rarr; AI Team &rarr; AI Workforce &rarr; AI-Powered Company
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center text-xs font-bold text-slate-800">
                  <div className="p-3 rounded-xl bg-white border border-[#BFDBFE]">Sales Agent</div>
                  <div className="p-3 rounded-xl bg-white border border-blue-200">Knowledge Agent</div>
                  <div className="p-3 rounded-xl bg-white border border-sky-200">Support Agent</div>
                  <div className="p-3 rounded-xl bg-white border border-emerald-200">Ops &amp; Finance</div>
                </div>

                <div className="p-3 rounded-xl bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] text-white text-center font-black text-xs shadow-2xs">
                  Autonomous Inter-Agent Collaboration + Human Approval Oversight
                </div>
              </div>
            </div>
          </div>

          <hr className="border-slate-200 my-10 sm:my-14" />

          {/* ══════════════════════════════════════════════════════════
              01 — NOT ONE AI. A WHOLE TEAM.
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-12 sm:mb-16 scroll-mt-24" id="human-ai-team">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-black uppercase tracking-widest text-white bg-[#2563EB] px-2.5 py-1 rounded">01</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">NOT ONE AI. A WHOLE TEAM.</h2>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] mb-4">
              People Decide What Matters. AI Helps Get the Work Done.
            </h3>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-6 text-justify">
              Instead of giving a business one generic AI assistant, the platform is designed around a team of specialised agents. Each agent takes care of a specific operational responsibility.
            </p>

            {/* Split Comparison Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Human Team */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-blue-50/60 to-white border border-[#BFDBFE] space-y-4">
                <div className="text-xs font-black uppercase tracking-widest text-[#2563EB] bg-white px-3 py-1 rounded-full border border-[#BFDBFE] inline-block">
                  HUMAN TEAM RESPONSIBILITIES
                </div>
                <h4 className="text-lg font-black text-[#0F172A]">Where People Excel</h4>
                <ul className="grid grid-cols-2 gap-2 text-xs font-extrabold text-slate-800">
                  <li className="p-2.5 rounded-xl bg-white border border-slate-200">✓ Strategy &amp; Vision</li>
                  <li className="p-2.5 rounded-xl bg-white border border-slate-200">✓ Creative Thinking</li>
                  <li className="p-2.5 rounded-xl bg-white border border-slate-200">✓ Client Relationships</li>
                  <li className="p-2.5 rounded-xl bg-white border border-slate-200">✓ Critical Decisions</li>
                  <li className="p-2.5 rounded-xl bg-white border border-slate-200">✓ Leadership</li>
                  <li className="p-2.5 rounded-xl bg-white border border-slate-200">✓ Complex Problem Solving</li>
                </ul>
              </div>

              {/* AI Team */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-sky-50/60 to-white border border-sky-200 space-y-4">
                <div className="text-xs font-black uppercase tracking-widest text-[#0284C7] bg-white px-3 py-1 rounded-full border border-sky-200 inline-block">
                  AI TEAM RESPONSIBILITIES
                </div>
                <h4 className="text-lg font-black text-[#0F172A]">Where Digital Workforce Excels</h4>
                <ul className="grid grid-cols-2 gap-2 text-xs font-extrabold text-slate-800">
                  <li className="p-2.5 rounded-xl bg-white border border-slate-200">✓ Repetitive Work</li>
                  <li className="p-2.5 rounded-xl bg-white border border-slate-200">✓ Info Processing</li>
                  <li className="p-2.5 rounded-xl bg-white border border-slate-200">✓ System Monitoring</li>
                  <li className="p-2.5 rounded-xl bg-white border border-slate-200">✓ Lead Follow-Ups</li>
                  <li className="p-2.5 rounded-xl bg-white border border-slate-200">✓ Routine Communication</li>
                  <li className="p-2.5 rounded-xl bg-white border border-slate-200">✓ Task Execution</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              02 — THE 8 SPECIALISED AI AGENTS
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-12 sm:mb-16 scroll-mt-24" id="agents-breakdown">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2.5 py-1 rounded">02</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">THE 8 SPECIALISED AI AGENTS</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  name: "CEO / Strategy Agent",
                  role: "Executive Insights & Monitoring",
                  desc: "Summarises business activity, tracks metrics, highlights operational bottlenecks, and prepares reports for leadership.",
                  color: "text-[#1D4ED8]",
                  badge: "EXECUTIVE"
                },
                {
                  name: "Sales Agent",
                  role: "Pipeline & Lead Qualification",
                  desc: "Captures enquiries, qualifies leads, updates CRM, conducts follow-ups, and alerts human sales teams when required.",
                  color: "text-[#2563EB]",
                  badge: "SALES"
                },
                {
                  name: "Customer Support Agent",
                  role: "24/7 Enquiry & Ticket Resolution",
                  desc: "Answers customer questions, searches company info, resolves common requests, creates tickets, and escalates complex issues.",
                  color: "text-emerald-700",
                  badge: "SUPPORT"
                },
                {
                  name: "Marketing Agent",
                  role: "Campaign & Content Assistance",
                  desc: "Researches topics, generates content ideas, assists with campaigns, analyses performance, and maintains content workflows.",
                  color: "text-[#0284C7]",
                  badge: "MARKETING"
                },
                {
                  name: "Operations Agent",
                  role: "Workflow & System Coordination",
                  desc: "Monitors business workflows, checks pending tasks, detects delays, triggers routine actions, and coordinates tools.",
                  color: "text-amber-800",
                  badge: "OPERATIONS"
                },
                {
                  name: "Finance Agent",
                  role: "Invoices & Payment Monitoring",
                  desc: "Monitors invoices, tracks pending payments, prepares summaries, and alerts responsible teams (sensitive actions require human approval).",
                  color: "text-[#2563EB]",
                  badge: "FINANCE"
                },
                {
                  name: "HR / People Agent",
                  role: "Internal Employee Workflows",
                  desc: "Answers internal HR questions, assists with onboarding, shares company policies, and tracks routine employee requests.",
                  color: "text-[#0284C7]",
                  badge: "HR & PEOPLE"
                },
                {
                  name: "Knowledge Agent",
                  role: "Internal Source of Truth",
                  desc: "Ingests company documents, policies, product specs, and SOPs so employees can search company knowledge instantly.",
                  color: "text-[#1D4ED8]",
                  badge: "KNOWLEDGE HUB"
                },
              ].map((agent) => (
                <div key={agent.name} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between hover:border-[#2563EB] transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#2563EB] bg-[#EFF6FF] px-2.5 py-0.5 rounded-full border border-[#BFDBFE]">
                        {agent.badge}
                      </span>
                    </div>

                    <h3 className={`text-base font-black ${agent.color} mb-0.5`}>{agent.name}</h3>
                    <div className="text-[11px] font-bold text-slate-500 mb-2">{agent.role}</div>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify">{agent.desc}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 text-[10px] font-bold text-slate-400">
                    Specialised Digital Worker
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              03 — AGENTS WORKING TOGETHER (MULTI-AGENT COLLABORATION)
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-12 sm:mb-16 scroll-mt-24" id="inter-agent-collaboration">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-black uppercase tracking-widest text-white bg-[#2563EB] px-2.5 py-1 rounded">03</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">AGENTS WORKING TOGETHER</h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-6 text-justify">
              Agents shouldn&apos;t work as isolated chatbots. They communicate and coordinate automatically to complete end-to-end business tasks:
            </p>

            {/* Collaborative Sequence Visual */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] text-white shadow-lg space-y-4">
              <div className="text-xs font-black uppercase tracking-widest text-blue-100">MULTI-AGENT COLLABORATIVE WORKFLOW</div>
              <div className="grid grid-cols-2 sm:grid-cols-7 gap-2.5 text-center text-xs font-extrabold">
                {[
                  { step: "01", label: "Enquiry Received", sub: "Customer Message" },
                  { step: "02", label: "Sales Agent", sub: "Understands Requirement" },
                  { step: "03", label: "Knowledge Agent", sub: "Finds Product Specs" },
                  { step: "04", label: "Sales Responds", sub: "Instant Customer Reply" },
                  { step: "05", label: "CRM Record", sub: "Lead Auto-Created" },
                  { step: "06", label: "Follow-Up Agent", sub: "Schedules Reminder" },
                  { step: "07", label: "Human Alert", sub: "Salesperson Notified" },
                ].map((s) => (
                  <div key={s.step} className="p-3 rounded-2xl bg-white/15 border border-white/25 space-y-1">
                    <div className="text-[10px] font-mono text-blue-100">{s.step}</div>
                    <div className="text-xs font-black">{s.label}</div>
                    <div className="text-[9.5px] text-white/80 font-normal">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              04 — THE AGENT CONTROL LAYER & HUMAN OVERVIEW
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-12 sm:mb-16 scroll-mt-24" id="agent-control-layer">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-black uppercase tracking-widest text-white bg-[#0F172A] px-2.5 py-1 rounded">04</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">THE AGENT CONTROL LAYER</h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-6 text-justify">
              Businesses decide what an agent can see, what it can do, and when sensitive actions require human confirmation:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 text-xs font-extrabold">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
                <div className="text-[#2563EB] text-[11px] uppercase">What Agent Can See</div>
                <div className="text-slate-800">Company docs, SOPs &amp; connected tools</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
                <div className="text-[#0284C7] text-[11px] uppercase">What Agent Can Do</div>
                <div className="text-slate-800">Create records, send messages &amp; trigger flows</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
                <div className="text-amber-800 text-[11px] uppercase">Requires Approval</div>
                <div className="text-slate-800">Sensitive actions wait for human confirmation</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
                <div className="text-[#1D4ED8] text-[11px] uppercase">When Agent Acts</div>
                <div className="text-slate-800">Based on business rules &amp; event triggers</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
                <div className="text-emerald-700 text-[11px] uppercase">Who Gets Notified</div>
                <div className="text-slate-800">Responsible human team member notified</div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════
              05 — CURRENT EXPLORATION STATUS & VISION
          ══════════════════════════════════════════════════════════ */}
          <section className="mb-12 sm:mb-16 scroll-mt-24" id="status-vision">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#EFF6FF] via-white to-sky-50 border border-[#BFDBFE] text-slate-800 space-y-6 shadow-xs">
              <div className="flex items-center justify-between border-b border-[#BFDBFE] pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-widest text-[#2563EB]">CURRENT STATUS &bull; EXPLORING CONCEPT</span>
                </div>
                <span className="text-xs font-extrabold text-[#1D4ED8] bg-[#DBEAFE] px-3 py-1 rounded-full border border-[#BFDBFE]">
                  Concept Exploration
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-black text-[#0F172A] mb-2">Current Exploration Focus</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed text-justify mb-4">
                    This is an Agaran product concept currently being explored and developed. The focus is on understanding how specialised AI agents can safely work with real business workflows, tools and human teams.
                  </p>
                  <ul className="grid grid-cols-2 gap-2 text-xs font-bold text-[#2563EB]">
                    <li className="p-2 rounded-xl bg-white border border-[#BFDBFE] flex items-center gap-1.5 shadow-2xs">
                      <span className="text-emerald-500 font-bold">✓</span> AI Agent Architecture
                    </li>
                    <li className="p-2 rounded-xl bg-white border border-[#BFDBFE] flex items-center gap-1.5 shadow-2xs">
                      <span className="text-emerald-500 font-bold">✓</span> Multi-Agent Workflows
                    </li>
                    <li className="p-2 rounded-xl bg-white border border-[#BFDBFE] flex items-center gap-1.5 shadow-2xs">
                      <span className="text-emerald-500 font-bold">✓</span> Business Knowledge Sync
                    </li>
                    <li className="p-2 rounded-xl bg-white border border-[#BFDBFE] flex items-center gap-1.5 shadow-2xs">
                      <span className="text-emerald-500 font-bold">✓</span> Tool &amp; System Integration
                    </li>
                    <li className="p-2 rounded-xl bg-white border border-[#BFDBFE] flex items-center gap-1.5 shadow-2xs">
                      <span className="text-emerald-500 font-bold">✓</span> Agent Collaboration
                    </li>
                    <li className="p-2 rounded-xl bg-white border border-[#BFDBFE] flex items-center gap-1.5 shadow-2xs">
                      <span className="text-emerald-500 font-bold">✓</span> Human Approval Layer
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-black text-[#0F172A] mb-2">The Bigger Vision</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed text-justify mb-4">
                    A business that doesn&apos;t stop when everyone goes home. Imagine enquiries being handled, leads followed up, internal questions answered, and reports prepared before morning meetings — because your AI workforce works alongside your team.
                  </p>
                  <div className="p-4 rounded-2xl bg-white border border-[#BFDBFE] space-y-2 text-xs">
                    <div className="font-extrabold text-[#0F172A]">Build a Digital Workforce:</div>
                    <p className="text-slate-600 leading-relaxed text-justify">
                      Not just another chatbot or isolated assistant — a team of AI agents working as part of your business.
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
            <div className="p-8 rounded-3xl bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] text-white text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl font-black">What Would Your AI Team Look Like?</h2>
              <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto font-medium">
                Tell us what your team spends too much time doing. We&apos;re exploring how an AI agent could take care of it.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#2563EB] font-black text-xs sm:text-sm shadow-md hover:bg-slate-50 transition-all"
                >
                  <span>Start a Conversation</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-bold text-slate-500">
              <Link href="/products" className="hover:text-[#2563EB] transition-colors">&larr; Back to Products</Link>
              <Link href="/products/whatsapp-automation" className="hover:text-[#2563EB] transition-colors">Previous Product: WhatsApp Automation &rarr;</Link>
            </div>
          </footer>

        </motion.article>

      </main>

      <Footer />
    </>
  );
}
