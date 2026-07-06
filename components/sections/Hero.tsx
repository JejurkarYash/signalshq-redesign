"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import React, { useState } from "react";

/* ── Stagger animations config ── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function Hero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Demo requested for: ${email}`);
    }
  };

  return (
    <section
      id="hero"
      className="relative bg-base w-full overflow-hidden pt-[110px] pb-[90px]"
    >
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 md:px-12">
        {/* Parent container centered vertically (align-items: center) */}
        <div className="flex flex-col min-[900px]:flex-row items-center justify-between gap-16 min-[900px]:gap-8">
          
          {/* ── LEFT COLUMN (Text Content) ── */}
          <div className="w-full min-[900px]:w-[54%] flex flex-col items-start text-left z-10">
            
            {/* Eyebrow tag (Black Ore style with sharp corners & premium color restraint) */}
            <motion.div
              className="inline-flex items-center border border-hairline bg-surface rounded-none overflow-hidden mb-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <span className="bg-[rgba(155,132,234,0.08)] text-[#B3A1F0] font-mono text-[11px] font-medium px-3 py-1.5 uppercase tracking-[0.08em] border-r border-hairline">
                AI Infrastructure
              </span>
              <span className="flex items-center gap-1.5 text-text-secondary font-body text-[12.5px] px-3.5 py-1.5 font-normal">
                Cited answers, verified daily
                <ChevronRight size={13} className="text-text-muted" />
              </span>
            </motion.div>

            {/* H1 Headline */}
            <motion.h1
              className="font-heading text-4xl sm:text-5xl min-[900px]:text-[54px] font-medium leading-[1.05] tracking-[-0.02em] text-text-primary"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
            >
              Powering Tax Experts.
              <br />
              Fueling Firm Growth.
            </motion.h1> 

            {/* Subheadline */}
            <motion.p
              className="mt-6 mb-9 font-body text-[17px] font-normal text-text-secondary leading-relaxed max-w-[530px]"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
            >
              Smart Automation Built for Scaling Tax Firms
            </motion.p>

            {/* Email Capture Bar (Matches Black Ore's premium high-contrast design) */}
            <motion.div
              className="w-full max-w-[480px]"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.3}
            >
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row border border-hairline bg-surface rounded-none w-full gap-0 overflow-hidden"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="What's your work email"
                  className="w-full bg-transparent border-none rounded-none text-text-primary placeholder:text-text-secondary/60 text-[14px] font-body px-[18px] py-[14px] focus:outline-none"
                />
                <motion.button
                  type="submit"
                  className="relative w-full sm:w-auto shrink-0 font-body text-[14.5px] font-semibold rounded-none cursor-pointer px-7 py-[14px] bg-text-primary text-text-on-accent outline-none overflow-hidden hover:bg-primary border-t sm:border-t-0 sm:border-l border-hairline whitespace-nowrap"
                  whileHover="hover"
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  {/* Animated background fill that slides out on hover */}
                  <motion.span
                    className="absolute inset-0 bg-text-primary origin-left"
                    variants={{
                      hover: { scaleX: 0, opacity: 0 },
                    }}
                    initial={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    aria-hidden="true"
                  />
                  <motion.span
                    className="relative z-10 text-text-on-accent"
                    variants={{
                      hover: { color: "var(--color-text-on-accent)" },
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    Request a demo
                  </motion.span>
                </motion.button>
              </form>
              <p className="mt-3 font-mono text-[11px] text-text-muted tracking-tight">
                No credit card required · 20-minute walkthrough
              </p>
            </motion.div>

          </div>

          {/* ── RIGHT COLUMN (Centerpiece visual with Ambient Glow) ── */}
          <div className="w-full min-[900px]:w-[46%] flex items-center justify-center min-[900px]:justify-end py-8 min-[900px]:py-0">
            
            {/* Relative wrapper centering glow directly on the card */}
            <div className="relative w-full max-w-[420px] flex items-center justify-center">
              
              {/* Ambient Radial Glow - Positioned behind the card and centered */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none hidden min-[900px]:block z-0"
                style={{
                  background: "radial-gradient(circle, rgba(155, 132, 234, 0.16) 0%, transparent 65%)",
                  filter: "blur(110px)",
                }}
                aria-hidden="true"
              />

              {/* Centerpiece Memo Card */}
              <motion.div
                className="relative w-full bg-surface border border-hairline rounded-none p-7 shadow-2xl min-[900px]:rotate-[1.2deg] transition-transform duration-300 z-10"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.4}
              >
                {/* Corner Registration Marks (Positioned inside the card so they rotate with it, sliding out on load) */}
                {/* Top Left */}
                <motion.div 
                  className="absolute w-4 h-4 max-[900px]:w-2.5 max-[900px]:h-2.5 border-t-[1.5px] border-l-[1.5px] border-hairline pointer-events-none" 
                  initial={{ x: 8, y: 8, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                  style={{ top: "-10px", left: "-10px" }}
                  aria-hidden="true" 
                />
                {/* Top Right */}
                <motion.div 
                  className="absolute w-4 h-4 max-[900px]:w-2.5 max-[900px]:h-2.5 border-t-[1.5px] border-r-[1.5px] border-hairline pointer-events-none" 
                  initial={{ x: -8, y: 8, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                  style={{ top: "-10px", right: "-10px" }}
                  aria-hidden="true" 
                />
                {/* Bottom Left */}
                <motion.div 
                  className="absolute w-4 h-4 max-[900px]:w-2.5 max-[900px]:h-2.5 border-b-[1.5px] border-l-[1.5px] border-hairline pointer-events-none" 
                  initial={{ x: 8, y: -8, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                  style={{ bottom: "-10px", left: "-10px" }}
                  aria-hidden="true" 
                />
                {/* Bottom Right */}
                <motion.div 
                  className="absolute w-4 h-4 max-[900px]:w-2.5 max-[900px]:h-2.5 border-b-[1.5px] border-r-[1.5px] border-hairline pointer-events-none" 
                  initial={{ x: -8, y: -8, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                  style={{ bottom: "-10px", right: "-10px" }}
                  aria-hidden="true" 
                />

                {/* Memo label overlapping top edge */}
                <span className="absolute -top-3 left-6 bg-primary text-text-on-accent font-mono text-[10px] font-medium px-2.5 py-1 tracking-wider uppercase">
                  TAX ASSIST — MEMO 001
                </span>

                {/* Question Row */}
                <div className="flex items-start gap-2.5 mt-2">
                  <span className="font-mono text-[13px] text-text-muted font-bold">Q:</span>
                  <p className="font-body text-[13px] text-text-secondary leading-relaxed">
                    What's the nexus rule in California?
                  </p>
                </div>

                {/* Divider */}
                <div className="border-t border-dashed border-hairline my-3.5" />

                {/* Answer Row */}
                <div className="pr-4">
                  <p className="font-body text-[15px] text-text-primary leading-[1.55]">
                    Economic nexus is established once a taxpayer exceeds $500,000 in California-sourced sales in a calendar year, regardless of physical presence.<sup className="font-mono text-[10px] text-primary ml-0.5">1</sup>
                  </p>
                </div>

                {/* Divider */}
                <div className="border-t border-dashed border-hairline my-3.5" />

                {/* Footnote */}
                <p className="font-mono text-[11.5px] text-text-secondary leading-snug">
                  <span className="text-primary mr-1">1.</span>
                  Cal. Rev. & Tax Code §23101(b)(2) — verified against current SALT guidance
                </p>

                {/* Verified Badge stamp overlapping bottom right */}
                <div
                  className="absolute -bottom-4 -right-4 w-[58px] h-[58px] rounded-full border-[1.5px] border-verified flex items-center justify-center bg-surface rotate-[-8deg] pointer-events-none select-none z-10"
                  style={{ boxShadow: "0 0 0 4px var(--color-surface)" }}
                >
                  <span className="font-mono text-[8px] font-bold text-verified text-center leading-[1.1] tracking-tight px-1">
                    CITED & VERIFIED
                  </span>
                </div>

              </motion.div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
