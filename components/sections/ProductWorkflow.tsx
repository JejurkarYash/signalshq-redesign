"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface Stage {
  num: string;
  stageLabel: string;
  moduleName: string;
  tag: string;
  comingSoon?: boolean;
  h3: string;
  checklist: string[];
  imgSrc: string;
}

const STAGES: Stage[] = [
  {
    num: "01",
    stageLabel: "STAGE 01",
    moduleName: "Tax Assist",
    tag: "TAX ASSIST",
    h3: "Instant, reliable answers to your tax questions.",
    imgSrc: "https://framerusercontent.com/images/QCaCc1ji5YdS7T7mp1sC3RFSJk.png",
    checklist: [
      "Direct IRS citations & court ruling references",
      "Federal & SALT coverage across all 50 states",
      "Context-aware answers tuned to the client file",
      "Exportable memos, ready for the client folder"
    ]
  },
  {
    num: "02",
    stageLabel: "STAGE 02",
    moduleName: "Client Organizer",
    tag: "CLIENT ORGANIZER",
    h3: "Client data in one place. Structured. Searchable.",
    imgSrc: "https://framerusercontent.com/images/xWmVHj6AmZN39dNIVxGxfz6d1fU.png",
    checklist: [
      "Drag-and-drop document intake — no manual sorting",
      "K-1, 1099, and W-2 extraction at 95%+ accuracy",
      "A 360° view of each client, categorized automatically",
      "Binders assembled without a single copy-paste"
    ]
  },
  {
    num: "03",
    stageLabel: "STAGE 03",
    moduleName: "Client Review",
    tag: "CLIENT REVIEW",
    comingSoon: true,
    h3: "Workpaper insight. Zero manual grind.",
    imgSrc: "https://framerusercontent.com/images/hDs92Q5rf6lMERVlwHC72w4OBPY.png",
    checklist: [
      "Current-year category rollups, generated automatically",
      "Multi-entity support for 1040, 1065, and 1120-S",
      "Workpapers drafted the moment documents land",
      "First-pass returns, AI-drafted 70% faster"
    ]
  }
];

export default function ProductWorkflow() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="product-workflow"
      className="bg-surface w-full border-t border-hairline py-28 md:py-[110px]"
    >
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 w-full">
        
        {/* ── SECTION HEADER ── */}
        <div className="mb-16 text-left">
          <p className="font-mono text-[12px] font-medium tracking-[0.08em] text-text-muted mb-4 uppercase">
            § THE PLATFORM
          </p>
          <h2 className="font-heading text-3xl md:text-[36px] font-medium text-text-primary leading-[1.1] max-w-[640px]">
            Cut research and preparation hours with AI-driven automation.
          </h2>
        </div>

        {/* ── TWO-COLUMN WORKFLOW LAYOUT ── */}
        <div className="flex flex-col min-[900px]:flex-row gap-16 min-[900px]:gap-20 items-start">
          
          {/* ── LEFT COLUMN (docket rail) ── */}
          <div className="w-full min-[900px]:w-[25%] flex-shrink-0 relative">
            
            {/* DESKTOP RAIL (>= 900px) */}
            <div className="hidden min-[900px]:flex flex-col gap-[120px] relative pl-1 select-none">
              
              {/* Vertical Track Base Line (Node 1 center to Node 3 center) */}
              <div 
                className="absolute left-[17px] top-[16px] bottom-[16px] w-[1.5px] bg-hairline -translate-x-1/2 pointer-events-none z-0" 
                aria-hidden="true"
              />
              
              {/* Dynamic Violet Overlay segment */}
              <div 
                className="absolute left-[17px] top-[16px] w-[1.5px] bg-primary -translate-x-1/2 transition-all duration-300 ease-out pointer-events-none z-0" 
                style={{
                  height: activeTab === 0 ? "0%" : activeTab === 1 ? "50%" : "100%"
                }}
                aria-hidden="true"
              />

              {/* Render Desktop Docket Buttons */}
              {STAGES.map((stage, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className="flex items-center gap-5 cursor-pointer text-left rounded-none border-none outline-none focus-visible:ring-1 focus-visible:ring-primary py-1 group z-10"
                  >
                    {/* Node Marker */}
                    <div 
                      className={`w-8 h-8 flex items-center justify-center rounded-none border-[1.5px] font-mono text-[12px] transition-colors duration-200 ${
                        isActive 
                          ? "border-primary bg-primary text-text-on-accent" 
                          : "border-hairline bg-base text-text-muted group-hover:border-text-secondary"
                      }`}
                    >
                      {stage.num}
                    </div>
                    {/* Node Labels */}
                    <div className="flex flex-col">
                      <span 
                        className={`font-mono text-[11px] uppercase tracking-wider transition-colors duration-200 ${
                          isActive ? "text-primary" : "text-text-muted group-hover:text-text-secondary"
                        }`}
                      >
                        {stage.stageLabel}
                      </span>
                      <span 
                        className={`font-body text-[15px] font-semibold transition-colors duration-200 ${
                          isActive ? "text-text-primary" : "text-text-secondary group-hover:text-text-primary"
                        }`}
                      >
                        {stage.moduleName}
                      </span>
                      {stage.comingSoon && !isActive && (
                        <span className="font-mono text-[10px] text-primary mt-0.5 tracking-tight font-medium">
                          COMING SOON
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}

            </div>

            {/* MOBILE RAIL (< 900px) */}
            <div className="flex min-[900px]:hidden flex-col items-center w-full relative mb-8 select-none">
              
              {/* Horizontal Track Base Line (Node 1 center to Node 3 center) */}
              <div 
                className="absolute top-[16px] left-[16px] right-[16px] h-[1.5px] bg-hairline -translate-y-1/2 pointer-events-none z-0" 
                aria-hidden="true"
              />
              
              {/* Dynamic Violet Overlay segment */}
              <div 
                className="absolute top-[16px] left-[16px] h-[1.5px] bg-primary -translate-y-1/2 transition-all duration-300 ease-out pointer-events-none z-0" 
                style={{
                  width: activeTab === 0 ? "0%" : activeTab === 1 ? "50%" : "100%"
                }}
                aria-hidden="true"
              />

              {/* Render Mobile Docket Buttons */}
              <div className="flex justify-between w-full gap-4 z-10">
                {STAGES.map((stage, idx) => {
                  const isActive = activeTab === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveTab(idx)}
                      className="flex flex-col items-center text-center gap-2 cursor-pointer flex-1 rounded-none py-1"
                    >
                      {/* Node Marker */}
                      <div 
                        className={`w-8 h-8 flex items-center justify-center rounded-none border-[1.5px] font-mono text-[12px] transition-colors duration-200 ${
                          isActive 
                            ? "border-primary bg-primary text-text-on-accent" 
                            : "border-hairline bg-base text-text-muted"
                        }`}
                      >
                        {stage.num}
                      </div>
                      {/* Node Labels */}
                      <div className="flex flex-col items-center">
                        <span 
                          className={`font-mono text-[9px] uppercase tracking-wider ${
                            isActive ? "text-primary" : "text-text-muted"
                          }`}
                        >
                          {stage.stageLabel}
                        </span>
                        <span 
                          className={`font-body text-[13px] font-semibold tracking-tight whitespace-nowrap ${
                            isActive ? "text-text-primary" : "text-text-secondary"
                          }`}
                        >
                          {stage.moduleName}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>

          </div>

          {/* ── RIGHT COLUMN (content panel) ── */}
          <div className="w-full min-[900px]:w-[75%] flex-grow border-t border-hairline pt-8">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="w-full flex flex-col items-start max-w-[620px]"
              >
                {/* Active Tag Segment */}
                {STAGES[activeTab].comingSoon ? (
                  <div className="inline-flex items-center border border-hairline rounded-none overflow-hidden text-[11px] font-mono">
                    <span className="text-text-secondary px-2.5 py-1 border-r border-hairline bg-base">
                      {STAGES[activeTab].tag}
                    </span>
                    <span className="bg-primary/15 text-primary px-2.5 py-1 uppercase tracking-wider font-semibold">
                      COMING SOON
                    </span>
                  </div>
                ) : (
                  <div className="inline-flex items-center border border-hairline rounded-none bg-base text-[11px] font-mono text-text-secondary px-2.5 py-1">
                    {STAGES[activeTab].tag}
                  </div>
                )}

                {/* Heading */}
                <h3 className="font-heading text-2xl md:text-[24px] font-medium text-text-primary mt-4 mb-5 leading-snug">
                  {STAGES[activeTab].h3}
                </h3>

                {/* Checklist (Restrained Green Stroke) */}
                <div className="flex flex-col gap-3.5 mb-10 w-full">
                  {STAGES[activeTab].checklist.map((item, i) => (
                    <div key={i} className="flex items-start gap-3.5">
                      {/* Outlined checkmark square */}
                      <div className="w-4 h-4 border border-verified flex items-center justify-center rounded-none text-verified flex-shrink-0 mt-0.5" aria-hidden="true">
                        <svg className="w-2.5 h-2.5 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="font-body text-[15px] text-text-secondary leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Feature Visual Image Container */}
                <div className="w-full aspect-[16/10] bg-black border border-hairline rounded-none overflow-hidden select-none shadow-sm relative p-6 sm:p-8 flex items-center justify-center">
                  <img
                    src={STAGES[activeTab].imgSrc}
                    alt={`${STAGES[activeTab].moduleName} UI preview`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
