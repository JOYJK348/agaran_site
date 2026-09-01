"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";

const footerLinks = {
  solutions: [
    { name: "Startups & Businesses", href: "/#who-we-build-for" },
    { name: "Education & Institutions", href: "/#who-we-build-for" },
    { name: "Organizations & Teams", href: "/#who-we-build-for" },
    { name: "Custom AI & Automation", href: "/#why-agaran" },
  ],
  company: [
    { name: "About Agaran", href: "/about" },
    { name: "Why Agaran", href: "/#why-agaran" },
    { name: "Selected Work", href: "/#selected-work" },
    { name: "Contact Us", href: "/contact" },
  ],
  contact: [
    { name: "Email Us", href: "mailto:contact@agaran.in", val: "contact@agaran.in" },
    { name: "Schedule Call", href: "/contact", val: "Book 15-Min Briefing" },
    { name: "Location", href: "/contact", val: "Tamil Nadu, India" },
  ],
};

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#090D16] text-white border-t border-slate-800 overflow-hidden select-none">
      {/* Background Glow Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Footer Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 sm:pt-16 sm:pb-12">
        
        {/* ── TOP SECTION: BRAND & LIVE STATUS ── */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-white/10">
          <div className="space-y-3 max-w-md">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2.5 focus:outline-none">
              <div className="p-1.5 bg-white rounded-xl shadow-xs flex items-center justify-center shrink-0">
                <Image
                  src="/logo-transparent.png"
                  alt="Agaran Icon"
                  width={36}
                  height={36}
                  className="h-7 sm:h-8 w-auto object-contain"
                />
              </div>
              <Image
                src="/agaran_font.png"
                alt="Agaran Wordmark"
                width={120}
                height={32}
                className="h-6 sm:h-7 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Building intelligent software, practical AI & digital solutions for growing businesses and institutions.
            </p>
          </div>

          {/* Live Status Badge & Back to Top */}
          <div className="flex items-center justify-between md:justify-end gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 hover:text-white transition-all text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer focus:outline-none"
              title="Back to Top"
            >
              <span>TOP</span>
              <span className="text-sm">↑</span>
            </button>
          </div>
        </div>

        {/* ── MIDDLE SECTION: LINKS (Mobile Collapsible / Desktop Grid) ── */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-white/10">
          
          {/* Column 1: Quick Action Cards for Mobile & Desktop (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-extrabold uppercase tracking-widest text-blue-400">
              Start Your Project
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Have a problem to solve or an idea to build? Let&apos;s turn it into real software.
            </p>
            <div className="pt-1 flex flex-wrap gap-2.5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-md shadow-blue-600/25 active:scale-95"
              >
                <span>Start a Conversation</span>
                <span>→</span>
              </Link>
              <a
                href="mailto:contact@agaran.in"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-slate-200 font-extrabold text-xs tracking-wider transition-all active:scale-95"
              >
                ✉️ Email Us
              </a>
            </div>
          </div>

          {/* Column 2: Solutions Links (Mobile Accordion / Desktop Column) (3 Cols) */}
          <div className="md:col-span-3 border-t border-white/10 md:border-t-0 pt-4 md:pt-0">
            <button
              onClick={() => toggleSection("solutions")}
              className="w-full flex items-center justify-between text-left focus:outline-none md:pointer-events-none"
            >
              <h4 className="text-xs font-mono font-extrabold uppercase tracking-widest text-slate-200">
                Solutions
              </h4>
              <span className="text-slate-400 md:hidden font-mono text-sm">
                {openSection === "solutions" ? "−" : "+"}
              </span>
            </button>
            <ul
              className={`mt-3.5 space-y-2.5 transition-all duration-300 ${
                openSection === "solutions" ? "block" : "hidden md:block"
              }`}
            >
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors duration-200 block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company Links (Mobile Accordion / Desktop Column) (2 Cols) */}
          <div className="md:col-span-2 border-t border-white/10 md:border-t-0 pt-4 md:pt-0">
            <button
              onClick={() => toggleSection("company")}
              className="w-full flex items-center justify-between text-left focus:outline-none md:pointer-events-none"
            >
              <h4 className="text-xs font-mono font-extrabold uppercase tracking-widest text-slate-200">
                Company
              </h4>
              <span className="text-slate-400 md:hidden font-mono text-sm">
                {openSection === "company" ? "−" : "+"}
              </span>
            </button>
            <ul
              className={`mt-3.5 space-y-2.5 transition-all duration-300 ${
                openSection === "company" ? "block" : "hidden md:block"
              }`}
            >
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors duration-200 block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Direct Connect (Mobile Accordion / Desktop Column) (3 Cols) */}
          <div className="md:col-span-3 border-t border-white/10 md:border-t-0 pt-4 md:pt-0">
            <button
              onClick={() => toggleSection("contact")}
              className="w-full flex items-center justify-between text-left focus:outline-none md:pointer-events-none"
            >
              <h4 className="text-xs font-mono font-extrabold uppercase tracking-widest text-slate-200">
                Connect
              </h4>
              <span className="text-slate-400 md:hidden font-mono text-sm">
                {openSection === "contact" ? "−" : "+"}
              </span>
            </button>
            <ul
              className={`mt-3.5 space-y-2.5 transition-all duration-300 ${
                openSection === "contact" ? "block" : "hidden md:block"
              }`}
            >
              {footerLinks.contact.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex flex-col py-1"
                  >
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                      {link.name}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-300 group-hover:text-blue-400 transition-colors font-medium">
                      {link.val}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── BOTTOM BAR: COPYRIGHT & CREATED WITH LOVE ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Agaran Technologies. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1">
              <span>Made with</span>
              <span className="text-red-500">❤️</span>
              <span>in India</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
