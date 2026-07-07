"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import React from "react";

/* ── Animation configurations ── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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

interface Testimonial {
  exhibit: string;
  quote: string;
  author: string;
  firm: string;
  initials: string;
}

export default function CustomerStories() {
  const testimonials: Testimonial[] = [
    {
      exhibit: "EXHIBIT B-01",
      quote: "Research used to be a black hole. Now, I just type the question and get a citable IRS answer in seconds.",
      author: "Tax Manager",
      firm: "Sama Tributa",
      initials: "ST"
    },
    {
      exhibit: "EXHIBIT B-02",
      quote: "80% faster first drafts. What used to take us two days is now done in two hours.",
      author: "Managing Partner",
      firm: "Northbridge Tax Advisory",
      initials: "NT"
    }
  ];

  return (
    <section
      id="customer-stories"
      className="bg-surface w-full border-t border-hairline py-24 lg:py-[100px]"
    >
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 w-full flex flex-col items-center">
        
        {/* ── SECTION HEADER ── */}
        <div className="mb-16 text-center max-w-[640px] flex flex-col items-center">
          <p className="font-mono text-[12px] font-medium tracking-[0.08em] text-text-muted mb-4 uppercase">
            § Customer Stories
          </p>
          <h2 className="font-heading text-3xl md:text-[36px] font-medium text-text-primary leading-[1.1]">
            Trusted by firms across the board
          </h2>
        </div>

        {/* ── TWO COLUMN AFFIDAVIT GRID ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-base border border-hairline rounded-none p-8 sm:p-10 flex flex-col justify-between transition-all duration-200 hover:border-primary/40 select-none cursor-default shadow-xl"
              variants={cardVariants}
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

              {/* Case Stamp label overlapping top edge */}
              <span className="absolute -top-3 left-6 bg-hairline text-text-secondary font-mono text-[9px] font-medium px-2 py-0.5 tracking-wider uppercase border border-hairline bg-surface select-none">
                {item.exhibit}
              </span>

              <div className="flex flex-col items-start w-full">
                
                {/* Quote Icon (Quiet Gray) */}
                <Quote size={24} className="text-text-muted/40 mb-6 rotate-180 fill-text-muted/10 stroke-[1.5]" />

                {/* Quote Text */}
                <p className="font-body text-[16px] text-text-primary font-normal italic leading-relaxed mb-8 pr-4">
                  “{item.quote}”
                </p>

              </div>

              {/* Footer Author Row */}
              <div className="flex items-center justify-between w-full border-t border-hairline pt-6 mt-2">
                <div className="flex items-center gap-4">
                  {/* Square Avatar Box */}
                  <div className="w-10 h-10 border border-hairline bg-surface flex items-center justify-center rounded-none select-none">
                    <span className="font-mono text-[13px] font-semibold text-text-secondary">
                      {item.initials}
                    </span>
                  </div>
                  {/* Author Meta stacked */}
                  <div className="flex flex-col">
                    <span className="font-body text-[14px] font-semibold text-text-primary leading-tight">
                      {item.author}
                    </span>
                    <span className="font-body text-[12.5px] text-text-secondary mt-0.5 leading-none">
                      {item.firm}
                    </span>
                  </div>
                </div>

                {/* Small circular verification stamp stamp */}
                <div 
                  className="w-10 h-10 rounded-full border border-verified/35 flex items-center justify-center rotate-[-6deg] select-none opacity-80"
                  style={{ boxShadow: "0 0 0 2px var(--color-base)" }}
                >
                  <span className="font-mono text-[7px] font-bold text-verified">
                    VERIFIED
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
