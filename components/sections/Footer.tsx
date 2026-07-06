"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="main-footer"
      className="bg-base w-full border-t border-hairline pt-20 pb-10 relative overflow-hidden"
    >
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8 w-full">
        
        {/* ── FIVE-COLUMN FOOTER GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 pb-16">
          
          {/* Column 1: Brand & Desc */}
          <div className="md:col-span-2 flex flex-col items-start text-left">
            <Link
              href="/"
              className="outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary mb-4"
              aria-label="SignalsHQ Home"
            >
              <Image
                src="https://framerusercontent.com/images/iwSFw1ZVxkvBFwIkynOTSZnUtg.png?width=160&height=40"
                alt="SignalsHQ Logo"
                width={160}
                height={32}
                className="h-8"
                style={{ width: "auto" }}
                loading="lazy"
              />
            </Link>
            <p className="font-body text-[14px] text-text-secondary leading-relaxed max-w-[280px] mb-6">
              Smart Automation Built for Scaling Tax Firms.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <Link 
                href="#contact" 
                className="font-mono text-[11px] uppercase tracking-wider text-text-muted hover:text-text-primary transition-colors flex items-center gap-1.5"
              >
                <Mail size={12} />
                Contact
              </Link>
              <span className="w-1 h-1 bg-hairline rounded-full" />
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-text-muted hover:text-text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <svg 
                  className="w-[15px] h-[15px] fill-current" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Product */}
          <div className="flex flex-col items-start text-left">
            <span className="font-mono text-[10px] font-semibold text-text-muted tracking-[0.08em] uppercase mb-5">
              Product
            </span>
            <ul className="flex flex-col gap-3.5">
              <li>
                <Link href="#features" className="font-body text-[14px] text-text-secondary hover:text-text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#use-cases" className="font-body text-[14px] text-text-secondary hover:text-text-primary transition-colors">
                  Use Case
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="flex flex-col items-start text-left">
            <span className="font-mono text-[10px] font-semibold text-text-muted tracking-[0.08em] uppercase mb-5">
              Resources
            </span>
            <ul className="flex flex-col gap-3.5">
              <li>
                <Link href="#articles" className="font-body text-[14px] text-text-secondary hover:text-text-primary transition-colors">
                  Articles & Insights
                </Link>
              </li>
              <li>
                <Link href="#downloads" className="font-body text-[14px] text-text-secondary hover:text-text-primary transition-colors">
                  Downloads
                </Link>
              </li>
              <li>
                <Link href="#security-trust" className="font-body text-[14px] text-text-secondary hover:text-text-primary transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="#evaluate" className="font-body text-[14px] text-text-secondary hover:text-text-primary transition-colors">
                  Evaluate Your Firm
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="flex flex-col items-start text-left">
            <span className="font-mono text-[10px] font-semibold text-text-muted tracking-[0.08em] uppercase mb-5">
              Company
            </span>
            <ul className="flex flex-col gap-3.5">
              <li>
                <Link href="#privacy" className="font-body text-[14px] text-text-secondary hover:text-text-primary transition-colors">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="#terms" className="font-body text-[14px] text-text-secondary hover:text-text-primary transition-colors">
                  Terms conditions
                </Link>
              </li>
              <li>
                <Link href="#contact-us" className="font-body text-[14px] text-text-secondary hover:text-text-primary transition-colors">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* ── SOC 2 BADGE DISPLAY (Separated, centered or bottom-right aligned on desktop) ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full border-t border-hairline pt-10 mt-4 gap-6">
          {/* Left copyright */}
          <div className="order-2 sm:order-1 text-center sm:text-left select-none">
            <p className="font-mono text-[11px] text-text-muted">
              © {currentYear} SignalsHQ. All rights reserved.
            </p>
          </div>

          {/* Right badge (Scalloped SOC2 Compliance Stamp) */}
          <div className="order-1 sm:order-2 flex items-center gap-4 bg-surface border border-hairline px-4.5 py-3 rounded-none select-none">
            {/* Scalloped Vector Seal */}
            <svg 
              width="36" 
              height="36" 
              viewBox="0 0 40 40" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary flex-shrink-0"
              aria-hidden="true"
            >
              <path 
                d="M20 2C22.2 2 23.8 3.5 25.5 4C27.2 4.5 29.2 4 30.5 5.2C31.8 6.5 31.5 8.5 32.2 10C32.9 11.5 34.5 12.8 34.7 14.8C34.9 16.8 33.6 18.5 33.6 20.5C33.6 22.5 34.9 24.2 34.7 26.2C34.5 28.2 32.9 29.5 32.2 31C31.5 32.5 31.8 34.5 30.5 35.8C29.2 37 27.2 36.5 25.5 37C23.8 37.5 22.2 39 20 39C17.8 39 16.2 37.5 14.5 37C12.8 36.5 10.8 37 9.5 35.8C8.2 34.5 8.5 32.5 7.8 31C7.1 29.5 5.5 28.2 5.3 26.2C5.1 24.2 6.4 22.5 6.4 20.5C6.4 18.5 5.1 16.8 5.3 14.8C5.5 12.8 7.1 11.5 7.8 10C8.5 8.5 8.2 6.5 9.5 5.2C10.8 4 12.8 4.5 14.5 4C16.2 3.5 17.8 2 20 2Z" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                fill="rgba(155, 132, 234, 0.08)"
              />
              <circle cx="20" cy="20" r="11" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              {/* Inner core lock icon or checkmark */}
              <path d="M17 20L19 22L23 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex flex-col text-left">
              <span className="font-mono text-[10px] font-bold text-text-primary tracking-wide leading-none">
                SOC 2 TYPE II
              </span>
              <span className="font-mono text-[8px] text-text-secondary mt-1 leading-none tracking-tight">
                MONITORED ON SCRUT
              </span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
