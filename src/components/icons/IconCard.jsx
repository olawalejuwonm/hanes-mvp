'use client';

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { PlayCircle, ChevronRight, Shield, Sword, Crown, Landmark, Cpu } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const difficultyConfig = {
  beginner: { label: "Beginner", color: "#10b981", bg: "rgba(16,185,129,0.10)", border: "rgba(16,185,129,0.25)" },
  intermediate: { label: "Intermediate", color: "#f59e0b", bg: "rgba(245,158,11,0.10)", border: "rgba(245,158,11,0.25)" },
  advanced: { label: "Advanced", color: "#ef4444", bg: "rgba(239,68,68,0.10)", border: "rgba(239,68,68,0.25)" },
};

const eraIcons = {
  "Celtic Age": Shield,
  "Medieval Wales": Sword,
  "Tudor Period": Crown,
  "Industrial Age": Landmark,
  "Modern Wales": Cpu,
};

const eraGradients = {
  "Celtic Age": "linear-gradient(135deg, rgba(34,197,94,0.12) 0%, rgba(21,128,61,0.06) 100%)",
  "Medieval Wales": "linear-gradient(135deg, rgba(212,168,67,0.14) 0%, rgba(180,130,40,0.06) 100%)",
  "Tudor Period": "linear-gradient(135deg, rgba(168,85,247,0.12) 0%, rgba(126,34,206,0.06) 100%)",
  "Industrial Age": "linear-gradient(135deg, rgba(249,115,22,0.12) 0%, rgba(194,65,12,0.06) 100%)",
  "Modern Wales": "linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(29,78,216,0.06) 100%)",
};

export default function IconCard({ icon, index }) {
  const { t, lang } = useLanguage();
  const diff = difficultyConfig[icon.difficulty];
  const EraIcon = eraIcons[icon.era] || Shield;
  const eraGradient = eraGradients[icon.era] || eraGradients["Medieval Wales"];
  const displayEra = lang === "cy" ? (icon.era_cy || icon.era || t.common.unknownEra) : (icon.era || t.common.unknownEra);
  const displayTitle = lang === "cy" ? (icon.title_cy || icon.title) : icon.title;
  const displayDesc = lang === "cy" ? (icon.description_cy || icon.description) : icon.description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
    >
      <Link
        href={createPageUrl(`IconDetail?id=${icon.id}`)}
        className="group block rounded-2xl overflow-hidden transition-all duration-300 h-full"
        style={{
          background: "var(--app-surface)",
          border: "1px solid var(--app-border)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(212,168,67,0.35)";
          e.currentTarget.style.boxShadow = "0 8px 32px rgba(212,168,67,0.10), 0 2px 8px rgba(0,0,0,0.15)";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--app-border)";
          e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.12)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {/* Era Banner */}
        <div
          className="px-5 pt-5 pb-4 flex items-center justify-between"
          style={{ background: eraGradient }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.20)" }}
            >
              <EraIcon className="w-4 h-4" style={{ color: "var(--hanes-gold)" }} />
            </div>
            <div>
              <p className="text-[10px] tracking-[0.18em] uppercase font-semibold" style={{ color: "var(--hanes-gold)" }}>
                {displayEra}
              </p>
              <p className="text-[10px]" style={{ color: "var(--app-text-subtle)" }}>{icon.era_years}</p>
            </div>
          </div>
          {diff && (
            <span
              className="text-[10px] font-medium px-2.5 py-1 rounded-full"
              style={{ background: diff.bg, color: diff.color, border: `1px solid ${diff.border}` }}
            >
              {t.iconDetail.difficulties[icon.difficulty] || diff.label}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="px-5 pb-5">
          <h3 className="text-xl font-bold mt-3 mb-0.5 leading-tight" style={{ color: "var(--app-text)" }}>
            {icon.name}
          </h3>
          <p className="text-sm font-medium mb-3" style={{ color: "var(--hanes-gold)", opacity: 0.85 }}>
            {displayTitle}
          </p>
          <p className="text-sm line-clamp-3 leading-relaxed mb-5" style={{ color: "var(--app-text-muted)" }}>
            {displayDesc}
          </p>

          {/* Play CTA */}
          <div
            className="flex items-center gap-2 text-sm font-medium transition-all duration-200"
            style={{ color: "var(--hanes-gold)" }}
          >
            <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            <span>{t.common.playStory}</span>
            <ChevronRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
