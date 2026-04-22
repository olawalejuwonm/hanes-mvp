'use client';

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Star, Shield, Sword, Crown, Landmark, Cpu, PlayCircle, Zap, BookOpen, Award } from "lucide-react";
import { WELSH_ICONS } from "@/data/mockData";
import { useLanguage } from "@/context/LanguageContext";

const eraIcons = {
  "Celtic Age": Shield,
  "Medieval Wales": Sword,
  "Tudor Period": Crown,
  "Industrial Age": Landmark,
  "Modern Wales": Cpu,
};

const eraGradients = {
  "Celtic Age": "linear-gradient(135deg, #052e16 0%, #14532d 50%, #166534 100%)",
  "Medieval Wales": "linear-gradient(135deg, #1c1205 0%, #451a03 50%, #78350f 100%)",
  "Tudor Period": "linear-gradient(135deg, #1e0a2e 0%, #4c1d95 50%, #5b21b6 100%)",
  "Industrial Age": "linear-gradient(135deg, #1c0a00 0%, #7c2d12 50%, #9a3412 100%)",
  "Modern Wales": "linear-gradient(135deg, #0c1a2e 0%, #1e3a5f 50%, #1e40af 100%)",
};

const difficultyConfig = {
  beginner: { color: "#10b981", bg: "rgba(16,185,129,0.12)", border: "rgba(16,185,129,0.30)", xp: 100 },
  intermediate: { color: "#f59e0b", bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.30)", xp: 250 },
  advanced: { color: "#ef4444", bg: "rgba(239,68,68,0.12)", border: "rgba(239,68,68,0.30)", xp: 500 },
};

export default function IconDetail() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const icon = WELSH_ICONS.find((i) => i.id === id);
  const { t, lang } = useLanguage();
  const [playing, setPlaying] = useState(false);

  const iconStory = icon
    ? ((lang === "cy" ? (icon.story_summary_cy || icon.story_summary) : icon.story_summary) ||
      (lang === "cy" ? (icon.description_cy || icon.description) : icon.description) ||
      t.iconDetail.defaultStory)
    : t.iconDetail.defaultStory;

  if (!icon) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="text-center">
          <Sword className="w-12 h-12 mx-auto mb-4" style={{ color: "var(--app-text-subtle)" }} />
          <p className="text-lg font-semibold mb-2" style={{ color: "var(--app-text)" }}>{t.iconDetail.notFound}</p>
          <Link
            href={createPageUrl("WelshIcons")}
            className="text-sm mt-2 inline-flex items-center gap-1 font-medium"
            style={{ color: "var(--hanes-gold)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            {t.iconDetail.backToIcons}
          </Link>
        </div>
      </div>
    );
  }

  const EraIcon = eraIcons[icon.era] || Shield;
  const heroGradient = eraGradients[icon.era] || eraGradients["Medieval Wales"];
  const diff = difficultyConfig[icon.difficulty];
  const displayEra = lang === "cy" ? (icon.era_cy || icon.era) : icon.era;
  const displayTitle = lang === "cy" ? (icon.title_cy || icon.title) : icon.title;
  const displayLocation = lang === "cy" ? (icon.location_name_cy || icon.location_name) : icon.location_name;

  return (
    <div className="min-h-screen" style={{ background: "var(--app-bg)" }}>

      {/* Hero — no image, gradient background */}
      <div
        className="relative pt-20 pb-10 sm:pb-16 px-4 overflow-hidden"
        style={{ background: heroGradient }}
      >
        {/* Decorative orb */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: "var(--hanes-gold)", transform: "translate(30%, -30%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: "var(--hanes-gold)", transform: "translate(-30%, 30%)" }}
        />

        <div className="max-w-5xl mx-auto relative">
          <Link
            href={createPageUrl("WelshIcons")}
            className="inline-flex items-center gap-2 text-sm mb-8 transition-colors text-white/50 hover:text-white/90 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.iconDetail.backToIcons}
          </Link>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {/* Era badge */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
                style={{ background: "rgba(212,168,67,0.15)", color: "var(--hanes-gold)", border: "1px solid rgba(212,168,67,0.30)" }}
              >
                <EraIcon className="w-3.5 h-3.5" />
                {displayEra}
              </div>
              <span className="text-white/40 text-xs font-medium">{icon.era_years}</span>
              {diff && (
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                  style={{ background: diff.bg, color: diff.color, border: `1px solid ${diff.border}` }}
                >
                  <Zap className="w-3 h-3" />
                  {t.iconDetail.difficulties[icon.difficulty]}
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-none tracking-tight mb-2">
              {icon.name}
            </h1>
            <p className="text-white/60 text-lg sm:text-xl font-medium mb-8">{displayTitle}</p>

            {/* Play Button */}
            <button
              onClick={() => setPlaying(!playing)}
              className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 active:scale-95 cursor-pointer"
              style={{
                background: playing ? "rgba(212,168,67,0.20)" : "var(--hanes-gold)",
                color: playing ? "var(--hanes-gold)" : "#0a0a0a",
                border: "2px solid var(--hanes-gold)",
                boxShadow: playing ? "none" : "0 4px 20px rgba(212,168,67,0.35)",
              }}
            >
              <PlayCircle
                className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                style={{ fill: playing ? "transparent" : "#0a0a0a", stroke: playing ? "var(--hanes-gold)" : "#0a0a0a" }}
              />
              {playing ? "Playing…" : t.common.playStory}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Stats Row */}
      {diff && (
        <div style={{ background: "var(--app-surface)", borderBottom: "1px solid var(--app-border)" }}>
          <div className="max-w-5xl mx-auto px-4 py-4 flex flex-wrap gap-4 sm:gap-8">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" style={{ color: "var(--hanes-gold)" }} />
              <span className="text-xs font-semibold" style={{ color: "var(--app-text-subtle)" }}>XP Reward</span>
              <span className="text-sm font-bold" style={{ color: diff.color }}>{diff.xp} XP</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" style={{ color: "var(--hanes-gold)" }} />
              <span className="text-xs font-semibold" style={{ color: "var(--app-text-subtle)" }}>{t.iconDetail.difficulty}</span>
              <span className="text-sm font-bold capitalize" style={{ color: diff.color }}>
                {t.iconDetail.difficulties[icon.difficulty]}
              </span>
            </div>
            {displayLocation && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" style={{ color: "var(--hanes-gold)" }} />
                <span className="text-xs font-semibold" style={{ color: "var(--app-text-subtle)" }}>{t.iconDetail.keyLocation}</span>
                <span className="text-sm font-bold" style={{ color: "var(--app-text)" }}>{displayLocation}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">

          {/* Story — takes 2/3 */}
          <div className="lg:col-span-2">
            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{ background: "var(--app-surface)", border: "1px solid var(--app-border)" }}
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-5 flex items-center gap-2.5" style={{ color: "var(--app-text)" }}>
                <BookOpen className="w-5 h-5" style={{ color: "var(--hanes-gold)" }} />
                {t.iconDetail.story}
              </h2>
              <p className="leading-relaxed text-base sm:text-lg" style={{ color: "var(--app-text-muted)" }}>
                {iconStory}
              </p>
              {icon.source_url && (
                <a
                  href={icon.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm mt-6 font-medium"
                  style={{ color: "var(--hanes-gold)" }}
                >
                  {t.common.source}: Wikipedia ↗
                </a>
              )}
            </div>
          </div>

          {/* Sidebar — 1/3 */}
          <div className="flex flex-col gap-5">

            {/* Difficulty card */}
            {icon.difficulty && diff && (
              <div
                className="rounded-2xl p-6"
                style={{ background: "var(--app-surface)", border: "1px solid var(--app-border)" }}
              >
                <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "var(--app-text-subtle)" }}>
                  {t.iconDetail.difficulty}
                </div>
                <div className="flex items-center gap-3 mb-4">
                  {[1, 2, 3].map((level) => (
                    <div
                      key={level}
                      className="flex-1 h-3 rounded-full transition-all"
                      style={{
                        background:
                          (icon.difficulty === "beginner" && level <= 1) ||
                          (icon.difficulty === "intermediate" && level <= 2) ||
                          icon.difficulty === "advanced"
                            ? diff.color
                            : "var(--app-border)",
                      }}
                    />
                  ))}
                </div>
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-bold px-3 py-1 rounded-full"
                  style={{ background: diff.bg, color: diff.color, border: `1px solid ${diff.border}` }}
                >
                  <Zap className="w-3.5 h-3.5" />
                  {t.iconDetail.difficulties[icon.difficulty]}
                </span>
              </div>
            )}

            {/* XP / Reward card */}
            {diff && (
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "linear-gradient(135deg, rgba(212,168,67,0.10) 0%, rgba(212,168,67,0.04) 100%)",
                  border: "1px solid rgba(212,168,67,0.20)",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5" style={{ color: "var(--hanes-gold)" }} />
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "var(--hanes-gold)" }}>
                    XP Reward
                  </span>
                </div>
                <p className="text-4xl font-black" style={{ color: "var(--app-text)" }}>{diff.xp}</p>
                <p className="text-sm font-medium mt-1" style={{ color: "var(--app-text-muted)" }}>experience points</p>
              </div>
            )}

            {/* Location card */}
            {displayLocation && (
              <div
                className="rounded-2xl p-6"
                style={{ background: "var(--app-surface)", border: "1px solid var(--app-border)" }}
              >
                <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--hanes-gold)" }}>
                  <MapPin className="w-3.5 h-3.5" />
                  {t.iconDetail.keyLocation}
                </div>
                <p className="text-base font-bold leading-snug" style={{ color: "var(--app-text)" }}>
                  {displayLocation}
                </p>
              </div>
            )}

            {/* Play again CTA */}
            <button
              onClick={() => setPlaying(!playing)}
              className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl font-bold text-base transition-all duration-200 active:scale-95 cursor-pointer"
              style={{
                background: playing ? "rgba(212,168,67,0.10)" : "rgba(212,168,67,0.12)",
                color: "var(--hanes-gold)",
                border: "1px solid rgba(212,168,67,0.30)",
              }}
            >
              <PlayCircle className="w-5 h-5" />
              {playing ? "Playing…" : t.common.playStory}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
