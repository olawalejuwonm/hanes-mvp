'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const eraIds = ["celtic", "roman", "medieval", "tudor", "industrial"];
const eraColors = {
  celtic: "#00703C",
  roman: "#C8102E",
  medieval: "#C8102E",
  tudor: "#00703C",
  industrial: "#C8102E",
};
const eraBgGradients = {
  celtic: "from-green-900/20 to-transparent",
  roman: "from-red-900/20 to-transparent",
  medieval: "from-red-900/20 to-transparent",
  tudor: "from-green-900/20 to-transparent",
  industrial: "from-red-900/20 to-transparent",
};

export default function EraShowcase() {
  const [activeEra, setActiveEra] = useState("medieval");
  const { t } = useLanguage();

  const color = eraColors[activeEra];

  // Build era objects from translations
  const eras = eraIds.map((id) => ({
    id,
    name: t.eras.names[id],
    description: t.eras.descriptions[id],
    color: eraColors[id],
    bgGradient: eraBgGradients[id],
  }));

  const active = eras.find((e) => e.id === activeEra);

  return (
    <section className="py-24 sm:py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-[0.3em] uppercase font-bold" style={{ color: "var(--hanes-red)" }}>
            {t.eras.tag}
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4"
            style={{ color: "var(--app-text)" }}
          >
            {t.eras.heading}
          </h2>
        </motion.div>

        {/* Era selector */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {eras.map((era) => (
            <button
              key={era.id}
              onClick={() => setActiveEra(era.id)}
              className="px-4 sm:px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300"
              style={
                activeEra === era.id
                  ? {
                      background: "var(--app-surface-hover)",
                      border: `1px solid ${era.color}40`,
                      color: era.color,
                    }
                  : {
                      background: "var(--app-surface)",
                      border: "1px solid var(--app-border)",
                      color: "var(--app-text-muted)",
                    }
              }
            >
              {era.name}
            </button>
          ))}
        </div>

        {/* Era details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeEra}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className={`relative rounded-3xl bg-gradient-to-br ${active.bgGradient} p-8 sm:p-12 lg:p-16 text-center`}
            style={{ border: "1px solid var(--app-border)" }}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full"
              style={{ background: color }}
            />
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3" style={{ color }}>
              {active.name}
            </h3>
            <p className="text-base font-semibold mb-6 tracking-widest" style={{ color: "var(--app-text-subtle)" }}>
              {/* years from the full data */}
              {["500 BC – 43 AD", "43 – 410 AD", "1000 – 1400", "1485 – 1603", "1760 – 1900"][eraIds.indexOf(activeEra)]}
            </p>
            <p className="max-w-2xl mx-auto text-base sm:text-lg font-semibold leading-relaxed" style={{ color: "var(--app-text-muted)" }}>
              {active.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
