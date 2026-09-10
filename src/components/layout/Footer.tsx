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
    { name: "Email Us", href: "mailto:contact.agaran@gmail.com", val: "contact.agaran@gmail.com" },
    { name: "WhatsApp / Phone", href: "https://wa.me/919080558130", val: "+91 90805 58130" },
    { name: "Location", href: "/contact", val: "Aruppukottai, Tamil Nadu" },
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
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
              Based in Aruppukottai, Tamil Nadu. Working with clients beyond borders.
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
                href="mailto:contact.agaran@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-slate-200 font-extrabold text-xs tracking-wider transition-all active:scale-95"
              >
                <span>Email Us</span>
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
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex flex-col py-1"
                  >
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                      {link.name}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-300 group-hover:text-blue-400 transition-colors font-medium">
                      {link.val}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── BOTTOM BAR: OFFICIAL SOCIAL ICONS & COPYRIGHT ── */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} AGARAN. All rights reserved.</p>

          {/* Official Social Media Icons */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wider hidden sm:inline-block">Follow Us:</span>
            
            {/* Instagram */}
            <a
              href="https://www.instagram.com/agaran.ai?stkn=MTM2aWc0MHhxOTZzMQ=="
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 text-slate-300 hover:text-white transition-all flex items-center justify-center hover:scale-110 active:scale-95"
              title="Instagram (@agaran.ai)"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61593719520785"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:bg-[#1877F2] text-slate-300 hover:text-white transition-all flex items-center justify-center hover:scale-110 active:scale-95"
              title="Facebook (Agaran)"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@agaranyt"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:bg-[#FF0000] text-slate-300 hover:text-white transition-all flex items-center justify-center hover:scale-110 active:scale-95"
              title="YouTube (@agaranyt)"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919080558130"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:bg-[#25D366] text-slate-300 hover:text-white transition-all flex items-center justify-center hover:scale-110 active:scale-95"
              title="WhatsApp (+91 90805 58130)"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
          </div>

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
