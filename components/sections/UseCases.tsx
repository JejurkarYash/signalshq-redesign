"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Search, Lightbulb } from "lucide-react";
import React from "react";

/* ── Stagger animations config ── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

interface UseCaseCard {
  num: string;
  tag: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function UseCases() {
  const cases: UseCaseCard[] = [
    {
      num: "01",
      tag: "RULE TRACKING",
      title: "Always Current on Tax Rules",
      description: "Delivers the latest updates across SALT and Federal taxes directly in your workflow.",
      icon: <ClipboardCheck size={20} className="text-text-muted group-hover:text-primary transition-colors duration-200" />
    },
    {
      num: "02",
      tag: "DATA SYNTHESIS",
      title: "Turn Raw Data into Insight",
      description: "Uses AI to locate, organize, and surface client insights hidden in client documents.",
      icon: <Search size={20} className="text-text-muted group-hover:text-primary transition-colors duration-200" />
    },
    {
      num: "03",
      tag: "RISK ANALYSIS",
      title: "Surface Savings & Risks",
      description: "Analyze your client data to unlock opportunities and spot risks proactively.",
      icon: <Lightbulb size={20} className="text-text-muted group-hover:text-primary transition-colors duration-200" />
    }
  ];

  return (
    <section
      id="use-cases"
      className="bg-base w-full border-t border-hairline py-24 lg:py-[100px]"
    >
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 w-full flex flex-col items-center">
        
        {/* ── SECTION HEADER (Centered) ── */}
        <div className="mb-16 text-center max-w-[640px] flex flex-col items-center">
          <p className="font-mono text-[12px] font-medium tracking-[0.08em] text-text-muted mb-4 uppercase">
            § Use Cases
          </p>
          <h2 className="font-heading text-3xl md:text-[36px] font-medium text-text-primary leading-[1.1]">
            Focus on high-value client outcomes.
          </h2>
        </div>

        {/* ── THREE COLUMN CARD GRID ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {cases.map((item, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-elevated border border-hairline rounded-none p-8 flex flex-col justify-between transition-all duration-200 hover:border-primary/40 select-none cursor-default"
              variants={cardVariants}
            >
              
              {/* Corner Registration Marks (Slide outwards on hover for focus lock effect) */}
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

              <div className="flex flex-col items-start">
                
                {/* Header info (Tag + Numbering) */}
                <div className="flex items-center justify-between w-full mb-6">
                  <span className="font-mono text-[10px] text-text-muted tracking-[0.06em] uppercase">
                    {item.tag}
                  </span>
                  <span className="font-mono text-[11px] text-text-muted">
                    § {item.num}
                  </span>
                </div>

                {/* Icon wrapper inside background circle alternative (sharp box) */}
                <div className="w-10 h-10 border border-hairline bg-base flex items-center justify-center rounded-none mb-6">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="font-heading text-[20px] font-medium text-text-primary mb-3">
                  {item.title}
                </h3>

                {/* Divider */}
                <div className="w-full border-t border-hairline my-2.5" />

                {/* Description */}
                <p className="font-body text-[14px] text-text-secondary leading-relaxed mt-1">
                  {item.description}
                </p>

              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
