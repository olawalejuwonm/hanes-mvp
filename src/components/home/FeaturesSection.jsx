'use client';

import React from "react";
import { motion } from "framer-motion";
import { Gamepad2, QrCode, Globe, Swords, MapPin, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const featureIcons = [Gamepad2, QrCode, Globe, Swords, MapPin, Sparkles];
const featureColors = ["#C8102E", "#00703C", "#C8102E", "#00703C", "#C8102E", "#00703C"];

export default function FeaturesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 sm:py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-sm tracking-[0.3em] uppercase font-bold" style={{ color: "var(--hanes-red)" }}>
            {t.features.tag}
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6"
            style={{ color: "var(--app-text)" }}
          >
            {t.features.heading}
          </h2>
          <p className="max-w-xl mx-auto text-base sm:text-lg font-semibold" style={{ color: "var(--app-text-muted)" }}>
            {t.features.subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {t.features.items.map((feature, idx) => {
            const Icon = featureIcons[idx];
            const color = featureColors[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-6 sm:p-8 rounded-2xl transition-all duration-500"
                style={{
                  background: "var(--app-surface)",
                  border: "1px solid var(--app-border)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--app-surface-hover)";
                  e.currentTarget.style.borderColor = "var(--app-border-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--app-surface)";
                  e.currentTarget.style.borderColor = "var(--app-border)";
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${color}18` }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <h3 className="text-2xl font-semibold mb-3" style={{ color: "var(--app-text)" }}>
                  {feature.title}
                </h3>
                <p className="text-base font-semibold leading-relaxed" style={{ color: "var(--app-text-muted)" }}>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
