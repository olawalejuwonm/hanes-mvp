'use client';

import React from "react";
import { motion } from "framer-motion";
import { Gamepad2, QrCode, Globe, Swords, MapPin, Sparkles } from "lucide-react";

const features = [
  {
    icon: Gamepad2,
    title: "Play as Welsh Icons",
    description: "Embody legendary figures from Boudicca to Owain Glyndŵr. Make decisions that shaped Welsh history.",
    color: "#D4A843",
  },
  {
    icon: QrCode,
    title: "Scannable QR Cards",
    description: "Print collectible cards with embedded QR codes. Each scan unlocks a new 3D location experience.",
    color: "#6B8ADB",
  },
  {
    icon: Globe,
    title: "3D Location Viewer",
    description: "Explore Welsh castles, abbeys, and landmarks in immersive 3D. Rotate, zoom, and discover details.",
    color: "#5BA57D",
  },
  {
    icon: Swords,
    title: "Era-Based Gameplay",
    description: "Journey through Celtic, Medieval, Tudor, Industrial, and Modern eras of Welsh history.",
    color: "#C4635D",
  },
  {
    icon: MapPin,
    title: "Real Location Mapping",
    description: "Every in-game location maps to a real Welsh heritage site. Visit them in person to unlock bonuses.",
    color: "#9B6BC4",
  },
  {
    icon: Sparkles,
    title: "Augmented Reality",
    description: "Point your camera at QR cards to see locations come alive with AR overlays and historical context.",
    color: "#D49A43",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 sm:py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-[#D4A843] text-xs tracking-[0.3em] uppercase font-medium">
            Core Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            History Meets Technology
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-sm sm:text-base">
            HANES bridges the gap between physical heritage sites and digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${feature.color}15` }}
                >
                  <Icon className="w-5 h-5" style={{ color: feature.color }} />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white/90">{feature.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}