"use client";

import { motion } from "framer-motion";
import { Lock, Check } from "lucide-react";
import React, { useState } from "react";

export default function BottomCTA() {
  const [email, setEmail] = useState("");
  const [selectedFocus, setSelectedFocus] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleFocus = (topic: string) => {
    if (selectedFocus.includes(topic)) {
      setSelectedFocus(selectedFocus.filter((t) => t !== topic));
    } else {
      setSelectedFocus([...selectedFocus, topic]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  const focusOptions = [
    "Federal Tax Assist",
    "SALT Compliance",
    "Client Intake & Extraction"
  ];

  return (
    <section
      id="bottom-cta"
      className="bg-surface w-full border-t border-hairline py-28 lg:py-[120px] relative overflow-hidden"
    >
      {/* ── Technical Blueprint Grid Background ── */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04] z-0 select-none"
        style={{
          backgroundImage: "linear-gradient(to right, var(--color-hairline) 1px, transparent 1px), linear-gradient(to bottom, var(--color-hairline) 1px, transparent 1px)",
          backgroundSize: "48px 48px"
        }}
        aria-hidden="true"
      />

      {/* ── Breathing Background Glow (Simulating dune lighting depth) ── */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-accent-violet/10 blur-[130px] pointer-events-none z-0"
        animate={{
          scale: [0.95, 1.1, 0.95],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 w-full flex flex-col items-center relative z-10">
        
        {/* ── Outer Exhibit Frame wrapper ── */}
        <div className="relative w-full max-w-[620px]">
          
          {/* Corner Registration Marks (Offset -8px) */}
          {/* Top Left */}
          <div 
            className="absolute -top-2.5 -left-2.5 w-4 h-4 border-t-[1.5px] border-l-[1.5px] border-hairline pointer-events-none" 
            aria-hidden="true" 
          />
          {/* Top Right */}
          <div 
            className="absolute -top-2.5 -right-2.5 w-4 h-4 border-t-[1.5px] border-r-[1.5px] border-hairline pointer-events-none" 
            aria-hidden="true" 
          />
          {/* Bottom Left */}
          <div 
            className="absolute -bottom-2.5 -left-2.5 w-4 h-4 border-b-[1.5px] border-l-[1.5px] border-hairline pointer-events-none" 
            aria-hidden="true" 
          />
          {/* Bottom Right */}
          <div 
            className="absolute -bottom-2.5 -right-2.5 w-4 h-4 border-b-[1.5px] border-r-[1.5px] border-hairline pointer-events-none" 
            aria-hidden="true" 
          />

          {/* ── Main Secure Terminal Panel ── */}
          <div className="w-full bg-elevated border border-hairline rounded-none overflow-hidden shadow-2xl flex flex-col">
            
            {/* Header strip */}
            <div className="h-[42px] bg-base border-b border-hairline flex items-center justify-between px-5 select-none">
              <span className="font-mono text-[9.5px] font-medium text-text-muted tracking-wider uppercase">
                SECURE ACCESS CONSOLE // DEMO SETUP
              </span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-verified rounded-full animate-ping" />
                <span className="font-mono text-[9px] text-verified font-bold tracking-tight">ACTIVE</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-8 sm:p-10 text-center flex flex-col items-center">
              
              <h2 className="font-heading text-2xl sm:text-[32px] font-medium text-text-primary leading-[1.1] mb-6 max-w-[500px]">
                Get hands-on with AI-powered tax automation today.
              </h2>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="w-full flex flex-col items-stretch gap-6">
                  
                  {/* Step 1: Select Focus Areas (Interactive feature checkboxes) */}
                  <div className="flex flex-col items-start w-full">
                    <span className="font-mono text-[10px] text-text-muted tracking-[0.05em] uppercase mb-3">
                      Select Focus Areas (Optional)
                    </span>
                    <div className="flex flex-wrap gap-2.5 w-full">
                      {focusOptions.map((opt, i) => {
                        const isSelected = selectedFocus.includes(opt);
                        return (
                          <button
                            key={i}
                            type="button"
                            onClick={() => toggleFocus(opt)}
                            className={`flex items-center gap-2 border px-3.5 py-2 text-[12.5px] font-body rounded-none cursor-pointer transition-all duration-150 select-none ${
                              isSelected 
                                ? "border-primary bg-primary/10 text-text-primary" 
                                : "border-hairline bg-base text-text-secondary hover:border-text-secondary"
                            }`}
                          >
                            <div 
                              className={`w-3.5 h-3.5 border flex items-center justify-center rounded-none flex-shrink-0 ${
                                isSelected ? "border-primary bg-primary text-text-on-accent" : "border-hairline"
                              }`}
                            >
                              {isSelected && <Check size={10} strokeWidth={3} />}
                            </div>
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Divider line inside form */}
                  <div className="w-full border-t border-dashed border-hairline my-1" />

                  {/* Step 2: Email & Booking Button */}
                  <div className="flex flex-col items-stretch w-full gap-3">
                    <div className="flex flex-col sm:flex-row border border-hairline bg-base rounded-none w-full gap-0 overflow-hidden focus-within:border-primary/50 transition-colors">
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
                        className="relative w-full sm:w-auto shrink-0 font-body text-[13.5px] font-semibold tracking-wider font-mono px-7 py-[14px] bg-text-primary text-text-on-accent outline-none overflow-hidden hover:bg-primary border-t sm:border-t-0 sm:border-l border-hairline whitespace-nowrap cursor-pointer uppercase"
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
                          BOOK A DEMO
                        </motion.span>
                      </motion.button>
                    </div>
                  </div>

                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full py-8 border border-dashed border-verified/30 bg-verified-muted flex flex-col items-center justify-center p-6 text-center select-none"
                >
                  <div className="w-10 h-10 rounded-full border border-verified flex items-center justify-center text-verified mb-4">
                    <Check size={20} strokeWidth={2.5} />
                  </div>
                  <span className="font-heading text-[18px] font-medium text-text-primary mb-1">
                    Demo Connection Initiated
                  </span>
                  <p className="font-body text-[13.5px] text-text-secondary max-w-[340px]">
                    We have received your request for <span className="text-text-primary font-mono text-[12.5px]">{email}</span>. A tax systems architect will contact you shortly.
                  </p>
                </motion.div>
              )}

              {/* Secure tag footer */}
              <div className="flex items-center gap-2 mt-8 text-text-muted font-mono text-[10px] select-none">
                <Lock size={11} className="stroke-[1.75]" />
                <span>TLS 256-BIT SECURE CONNECTION · VERIFIED SOC2 TYPE II</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
