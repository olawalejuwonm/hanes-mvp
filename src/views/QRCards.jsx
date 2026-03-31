'use client';

import React from "react";
import { QrCode } from "lucide-react";
import QRCardDisplay from "@/components/qr/QRCardDisplay";
import { WELSH_LOCATIONS } from "@/data/mockData";
import { useLanguage } from "@/context/LanguageContext";

export default function QRCards() {
  const locations = WELSH_LOCATIONS;
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: "var(--app-surface)", border: "1px solid var(--app-border)" }}
          >
            <QrCode className="w-4 h-4" style={{ color: "var(--hanes-gold)" }} />
            <span className="text-xs tracking-widest uppercase" style={{ color: "var(--app-text-muted)" }}>
              {t.qrCards.tag}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "var(--app-text)" }}>
            <span style={{ color: "var(--hanes-gold)" }}>{t.qrCards.heading}</span>
          </h1>
          <p className="max-w-xl mx-auto text-sm sm:text-base" style={{ color: "var(--app-text-muted)" }}>
            {t.qrCards.subheading}
          </p>
        </div>

        {/* How it works */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {t.qrCards.howItWorks.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl text-center"
              style={{ background: "var(--app-surface)", border: "1px solid var(--app-border)" }}
            >
              <span className="text-2xl font-black" style={{ color: "var(--hanes-gold)" }}>{item.step}</span>
              <h3 className="text-sm font-semibold mt-3 mb-2" style={{ color: "var(--app-text)" }}>
                {item.title}
              </h3>
              <p className="text-xs" style={{ color: "var(--app-text-subtle)" }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc, idx) => (
            <QRCardDisplay key={loc.id} location={loc} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
