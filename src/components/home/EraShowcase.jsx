'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const eras = [
  {
    id: "celtic",
    name: "Celtic Age",
    years: "500 BC – 43 AD",
    description: "Druids, hill forts, and the fierce Celtic warriors who first shaped Wales's identity. Experience sacred groves and tribal politics.",
    color: "#5BA57D",
    bgGradient: "from-emerald-900/20 to-transparent",
  },
  {
    id: "roman",
    name: "Roman Era",
    years: "43 – 410 AD",
    description: "Roman legions march into Wales. Build forts, resist occupation, and witness the collision of two great civilizations.",
    color: "#C4635D",
    bgGradient: "from-red-900/20 to-transparent",
  },
  {
    id: "medieval",
    name: "Medieval Wales",
    years: "1000 – 1400",
    description: "The age of princes, castles, and conquest. Fight alongside Llywelyn the Great or lead Owain Glyndŵr's rebellion.",
    color: "#D4A843",
    bgGradient: "from-amber-900/20 to-transparent",
  },
  {
    id: "tudor",
    name: "Tudor Period",
    years: "1485 – 1603",
    description: "A Welsh dynasty takes the English throne. Navigate the politics of the Tudor court and the transformation of Welsh society.",
    color: "#9B6BC4",
    bgGradient: "from-purple-900/20 to-transparent",
  },
  {
    id: "industrial",
    name: "Industrial Age",
    years: "1760 – 1900",
    description: "Coal, iron, and revolution. Experience the dramatic transformation of the Welsh landscape and the birth of workers' movements.",
    color: "#6B8ADB",
    bgGradient: "from-blue-900/20 to-transparent",
  },
];

export default function EraShowcase() {
  const [activeEra, setActiveEra] = useState("medieval");
  const active = eras.find((e) => e.id === activeEra);

  return (
    <section className="py-24 sm:py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D4A843] text-xs tracking-[0.3em] uppercase font-medium">
            Journey Through Time
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
            Five Eras of Wales
          </h2>
        </motion.div>

        {/* Era selector */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {eras.map((era) => (
            <button
              key={era.id}
              onClick={() => setActiveEra(era.id)}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeEra === era.id
                  ? "bg-white/10 border border-white/20 text-white"
                  : "bg-white/[0.02] border border-white/5 text-white/40 hover:text-white/60 hover:bg-white/5"
              }`}
              style={activeEra === era.id ? { borderColor: era.color + "40", color: era.color } : {}}
            >
              {era.name}
            </button>
          ))}
        </div>

        {/* Era details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeEra}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className={`relative rounded-3xl bg-gradient-to-br ${active.bgGradient} border border-white/5 p-8 sm:p-12 lg:p-16 text-center`}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full"
              style={{ background: active.color }}
            />
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3" style={{ color: active.color }}>
              {active.name}
            </h3>
            <p className="text-white/30 text-sm mb-6 tracking-widest">{active.years}</p>
            <p className="text-white/50 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              {active.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}