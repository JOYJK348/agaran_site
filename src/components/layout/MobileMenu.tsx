"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { WHAT_WE_DO_ITEMS } from "./Navbar";

interface NavLink {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  const [isWhatWeDoExpanded, setIsWhatWeDoExpanded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsWhatWeDoExpanded(false);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleMobileItemClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    onClose();
    const [path, hash] = href.split("#");
    if (typeof window !== "undefined" && window.location.pathname === path && hash) {
      e.preventDefault();
      const elem = document.getElementById(hash);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-white/98 backdrop-blur-3xl flex flex-col justify-between px-5 pt-4 pb-6 overflow-y-auto"
        >
          {/* Glowing Top Blue Bar */}
          <div className="h-1 w-full bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] fixed top-0 left-0 right-0 z-50" />

          {/* Top Bar: Brand Header + Close Button */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 pt-2">
            <Link
              href="/"
              onClick={onClose}
              className="flex items-center gap-2.5"
              aria-label="Agaran Homepage"
            >
              <Image
                src="/logo-transparent.png"
                alt="Agaran Logo"
                width={44}
                height={44}
                className="h-10 w-auto object-contain shrink-0"
              />
              <Image
                src="/agaran_font.png"
                alt="Agaran Wordmark"
                width={130}
                height={36}
                className="h-7 w-auto object-contain mix-blend-multiply"
              />
            </Link>

            <button
              type="button"
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-slate-100/90 border border-slate-200/80 text-slate-700 flex items-center justify-center hover:bg-[#EFF6FF] hover:text-[#2563EB] active:scale-95 transition-all shadow-2xs"
              aria-label="Close navigation menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Main Navigation Items */}
          <div className="py-6 space-y-2 flex-1">
            <div className="flex items-center gap-2 mb-4 px-1">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#2563EB] uppercase">
                NAVIGATION MENU
              </span>
            </div>

            {navLinks.map((link, idx) => {
              const isWhatWeDo = link.label.toLowerCase() === "what we do";
              const badgeNum = `0${idx + 1}`;

              return (
                <div key={link.href} className="border-b border-slate-100/80 pb-2">
                  <div className="flex items-center justify-between py-2">
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="text-xl sm:text-2xl font-black text-[#0F172A] hover:text-[#2563EB] transition-colors flex items-center gap-3"
                    >
                      <span>{link.label}</span>
                    </Link>

                    {isWhatWeDo ? (
                      <button
                        type="button"
                        onClick={() => setIsWhatWeDoExpanded(!isWhatWeDoExpanded)}
                        className="px-2.5 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-mono font-bold flex items-center gap-1 border border-blue-200/80"
                      >
                        <span>{badgeNum}</span>
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${isWhatWeDoExpanded ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    ) : (
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {badgeNum}
                      </span>
                    )}
                  </div>

                  {/* Expanded What We Do Capabilities Grid */}
                  {isWhatWeDo && isWhatWeDoExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-2 pb-3 grid grid-cols-2 gap-2"
                    >
                      {WHAT_WE_DO_ITEMS.map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          onClick={(e) => handleMobileItemClick(e, sub.href)}
                          className="p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-[#EFF6FF] hover:border-[#BFDBFE] transition-all flex flex-col justify-between group"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-black text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                              {sub.title}
                            </span>
                            <span className="text-[9px] font-mono font-bold text-[#2563EB]">
                              {sub.badge}
                            </span>
                          </div>
                          <span className="text-[10.5px] font-medium text-slate-500 line-clamp-1">
                            {sub.subtext}
                          </span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Action Section */}
          <div className="pt-4 border-t border-slate-100 space-y-3">
            <Link
              href="/contact"
              onClick={onClose}
              className="w-full py-3.5 rounded-2xl bg-[#2563EB] hover:bg-[#1d4ed8] active:scale-[0.98] text-white font-extrabold text-sm text-center shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Start a Conversation</span>
              <span className="text-base">&rarr;</span>
            </Link>

            <div className="flex items-center justify-between text-[11px] font-medium text-slate-400 px-1 pt-1">
              <span>📍 Aruppukottai, Tamil Nadu</span>
              <span>AGARAN</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
