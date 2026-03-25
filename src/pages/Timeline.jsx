import React, { useState } from "react";
import { Clock } from "lucide-react";
import TimelineItem from "@/components/timeline/TimelineItem";

const ERAS = [
  {
    id: "celtic",
    name: "Celtic Age",
    years: "500 BC – 43 AD",
    description: "The era of druids, hill forts, and fierce tribal warriors. Celtic culture laid the foundation for Welsh identity with rich oral traditions, intricate metalwork, and a deep connection to the land.",
    icons: ["Boudicca", "Caratacus"],
  },
  {
    id: "roman",
    name: "Roman Era",
    years: "43 – 410 AD",
    description: "Roman legions brought roads, forts, and new technologies to Wales. The clash between Roman order and Celtic spirit created a unique cultural fusion that persisted for centuries.",
    icons: ["Magnus Maximus"],
  },
  {
    id: "medieval",
    name: "Medieval Wales",
    years: "1000 – 1400",
    description: "The golden age of Welsh princes, mighty castles, and epic conflicts. From Llywelyn the Great's unification to Owain Glyndŵr's last great rebellion for independence.",
    icons: ["Llywelyn the Great", "Owain Glyndŵr"],
  },
  {
    id: "tudor",
    name: "Tudor Period",
    years: "1485 – 1603",
    description: "Henry Tudor's victory at Bosworth placed a Welsh dynasty on the English throne. This era saw the Acts of Union and a transformation of Welsh law, language, and governance.",
    icons: ["Henry VII", "William Morgan"],
  },
  {
    id: "industrial",
    name: "Industrial Age",
    years: "1760 – 1900",
    description: "Coal and iron transformed the Welsh landscape. Valleys echoed with industry as workers built the engine of the British Empire while forging a new identity through chapel, choir, and rugby.",
    icons: ["Lady Llanover", "Robert Owen"],
  },
  {
    id: "modern",
    name: "Modern Wales",
    years: "1900 – Present",
    description: "From world wars to devolution, modern Wales has fought to preserve its language and culture while embracing change. The Senedd now stands as a symbol of Welsh self-governance.",
    icons: ["David Lloyd George", "Aneurin Bevan"],
  },
];

export default function Timeline() {
  const [activeEra, setActiveEra] = useState(null);

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Clock className="w-4 h-4 text-[#D4A843]" />
            <span className="text-xs text-white/50 tracking-widest uppercase">Interactive Timeline</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Walk Through <span className="text-[#D4A843]">Welsh History</span>
          </h1>
          <p className="text-white/40 max-w-xl mx-auto text-sm sm:text-base">
            Explore the eras that shaped Wales, from ancient Celts to modern devolution
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-2">
          {ERAS.map((era, idx) => (
            <TimelineItem
              key={era.id}
              era={era}
              index={idx}
              isActive={activeEra === era.id}
              onClick={() => setActiveEra(activeEra === era.id ? null : era.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}