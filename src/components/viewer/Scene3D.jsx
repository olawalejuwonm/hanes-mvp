'use client';

import React, { useRef, useEffect } from "react";

const CASTLE_COLORS = {
  castle: { primary: "#4A5568", accent: "#D4A843", sky: "#1a2744" },
  abbey: { primary: "#6B7280", accent: "#9B6BC4", sky: "#1a1a2e" },
  monument: { primary: "#9CA3AF", accent: "#5BA57D", sky: "#0f2027" },
  landscape: { primary: "#374151", accent: "#5BA57D", sky: "#0d1f2d" },
  village: { primary: "#D1D5DB", accent: "#C4635D", sky: "#1e1e2e" },
};

export default function Scene3D({ type = "castle" }) {
  const colors = CASTLE_COLORS[type] || CASTLE_COLORS.castle;

  return (
    <div
      className="w-full h-full flex items-center justify-center relative overflow-hidden"
      style={{ background: `linear-gradient(to bottom, ${colors.sky}, #0D0F13)` }}
    >
      {/* Stars */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() > 0.8 ? "2px" : "1px",
            height: Math.random() > 0.8 ? "2px" : "1px",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 60}%`,
            opacity: 0.4 + Math.random() * 0.6,
          }}
        />
      ))}

      {/* Ground */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/4 rounded-t-full"
        style={{ background: `linear-gradient(to top, ${colors.primary}33, transparent)` }}
      />

      {/* Castle / Structure SVG */}
      <svg
        viewBox="0 0 200 160"
        className="w-3/4 max-w-xs relative z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        {type === "castle" || type === "monument" ? (
          <>
            {/* Main tower */}
            <rect x="75" y="60" width="50" height="80" fill={colors.primary} />
            {/* Battlements */}
            {[75, 87, 99, 111].map((x, i) => (
              <rect key={i} x={x} y="52" width="8" height="10" fill={colors.primary} />
            ))}
            {/* Left tower */}
            <rect x="45" y="80" width="35" height="60" fill={colors.primary + "cc"} />
            {[45, 57, 69].map((x, i) => (
              <rect key={i} x={x} y="72" width="8" height="10" fill={colors.primary + "cc"} />
            ))}
            {/* Right tower */}
            <rect x="120" y="80" width="35" height="60" fill={colors.primary + "cc"} />
            {[120, 132, 144].map((x, i) => (
              <rect key={i} x={x} y="72" width="8" height="10" fill={colors.primary + "cc"} />
            ))}
            {/* Door */}
            <path d="M 90 140 L 90 110 Q 100 100 110 110 L 110 140 Z" fill="#0D0F13" />
            {/* Windows */}
            <rect x="88" y="72" width="12" height="16" rx="6" fill={colors.accent + "40"} stroke={colors.accent} strokeWidth="1" />
            {/* Flag */}
            <line x1="100" y1="52" x2="100" y2="32" stroke={colors.accent} strokeWidth="1.5" />
            <polygon points="100,32 116,38 100,44" fill={colors.accent} />
          </>
        ) : type === "abbey" ? (
          <>
            {/* Nave */}
            <rect x="60" y="70" width="80" height="70" fill={colors.primary} />
            {/* Pointed arch windows */}
            {[70, 90, 110, 130].map((x, i) => (
              <path key={i} d={`M ${x} 140 L ${x} 90 Q ${x + 5} 80 ${x + 10} 90 L ${x + 10} 140 Z`} fill="#0D0F13" />
            ))}
            {/* Tower */}
            <rect x="88" y="40" width="24" height="32" fill={colors.primary} />
            <polygon points="100,20 88,42 112,42" fill={colors.primary + "cc"} />
            {/* Cross */}
            <line x1="100" y1="22" x2="100" y2="36" stroke={colors.accent} strokeWidth="2" />
            <line x1="94" y1="28" x2="106" y2="28" stroke={colors.accent} strokeWidth="2" />
          </>
        ) : (
          <>
            {/* Landscape hills */}
            <ellipse cx="100" cy="130" rx="90" ry="40" fill={colors.primary + "66"} />
            <ellipse cx="60" cy="120" rx="50" ry="30" fill={colors.primary + "44"} />
            <ellipse cx="145" cy="125" rx="45" ry="28" fill={colors.primary + "44"} />
            {/* Peak */}
            <polygon points="100,50 65,120 135,120" fill={colors.primary} />
            <polygon points="100,50 85,80 115,80" fill="#E5E7EB" />
            {/* Trees */}
            {[40, 55, 145, 160].map((x, i) => (
              <g key={i}>
                <polygon points={`${x},${100 - i * 2} ${x - 8},${115 - i * 2} ${x + 8},${115 - i * 2}`} fill={colors.accent + "88"} />
                <rect x={x - 2} y={115 - i * 2} width="4" height="8" fill={colors.primary} />
              </g>
            ))}
          </>
        )}

        {/* Ground line */}
        <line x1="10" y1="140" x2="190" y2="140" stroke={colors.primary} strokeWidth="1" opacity="0.5" />

        {/* Glow effect */}
        <ellipse cx="100" cy="140" rx="60" ry="8" fill={colors.accent} opacity="0.08" />
      </svg>

      {/* Type label */}
      <div
        className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border"
        style={{ color: colors.accent, borderColor: colors.accent + "40", background: colors.accent + "10" }}
      >
        {type}
      </div>
    </div>
  );
}
