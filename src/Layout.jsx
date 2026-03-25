import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, MapPin, Users, Clock, QrCode, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AudioPlayer from "@/components/AudioPlayer";

const navItems = [
  { name: "Home", page: "Home", icon: Home },
  { name: "Icons", page: "WelshIcons", icon: Users },
  { name: "Timeline", page: "Timeline", icon: Clock },
  { name: "Locations", page: "Locations", icon: MapPin },
  { name: "QR Cards", page: "QRCards", icon: QrCode },
];

export default function Layout({ children, currentPageName }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = currentPageName === "Home";

  return (
    <div className="min-h-screen bg-[#0D0F13] text-white">
      {/* Nav */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isHome ? "bg-transparent" : "bg-[#0D0F13]/90 backdrop-blur-xl border-b border-white/5"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link to={createPageUrl("Home")} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#C8102E] to-[#8B0A1E] flex items-center justify-center">
                <span className="text-white font-black text-sm">H</span>
              </div>
              <span className="text-xl font-bold tracking-wider">
                <span className="text-[#C8102E]">HANES</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    currentPageName === item.page
                      ? "text-[#C8102E] bg-[#C8102E]/10"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/5"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0D0F13]/95 backdrop-blur-xl border-b border-white/5"
            >
              <div className="px-4 py-4 space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.page}
                      to={createPageUrl(item.page)}
                      onClick={() => setMenuOpen(false)}
