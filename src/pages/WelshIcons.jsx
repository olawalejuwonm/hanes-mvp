import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { Loader2, Users, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import IconCard from "@/components/icons/IconCard";

export default function WelshIcons() {
  const [search, setSearch] = useState("");
  const [eraFilter, setEraFilter] = useState("all");

  const { data: icons = [], isLoading } = useQuery({
    queryKey: ["welsh-icons"],
    queryFn: () => base44.entities.WelshIcon.list(),
  });

  const eras = [...new Set(icons.map((i) => i.era).filter(Boolean))];

  const filtered = icons.filter((icon) => {
    const matchesSearch = !search || 
      icon.name?.toLowerCase().includes(search.toLowerCase()) ||
      icon.title?.toLowerCase().includes(search.toLowerCase());
    const matchesEra = eraFilter === "all" || icon.era === eraFilter;
    return matchesSearch && matchesEra;
  });

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#D4A843]/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-[#D4A843]" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold">Welsh Icons</h1>
              <p className="text-white/40 text-sm mt-1">Choose your character and rewrite history</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <Input
              placeholder="Search icons..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#D4A843]/30"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setEraFilter("all")}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                eraFilter === "all"
                  ? "bg-[#D4A843]/10 text-[#D4A843] border border-[#D4A843]/20"
                  : "bg-white/5 text-white/40 border border-white/5 hover:text-white/60"
              }`}
            >
              All Eras
            </button>
            {eras.map((era) => (
              <button
                key={era}
                onClick={() => setEraFilter(era)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                  eraFilter === era
                    ? "bg-[#D4A843]/10 text-[#D4A843] border border-[#D4A843]/20"
                    : "bg-white/5 text-white/40 border border-white/5 hover:text-white/60"
                }`}
              >
                {era}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {isLoading ? (
          <div className="flex items-center justify-center py-32">
            <Loader2 className="w-6 h-6 text-[#D4A843] animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-32">
            <Users className="w-12 h-12 text-white/10 mx-auto mb-4" />
            <p className="text-white/30 text-sm">No icons found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((icon, idx) => (
              <IconCard key={icon.id} icon={icon} index={idx} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}