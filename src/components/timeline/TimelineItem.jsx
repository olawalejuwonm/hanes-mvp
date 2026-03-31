'use client';

import React from "react";
import { motion } from "framer-motion";

const ERA_COLORS = {
  celtic: "#5BA57D",
  roman: "#C4635D",
  medieval: "#D4A843",
  tudor: "#9B6BC4",
  industrial: "#6B8ADB",
  modern: "#D49A43",
};

// Match by known English names as fallback
const ERA_COLORS_BY_NAME = {
  "Celtic Age": "#5BA57D",
  "Oes Geltaidd": "#5BA57D",
  "Roman Era": "#C4635D",
  "Cyfnod Rhufeinig": "#C4635D",
  "Medieval Wales": "#D4A843",
  "Cymru Ganoloesol": "#D4A843",
  "Tudor Period": "#9B6BC4",
  "Cyfnod Tuduriaid": "#9B6BC4",
  "Industrial Age": "#6B8ADB",
  "Oes Ddiwydiannol": "#6B8ADB",
  "Modern Wales": "#D49A43",
  "Cymru Fodern": "#D49A43",
};

export default function TimelineItem({ era, index, isActive, onClick }) {
  const color = ERA_COLORS_BY_NAME[era.name] || ERA_COLORS[era.id] || "#D4A843";

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative"
    >
      {/* Connector line */}
      <div
        className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
        style={{ background: "var(--app-border)" }}
      />

      <div className={`flex items-start gap-6 sm:gap-12 ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
        {/* Content */}
        <div className={`flex-1 pl-14 sm:pl-0 ${index % 2 === 0 ? "sm:text-right" : "sm:text-left"}`}>
          <button
            onClick={() => onClick(era)}
            className={`group text-left sm:text-inherit w-full p-6 rounded-2xl transition-all duration-500`}
            style={
              isActive
                ? { background: "var(--app-surface-hover)", border: "1px solid var(--app-border-hover)" }
                : { background: "transparent", border: "1px solid transparent" }
            }
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.background = "var(--app-surface)";
                e.currentTarget.style.borderColor = "var(--app-border)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "transparent";
              }
            }}
          >
            <span className="text-xs tracking-[0.2em] uppercase font-medium" style={{ color }}>
              {era.years}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mt-2 mb-3" style={{ color: "var(--app-text)" }}>
              {era.name}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--app-text-muted)" }}>
              {era.description}
            </p>
            {era.icons?.length > 0 && (
              <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"}`}>
                {era.icons.map((icon, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs"
                    style={{ background: "var(--app-surface)", color: "var(--app-text-muted)" }}
                  >
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
            className="w-4 h-4 rounded-full border-2 transition-all duration-300"
            style={{
              borderColor: color,
              background: isActive ? color : "var(--app-dot-bg)",
              boxShadow: isActive ? `0 0 20px ${color}40` : "none",
              transform: isActive ? "scale(1.25)" : "scale(1)",
            }}
          />
        </div>

        {/* Spacer for other side */}
        <div className="hidden sm:block flex-1" />
      </div>
    </motion.div>
  );
}
