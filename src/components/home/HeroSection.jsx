'use client';

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Play, QrCode, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const HERO_BG = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69aa29ac788b58b9c3b0ef60/cb5aaae96_generated_image.png";

// Deterministic particles so server & client agree
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  left: ((i * 37 + 13) % 100).toFixed(1),
  top: ((i * 53 + 7) % 100).toFixed(1),
  duration: 3 + (i % 4),
  delay: (i * 0.3) % 3,
}));

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Welsh landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#C8102E] rounded-full"
          style={{ left: `${p.left}%`, top: `${p.top}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 rounded-full bg-[#C8102E] animate-pulse" />
            <span className="text-xs sm:text-sm text-white/80 tracking-widest uppercase">
              {t.hero.badge}
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6"
        >
          <span className="text-[#C8102E] glow-text">HANES</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg sm:text-xl lg:text-2xl text-white/70 font-light mb-4 tracking-wide"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href={createPageUrl("WelshIcons")}
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#C8102E] to-[#8B0A1E] rounded-xl text-white font-semibold text-sm tracking-wide hover:shadow-[0_0_40px_rgba(200,16,46,0.4)] transition-all duration-500"
          >
            <Play className="w-4 h-4" />
            {t.hero.beginJourney}
          </Link>
          <Link
            href={createPageUrl("QRCards")}
            className="flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 rounded-xl text-white/90 font-medium text-sm tracking-wide hover:bg-white/20 transition-all duration-300"
          >
            <QrCode className="w-4 h-4" />
            {t.hero.exploreQR}
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-5 h-5 text-white/40" />
      </motion.div>
    </section>
  );
}
