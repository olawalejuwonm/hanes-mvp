import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { Loader2, MapPin, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import LocationCard from "@/components/locations/LocationCard";
import Scene3D from "@/components/viewer/Scene3D";

export default function Locations() {
  const [selected, setSelected] = useState(null);

  const { data: locations = [], isLoading } = useQuery({
    queryKey: ["locations"],
    queryFn: () => base44.entities.Location.list(),
  });

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#D4A843]/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-[#D4A843]" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold">Welsh Locations</h1>
              <p className="text-white/40 text-sm mt-1">Explore heritage sites in immersive 3D</p>
            </div>
          </div>
        </div>

        {/* Grid */}
        {isLoading ? (
          <div className="flex items-center justify-center py-32">
            <Loader2 className="w-6 h-6 text-[#D4A843] animate-spin" />
          </div>
        ) : locations.length === 0 ? (
          <div className="text-center py-32">
            <MapPin className="w-12 h-12 text-white/10 mx-auto mb-4" />
            <p className="text-white/30 text-sm">No locations added yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc, idx) => (
              <LocationCard
                key={loc.id}
                location={loc}
                index={idx}
                onSelect={setSelected}
              />
            ))}
          </div>
        )}
      </div>

      {/* 3D Viewer Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-3xl bg-[#0D0F13] rounded-2xl border border-white/10 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-5 border-b border-white/5">
                <div>
                  <h3 className="text-lg font-semibold">{selected.name}</h3>
                  <p className="text-white/30 text-xs">{selected.era}</p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <X className="w-5 h-5 text-white/40" />
                </button>
              </div>
              <div className="aspect-video">
                <Scene3D type={selected.ar_model_type || "castle"} />
              </div>
              <div className="p-5 border-t border-white/5">
                <p className="text-white/40 text-sm">{selected.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}