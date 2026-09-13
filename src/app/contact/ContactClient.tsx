"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* ─────────────────────────────────────────────
   Scroll-reveal animation wrapper — matching About & Work pages
───────────────────────────────────────────── */
function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DYNAMIC CATEGORIES DATA (COLORFUL THEME)
// ─────────────────────────────────────────────────────────────────────────────

interface CategoryOption {
  key: string;
  label: string;
  badge: string;
  subtitle: string;
  gradient: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  quickChips: string[];
}

const CATEGORIES: CategoryOption[] = [
  {
    key: "idea",
    label: "I Have a Product Idea or App Concept",
    badge: "NEW IDEA",
    subtitle: "Turn your rough idea into a working mobile app or website.",
    gradient: "from-[#1D4ED8] via-[#2563EB] to-[#0284C7]",
    badgeBg: "bg-[#EFF6FF]",
    badgeText: "text-[#2563EB]",
    badgeBorder: "border-[#BFDBFE]",
    quickChips: [
      "Mobile App (Android & iPhone)",
      "Website / Web App",
      "AI Powered Tool",
      "Subscription Software (SaaS)",
      "Internal Business App",
      "Others",
    ],
  },
  {
    key: "automation",
    label: "I Want to Automate Daily Work & Save Time",
    badge: "SAVE TIME",
    subtitle: "Stop wasting hours on manual WhatsApp replies, Excel sheets, and paper reports.",
    gradient: "from-[#1D4ED8] via-[#2563EB] to-[#0284C7]",
    badgeBg: "bg-[#EFF6FF]",
    badgeText: "text-[#2563EB]",
    badgeBorder: "border-[#BFDBFE]",
    quickChips: [
      "WhatsApp Auto-Replies & Orders",
      "Excel & Google Sheets Auto-Sync",
      "Automatic Billing & Invoicing",
      "Student & Fee Payment Automation",
      "Automatic Email & SMS Reminders",
      "Others",
    ],
  },
  {
    key: "ai",
    label: "I Want AI Tools for My Business",
    badge: "AI TOOLS",
    subtitle: "Add smart AI chatbots, automated reply bots, or document search to your business.",
    gradient: "from-[#1D4ED8] via-[#2563EB] to-[#0284C7]",
    badgeBg: "bg-[#EFF6FF]",
    badgeText: "text-[#2563EB]",
    badgeBorder: "border-[#BFDBFE]",
    quickChips: [
      "24/7 Customer Support AI Bot",
      "WhatsApp Lead Capture Bot",
      "AI Question & Homework Assistant",
      "Smart Search for Files & Documents",
      "Others",
    ],
  },
  {
    key: "software",
    label: "I Need Custom Software or Mobile App",
    badge: "CUSTOM APP",
    subtitle: "Build custom software, customer portals, or management systems made just for your company.",
    gradient: "from-[#1D4ED8] via-[#2563EB] to-[#0284C7]",
    badgeBg: "bg-[#EFF6FF]",
    badgeText: "text-[#2563EB]",
    badgeBorder: "border-[#BFDBFE]",
    quickChips: [
      "Custom Website or Web Portal",
      "Android & iPhone Mobile App",
      "Customer & Sales CRM System",
      "Client Login Portal",
      "Upgrade / Fix Existing System",
      "Others",
    ],
  },
  {
    key: "edtech",
    label: "I Need Software for School, College or Coaching",
    badge: "EDUCATION",
    subtitle: "Digital tools for student admissions, online exams, fee tracking, and parent alerts.",
    gradient: "from-[#1D4ED8] via-[#2563EB] to-[#0284C7]",
    badgeBg: "bg-[#EFF6FF]",
    badgeText: "text-[#2563EB]",
    badgeBorder: "border-[#BFDBFE]",
    quickChips: [
      "Coaching Institute Portal",
      "School & College Management System",
      "Training & Course Portal",
      "Online Classes & Video Lessons",
      "Others",
    ],
  },
  {
    key: "general",
    label: "I Have a General Question or Need Advice",
    badge: "GENERAL INQUIRY",
    subtitle: "Get simple guidance, cost estimates, or discuss ideas with our team.",
    gradient: "from-[#1D4ED8] via-[#2563EB] to-[#0284C7]",
    badgeBg: "bg-[#EFF6FF]",
    badgeText: "text-[#2563EB]",
    badgeBorder: "border-[#BFDBFE]",
    quickChips: [
      "General Tech Advice",
      "Project Cost & Price Inquiry",
      "Business Partnership",
      "General Question",
      "Others",
    ],
  },
];

export default function ContactClient() {
  const [selectedCategoryKey, setSelectedCategoryKey] = useState<string>("idea");
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState<boolean>(false);
  const categoryDropdownRef = useRef<HTMLDivElement>(null);
  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [otherText, setOtherText] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // Contact Inputs
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  // Validation & UI State
  const [fieldErrors, setFieldErrors] = useState<{
    name?: boolean;
    phone?: boolean;
    email?: boolean;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [leadId, setLeadId] = useState<string>("");

  // Click outside to close dropdown & Handle Hash / Cat URL parameters
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target as Node)) {
        setIsCategoryDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get("cat");
      if (catParam) {
        const match = CATEGORIES.find(
          (c) => c.key === catParam.toLowerCase() || c.badge.toLowerCase() === catParam.toLowerCase()
        );
        if (match) {
          setSelectedCategoryKey(match.key);
        }
      }

      const hasHash = window.location.hash === "#inquiry-form";
      if (hasHash || catParam) {
        const performScroll = () => {
          const elem = document.getElementById("inquiry-form");
          if (elem) {
            const yOffset = -85; // accounts for fixed navbar height & top clearance
            const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
          }
        };

        performScroll();
        const timer1 = setTimeout(performScroll, 120);
        const timer2 = setTimeout(performScroll, 400);

        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
          clearTimeout(timer1);
          clearTimeout(timer2);
        };
      }
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentCategory = CATEGORIES.find((c) => c.key === selectedCategoryKey) || CATEGORIES[0];

  const handleCategoryChange = (key: string) => {
    setSelectedCategoryKey(key);
    setSelectedChips([]);
    setOtherText("");
  };

  const toggleChip = (chip: string) => {
    setSelectedChips((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nameEmpty = !name.trim();
    const phoneEmpty = !phone.trim();
    const emailEmpty = !email.trim();

    if (nameEmpty || phoneEmpty || emailEmpty) {
      setFieldErrors({
        name: nameEmpty,
        phone: phoneEmpty,
        email: emailEmpty,
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const finalChips = selectedChips.map((chip) =>
        chip === "Others" && otherText.trim() ? `Others: ${otherText.trim()}` : chip
      );

      const payload = {
        intent: currentCategory.label,
        category: currentCategory.label,
        choices: {
          selectedChips: finalChips,
          customOtherDetail: otherText.trim(),
          message,
        },
        contact: {
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
        },
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      setLeadId(data.leadId || `AGR-${Date.now().toString().slice(-6)}`);
      setIsSubmitted(true);
    } catch (err) {
      console.error("Submit error:", err);
      setLeadId(`AGR-${Date.now().toString().slice(-6)}`);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSelectedCategoryKey("idea");
    setSelectedChips([]);
    setOtherText("");
    setMessage("");
    setName("");
    setPhone("");
    setEmail("");
    setFieldErrors({});
    setIsSubmitted(false);
    setLeadId("");
  };

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-white text-[#0F172A] pt-20 sm:pt-28 pb-20 sm:pb-28 font-sans selection:bg-[#2563EB] selection:text-white overflow-hidden">
        
        {/* Ambient Radial Dot Mesh Backdrop & Orbs — matching About & Work pages */}
        <div className="absolute inset-0 bg-[radial-gradient(#BFDBFE_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />
        <div className="absolute top-[-15%] right-[-10%] w-[650px] h-[650px] rounded-full bg-[#2563EB]/14 blur-[130px] pointer-events-none" />
        <div className="absolute top-[40%] left-[-12%] w-[600px] h-[600px] rounded-full bg-[#3B82F6]/12 blur-[120px] pointer-events-none" />
        <div className="absolute top-[75%] right-[-5%] w-[500px] h-[400px] rounded-full bg-[#2563EB]/10 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-full w-full px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* ══════════════════════════════════════════════════════════
              01 HERO HEADER (Grand Width matching About & Work pages)
          ══════════════════════════════════════════════════════════ */}
          <section className="text-center w-full max-w-full mx-auto">
            <Reveal delay={0}>
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#2563EB] shadow-2xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] animate-pulse" />
                  GET IN TOUCH &bull; AGARAN TEAM
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-center text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.4rem] font-black leading-[1.12] tracking-[-0.035em] text-[#0F172A] w-full max-w-5xl mx-auto mb-5">
                Let&apos;s Build Something{" "}
                <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] bg-clip-text text-transparent">
                  Great Together.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-center text-sm sm:text-lg lg:text-xl font-medium leading-relaxed text-slate-600 w-full max-w-5xl mx-auto mb-8">
                Tell us what you need. Choose an option below and share your details — our team will reply within 2 hours.
              </p>
            </Reveal>

            {/* Executive Quick Highlights Strip — matching Work & About pages */}
            <Reveal delay={0.28}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto text-center text-xs">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-0.5 hover:border-[#BFDBFE] transition-all">
                  <div className="text-base sm:text-lg font-black text-[#2563EB]">&lt; 2 Hours</div>
                  <div className="text-slate-500 font-bold text-[10px] uppercase tracking-wider">Fast Reply Time</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-0.5 hover:border-[#BFDBFE] transition-all">
                  <div className="text-base sm:text-lg font-black text-emerald-600">Direct Contact</div>
                  <div className="text-slate-500 font-bold text-[10px] uppercase tracking-wider">Talk to Real Engineers</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-0.5 hover:border-[#BFDBFE] transition-all">
                  <div className="text-base sm:text-lg font-black text-[#0284C7]">Aruppukottai, TN</div>
                  <div className="text-slate-500 font-bold text-[10px] uppercase tracking-wider">Palayampatti &bull; India</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-0.5 hover:border-[#BFDBFE] transition-all">
                  <div className="text-base sm:text-lg font-black text-amber-600 flex items-center justify-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                    Quick Support
                  </div>
                  <div className="text-slate-500 font-bold text-[10px] uppercase tracking-wider">WhatsApp &amp; Email Ready</div>
                </div>
              </div>
            </Reveal>
          </section>

          {/* MAIN 2-COLUMN DISPLAY CONTAINER */}
          <Reveal delay={0.35}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* LEFT COLUMN: BRAND CARD (5 COLS) */}
            <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#EFF6FF]/95 via-white to-[#DBEAFE]/50 border border-[#BFDBFE] shadow-[0_12px_35px_rgba(37,99,235,0.08)] hover:border-[#2563EB]/80 hover:shadow-[0_20px_45px_rgba(37,99,235,0.16)] transition-all duration-300 space-y-8 relative overflow-hidden">
              {/* Top Agaran Royal Blue Accent Line */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] absolute top-0 left-0 right-0" />

              <div className="space-y-6 relative z-10 pt-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <div>
                    <span className="text-xs font-mono font-black text-[#2563EB] uppercase tracking-wider block">
                      AGARAN
                    </span>
                    <span className="text-[11px] font-bold text-slate-500 block">
                      Based in Tamil Nadu, India &bull; Remote-first &bull; Global Reach
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 self-start sm:self-auto">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    Team Ready to Help
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] leading-tight">
                    Clean &amp; Reliable Software for Your Business.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    Whether you need a new website, mobile app, WhatsApp automation, or custom business software &mdash; we are here to build it for you.
                  </p>
                </div>

                {/* Direct Contact Links */}
                <div className="space-y-3 pt-4">
                  <a
                    href="mailto:contact.agaran@gmail.com"
                    className="group p-4.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#2563EB] hover:bg-[#EFF6FF]/50 transition-all duration-200 flex items-center justify-between shadow-2xs"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <path d="M3 6V18C3 19.1046 3.89543 20 5 20H7V11.5L3 8.5V6Z" fill="#4285F4"/>
                          <path d="M21 6V18C21 19.1046 20.1046 20 19 20H17V11.5L21 8.5V6Z" fill="#34A853"/>
                          <path d="M17 4.5H19C20.1046 4.5 21 5.39543 21 6.5V8.5L12 15.25L3 8.5V6.5C3 5.39543 3.89543 4.5 5 4.5H7L12 8.25L17 4.5Z" fill="#EA4335"/>
                          <path d="M17 4.5H19C20.1046 4.5 21 5.39543 21 6.5V8.5L17 11.5V4.5Z" fill="#FBBC04"/>
                          <path d="M7 4.5H5C3.89543 4.5 3 5.39543 3 6.5V8.5L7 11.5V4.5Z" fill="#C5221F"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">Email Us</div>
                        <div className="text-sm font-black text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                          contact.agaran@gmail.com
                        </div>
                      </div>
                    </div>
                    <span className="text-slate-400 group-hover:text-[#2563EB] group-hover:translate-x-1 transition-all text-base font-black">&rarr;</span>
                  </a>

                  <a
                    href="https://wa.me/919080558130"
                    target="_blank"
                    rel="noreferrer"
                    className="group p-4.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all duration-200 flex items-center justify-between shadow-2xs"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">Chat on WhatsApp</div>
                        <div className="text-sm font-black text-[#0F172A] group-hover:text-emerald-700 transition-colors">
                          +91 90805 58130
                        </div>
                      </div>
                    </div>
                    <span className="text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all text-base font-black">&rarr;</span>
                  </a>
                </div>

                {/* Official Social Media Links */}
                <div className="pt-2 space-y-2.5">
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Official Social Media Channels
                  </div>
                  <div className="grid grid-cols-3 gap-2.5">
                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/agaran.ai?stkn=MTM2aWc0MHhxOTZzMQ=="
                      target="_blank"
                      rel="noreferrer"
                      className="group p-3 rounded-2xl bg-gradient-to-b from-slate-50 to-pink-50/30 border border-slate-200/80 hover:border-pink-500 hover:bg-pink-50/60 transition-all duration-200 flex flex-col items-center justify-center gap-1.5 shadow-2xs"
                      title="Instagram"
                    >
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <span className="text-[10.5px] font-black text-slate-700 group-hover:text-pink-600">Instagram</span>
                    </a>

                    {/* Facebook */}
                    <a
                      href="https://www.facebook.com/profile.php?id=61593719520785"
                      target="_blank"
                      rel="noreferrer"
                      className="group p-3 rounded-2xl bg-gradient-to-b from-slate-50 to-blue-50/30 border border-slate-200/80 hover:border-blue-500 hover:bg-blue-50/60 transition-all duration-200 flex flex-col items-center justify-center gap-1.5 shadow-2xs"
                      title="Facebook"
                    >
                      <div className="w-8 h-8 rounded-xl bg-[#1877F2] text-white flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </div>
                      <span className="text-[10.5px] font-black text-slate-700 group-hover:text-blue-600">Facebook</span>
                    </a>

                    {/* YouTube */}
                    <a
                      href="https://www.youtube.com/@agaranyt"
                      target="_blank"
                      rel="noreferrer"
                      className="group p-3 rounded-2xl bg-gradient-to-b from-slate-50 to-rose-50/30 border border-slate-200/80 hover:border-red-500 hover:bg-rose-50/60 transition-all duration-200 flex flex-col items-center justify-center gap-1.5 shadow-2xs"
                      title="YouTube"
                    >
                      <div className="w-8 h-8 rounded-xl bg-[#FF0000] text-white flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </div>
                      <span className="text-[10.5px] font-black text-slate-700 group-hover:text-red-600">YouTube</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* WHERE WE'RE BASED Location Section */}
              <div className="pt-5 border-t border-slate-100 space-y-2">
                <div className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-[#2563EB]">
                  WHERE WE&apos;RE BASED
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-sm font-black text-[#0F172A] block leading-snug">
                      Palayampatti, Aruppukottai
                    </span>
                    <span className="text-xs font-bold text-slate-500 block">
                      Tamil Nadu, India
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#BFDBFE] inline-block">
                      Remote-first. Built for anywhere.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: SIMPLE CLEAN FORM CARD (7 COLS) */}
            <div id="inquiry-form" className="scroll-mt-24 lg:col-span-7 h-full">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col justify-between p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl text-center space-y-6 relative overflow-hidden"
                >
                  <div className="h-2 w-full bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600 absolute top-0 left-0 right-0" />
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 border border-emerald-200 text-emerald-600 text-3xl font-black flex items-center justify-center mx-auto shadow-md shadow-emerald-500/10">
                    ✓
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200 inline-block shadow-2xs">
                      MESSAGE RECEIVED &bull; REF ID: {leadId}
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
                      Thank you, {name}!
                    </h2>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed max-w-md mx-auto">
                      We got your details regarding <strong className="text-slate-900">{currentCategory.label}</strong>. Our team will review your message and get back to you within 2 hours.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/919080558130?text=Hi%20Agaran%2C%20I%20just%20sent%20a%20request%20(${leadId})`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-emerald-600 text-white font-extrabold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2.5 hover:scale-[1.02]"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                      <span>Chat With Us on WhatsApp</span>
                      <span>&rarr;</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs sm:text-sm transition-all"
                    >
                      Send Another Request
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="h-full flex flex-col justify-between p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#F8FAFC] via-[#EFF6FF]/60 to-[#F0F9FF]/80 border border-[#BFDBFE] shadow-[0_12px_35px_rgba(37,99,235,0.06)] hover:border-[#2563EB]/60 hover:shadow-[0_16px_40px_rgba(37,99,235,0.12)] transition-all duration-300 space-y-5 relative overflow-hidden"
                >
                  {/* Header Title Block */}
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      Let&rsquo;s Talk
                    </h2>
                    <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                      Fill in your details below to get in touch.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Name Field */}
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                        Name <span className="text-[#2563EB]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (fieldErrors.name) setFieldErrors((prev) => ({ ...prev, name: false }));
                        }}
                        placeholder="Enter your name"
                        className={`w-full px-4 py-3 sm:py-3.5 rounded-xl border text-sm font-medium transition-all outline-none ${
                          fieldErrors.name
                            ? "border-rose-500 bg-rose-50/30 focus:ring-4 focus:ring-rose-100"
                            : "border-slate-200 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-50 bg-white"
                        } text-slate-800 placeholder:text-slate-400`}
                      />
                      {fieldErrors.name && (
                        <span className="text-[11px] font-bold text-rose-500 mt-1 block">
                          Please enter your name
                        </span>
                      )}
                    </div>

                    {/* Mobile or WhatsApp Field */}
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                        Mobile or WhatsApp <span className="text-[#2563EB]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (fieldErrors.phone) setFieldErrors((prev) => ({ ...prev, phone: false }));
                        }}
                        placeholder="Enter your phone number"
                        className={`w-full px-4 py-3 sm:py-3.5 rounded-xl border text-sm font-medium transition-all outline-none ${
                          fieldErrors.phone
                            ? "border-rose-500 bg-rose-50/30 focus:ring-4 focus:ring-rose-100"
                            : "border-slate-200 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-50 bg-white"
                        } text-slate-800 placeholder:text-slate-400`}
                      />
                      {fieldErrors.phone && (
                        <span className="text-[11px] font-bold text-rose-500 mt-1 block">
                          Please enter your phone number
                        </span>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                        Email Address <span className="text-[#2563EB]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (fieldErrors.email) setFieldErrors((prev) => ({ ...prev, email: false }));
                        }}
                        placeholder="Enter your email address"
                        className={`w-full px-4 py-3 sm:py-3.5 rounded-xl border text-sm font-medium transition-all outline-none ${
                          fieldErrors.email
                            ? "border-rose-500 bg-rose-50/30 focus:ring-4 focus:ring-rose-100"
                            : "border-slate-200 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-50 bg-white"
                        } text-slate-800 placeholder:text-slate-400`}
                      />
                      {fieldErrors.email && (
                        <span className="text-[11px] font-bold text-rose-500 mt-1 block">
                          Please enter your email address
                        </span>
                      )}
                    </div>

                    {/* Project Type Dropdown */}
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                        Project Type
                      </label>
                      <div className="relative">
                        <select
                          value={selectedCategoryKey}
                          onChange={(e) => handleCategoryChange(e.target.value)}
                          className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-50 bg-white text-slate-800 text-sm font-medium appearance-none cursor-pointer outline-none transition-all pr-10"
                        >
                          <option value="general">General Project Discussion</option>
                          <option value="software">Web Application / SaaS</option>
                          <option value="edtech">Education Platform &amp; LMS</option>
                          <option value="automation">AI &amp; Automation</option>
                          <option value="idea">Product Idea / App Concept</option>
                          <option value="ai">Business Systems &amp; ERP</option>
                          <option value="other">Other Inquiry</option>
                        </select>
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Message Field (Optional) */}
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                        Project Details <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <textarea
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us a little about your requirement..."
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-50 bg-white text-slate-800 text-sm font-medium placeholder:text-slate-400 outline-none transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* SUBMIT BUTTON */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 sm:py-4 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-[0.99] text-white font-bold text-base transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <span>Send Message</span>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
          </Reveal>

        </div>
      </main>

      <Footer />
    </>
  );
}
