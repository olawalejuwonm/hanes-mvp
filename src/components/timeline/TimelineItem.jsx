'use client';

import React from "react";
import { motion } from "framer-motion";

export default function TimelineItem({ era, index, isActive, onClick }) {
  const colors = {
    "Celtic Age": "#5BA57D",
    "Roman Era": "#C4635D",
    "Medieval Wales": "#D4A843",
    "Tudor Period": "#9B6BC4",
    "Industrial Age": "#6B8ADB",
    "Modern Wales": "#D49A43",
  };
  const color = colors[era.name] || "#D4A843";

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative"
    >
      {/* Connector line */}
      <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2" />

      <div className={`flex items-start gap-6 sm:gap-12 ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
        {/* Content */}
        <div className={`flex-1 pl-14 sm:pl-0 ${index % 2 === 0 ? "sm:text-right" : "sm:text-left"}`}>
          <button
            onClick={() => onClick(era)}
            className={`group text-left sm:text-inherit w-full p-6 rounded-2xl border transition-all duration-500 ${
              isActive
                ? "bg-white/[0.04] border-white/10"
                : "bg-transparent border-transparent hover:bg-white/[0.02] hover:border-white/5"
            }`}
          >
            <span className="text-xs tracking-[0.2em] uppercase font-medium" style={{ color }}>
              {era.years}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mt-2 mb-3 text-white/90">{era.name}</h3>
            <p className="text-sm text-white/40 leading-relaxed">{era.description}</p>
            {era.icons?.length > 0 && (
              <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"}`}>
                {era.icons.map((icon, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-white/5 text-white/50 text-xs">
                    {icon}
                  </span>
                ))}
              </div>
            )}
          </button>
        </div>

        {/* Dot */}
        <div className="absolute left-6 sm:left-1/2 top-8 -translate-x-1/2 z-10">
          <div
            className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
              isActive ? "scale-125" : ""
            }`}
            style={{
              borderColor: color,
              background: isActive ? color : "#0D0F13",
              boxShadow: isActive ? `0 0 20px ${color}40` : "none",
            }}
          />
        </div>

        {/* Spacer for other side */}
        <div className="hidden sm:block flex-1" />
      </div>
    </motion.div>
  );
}