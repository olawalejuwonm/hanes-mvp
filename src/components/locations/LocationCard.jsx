'use client';

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";

const typeColors = {
  castle: "bg-[#D4A843]/10 text-[#D4A843] border-[#D4A843]/20",
  abbey: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  monument: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  landscape: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  village: "bg-red-500/10 text-red-500 border-red-500/20",
};

export default function LocationCard({ location, index, onSelect }) {
  const { t, lang } = useLanguage();

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
      <div className="aspect-video relative overflow-hidden" style={{ background: "var(--app-surface)" }}>
        {location.image_url ? (
          <img
            src={location.image_url}
            alt={location.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <MapPin className="w-10 h-10" style={{ color: "var(--app-text-subtle)" }} />
          </div>
        )}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, var(--app-card-gradient-from) 0%, transparent 60%)" }}
        />

        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          {location.ar_model_type && (
            <Badge className={`text-[10px] ${typeColors[location.ar_model_type] || typeColors.castle}`}>
              {location.ar_model_type}
            </Badge>
          )}
          <div
            className="flex items-center gap-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ color: "var(--app-text-muted)" }}
          >
            <Eye className="w-3 h-3" />
            {t.common.view3D}
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3
          className="text-base font-semibold transition-colors mb-1"
          style={{ color: "var(--app-text)" }}
        >
          {location.name}
        </h3>
        {location.era && (
          <p className="text-[10px] tracking-widest uppercase mb-2" style={{ color: "var(--app-text-subtle)" }}>
            {lang === "cy" ? (location.era_cy || location.era) : location.era}
          </p>
        )}
        <p className="text-xs line-clamp-2 leading-relaxed" style={{ color: "var(--app-text-muted)" }}>
          {lang === "cy" ? (location.description_cy || location.description) : location.description}
        </p>
        {location.source_url && (
          <a
            href={location.source_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-[10px]"
            style={{ color: "var(--hanes-gold)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {t.common.source}: Wikipedia
          </a>
        )}
      </div>
    </motion.button>
  );
}
