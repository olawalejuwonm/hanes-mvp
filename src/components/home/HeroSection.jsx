'use client';

import React from "react";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Play, QrCode, ChevronDown } from "lucide-react";

const HERO_BG = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69aa29ac788b58b9c3b0ef60/cb5aaae96_generated_image.png";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Welsh landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0F13]/60 via-[#0D0F13]/40 to-[#0D0F13]" />
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#C8102E] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 rounded-full bg-[#C8102E] animate-pulse" />
            <span className="text-xs sm:text-sm text-white/70 tracking-widest uppercase">
              Pan Wales Hackathon 2026
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
          className="text-lg sm:text-xl lg:text-2xl text-white/50 font-light mb-4 tracking-wide"
        >
          Welsh Heritage Through Augmented Reality
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-sm sm:text-base text-white/30 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Step into the shoes of legendary Welsh icons. Explore castles, battlefields, 
          and sacred sites through immersive AR. Scan QR cards to unlock 3D locations 
          and experience centuries of Welsh culture like never before.
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
            Begin Your Journey
          </Link>
          <Link
            href={createPageUrl("QRCards")}
            className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-white/80 font-medium text-sm tracking-wide hover:bg-white/10 transition-all duration-300"
          >
            <QrCode className="w-4 h-4" />
            Explore QR Cards
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-5 h-5 text-white/30" />
      </motion.div>
    </section>
  );
}