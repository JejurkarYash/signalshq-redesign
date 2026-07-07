"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Use Case", href: "#use-cases" },
  { label: "Security", href: "#security" },
  { label: "Resource", href: "#resource" },
  { label: "Contact", href: "#contact" },
] as const;

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  return (
    <>
      <nav
        id="main-nav"
        className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center
                   border-b border-hairline bg-base px-5 md:px-8"
      >
        {/* ── Inner container ── */}
        <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between">
          {/* ── Logo zone (left) ── */}
          <Link
            href="/"
            className="shrink-0 outline-none focus-visible:outline-2
                       focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label="SignalsHQ home"
          >
            <Image
              src="https://framerusercontent.com/images/iwSFw1ZVxkvBFwIkynOTSZnUtg.png?width=160&height=40"
              alt="SignalsHQ"
              width={160}
              height={32}
              className="h-8"
              style={{ width: "auto" }}
              priority
            />
          </Link>

          {/* ── Desktop nav links (center-right) ── */}
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => {
              if (label === "Resource") {
                return (
                  <li 
                    key={label}
                    className="relative py-4"
                    onMouseEnter={() => setResourcesDropdownOpen(true)}
                    onMouseLeave={() => setResourcesDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      className="font-body text-[15px] font-normal text-text-secondary
                                 hover:text-text-primary transition-colors duration-150 ease-in-out
                                 outline-none focus-visible:outline-2
                                 focus-visible:outline-offset-2 focus-visible:outline-primary flex items-center gap-1 cursor-pointer"
                    >
                      Resources
                      <svg 
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${resourcesDropdownOpen ? "rotate-180" : ""}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth="2.5"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {resourcesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-elevated border border-hairline p-3 w-[220px] flex flex-col z-50 rounded-none shadow-2xl"
                        >
                          {/* Viewfinder corner brackets around dropdown card */}
                          <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-hairline pointer-events-none" />
                          <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-hairline pointer-events-none" />
                          <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-hairline pointer-events-none" />
                          <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-hairline pointer-events-none" />

                          {/* Index Header */}
                          <div className="font-mono text-[9px] text-text-muted tracking-[0.08em] uppercase border-b border-hairline pb-2.5 mb-2 px-1 select-none">
                            § DOCUMENT REGISTRY
                          </div>

                          <Link 
                            href="#articles" 
                            className="group flex items-center gap-2.5 px-1 py-1.5 font-body text-[13.5px] text-text-secondary hover:text-text-primary transition-colors rounded-none text-left"
                          >
                            {/* Technical Bullet Box */}
                            <div className="w-2 h-2 border border-hairline bg-base flex-shrink-0 group-hover:border-primary group-hover:bg-primary/20 transition-all rounded-none" />
                            <span>Articles & Insights</span>
                          </Link>
                          <Link 
                            href="#downloads" 
                            className="group flex items-center gap-2.5 px-1 py-1.5 font-body text-[13.5px] text-text-secondary hover:text-text-primary transition-colors rounded-none text-left"
                          >
                            {/* Technical Bullet Box */}
                            <div className="w-2 h-2 border border-hairline bg-base flex-shrink-0 group-hover:border-primary group-hover:bg-primary/20 transition-all rounded-none" />
                            <span>Downloads</span>
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }

              return (
                <li key={label}>
                  <Link
                    href={href}
                    className="font-body text-[15px] font-normal text-text-secondary
                               hover:text-text-primary transition-colors duration-150 ease-in-out
                               outline-none focus-visible:outline-2
                               focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {label === "Use Case" ? "Use Cases" : label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── Right zone: CTA + hamburger ── */}
          <div className="flex items-center gap-4">
            {/* Primary CTA — Framer Motion hover: fill → outline */}
            <motion.button
              type="button"
              className="relative font-body text-[14px] font-semibold
                         rounded-none cursor-pointer px-6 py-[11px]
                         border border-primary bg-primary text-text-on-accent
                         outline-none focus-visible:outline-2
                         focus-visible:outline-offset-2 focus-visible:outline-primary
                         overflow-hidden hover:bg-base hover:text-white hover:border-primary "
              whileHover="hover"
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {/* Animated background fill that slides out on hover */}
              <motion.span
                className="absolute inset-0 bg-primary origin-left"
                variants={{
                  hover: { scaleX: 0, opacity: 0 },
                }}
                initial={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
                aria-hidden="true"
              />
              <motion.span
                className="relative z-10 text-black "
                variants={{
                  hover: { color: "var(--color-text-primary)" },
                }}
                transition={{ duration: 0.2 }}
              >
                Book Demo
              </motion.span>
            </motion.button>

            {/* ── Mobile hamburger toggle (below lg) ── */}
            <button
              type="button"
              className="lg:hidden flex items-center justify-center
                         w-10 h-10 rounded-none cursor-pointer text-text-secondary
                         outline-none focus-visible:outline-2
                         focus-visible:outline-offset-2 focus-visible:outline-primary"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X size={22} strokeWidth={2} />
              ) : (
                <Menu size={22} strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile nav overlay ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            className="fixed inset-0 z-40 lg:hidden flex flex-col pt-[72px] bg-base"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="flex flex-col flex-1 overflow-y-auto px-5 py-6">
              <ul className="flex flex-col">
                {NAV_LINKS.map(({ label, href }, index) => {
                  if (label === "Resource") {
                    return (
                      <motion.li
                        key={label}
                        className="border-b border-hairline flex flex-col"
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.05 * index,
                          duration: 0.25,
                          ease: "easeOut",
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                          className="flex items-center justify-between py-4 w-full
                                     font-body text-[16px] font-normal text-text-secondary
                                     hover:text-text-primary transition-colors duration-150 ease-in-out
                                     outline-none text-left"
                        >
                          <span>Resources</span>
                          <svg 
                            className={`w-4 h-4 transition-transform duration-200 ${mobileResourcesOpen ? "rotate-180" : ""}`}
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            strokeWidth="2.5"
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </button>
                        <AnimatePresence initial={false}>
                          {mobileResourcesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease: "easeInOut" }}
                              className="overflow-hidden pl-4 flex flex-col gap-3.5 pb-4"
                            >
                              <Link 
                                href="#articles" 
                                className="font-body text-[14.5px] text-text-secondary hover:text-text-primary transition-colors"
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setMobileResourcesOpen(false);
                                }}
                              >
                                Articles & Insights
                              </Link>
                              <Link 
                                href="#downloads" 
                                className="font-body text-[14.5px] text-text-secondary hover:text-text-primary transition-colors"
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setMobileResourcesOpen(false);
                                }}
                              >
                                Downloads
                              </Link>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.li>
                    );
                  }

                  return (
                    <motion.li
                      key={label}
                      className="border-b border-hairline"
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.05 * index,
                        duration: 0.25,
                        ease: "easeOut",
                      }}
                    >
                      <Link
                        href={href}
                        className="flex items-center py-4
                                   font-body text-[16px] font-normal text-text-secondary
                                   hover:text-text-primary transition-colors duration-150 ease-in-out
                                   outline-none focus-visible:outline-2
                                   focus-visible:outline-offset-2 focus-visible:outline-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {label === "Use Case" ? "Use Cases" : label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Spacer so page content isn't hidden behind fixed nav ── */}
      <div className="h-[72px]" aria-hidden="true" />
    </>
  );
}