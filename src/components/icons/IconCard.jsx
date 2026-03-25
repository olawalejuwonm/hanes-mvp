'use client';

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { Swords, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const difficultyColors = {
  beginner: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  intermediate: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  advanced: "bg-red-500/10 text-red-400 border-red-500/20",
};

export default function IconCard({ icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
    >
      <Link
        href={createPageUrl(`IconDetail?id=${icon.id}`)}
        className="group block rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#D4A843]/20 overflow-hidden transition-all duration-500 hover:bg-white/[0.04]"
      >
        <div className="aspect-[4/3] relative overflow-hidden">
          {icon.image_url ? (
            <img
              src={icon.image_url}
              alt={icon.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#D4A843]/10 to-transparent flex items-center justify-center">
              <Swords className="w-12 h-12 text-[#D4A843]/30" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F13] via-transparent to-transparent" />
          
          {icon.difficulty && (
            <div className="absolute top-3 right-3">
              <Badge className={`text-[10px] ${difficultyColors[icon.difficulty]}`}>
                {icon.difficulty}
              </Badge>
            </div>
          )}
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#D4A843] text-[10px] tracking-[0.2em] uppercase font-medium">
              {icon.era || "Unknown Era"}
            </span>
            <span className="text-white/20 text-[10px]">{icon.era_years}</span>
          </div>
          <h3 className="text-lg font-semibold text-white/90 mb-1 group-hover:text-[#D4A843] transition-colors">
            {icon.name}
          </h3>
          <p className="text-xs text-white/30 mb-3">{icon.title}</p>
          <p className="text-sm text-white/40 line-clamp-2 leading-relaxed">
            {icon.description}
          </p>
          <div className="flex items-center gap-1 mt-4 text-xs text-[#D4A843]/60 group-hover:text-[#D4A843] transition-colors">
            <span>Play story</span>
            <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}