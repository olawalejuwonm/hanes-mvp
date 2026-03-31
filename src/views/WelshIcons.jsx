'use client';

import React, { useState } from "react";
import { Users, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import IconCard from "@/components/icons/IconCard";
import { WELSH_ICONS } from "@/data/mockData";
import { useLanguage } from "@/context/LanguageContext";

export default function WelshIcons() {
  const [search, setSearch] = useState("");
  const [eraFilter, setEraFilter] = useState("all");
  const { t } = useLanguage();

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
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(212,168,67,0.10)" }}>
              <Users className="w-5 h-5 text-[#D4A843]" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--app-text)" }}>
                {t.welshIcons.heading}
              </h1>
              <p className="text-sm mt-1" style={{ color: "var(--app-text-subtle)" }}>
                {t.welshIcons.subheading}
              </p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--app-text-subtle)" }} />
            <Input
              placeholder={t.welshIcons.searchPlaceholder}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
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
              className="px-4 py-2 rounded-lg text-xs font-medium transition-all"
              style={
                eraFilter === "all"
                  ? { background: "rgba(212,168,67,0.10)", color: "#D4A843", border: "1px solid rgba(212,168,67,0.20)" }
                  : { background: "var(--app-surface)", color: "var(--app-text-muted)", border: "1px solid var(--app-border)" }
              }
            >
              {t.welshIcons.allEras}
            </button>
            {eras.map((era) => (
              <button
                key={era}
                onClick={() => setEraFilter(era)}
                className="px-4 py-2 rounded-lg text-xs font-medium transition-all"
                style={
                  eraFilter === era
                    ? { background: "rgba(212,168,67,0.10)", color: "#D4A843", border: "1px solid rgba(212,168,67,0.20)" }
                    : { background: "var(--app-surface)", color: "var(--app-text-muted)", border: "1px solid var(--app-border)" }
                }
              >
                {era}
              </button>
            ))}
          </div>
        </div>

        {/* Icons Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-32">
            <Users className="w-12 h-12 mx-auto mb-4" style={{ color: "var(--app-text-subtle)" }} />
            <p className="text-sm" style={{ color: "var(--app-text-subtle)" }}>{t.welshIcons.noResults}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((icon, idx) => (
              <IconCard key={icon.id} icon={icon} index={idx} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
