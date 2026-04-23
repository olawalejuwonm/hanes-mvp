'use client';

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Shield, Sword, Crown, Landmark, Cpu, PlayCircle, Zap, BookOpen, Award } from "lucide-react";
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
  "Medieval Wales": "linear-gradient(135deg, #2e050d 0%, #7f1d2d 50%, #991b1b 100%)",
  "Tudor Period": "linear-gradient(135deg, #04190f 0%, #0d2a1d 55%, #115e38 100%)",
  "Industrial Age": "linear-gradient(135deg, #2d070f 0%, #7f1d2d 55%, #b91c1c 100%)",
  "Modern Wales": "linear-gradient(135deg, #04190f 0%, #0f5132 55%, #00703c 100%)",
};

const difficultyConfig = {
  beginner: { color: "#00703C", bg: "rgba(0,112,60,0.12)", border: "rgba(0,112,60,0.30)", xp: 100 },
  intermediate: { color: "#C8102E", bg: "rgba(200,16,46,0.12)", border: "rgba(200,16,46,0.30)", xp: 250 },
  advanced: { color: "#931024", bg: "rgba(147,16,36,0.14)", border: "rgba(147,16,36,0.30)", xp: 500 },
};

export default function IconDetail() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const icon = WELSH_ICONS.find((i) => i.id === id);
  const { t, lang } = useLanguage();
  const [comingSoonMessage, setComingSoonMessage] = useState("");

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
            className="text-base mt-2 inline-flex items-center gap-1 font-bold"
            style={{ color: "var(--hanes-red)" }}
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
  const displayName = lang === "cy" ? (icon.name_cy || icon.name) : icon.name;
  const displayTitle = lang === "cy" ? (icon.title_cy || icon.title) : icon.title;
  const displayLocation = lang === "cy" ? (icon.location_name_cy || icon.location_name) : icon.location_name;
  const comingSoonText =
    lang === "cy"
      ? "Yn dod yn fuan: cyn bo hir byddwch yn gallu chwarae'r gêm hon."
      : "Coming soon: you'll soon be able to play the game.";

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
          style={{ background: "var(--hanes-red)", transform: "translate(30%, -30%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: "var(--hanes-green)", transform: "translate(-30%, 30%)" }}
        />

        <div className="max-w-5xl mx-auto relative">
          <Link
            href={createPageUrl("WelshIcons")}
            className="inline-flex items-center gap-2 text-base mb-8 transition-colors text-white/80 hover:text-white font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.iconDetail.backToIcons}
          </Link>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {/* Era badge */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase"
                style={{ background: "rgba(255,255,255,0.12)", color: "var(--hanes-white)", border: "1px solid rgba(255,255,255,0.35)" }}
              >
                <EraIcon className="w-3.5 h-3.5" />
                {displayEra}
              </div>
              <span className="text-white text-sm font-bold">{icon.era_years}</span>
              {diff && (
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-bold"
                  style={{ background: "rgba(255,255,255,0.12)", color: "var(--hanes-white)", border: "1px solid rgba(255,255,255,0.35)" }}
                >
                  <Zap className="w-3 h-3" />
                  {t.iconDetail.difficulties[icon.difficulty]}
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-none tracking-tight mb-2">
              {displayName}
            </h1>
            <p className="text-white text-xl sm:text-2xl font-bold mb-8">{displayTitle}</p>

            {/* Play Button */}
            <button
              onClick={() => setComingSoonMessage(comingSoonText)}
              className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 active:scale-95 cursor-pointer"
              style={{
                background: "var(--hanes-white)",
                color: "var(--hanes-red)",
                border: "2px solid var(--hanes-red)",
                boxShadow: "0 4px 20px rgba(200,16,46,0.30)",
              }}
              aria-describedby="play-story-message"
            >
              <PlayCircle
                className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                style={{ fill: "transparent", stroke: "var(--hanes-red)" }}
              />
              {t.common.playStory}
            </button>
            <p id="play-story-message" aria-live="polite" className="mt-3 min-h-6 text-base font-semibold text-white">
              {comingSoonMessage}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Row */}
      {diff && (
        <div style={{ background: "var(--app-surface)", borderBottom: "1px solid var(--app-border)" }}>
          <div className="max-w-5xl mx-auto px-4 py-4 flex flex-wrap gap-4 sm:gap-8">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" style={{ color: "var(--hanes-red)" }} />
              <span className="text-sm font-semibold" style={{ color: "var(--app-text-subtle)" }}>XP Reward</span>
              <span className="text-base font-bold" style={{ color: diff.color }}>{diff.xp} XP</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" style={{ color: "var(--hanes-green)" }} />
              <span className="text-sm font-semibold" style={{ color: "var(--app-text-subtle)" }}>{t.iconDetail.difficulty}</span>
              <span className="text-base font-bold capitalize" style={{ color: diff.color }}>
                {t.iconDetail.difficulties[icon.difficulty]}
              </span>
            </div>
            {displayLocation && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" style={{ color: "var(--hanes-red)" }} />
                <span className="text-sm font-semibold" style={{ color: "var(--app-text-subtle)" }}>{t.iconDetail.keyLocation}</span>
                <span className="text-base font-bold" style={{ color: "var(--app-text)" }}>{displayLocation}</span>
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
                <BookOpen className="w-5 h-5" style={{ color: "var(--hanes-green)" }} />
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
                  style={{ color: "var(--hanes-red)" }}
                >
                  {t.common.source}: Wikipedia
                  <span aria-label="(opens in new window)">↗</span>
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
                <div className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: "var(--app-text-subtle)" }}>
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
                  className="inline-flex items-center gap-1.5 text-base font-bold px-3 py-1 rounded-full"
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
                  background: "linear-gradient(135deg, rgba(0,112,60,0.12) 0%, rgba(200,16,46,0.10) 100%)",
                  border: "1px solid rgba(0,112,60,0.22)",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5" style={{ color: "var(--hanes-red)" }} />
                  <span className="text-sm font-bold tracking-widest uppercase" style={{ color: "var(--hanes-green)" }}>
                    XP Reward
                  </span>
                </div>
                <p className="text-4xl font-black" style={{ color: "var(--app-text)" }}>{diff.xp}</p>
                <p className="text-base font-semibold mt-1" style={{ color: "var(--app-text-muted)" }}>experience points</p>
              </div>
            )}

            {/* Location card */}
            {displayLocation && (
              <div
                className="rounded-2xl p-6"
                style={{ background: "var(--app-surface)", border: "1px solid var(--app-border)" }}
              >
                <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase mb-3" style={{ color: "var(--hanes-green)" }}>
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
              onClick={() => setComingSoonMessage(comingSoonText)}
              className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl font-bold text-base transition-all duration-200 active:scale-95 cursor-pointer"
              style={{
                background: "rgba(200,16,46,0.12)",
                color: "var(--hanes-red)",
                border: "1px solid rgba(200,16,46,0.30)",
              }}
              aria-describedby="play-story-message"
            >
              <PlayCircle className="w-5 h-5" />
              {t.common.playStory}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
