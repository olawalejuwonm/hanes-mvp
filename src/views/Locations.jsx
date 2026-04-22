'use client';

import React, { useState } from "react";
import { MapPin, X, Trophy, ShieldCheck, Flag } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import LocationCard from "@/components/locations/LocationCard";
import Scene3D from "@/components/viewer/Scene3D";
import { WELSH_LOCATIONS } from "@/data/mockData";
import { useLanguage } from "@/context/LanguageContext";

export default function Locations() {
  const [selected, setSelected] = useState(null);
  const { t, lang } = useLanguage();
  const locations = WELSH_LOCATIONS;
  const totalXp = locations.length * 120;

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,112,60,0.12)", border: "1px solid rgba(0,112,60,0.25)" }}>
              <MapPin className="w-6 h-6" style={{ color: "var(--hanes-green)" }} />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold" style={{ color: "var(--app-text)" }}>
                {t.locations.heading}
              </h1>
              <p className="text-base mt-1" style={{ color: "var(--app-text-muted)" }}>
                {t.locations.subheading}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6" aria-label="Mission progress overview">
            <div className="rounded-xl p-4" style={{ background: "var(--app-surface)", border: "1px solid var(--app-border)" }}>
              <div className="flex items-center gap-2 mb-1">
                <Trophy className="w-5 h-5" style={{ color: "var(--hanes-red)" }} />
                <p className="text-sm font-bold" style={{ color: "var(--app-text-muted)" }}>XP Pool</p>
              </div>
              <p className="text-2xl font-black" style={{ color: "var(--app-text)" }}>{totalXp}</p>
            </div>
            <div className="rounded-xl p-4" style={{ background: "var(--app-surface)", border: "1px solid var(--app-border)" }}>
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-5 h-5" style={{ color: "var(--hanes-green)" }} />
                <p className="text-sm font-bold" style={{ color: "var(--app-text-muted)" }}>Missions</p>
              </div>
              <p className="text-2xl font-black" style={{ color: "var(--app-text)" }}>{locations.length}</p>
            </div>
            <div className="rounded-xl p-4" style={{ background: "var(--app-surface)", border: "1px solid var(--app-border)" }}>
              <div className="flex items-center gap-2 mb-1">
                <Flag className="w-5 h-5" style={{ color: "var(--hanes-red)" }} />
                <p className="text-sm font-bold" style={{ color: "var(--app-text-muted)" }}>Current Rank</p>
              </div>
              <p className="text-2xl font-black" style={{ color: "var(--app-text)" }}>Dragon Scout</p>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc, idx) => (
            <LocationCard
              key={loc.id}
              location={loc}
              index={idx}
              onSelect={setSelected}
            />
          ))}
        </div>
      </div>

      {/* 3D Viewer Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(4,25,15,0.88)" }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-3xl rounded-2xl overflow-hidden"
              style={{ background: "var(--app-bg)", border: "1px solid var(--app-border)" }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={`3D preview for ${selected.name}`}
            >
              <div className="flex items-center justify-between p-5" style={{ borderBottom: "1px solid var(--app-border)" }}>
                <div>
                  <h3 className="text-2xl font-semibold" style={{ color: "var(--app-text)" }}>
                    {selected.name}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--app-text-subtle)" }}>
                    {lang === "cy" ? (selected.era_cy || selected.era) : selected.era}
                  </p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="p-2 rounded-lg transition-colors"
                  style={{ background: "var(--app-surface)" }}
                  aria-label="Close location viewer"
                >
                  <X className="w-5 h-5" style={{ color: "var(--app-text-muted)" }} />
                </button>
              </div>
              <div className="aspect-video">
                <Scene3D type={selected.ar_model_type || "castle"} />
              </div>
              <div className="p-5" style={{ borderTop: "1px solid var(--app-border)" }}>
                <p className="text-base" style={{ color: "var(--app-text-muted)" }}>
                  {lang === "cy" ? (selected.description_cy || selected.description) : selected.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
