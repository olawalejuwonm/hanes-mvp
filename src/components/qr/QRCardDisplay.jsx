'use client';

import React from "react";
import { motion } from "framer-motion";
import { MapPin, QrCode, Printer, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export default function QRCardDisplay({ location, index }) {
  const { t, lang } = useLanguage();
  const hasCoords = location.latitude && location.longitude;

  const mapsUrl = location.qr_code_id?.startsWith("http")
    ? location.qr_code_id
    : hasCoords
    ? `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${location.latitude},${location.longitude}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.name + " " + t.common.countryName)}`;

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(mapsUrl)}&bgcolor=FFFFFF&color=C8102E`;

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>HANES Card - ${location.name}</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
            body { margin: 0; padding: 40px; font-family: 'Inter', sans-serif; background: white; display: flex; justify-content: center; }
            .card { width: 350px; border: 2px solid #00703C; border-radius: 16px; overflow: hidden; }
            .card-header { background: #00703C; padding: 20px; text-align: center; color: white; }
            .card-header h1 { font-size: 18px; font-weight: 800; letter-spacing: 3px; color: #FFFFFF; margin: 0 0 4px 0; }
            .card-header p { font-size: 10px; color: #888; margin: 0; letter-spacing: 2px; text-transform: uppercase; }
            .card-body { padding: 24px; text-align: center; background: white; }
            .card-body h2 { font-size: 16px; margin: 0 0 4px 0; color: #1A1D23; }
            .card-body .era { font-size: 10px; color: #C8102E; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 2px; font-weight: 700; }
            .card-body img { margin: 0 auto; }
            .card-footer { padding: 12px; text-align: center; font-size: 9px; color: #bbb; border-top: 1px solid #eee; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="card-header">
              <h1>HANES</h1>
              <p>${t.common.welshHeritageAR}</p>
            </div>
            <div class="card-body">
              <h2>${location.name}</h2>
              <div class="era">${lang === "cy" ? (location.era_cy || location.era || t.common.countryName) : (location.era || t.common.countryName)}</div>
              <img src="${qrUrl}" width="180" height="180" />
            </div>
            <div class="card-footer">
              ${t.common.scanToNavigateToRealLocation}
              ${hasCoords ? `<br/>${location.latitude.toFixed(4)}° N, ${Math.abs(location.longitude).toFixed(4)}° W` : ""}
              <br/>${t.hero.badge}
            </div>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    setTimeout(() => printWindow.print(), 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="group rounded-2xl overflow-hidden transition-all duration-500"
      style={{
        background: "var(--app-surface)",
        border: "1px solid var(--app-border)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(200,16,46,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--app-border)";
      }}
    >
      {/* Card header */}
      <div
        className="p-5"
        style={{
          background: "linear-gradient(90deg, rgba(0,112,60,0.10) 0%, rgba(200,16,46,0.08) 100%)",
          borderBottom: "1px solid var(--app-border)",
        }}
      >
        <div className="flex items-center gap-2">
          <QrCode className="w-4 h-4" style={{ color: "var(--hanes-green)" }} />
          <span className="text-sm tracking-[0.2em] uppercase font-bold" style={{ color: "var(--hanes-green)" }}>
            {t.qrCards.hanesCard}
          </span>
        </div>
      </div>

      {/* QR Code */}
      <div className="p-8 flex flex-col items-center">
        <h3 className="text-2xl font-semibold mb-1" style={{ color: "var(--app-text)" }}>
          {location.name}
        </h3>
        {location.era && (
          <p className="text-sm font-bold tracking-widest uppercase mb-6" style={{ color: "var(--app-text-subtle)" }}>
            {lang === "cy" ? (location.era_cy || location.era) : location.era}
          </p>
        )}

        <div
          className="w-48 h-48 rounded-xl overflow-hidden p-3 mb-6"
          style={{ background: "var(--app-bg)", border: "1px solid var(--app-border)" }}
        >
          <img
            src={qrUrl}
            alt={`QR code for ${location.name}`}
            className="w-full h-full"
          />
        </div>

        {location.description && (
          <p className="text-base font-semibold text-center line-clamp-2 mb-6" style={{ color: "var(--app-text-subtle)" }}>
            {lang === "cy" ? (location.description_cy || location.description) : location.description}
          </p>
        )}

        {hasCoords && (
          <div className="flex items-center gap-1.5 text-sm font-semibold mb-5" style={{ color: "var(--app-text-subtle)" }}>
            <MapPin className="w-3 h-3" style={{ color: "rgba(200,16,46,0.70)" }} />
            <span>{location.latitude.toFixed(4)}° N, {Math.abs(location.longitude).toFixed(4)}° W</span>
          </div>
        )}

        <div className="flex gap-2">
          <Button
            onClick={handlePrint}
            variant="outline"
            className="text-sm font-bold"
            style={{
              background: "var(--app-surface)",
              border: "1px solid var(--app-border)",
              color: "var(--app-text-muted)",
            }}
          >
            <Printer className="w-3 h-3 mr-2" />
            {t.qrCards.printCard}
          </Button>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-bold transition-all"
            style={{
              background: "var(--app-surface)",
              border: "1px solid var(--app-border)",
              color: "var(--app-text-muted)",
            }}
          >
            <ExternalLink className="w-3 h-3" />
            {t.qrCards.openMap}
          </a>
        </div>
      </div>

      {/* Footer */}
      <div
        className="px-5 py-3 flex items-center gap-2 text-sm font-semibold"
        style={{ borderTop: "1px solid var(--app-border)", color: "var(--app-text-subtle)" }}
      >
        <MapPin className="w-3 h-3" />
        <span>{t.qrCards.scanHint}</span>
      </div>
    </motion.div>
  );
}
