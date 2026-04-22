'use client';

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Eye, Shield, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";

const typeColors = {
  castle: "bg-red-100 text-red-800 border-red-200",
  abbey: "bg-green-100 text-green-800 border-green-200",
  monument: "bg-red-50 text-red-900 border-red-200",
  landscape: "bg-green-50 text-green-900 border-green-200",
  village: "bg-white text-green-900 border-red-200",
};

const typeLabelIcons = {
  castle: Shield,
  abbey: Trophy,
  monument: Shield,
  landscape: Trophy,
  village: MapPin,
};

export default function LocationCard({ location, index, onSelect }) {
  const { t, lang } = useLanguage();
  const TypeIcon = typeLabelIcons[location.ar_model_type] || MapPin;
  const points = 100 + index * 20;
  const challengeLevel = index % 3 === 0 ? "Epic" : index % 2 === 0 ? "Heroic" : "Explorer";

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      onClick={() => onSelect(location)}
      className="group text-left w-full rounded-2xl overflow-hidden transition-all duration-500"
      style={{
        background: "var(--app-surface)",
        border: "1px solid var(--app-border)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--app-border-hover)";
        e.currentTarget.style.background = "var(--app-surface-hover)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--app-border)";
        e.currentTarget.style.background = "var(--app-surface)";
      }}
    >
      <div
        className="aspect-video relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, rgba(0,112,60,0.14) 0%, rgba(200,16,46,0.16) 100%)" }}
      >
        <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between">
          <div className="flex items-start justify-between gap-3">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{ background: "rgba(255,255,255,0.92)", border: "1px solid rgba(0,112,60,0.18)" }}
            >
              <Trophy className="w-4 h-4" style={{ color: "var(--hanes-red)" }} />
              <span className="text-sm font-bold" style={{ color: "var(--hanes-green-dark)" }}>
                {points} XP
              </span>
            </div>
            <div
              className="px-3 py-1.5 rounded-full text-sm font-bold"
              style={{ color: "var(--hanes-white)", background: "var(--hanes-red)" }}
            >
              {challengeLevel}
            </div>
          </div>

          <div className="flex items-end justify-between gap-2">
            <div>
              <p className="text-base font-black" style={{ color: "var(--hanes-white)" }}>
                {location.name}
              </p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.9)" }}>
                {lang === "cy" ? (location.era_cy || location.era) : location.era}
              </p>
            </div>
            <TypeIcon className="w-8 h-8" style={{ color: "var(--hanes-white)" }} />
          </div>
        </div>

        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 60%)" }} />

        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          {location.ar_model_type && (
            <Badge className={`text-sm font-bold ${typeColors[location.ar_model_type] || typeColors.castle}`}>
              {location.ar_model_type}
            </Badge>
          )}
          <div
            className="flex items-center gap-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ color: "var(--hanes-white)" }}
          >
            <Eye className="w-3 h-3" />
            {t.common.view3D}
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3
          className="text-xl font-bold transition-colors mb-2"
          style={{ color: "var(--app-text)" }}
        >
          {location.name}
        </h3>
        {location.era && (
          <p className="text-sm tracking-widest uppercase mb-2" style={{ color: "var(--app-text-subtle)" }}>
            {lang === "cy" ? (location.era_cy || location.era) : location.era}
          </p>
        )}
        <p className="text-base line-clamp-3 leading-relaxed" style={{ color: "var(--app-text-muted)" }}>
          {lang === "cy" ? (location.description_cy || location.description) : location.description}
        </p>
        {location.source_url && (
          <a
            href={location.source_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm font-bold"
            style={{ color: "var(--hanes-red)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {t.common.source}: Wikipedia
          </a>
        )}
      </div>
    </motion.button>
  );
}
