"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ProductWalkthrough() {
  return (
    <section
      id="product-walkthrough"
      className="bg-surface w-full border-y border-hairline py-24 lg:py-[100px]"
    >
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8 w-full flex flex-col items-start">
        
        {/* ── SECTION HEADER ── */}
        <div className="mb-10 text-left">
          <p className="font-mono text-[12px] font-medium tracking-[0.08em] text-text-muted mb-4 uppercase">
            § PLATFORM OVERVIEW
          </p>
          <h2 className="font-heading text-3xl md:text-[36px] font-medium text-text-primary leading-[1.1] mb-4">
            See SignalsHQ in Action
          </h2>
          <p className="font-body text-[16px] text-text-secondary max-w-[480px] leading-relaxed">
            Experience how our AI-driven infrastructure automates complex tax workflow analysis with absolute precision and citation.
          </p>
        </div>

        {/* ── THE EXHIBIT FRAME ── */}
        <div className="relative w-full">
          
          {/* Corner Registration Marks (Slide to lock on scroll) */}
          {/* Top Left */}
          <motion.div 
            className="absolute w-4 h-4 max-[900px]:w-2.5 max-[900px]:h-2.5 border-t-[1.5px] border-l-[1.5px] border-hairline pointer-events-none" 
            initial={{ x: 8, y: 8, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            style={{ top: "-8px", left: "-8px" }}
            aria-hidden="true" 
          />
          {/* Top Right */}
          <motion.div 
            className="absolute w-4 h-4 max-[900px]:w-2.5 max-[900px]:h-2.5 border-t-[1.5px] border-r-[1.5px] border-hairline pointer-events-none" 
            initial={{ x: -8, y: 8, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            style={{ top: "-8px", right: "-8px" }}
            aria-hidden="true" 
          />
          {/* Bottom Left */}
          <motion.div 
            className="absolute w-4 h-4 max-[900px]:w-2.5 max-[900px]:h-2.5 border-b-[1.5px] border-l-[1.5px] border-hairline pointer-events-none" 
            initial={{ x: 8, y: -8, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            style={{ bottom: "-8px", left: "-8px" }}
            aria-hidden="true" 
          />
          {/* Bottom Right */}
          <motion.div 
            className="absolute w-4 h-4 max-[900px]:w-2.5 max-[900px]:h-2.5 border-b-[1.5px] border-r-[1.5px] border-hairline pointer-events-none" 
            initial={{ x: -8, y: -8, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            style={{ bottom: "-8px", right: "-8px" }}
            aria-hidden="true" 
          />

          {/* Main Frame Outer Container */}
          <div className="w-full border border-hairline bg-elevated rounded-none overflow-hidden flex flex-col">
            
            {/* Header Bar */}
            <div className="h-[44px] bg-base border-b border-hairline flex items-center justify-between px-5 select-none">
              <span className="font-mono text-[11px] font-medium text-text-muted uppercase tracking-wider">
                EXHIBIT A — SIGNALS INTRO
              </span>
              {/* Window-chrome dots (Square layout) */}
              <div className="flex gap-1.5 max-[900px]:hidden">
                <span className="w-1.5 h-1.5 bg-hairline rounded-none" />
                <span className="w-1.5 h-1.5 bg-hairline rounded-none" />
                <span className="w-1.5 h-1.5 bg-hairline rounded-none" />
              </div>
            </div>

            {/* Video Area (16:9 aspect ratio, playing automatically with controls) */}
            <div className="relative w-full aspect-video bg-base flex items-center justify-center overflow-hidden">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                controls
                src="https://framerusercontent.com/assets/2x378fIygBv140XOirg1Pq8E.mp4"
                className="w-full h-full object-contain bg-base z-20"
              />
            </div>

            {/* Meta Strip */}
            <div className="bg-base border-t border-hairline flex flex-col min-[900px]:flex-row min-[900px]:h-[52px] min-[900px]:items-center select-none divide-y min-[900px]:divide-y-0 min-[900px]:divide-x divide-hairline">
              
              <div className="flex-1 py-3.5 px-5 flex items-center justify-center min-[900px]:justify-start">
                <span className="font-mono text-[11px] font-medium text-text-muted tracking-wider">
                  DURATION — 0:43
                </span>
              </div>
              
              <div className="flex-1 py-3.5 px-5 flex items-center justify-center">
                <span className="font-mono text-[11px] font-medium text-text-muted tracking-wider">
                  MODULE — PLATFORM INTRO
                </span>
              </div>

              <div className="flex-1 py-3.5 px-5 flex items-center justify-center min-[900px]:justify-end">
                <span className="font-mono text-[11px] font-bold text-verified tracking-wider uppercase">
                  STATUS — VERIFIED
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
