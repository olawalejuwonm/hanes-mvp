'use client';

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { Swords, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const difficultyColors = {
  beginner: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  intermediate: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  advanced: "bg-red-500/10 text-red-500 border-red-500/20",
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
        className="group block rounded-2xl overflow-hidden transition-all duration-500"
        style={{
          background: "var(--app-surface)",
          border: "1px solid var(--app-border)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(212,168,67,0.25)";
          e.currentTarget.style.background = "var(--app-surface-hover)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--app-border)";
          e.currentTarget.style.background = "var(--app-surface)";
        }}
      >
        <div className="aspect-[4/3] relative overflow-hidden">
          {icon.image_url ? (
            <img
              src={icon.image_url}
              alt={icon.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, rgba(212,168,67,0.10) 0%, transparent 100%)" }}
            >
              <Swords className="w-12 h-12 text-[#D4A843]/30" />
            </div>
          )}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--app-card-gradient-from) 0%, transparent 60%)" }} />

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
            <span className="text-[10px]" style={{ color: "var(--app-text-subtle)" }}>{icon.era_years}</span>
          </div>
          <h3 className="text-lg font-semibold mb-1 group-hover:text-[#D4A843] transition-colors" style={{ color: "var(--app-text)" }}>
            {icon.name}
          </h3>
          <p className="text-xs mb-3" style={{ color: "var(--app-text-subtle)" }}>{icon.title}</p>
          <p className="text-sm line-clamp-2 leading-relaxed" style={{ color: "var(--app-text-muted)" }}>
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
