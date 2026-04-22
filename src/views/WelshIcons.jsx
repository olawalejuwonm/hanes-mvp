'use client';

import React, { useState } from "react";
import { Search, Users2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import IconCard from "@/components/icons/IconCard";
import { WELSH_ICONS } from "@/data/mockData";
import { useLanguage } from "@/context/LanguageContext";

export default function WelshIcons() {
  const [search, setSearch] = useState("");
  const [eraFilter, setEraFilter] = useState("all");
  const { t, lang } = useLanguage();

  const icons = WELSH_ICONS;
  const eras = [...new Set(icons.map((i) => i.era).filter(Boolean))];

  const filtered = icons.filter((icon) => {
    const matchesSearch =
      !search ||
      icon.name?.toLowerCase().includes(search.toLowerCase()) ||
      icon.title?.toLowerCase().includes(search.toLowerCase());
    const matchesEra = eraFilter === "all" || icon.era === eraFilter;
    return matchesSearch && matchesEra;
  });

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-4"
            style={{ background: "rgba(0,112,60,0.10)", color: "var(--hanes-green)", border: "1px solid rgba(0,112,60,0.20)" }}>
            <Users2 className="w-3.5 h-3.5" />
            {t.welshIcons.subheading}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-3" style={{ color: "var(--app-text)" }}>
            {t.welshIcons.heading}
          </h1>
          <p className="text-base sm:text-lg max-w-xl" style={{ color: "var(--app-text-muted)" }}>
            {filtered.length} {filtered.length === 1 ? "character" : "characters"} ready to play
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--app-text-subtle)" }} />
            <Input
              placeholder={t.welshIcons.searchPlaceholder}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 h-11 text-sm rounded-xl"
              style={{
                background: "var(--app-surface)",
                border: "1px solid var(--app-border)",
                color: "var(--app-text)",
              }}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setEraFilter("all")}
              className="px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer"
              style={
                eraFilter === "all"
                  ? { background: "var(--hanes-red)", color: "var(--hanes-white)", border: "1px solid var(--hanes-red)" }
                  : { background: "var(--app-surface)", color: "var(--app-text-muted)", border: "1px solid var(--app-border)" }
              }
            >
              {t.welshIcons.allEras}
            </button>
            {eras.map((era) => (
              <button
                key={era}
                onClick={() => setEraFilter(era)}
                className="px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer"
                style={
                  eraFilter === era
                    ? { background: "var(--hanes-red)", color: "var(--hanes-white)", border: "1px solid var(--hanes-red)" }
                    : { background: "var(--app-surface)", color: "var(--app-text-muted)", border: "1px solid var(--app-border)" }
                }
              >
                {lang === "cy" ? (icons.find((i) => i.era === era)?.era_cy || era) : era}
              </button>
            ))}
          </div>
        </div>

        {/* Icons Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-32">
            <Users2 className="w-12 h-12 mx-auto mb-4" style={{ color: "var(--app-text-subtle)" }} />
            <p className="text-base" style={{ color: "var(--app-text-subtle)" }}>{t.welshIcons.noResults}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filtered.map((icon, idx) => (
              <IconCard key={icon.id} icon={icon} index={idx} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
