import React from "react";

export const BackgroundBlobs: React.FC = () => {
  return (
    <div className="blob-container" aria-hidden="true">
      {/* 1. Horizon Glow Header Beam */}
      <div className="blob-horizon" />

      {/* 2. Primary Cosmic Ambient Orbs */}
      <div className="blob-1" />
      <div className="blob-2" />
      <div className="blob-3" />

      {/* 3. Cyber Matrix Grid with radial vignette mask */}
      <div className="absolute inset-0 cyber-grid [mask-image:radial-gradient(ellipse_80%_65%_at_50%_25%,#000_50%,transparent_95%)] pointer-events-none" />

      {/* 4. Scanning Light Beam across the grid */}
      <div className="cyber-beam pointer-events-none" />

      {/* 5. Ambient Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,8,17,0.7)_100%)] pointer-events-none" />
    </div>
  );
};
