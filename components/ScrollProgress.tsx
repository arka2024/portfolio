"use client";

import React, { useEffect } from "react";

export const ScrollProgress: React.FC = () => {
  useEffect(() => {
    // Check if browser natively supports animation-timeline: scroll()
    const supportsScrollTimeline =
      typeof CSS !== "undefined" &&
      CSS.supports &&
      CSS.supports("animation-timeline", "scroll()");

    if (supportsScrollTimeline) return;

    // Fallback for browsers that do not support CSS scroll-timeline
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const docHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          const scrolled = docHeight > 0 ? window.scrollY / docHeight : 0;
          document.documentElement.style.setProperty(
            "--scroll-fallback",
            scrolled.toString()
          );
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="scroll-progress-bar"
      role="progressbar"
      aria-label="Page reading progress"
      aria-hidden="true"
    />
  );
};
