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

export default function ContactPage() {
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

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target as Node)) {
        setIsCategoryDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
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

                {/* Agaran Direct Guarantees Block to Fill Empty Space Cleanly */}
                <div className="pt-3 space-y-2.5 border-t border-slate-100">
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    THE AGARAN GUARANTEE
                  </div>

                  <div className="space-y-2">
                    {[
                      {
                        icon: (
                          <svg className="w-4 h-4 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        ),
                        title: "2-Hour Response Time",
                        desc: "Fast technical feedback on your project requirements."
                      },
                      {
                        icon: (
                          <svg className="w-4 h-4 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        ),
                        title: "100% Code & IP Ownership",
                        desc: "Full source code, production deployment & ownership rights."
                      },
                      {
                        icon: (
                          <svg className="w-4 h-4 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        ),
                        title: "Zero Overhead Execution",
                        desc: "Direct communication with the engineers building your product."
                      }
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="p-3 rounded-2xl bg-gradient-to-r from-slate-50 to-[#EFF6FF]/40 border border-slate-200/80 flex items-start gap-3 shadow-2xs hover:border-[#2563EB]/40 transition-colors"
                      >
                        <span className="p-2 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] shrink-0 shadow-2xs">
                          {item.icon}
                        </span>
                        <div>
                          <div className="text-xs font-black text-[#0F172A]">{item.title}</div>
                          <div className="text-[11px] font-medium text-slate-500 leading-snug">{item.desc}</div>
                        </div>
                      </div>
                    ))}
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

            {/* RIGHT COLUMN: LIGHT FORM CARD (7 COLS) */}
            <div className="lg:col-span-7 h-full">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col justify-between p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl text-center space-y-6 relative overflow-hidden"
                >
                  <div className="h-2 w-full bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600 absolute top-0 left-0 right-0" />
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 border border-emerald-200 text-emerald-600 text-3xl font-black flex items-center justify-center mx-auto shadow-md shadow-emerald-500/10">
                    ✓
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200 inline-block shadow-2xs">
                      MESSAGE RECEIVED &bull; REF ID: {leadId}
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A]">
                      Thank you, {name}!
                    </h2>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed max-w-md mx-auto">
                      We got your message regarding <strong className="text-[#0F172A]">{currentCategory.label}</strong>. Our team will review your details and get back to you within 2 hours.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/919080558130?text=Hi%20Agaran%2C%20I%20just%20sent%20a%20request%20(${leadId})`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-[#25D366] hover:bg-emerald-600 text-white font-black text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2.5 hover:scale-[1.02]"
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
                      className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs sm:text-sm transition-all"
                    >
                      Send Another Request
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="h-full flex flex-col justify-between p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#EFF6FF]/95 via-white to-[#DBEAFE]/50 border border-[#BFDBFE] shadow-[0_12px_35px_rgba(37,99,235,0.08)] hover:border-[#2563EB]/80 hover:shadow-[0_20px_45px_rgba(37,99,235,0.16)] transition-all duration-300 space-y-6 relative overflow-hidden"
                >
                  {/* Agaran Royal Blue Top Accent Line */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] absolute top-0 left-0 right-0" />

                  {/* Header Block */}
                  <div className="border-b border-slate-100 pb-4 space-y-2 pt-1">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center shadow-2xs">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <span className="text-xs font-mono font-black uppercase tracking-wider text-[#2563EB]">
                          PROJECT INQUIRY FORM
                        </span>
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] shadow-2xs">
                        {currentCategory.badge}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">
                      Tell us about your requirement
                    </h2>
                  </div>

                  {/* 1. CUSTOM ROYAL BLUE THEME CATEGORY SELECTOR DROPDOWN */}
                  <div className="space-y-2 relative z-30" ref={categoryDropdownRef}>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A]">
                      1. What do you need help with? <span className="text-rose-500">*</span>
                    </label>

                    {/* Trigger Card */}
                    <button
                      type="button"
                      onClick={() => setIsCategoryDropdownOpen((prev) => !prev)}
                      className="w-full p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-[#EFF6FF] via-white to-[#EFF6FF] border-2 border-[#BFDBFE] hover:border-[#2563EB] shadow-2xs hover:shadow-md transition-all text-left flex items-center justify-between group cursor-pointer"
                    >
                      <div className="flex-1 min-w-0 pr-3">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#2563EB] text-white text-[9.5px] font-mono font-black uppercase tracking-wider shadow-2xs">
                            {currentCategory.badge}
                          </span>
                          <span className="text-xs sm:text-sm font-black text-[#0F172A] group-hover:text-[#2563EB] transition-colors truncate">
                            {currentCategory.label}
                          </span>
                        </div>
                        <p className="text-[11.5px] font-medium text-slate-500 line-clamp-1">
                          {currentCategory.subtitle}
                        </p>
                      </div>

                      <div className="w-8 h-8 rounded-xl bg-white border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white transition-all shrink-0 shadow-2xs">
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isCategoryDropdownOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>

                    {/* Custom Animated Floating Options List */}
                    <AnimatePresence>
                      {isCategoryDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="absolute top-full left-0 right-0 mt-2 p-2 rounded-2xl bg-white/98 backdrop-blur-2xl border-2 border-[#BFDBFE] shadow-[0_20px_50px_rgba(37,99,235,0.18)] z-50 space-y-1 overflow-hidden max-h-[380px] overflow-y-auto"
                        >
                          <div className="h-1 w-full bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] absolute top-0 left-0 right-0" />

                          <div className="px-2 pt-2 pb-1.5 border-b border-slate-100 flex items-center justify-between">
                            <span className="text-[10px] font-mono font-black text-[#2563EB] uppercase tracking-wider">
                              SELECT A CATEGORY
                            </span>
                            <span className="text-[9.5px] font-mono text-slate-400 font-bold uppercase">
                              6 OPTIONS
                            </span>
                          </div>

                          <div className="space-y-1 pt-1">
                            {CATEGORIES.map((cat) => {
                              const isSelected = selectedCategoryKey === cat.key;
                              return (
                                <button
                                  key={cat.key}
                                  type="button"
                                  onClick={() => {
                                    handleCategoryChange(cat.key);
                                    setIsCategoryDropdownOpen(false);
                                  }}
                                  className={`w-full p-3 rounded-xl transition-all text-left flex items-start justify-between gap-3 group/item ${
                                    isSelected
                                      ? "bg-[#EFF6FF] border border-[#BFDBFE] shadow-2xs"
                                      : "bg-white border border-transparent hover:bg-slate-50 hover:border-slate-200"
                                  }`}
                                >
                                  <div className="min-w-0 flex-1">
                                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                                      <span
                                        className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-black uppercase tracking-wider ${
                                          isSelected
                                            ? "bg-[#2563EB] text-white"
                                            : "bg-slate-100 text-slate-600 group-hover/item:bg-[#EFF6FF] group-hover/item:text-[#2563EB]"
                                        }`}
                                      >
                                        {cat.badge}
                                      </span>
                                      <span
                                        className={`text-xs font-extrabold ${
                                          isSelected ? "text-[#2563EB]" : "text-[#0F172A] group-hover/item:text-[#2563EB]"
                                        } transition-colors`}
                                      >
                                        {cat.label}
                                      </span>
                                    </div>
                                    <p className="text-[11px] font-medium text-slate-500 line-clamp-1">
                                      {cat.subtitle}
                                    </p>
                                  </div>

                                  {isSelected && (
                                    <span className="w-5 h-5 rounded-full bg-[#2563EB] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                                      ✓
                                    </span>
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* 2. DYNAMIC QUICK CHIPS GRID (RESPONSIVE & THEMED) */}
                  <div className="space-y-3 pt-1">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A]">
                        2. Select options that match your need
                      </label>
                      <span className="text-[9.5px] font-mono font-bold text-[#2563EB] bg-[#EFF6FF] px-2.5 py-0.5 rounded-full border border-[#BFDBFE] shadow-2xs">
                        SELECT ALL THAT APPLY
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                      {currentCategory.quickChips.map((chip) => {
                        const isSelected = selectedChips.includes(chip);
                        return (
                          <button
                            key={chip}
                            type="button"
                            onClick={() => toggleChip(chip)}
                            className={`p-3 sm:p-3.5 rounded-2xl border-2 transition-all duration-200 flex items-center justify-between text-left group cursor-pointer ${
                              isSelected
                                ? "bg-gradient-to-r from-[#EFF6FF] via-white to-[#EFF6FF] border-[#2563EB] shadow-sm shadow-blue-500/10 scale-[1.01]"
                                : "bg-white border-slate-200/90 hover:border-[#BFDBFE] hover:bg-[#EFF6FF]/30 shadow-2xs"
                            }`}
                          >
                            <span
                              className={`text-xs sm:text-[13px] pr-2 ${
                                isSelected
                                  ? "font-black text-[#2563EB]"
                                  : "font-extrabold text-[#0F172A] group-hover:text-[#2563EB]"
                              } transition-colors leading-snug`}
                            >
                              {chip}
                            </span>
                            <span
                              className={`w-6 h-6 rounded-full text-xs font-black flex items-center justify-center shrink-0 transition-all ${
                                isSelected
                                  ? "bg-[#2563EB] text-white shadow-xs shadow-blue-500/30 ring-2 ring-blue-200"
                                  : "bg-slate-100 text-slate-400 group-hover:bg-[#EFF6FF] group-hover:text-[#2563EB] border border-slate-200/80"
                              }`}
                            >
                              {isSelected ? "✓" : "+"}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Show Textbox when "Others" is selected */}
                    {selectedChips.includes("Others") && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="pt-1 space-y-1.5"
                      >
                        <label className="block text-[11px] font-bold text-[#2563EB]">
                          Specify custom requirement detail:
                        </label>
                        <input
                          type="text"
                          value={otherText}
                          onChange={(e) => setOtherText(e.target.value)}
                          placeholder="Type what you need in simple words (e.g. Need a custom dashboard)..."
                          className="w-full p-3.5 rounded-2xl bg-white border-2 border-[#2563EB] text-slate-800 font-bold text-xs sm:text-sm focus:ring-4 focus:ring-[#2563EB]/15 outline-none transition-all shadow-2xs"
                        />
                      </motion.div>
                    )}
                  </div>

                  {/* 3. BRIEF MESSAGE */}
                  <div className="space-y-1.5 pt-1">
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A]">
                      3. Tell us a little more about your requirement <span className="text-slate-400 font-medium">(Optional)</span>
                    </label>
                    <div className="relative rounded-2xl bg-white border border-slate-200 focus-within:border-[#2563EB] focus-within:ring-2 focus-within:ring-[#2563EB]/20 transition-all shadow-2xs overflow-hidden">
                      <textarea
                        rows={2}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="e.g. I run a business and want an automated WhatsApp tool to send payment reminders..."
                        className="w-full p-3.5 bg-transparent text-slate-800 placeholder:text-slate-400 font-medium text-xs sm:text-sm outline-none resize-none"
                      />
                    </div>
                  </div>

                  {/* 4. CONTACT DETAILS */}
                  <div className="space-y-3.5 pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A] flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                        4. Your Contact Information
                      </div>
                      <span className="text-[10px] font-bold text-rose-500 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200">
                        * Required
                      </span>
                    </div>

                    <div className="space-y-3">
                      {/* Name Field */}
                      <div>
                        <div className={`flex items-center rounded-2xl bg-white border transition-all shadow-2xs overflow-hidden ${
                          fieldErrors.name
                            ? "border-rose-500 bg-rose-50/40 ring-2 ring-rose-500/20"
                            : "border-slate-200 focus-within:border-[#2563EB] focus-within:ring-2 focus-within:ring-[#2563EB]/20"
                        }`}>
                          <div className="p-3.5 bg-[#EFF6FF] border-r border-[#BFDBFE]/60 text-[#2563EB] shrink-0">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                              if (fieldErrors.name) setFieldErrors((prev) => ({ ...prev, name: false }));
                            }}
                            placeholder="Your Full Name (e.g. Priya)"
                            className="w-full p-3.5 bg-transparent text-slate-800 placeholder:text-slate-400 font-bold text-xs sm:text-sm outline-none"
                          />
                        </div>
                        {fieldErrors.name && (
                          <span className="text-[11px] font-bold text-rose-500 mt-1 pl-1 block">
                            Please enter your name
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {/* Phone Field */}
                        <div>
                          <div className={`flex items-center rounded-2xl bg-white border transition-all shadow-2xs overflow-hidden ${
                            fieldErrors.phone
                              ? "border-rose-500 bg-rose-50/40 ring-2 ring-rose-500/20"
                              : "border-slate-200 focus-within:border-[#2563EB] focus-within:ring-2 focus-within:ring-[#2563EB]/20"
                          }`}>
                            <div className="p-3.5 bg-[#EFF6FF] border-r border-[#BFDBFE]/60 text-[#2563EB] shrink-0">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                            </div>
                            <input
                              type="tel"
                              required
                              value={phone}
                              onChange={(e) => {
                                setPhone(e.target.value);
                                if (fieldErrors.phone) setFieldErrors((prev) => ({ ...prev, phone: false }));
                              }}
                              placeholder="Phone / WhatsApp (+91...)"
                              className="w-full p-3.5 bg-transparent text-slate-800 placeholder:text-slate-400 font-bold text-xs sm:text-sm outline-none"
                            />
                          </div>
                          {fieldErrors.phone && (
                            <span className="text-[11px] font-bold text-rose-500 mt-1 pl-1 block">
                              Please enter phone number
                            </span>
                          )}
                        </div>

                        {/* Email Field */}
                        <div>
                          <div className={`flex items-center rounded-2xl bg-white border transition-all shadow-2xs overflow-hidden ${
                            fieldErrors.email
                              ? "border-rose-500 bg-rose-50/40 ring-2 ring-rose-500/20"
                              : "border-slate-200 focus-within:border-[#2563EB] focus-within:ring-2 focus-within:ring-[#2563EB]/20"
                          }`}>
                            <div className="p-3.5 bg-[#EFF6FF] border-r border-[#BFDBFE]/60 text-[#2563EB] shrink-0">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <input
                              type="email"
                              required
                              value={email}
                              onChange={(e) => {
                                setEmail(e.target.value);
                                if (fieldErrors.email) setFieldErrors((prev) => ({ ...prev, email: false }));
                              }}
                              placeholder="Email (priya@gmail.com)"
                              className="w-full p-3.5 bg-transparent text-slate-800 placeholder:text-slate-400 font-bold text-xs sm:text-sm outline-none"
                            />
                          </div>
                          {fieldErrors.email && (
                            <span className="text-[11px] font-bold text-rose-500 mt-1 pl-1 block">
                              Please enter email address
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SUBMIT BUTTON & TRUST FOOTER */}
                  <div className="pt-2 space-y-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4.5 rounded-2xl bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] hover:shadow-[0_12px_30px_rgba(37,99,235,0.35)] text-white font-black text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2.5 hover:scale-[1.01] active:scale-[0.99]"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                          <span>Sending Your Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Request to Agaran</span>
                          <span className="text-lg">&rarr;</span>
                        </>
                      )}
                    </button>

                    {/* Trust Badges Strip */}
                    <div className="flex items-center justify-center gap-4 text-[10.5px] font-extrabold text-slate-500 flex-wrap">
                      <span className="flex items-center gap-1 text-[#2563EB]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                        Reply Within 2 Hours
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1 text-[#2563EB]">
                        100% Code &amp; Data Ownership
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1 text-[#2563EB]">
                        Direct Engineer Support
                      </span>
                    </div>
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
