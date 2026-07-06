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
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="font-body text-[15px] font-normal text-text-secondary
                             hover:text-text-primary transition-colors duration-150 ease-in-out
                             outline-none focus-visible:outline-2
                             focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {label}
                </Link>
              </li>
            ))}
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
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
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
                {NAV_LINKS.map(({ label, href }, index) => (
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
                      {label}
                    </Link>
                  </motion.li>
                ))}
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