"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

const linkIconStyles: Record<string, { icon: React.ReactNode; bgClass: string }> = {
  "what we do": {
    bgClass: "bg-blue-50 text-[#2563EB] border border-blue-200/60 group-hover:bg-blue-100",
    icon: (
      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  products: {
    bgClass: "bg-blue-50 text-[#2563EB] border border-blue-200/60 group-hover:bg-blue-100",
    icon: (
      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  work: {
    bgClass: "bg-blue-50 text-[#2563EB] border border-blue-200/60 group-hover:bg-blue-100",
    icon: (
      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  about: {
    bgClass: "bg-blue-50 text-[#2563EB] border border-blue-200/60 group-hover:bg-blue-100",
    icon: (
      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
};

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/25 z-40"
            onClick={onClose}
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          />

          {/* Popover Card */}
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, scale: 0.95, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -6 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[calc(100%+8px)] right-0 w-72 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-200 z-50 overflow-hidden"
          >
            {/* Brand Header with Direct Transparent Logo */}
            <div className="px-4 pt-3.5 pb-3 border-b border-slate-100 bg-transparent">
              <div className="flex items-center gap-2.5">
                <Image
                  src="/logo-transparent.png"
                  alt="Agaran Logo"
                  width={40}
                  height={40}
                  className="h-8 w-auto object-contain flex-shrink-0"
                />
                <div className="min-w-0">
                  <p className="text-[14.5px] font-bold text-slate-900 leading-tight tracking-tight">AGARAN</p>
                </div>
              </div>
            </div>

            {/* Nav Items */}
            <div className="py-2 px-2">
              {navLinks.map((link) => {
                const item = linkIconStyles[link.label.toLowerCase()] || {
                  bgClass: "bg-slate-100 text-slate-600 border border-slate-200",
                  icon: (
                    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                  ),
                };

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] font-semibold text-slate-700 hover:text-[#2563EB] hover:bg-slate-50 active:bg-slate-100 transition-all duration-150 group"
                  >
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-150 ${item.bgClass}`}>
                      {item.icon}
                    </span>
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="px-3 pb-3 pt-1">
              <Link
                href="/contact"
                onClick={onClose}
                className="w-full inline-flex items-center justify-center gap-2 h-10 rounded-xl text-[13.5px] font-semibold text-white bg-[#2563EB] hover:bg-[#1d4ed8] transition-colors duration-150 active:scale-[0.98]"
              >
                Start a Conversation
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
