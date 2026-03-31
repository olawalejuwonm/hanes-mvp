'use client';

import React from "react";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import EraShowcase from "@/components/home/EraShowcase";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <EraShowcase />
    </div>
  );
}