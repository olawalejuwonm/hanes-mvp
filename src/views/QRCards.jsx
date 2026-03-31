'use client';

import React from "react";
import { QrCode } from "lucide-react";
import QRCardDisplay from "@/components/qr/QRCardDisplay";
import { WELSH_LOCATIONS } from "@/data/mockData";

export default function QRCards() {
  const locations = WELSH_LOCATIONS;

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <QrCode className="w-4 h-4 text-[#D4A843]" />
            <span className="text-xs text-white/50 tracking-widest uppercase">
              Collectible Cards
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            QR <span className="text-[#D4A843]">Heritage Cards</span>
          </h1>
          <p className="text-white/40 max-w-xl mx-auto text-sm sm:text-base">
            Print these cards and scan them with the HANES app to unlock immersive 3D views of
            Welsh heritage locations
          </p>
        </div>

        {/* How it works */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {[
            {
              step: "01",
              title: "Print the Card",
              desc: "Download and print any QR card on standard paper or card stock",
            },
            {
              step: "02",
              title: "Scan with HANES",
              desc: "Open the HANES app and point your camera at the QR code",
            },
            {
              step: "03",
              title: "Explore in AR",
              desc: "Watch the location come alive in 3D right on your table",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center"
            >
              <span className="text-[#D4A843] text-2xl font-black">{item.step}</span>
              <h3 className="text-sm font-semibold mt-3 mb-2 text-white/80">{item.title}</h3>
              <p className="text-xs text-white/30">{item.desc}</p>
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
