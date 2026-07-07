"use client";

import { useEffect } from "react";

export default function InteractiveSpotlight() {
  useEffect(() => {
    // Add mouse move listener to set global custom CSS properties for cursor coordinates
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-30 opacity-40 mix-blend-screen hidden md:block"
      style={{
        background: "radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(155, 132, 234, 0.04) 0%, transparent 80%)"
      }}
      aria-hidden="true"
    />
  );
}
