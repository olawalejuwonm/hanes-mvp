'use client';

import React, { useState } from "react";
import { MapPin, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import LocationCard from "@/components/locations/LocationCard";
import Scene3D from "@/components/viewer/Scene3D";
import { WELSH_LOCATIONS } from "@/data/mockData";
import { useLanguage } from "@/context/LanguageContext";

export default function Locations() {
  const [selected, setSelected] = useState(null);
  const { t } = useLanguage();
  const locations = WELSH_LOCATIONS;

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(212,168,67,0.10)" }}>
              <MapPin className="w-5 h-5 text-[#D4A843]" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--app-text)" }}>
                {t.locations.heading}
              </h1>
              <p className="text-sm mt-1" style={{ color: "var(--app-text-subtle)" }}>
                {t.locations.subheading}
              </p>
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
            style={{ background: "rgba(0,0,0,0.80)" }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-3xl rounded-2xl overflow-hidden"
              style={{ background: "var(--app-bg)", border: "1px solid var(--app-border)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-5" style={{ borderBottom: "1px solid var(--app-border)" }}>
                <div>
                  <h3 className="text-lg font-semibold" style={{ color: "var(--app-text)" }}>
                    {selected.name}
                  </h3>
                  <p className="text-xs" style={{ color: "var(--app-text-subtle)" }}>{selected.era}</p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="p-2 rounded-lg transition-colors"
                  style={{ background: "var(--app-surface)" }}
                >
                  <X className="w-5 h-5" style={{ color: "var(--app-text-muted)" }} />
                </button>
              </div>
              <div className="aspect-video">
                <Scene3D type={selected.ar_model_type || "castle"} />
              </div>
              <div className="p-5" style={{ borderTop: "1px solid var(--app-border)" }}>
                <p className="text-sm" style={{ color: "var(--app-text-muted)" }}>{selected.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
