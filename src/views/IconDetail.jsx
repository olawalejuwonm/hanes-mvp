'use client';

import React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Swords, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Scene3D from "@/components/viewer/Scene3D";
import { WELSH_ICONS } from "@/data/mockData";

const WARRIOR_IMG =
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69aa29ac788b58b9c3b0ef60/7188b987a_generated_image.png";

export default function IconDetail() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const icon = WELSH_ICONS.find((i) => i.id === id);

  if (!icon) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <Swords className="w-12 h-12 text-white/10 mx-auto mb-4" />
          <p className="text-white/30">Icon not found</p>
          <Link
            href={createPageUrl("WelshIcons")}
            className="text-[#D4A843] text-sm mt-4 inline-block"
          >
            ← Back to Icons
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <img
          src={icon.image_url || WARRIOR_IMG}
          alt={icon.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F13] via-[#0D0F13]/50 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12">
          <div className="max-w-5xl mx-auto">
            <Link
              href={createPageUrl("WelshIcons")}
              className="inline-flex items-center gap-2 text-white/40 hover:text-white/60 text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Icons
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-3 mb-3">
                <Badge className="bg-[#D4A843]/10 text-[#D4A843] border-[#D4A843]/20 text-[10px] tracking-widest uppercase">
                  {icon.era}
                </Badge>
                <span className="text-white/20 text-xs">{icon.era_years}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-2">{icon.name}</h1>
              <p className="text-white/50 text-lg">{icon.title}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Story */}
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Star className="w-4 h-4 text-[#D4A843]" />
              Story
            </h2>
            <p className="text-white/40 leading-relaxed text-sm mb-8">
              {icon.story_summary ||
                icon.description ||
                "The story of this legendary Welsh icon spans decades of struggle, triumph, and cultural transformation."}
            </p>

            {icon.location_name && (
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-2 text-[#D4A843] text-xs tracking-widest uppercase mb-2">
                  <MapPin className="w-3 h-3" />
                  Key Location
                </div>
                <p className="text-white/70 font-medium">{icon.location_name}</p>
              </div>
            )}

            {icon.difficulty && (
              <div className="mt-6 p-5 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xs text-white/30 mb-2">Difficulty</div>
                <div className="flex items-center gap-2">
                  {[1, 2, 3].map((level) => (
                    <div
                      key={level}
                      className={`w-8 h-2 rounded-full ${
                        (icon.difficulty === "beginner" && level <= 1) ||
                        (icon.difficulty === "intermediate" && level <= 2) ||
                        icon.difficulty === "advanced"
                          ? "bg-[#D4A843]"
                          : "bg-white/10"
                      }`}
                    />
                  ))}
                  <span className="text-white/50 text-sm ml-2 capitalize">
                    {icon.difficulty}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* 3D Preview */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Location Preview</h2>
            <div className="aspect-square rounded-2xl overflow-hidden bg-[#0A0C0F] border border-white/5">
              <Scene3D type="castle" />
            </div>
            <p className="text-white/20 text-xs mt-3 text-center">
              Interactive 3D preview • Rotate to explore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
