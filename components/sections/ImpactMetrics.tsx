"use client";

import { motion } from "framer-motion";

/* ── Animation configurations ── */
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

// Stagger animation for the constellation tickets
const ticketContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ticketItem = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" } as const,
  },
};

interface LedgerRowProps {
  index: string;
  stat: string;
  label: string;
  delay: number;
}

function LedgerRow({ index, stat, label, delay }: LedgerRowProps) {
  return (
    <motion.div
      className="flex items-center gap-5 px-1 py-[22px] border-b border-hairline w-full group hover:bg-elevated transition-colors duration-150 ease-in-out cursor-default select-none"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={delay}
    >
      {/* Citation Index */}
      <span className="font-mono text-[12px] text-text-muted w-10 flex-shrink-0">
        {index}
      </span>
      
      {/* Stat Number */}
      <span className="font-mono text-2xl sm:text-[34px] font-medium text-text-primary w-[130px] flex-shrink-0 tracking-tight leading-none">
        {stat}
      </span>
      
      {/* Stat Label */}
      <span className="font-body text-[14px] text-text-secondary flex-grow leading-relaxed">
        {label}
      </span>
    </motion.div>
  );
}

export default function ImpactMetrics() {
  const problems = [
    { text: "Review queue is jammed again", pos: "top-[10%] left-[5%] max-[1100px]:left-[2%]" },
    { text: "W-2s and 1099s everywhere - help!", pos: "top-[30%] left-[55%] max-[1100px]:left-[50%]" },
    { text: "K-1s are slowing everything down", pos: "top-[50%] left-[0%]" },
    { text: "What's the nexus rule in California?", pos: "top-[65%] left-[60%] max-[1100px]:left-[55%]" },
    { text: "We're double-entering the same data!", pos: "top-[85%] left-[15%]" },
  ];

  return (
    <section
      id="impact-metrics"
      className="bg-base w-full border-t border-hairline py-24 lg:py-[100px]"
    >
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 w-full">
        {/* Two-column layout split, stacks below 900px */}
        <div className="flex flex-col min-[900px]:flex-row items-center justify-between gap-16 min-[900px]:gap-12">
          
          {/* ── LEFT COLUMN (Ledger rows + header) ── */}
          <div className="w-full min-[900px]:w-[52%] flex flex-col items-start justify-center">
            
            {/* Header Content */}
            <div className="text-left mb-10">
              <p className="font-mono text-[12px] font-medium tracking-[0.08em] text-text-muted mb-4 uppercase">
                § Verified Outcomes
              </p>
              <h2 className="font-heading text-3xl md:text-[34px] font-medium text-text-primary leading-[1.1] mb-4">
                Cut research and preparation hours with AI-driven automation.
              </h2>
              <p className="font-body text-[15px] text-text-secondary max-w-[420px] leading-relaxed">
                One reliable layer for authoritative answers, automated intake and extraction, and streamlined prep to help your firm cut busy-season grind and redirect time to advisory.
              </p>
            </div>

            {/* Ledger Stack */}
            <div className="w-full border-t border-hairline flex flex-col">
              <LedgerRow 
                index="§ 01" 
                stat="4+ hrs" 
                label="Time saved" 
                delay={0.1}
              />
              <LedgerRow 
                index="§ 02" 
                stat="2x" 
                label="Advisory Revenue" 
                delay={0.2}
              />
              <LedgerRow 
                index="§ 03" 
                stat="95%+" 
                label="Client Satisfaction" 
                delay={0.3}
              />
            </div>

          </div>

          {/* ── RIGHT COLUMN (Problem Constellation visual) ── */}
          <div className="w-full min-[900px]:w-[48%] flex items-center justify-center min-[900px]:justify-end">
            
            <div className="relative w-full max-w-[560px]">
              
              {/* Soft ambient halo behind the whole constellation box to lift it off the base background */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[540px] pointer-events-none hidden min-[900px]:block z-0"
                style={{
                  background: "radial-gradient(circle, var(--color-accent-violet) 0%, transparent 70%)",
                  opacity: 0.12,
                  filter: "blur(110px)",
                }}
                aria-hidden="true"
              />

              {/* Corner Registration Marks (Slide to lock on scroll) */}
              {/* Top Left */}
              <motion.div 
                className="absolute w-4 h-4 max-[900px]:w-2.5 max-[900px]:h-2.5 border-t-[1.5px] border-l-[1.5px] border-hairline pointer-events-none z-20" 
                initial={{ x: 8, y: 8, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                style={{ top: "-8px", left: "-8px" }}
                aria-hidden="true" 
              />
              {/* Top Right */}
              <motion.div 
                className="absolute w-4 h-4 max-[900px]:w-2.5 max-[900px]:h-2.5 border-t-[1.5px] border-r-[1.5px] border-hairline pointer-events-none z-20" 
                initial={{ x: -8, y: 8, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                style={{ top: "-8px", right: "-8px" }}
                aria-hidden="true" 
              />
              {/* Bottom Left */}
              <motion.div 
                className="absolute w-4 h-4 max-[900px]:w-2.5 max-[900px]:h-2.5 border-b-[1.5px] border-l-[1.5px] border-hairline pointer-events-none z-20" 
                initial={{ x: 8, y: -8, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                style={{ bottom: "-8px", left: "-8px" }}
                aria-hidden="true" 
              />
              {/* Bottom Right */}
              <motion.div 
                className="absolute w-4 h-4 max-[900px]:w-2.5 max-[900px]:h-2.5 border-b-[1.5px] border-r-[1.5px] border-hairline pointer-events-none z-20" 
                initial={{ x: -8, y: -8, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                style={{ bottom: "-8px", right: "-8px" }}
                aria-hidden="true" 
              />

              {/* DESKTOP CONSTELLATION CONTAINER (>= 900px) */}
              <div className="hidden min-[900px]:block w-full h-[480px] bg-base relative overflow-hidden select-none z-10">
                
                {/* Case File Title */}
                <span className="absolute top-4 left-4 font-mono text-[10px] text-text-muted tracking-[0.06em] uppercase z-20">
                  CASE FILE — BUSY SEASON, 2026
                </span>

                {/* Ambient Glow */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent-violet/10 blur-[90px] pointer-events-none z-0"
                  aria-hidden="true"
                />

                {/* Ledgar paper repeated plus marks grid in center 60% */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] grid grid-cols-5 grid-rows-5 justify-items-center items-center pointer-events-none opacity-[0.25] text-hairline font-mono text-[10px] z-0"
                  aria-hidden="true"
                >
                  {Array.from({ length: 25 }).map((_, i) => (
                    <span key={i}>+</span>
                  ))}
                </div>

                {/* Connecting Lines SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                  {/* Line 1 (Top Left) to Line 3 (Middle Left) - Neutral Hairline */}
                  <motion.line 
                    x1="22%" y1="16%" x2="20%" y2="54%" 
                    stroke="var(--color-hairline)" strokeWidth="1" 
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
                  />
                  <rect x="21%" y="35%" width="4" height="4" transform="translate(-2, -2)" fill="var(--color-hairline)" />

                  {/* Line 2 (Upper Right) to Line 4 (Lower Right) - Muted Violet */}
                  <motion.line 
                    x1="75%" y1="36%" x2="78%" y2="70%" 
                    stroke="var(--color-accent-violet)" strokeOpacity="0.2" strokeWidth="1" 
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
                  />
                  <rect x="76.5%" y="53%" width="4" height="4" transform="translate(-2, -2)" fill="var(--color-hairline)" />

                  {/* Line 3 (Middle Left) to Line 5 (Bottom Left) - Neutral Hairline */}
                  <motion.line 
                    x1="20%" y1="56%" x2="30%" y2="88%" 
                    stroke="var(--color-hairline)" strokeWidth="1" 
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
                  />
                  <rect x="25%" y="72%" width="4" height="4" transform="translate(-2, -2)" fill="var(--color-hairline)" />
                </svg>

                {/* Staggered problem tickets */}
                <motion.div 
                  className="absolute inset-0 w-full h-full"
                  variants={ticketContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {problems.map((prob, i) => (
                    <motion.div
                      key={i}
                      className={`absolute bg-elevated border border-hairline rounded-none px-4 py-2.5 shadow-lg select-none whitespace-nowrap z-10 ${prob.pos}`}
                      variants={ticketItem}
                    >
                      <span className="font-mono text-[12px] text-text-muted mr-1.5 select-none">§</span>
                      <span className="font-body text-[14px] text-text-primary">{prob.text}</span>
                    </motion.div>
                  ))}
                </motion.div>

              </div>

              {/* MOBILE STACKED LIST VIEW (< 900px) */}
              <div className="block min-[900px]:hidden w-full flex flex-col gap-3 py-4 select-none">
                <span className="font-mono text-[10px] text-text-muted tracking-[0.06em] uppercase mb-1 block">
                  CASE FILE — BUSY SEASON, 2026
                </span>
                {problems.map((prob, i) => (
                  <div
                    key={i}
                    className="bg-elevated border border-hairline rounded-none px-4 py-3 shadow-md flex items-center"
                  >
                    <span className="font-mono text-[12px] text-text-muted mr-2">§</span>
                    <span className="font-body text-[13.5px] text-text-primary">{prob.text}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
