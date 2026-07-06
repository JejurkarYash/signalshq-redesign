"use client";

import { motion } from "framer-motion";
import { Lock, Activity, Shield, ShieldCheck } from "lucide-react";
import React from "react";

/* ── Animation configurations ── */
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const gridContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

interface SecurityCard {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function SecurityTrust() {
  const cards: SecurityCard[] = [
    {
      title: "End-to-end Encryption",
      desc: "SOC 2 Type II compliant pipelines. Data is isolated and shielded at all processing stages.",
      icon: <Lock size={18} className="text-text-muted group-hover:text-primary transition-colors duration-200" />
    },
    {
      title: "Monitoring Systems",
      desc: "24/7 intrusion detection. Continuous quarterly security vulnerability scans & annual pen tests.",
      icon: <Activity size={18} className="text-text-muted group-hover:text-primary transition-colors duration-200" />
    },
    {
      title: "Access Control",
      desc: "Multi-Factor Authentication (MFA) enforcement. Strict role-based granular permissions.",
      icon: <Shield size={18} className="text-text-muted group-hover:text-primary transition-colors duration-200" />
    },
    {
      title: "Regulation Compliant",
      desc: "TLS 256-bit encryption in transit & at rest. Full compliance with IRS Pub 1345 guidelines.",
      icon: <ShieldCheck size={18} className="text-text-muted group-hover:text-primary transition-colors duration-200" />
    }
  ];

  return (
    <section
      id="security-trust"
      className="bg-base w-full border-t border-hairline py-24 lg:py-[100px]"
    >
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 w-full">
        {/* Two-column layout split, stacks below 900px */}
        <div className="flex flex-col min-[900px]:flex-row items-center justify-between gap-16 min-[900px]:gap-12">
          
          {/* ── LEFT COLUMN (Compliance details & header) ── */}
          <div className="w-full min-[900px]:w-[42%] flex flex-col items-start text-left z-10">
            
            <motion.div
              className="text-left mb-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <p className="font-mono text-[12px] font-medium tracking-[0.08em] text-text-muted mb-4 uppercase">
                § Compliance & Trust
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl min-[900px]:text-[36px] font-medium text-text-primary leading-[1.1] mb-6">
                Secure Conversations. Smarter Tax Strategies.
              </h2>
              <p className="font-body text-[15px] text-text-secondary leading-relaxed max-w-[420px]">
                Built on industry-leading compliance standards to keep your clients' data isolated, encrypted, and audit-ready.
              </p>
            </motion.div>

            {/* CTA Button (Sharp corner, high contrast) */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
            >
              <motion.button
                type="button"
                className="relative font-body text-[14px] font-semibold rounded-none cursor-pointer px-7 py-3.5 bg-text-primary text-text-on-accent border border-text-primary outline-none overflow-hidden hover:bg-base hover:text-white hover:border-text-primary focus-visible:ring-1 focus-visible:ring-primary"
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
                    hover: { color: "var(--color-text-primary)" },
                  }}
                  transition={{ duration: 0.2 }}
                >
                  Security Overview
                </motion.span>
              </motion.button>
            </motion.div>

          </div>

          {/* ── RIGHT COLUMN (2x2 Security grid) ── */}
          <div className="w-full min-[900px]:w-[55%] flex items-center justify-end">
            
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full"
              variants={gridContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              {cards.map((card, idx) => (
                <motion.div
                  key={idx}
                  className="group relative bg-elevated border border-hairline rounded-none p-6 flex flex-col justify-between transition-all duration-200 hover:border-primary/40 select-none cursor-default shadow-md"
                  variants={cardItem}
                >
                  
                  {/* Subtle hover registration corner brackets (Slide outwards on hover) */}
                  <div 
                    className="absolute top-0 left-0 w-3 h-3 border-t-[1.5px] border-l-[1.5px] border-hairline opacity-0 group-hover:opacity-100 group-hover:-top-1.5 group-hover:-left-1.5 transition-all duration-300 pointer-events-none" 
                    aria-hidden="true" 
                  />
                  <div 
                    className="absolute top-0 right-0 w-3 h-3 border-t-[1.5px] border-r-[1.5px] border-hairline opacity-0 group-hover:opacity-100 group-hover:-top-1.5 group-hover:-right-1.5 transition-all duration-300 pointer-events-none" 
                    aria-hidden="true" 
                  />
                  <div 
                    className="absolute bottom-0 left-0 w-3 h-3 border-b-[1.5px] border-l-[1.5px] border-hairline opacity-0 group-hover:opacity-100 group-hover:-bottom-1.5 group-hover:-left-1.5 transition-all duration-300 pointer-events-none" 
                    aria-hidden="true" 
                  />
                  <div 
                    className="absolute bottom-0 right-0 w-3 h-3 border-b-[1.5px] border-r-[1.5px] border-hairline opacity-0 group-hover:opacity-100 group-hover:-bottom-1.5 group-hover:-right-1.5 transition-all duration-300 pointer-events-none" 
                    aria-hidden="true" 
                  />

                  <div className="flex flex-col items-start w-full">
                    {/* Icon frame */}
                    <div className="w-9 h-9 border border-hairline bg-base flex items-center justify-center rounded-none mb-5">
                      {card.icon}
                    </div>
                    {/* Title */}
                    <h3 className="font-heading font-medium text-[16px] text-text-primary mb-2 leading-tight">
                      {card.title}
                    </h3>
                    {/* Description */}
                    <p className="font-mono text-[11px] text-text-secondary leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                </motion.div>
              ))}
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
