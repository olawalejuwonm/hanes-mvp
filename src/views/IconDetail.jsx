'use client';

import React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Swords, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { WELSH_ICONS } from "@/data/mockData";
import { useLanguage } from "@/context/LanguageContext";

const WARRIOR_IMG =
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69aa29ac788b58b9c3b0ef60/7188b987a_generated_image.png";

export default function IconDetail() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const icon = WELSH_ICONS.find((i) => i.id === id);
  const { t, lang } = useLanguage();
  const iconStory = icon
    ? ((lang === "cy" ? (icon.story_summary_cy || icon.story_summary) : icon.story_summary) ||
      (lang === "cy" ? (icon.description_cy || icon.description) : icon.description) ||
      t.iconDetail.defaultStory)
    : t.iconDetail.defaultStory;
  const locationImage = icon?.location_image_url || icon?.image_url || WARRIOR_IMG;

  if (!icon) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <Swords className="w-12 h-12 mx-auto mb-4" style={{ color: "var(--app-text-subtle)" }} />
          <p style={{ color: "var(--app-text-muted)" }}>{t.iconDetail.notFound}</p>
          <Link
            href={createPageUrl("WelshIcons")}
            className="text-sm mt-4 inline-block"
            style={{ color: "var(--hanes-gold)" }}
          >
            ← {t.iconDetail.backToIcons}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <img
          src={icon.image_url || WARRIOR_IMG}
          alt={icon.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12">
          <div className="max-w-5xl mx-auto">
            <Link
              href={createPageUrl("WelshIcons")}
              className="inline-flex items-center gap-2 text-sm mb-6 transition-colors text-white/50 hover:text-white/80"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.iconDetail.backToIcons}
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-3 mb-3">
                <Badge className="text-[10px] tracking-widest uppercase" style={{ background: "rgba(212,168,67,0.10)", color: "var(--hanes-gold)", border: "1px solid rgba(212,168,67,0.20)" }}>
                  {lang === "cy" ? (icon.era_cy || icon.era) : icon.era}
                </Badge>
                <span className="text-white/30 text-xs">{icon.era_years}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-2 text-white">{icon.name}</h1>
              <p className="text-white/60 text-lg">{lang === "cy" ? (icon.title_cy || icon.title) : icon.title}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Story */}
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2" style={{ color: "var(--app-text)" }}>
              <Star className="w-4 h-4" style={{ color: "var(--hanes-gold)" }} />
              {t.iconDetail.story}
            </h2>
            <p className="leading-relaxed text-sm mb-8" style={{ color: "var(--app-text-muted)" }}>
              {iconStory}
            </p>
            {icon.source_url && (
              <a
                href={icon.source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs mb-8"
                style={{ color: "var(--hanes-gold)" }}
              >
                {t.common.source}: Wikipedia ({t.common.readMore})
              </a>
            )}

            {icon.location_name && (
              <div
                className="p-5 rounded-xl"
                style={{ background: "var(--app-surface)", border: "1px solid var(--app-border)" }}
              >
                <div className="flex items-center gap-2 text-xs tracking-widest uppercase mb-2" style={{ color: "var(--hanes-gold)" }}>
                  <MapPin className="w-3 h-3" />
                  {t.iconDetail.keyLocation}
                </div>
                <p className="font-medium" style={{ color: "var(--app-text)" }}>
                  {lang === "cy" ? (icon.location_name_cy || icon.location_name) : icon.location_name}
                </p>
              </div>
            )}

            {icon.difficulty && (
              <div
                className="mt-6 p-5 rounded-xl"
                style={{ background: "var(--app-surface)", border: "1px solid var(--app-border)" }}
              >
                <div className="text-xs mb-2" style={{ color: "var(--app-text-subtle)" }}>
                  {t.iconDetail.difficulty}
                </div>
                <div className="flex items-center gap-2">
                  {[1, 2, 3].map((level) => (
                    <div
                      key={level}
                      className="w-8 h-2 rounded-full"
                      style={{
                        background:
                          (icon.difficulty === "beginner" && level <= 1) ||
                          (icon.difficulty === "intermediate" && level <= 2) ||
                          icon.difficulty === "advanced"
                            ? "var(--hanes-gold)"
                            : "var(--app-border)",
                      }}
                    />
                  ))}
                  <span className="text-sm ml-2 capitalize" style={{ color: "var(--app-text-muted)" }}>
                    {t.iconDetail.difficulties[icon.difficulty] || icon.difficulty}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* 3D Preview */}
          <div>
            <h2 className="text-xl font-semibold mb-4" style={{ color: "var(--app-text)" }}>
              {t.iconDetail.locationPreview}
            </h2>
            <div
              className="aspect-square rounded-2xl overflow-hidden"
              style={{ background: "var(--app-surface)", border: "1px solid var(--app-border)" }}
            >
              <img
                src={locationImage}
                alt={icon.location_name || icon.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs mt-3 text-center" style={{ color: "var(--app-text-subtle)" }}>
              {t.iconDetail.rotateHint}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
