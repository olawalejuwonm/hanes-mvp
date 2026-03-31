'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { Menu, X, MapPin, Users, Clock, QrCode, Home, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/LanguageContext";

export default function Layout({ children, currentPageName }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const { lang, t, toggleLang } = useLanguage();
  const isHome = currentPageName === "Home";

  // Only show theme toggle after mount to avoid hydration mismatch
  useEffect(() => { setMounted(true); }, []);

  const navItems = [
    { name: t.nav.home, page: "Home", icon: Home },
    { name: t.nav.icons, page: "WelshIcons", icon: Users },
    { name: t.nav.timeline, page: "Timeline", icon: Clock },
    { name: t.nav.locations, page: "Locations", icon: MapPin },
    { name: t.nav.qrCards, page: "QRCards", icon: QrCode },
  ];

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{ background: "var(--app-bg)", color: "var(--app-text)" }}
    >
      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl border-b"
        style={{
          background: isHome && isDark ? "transparent" : "var(--app-bg-nav)",
          borderColor: "var(--app-border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href={createPageUrl("Home")} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(to bottom right, var(--hanes-red), var(--hanes-red-dark))" }}>
                <span className="text-white font-black text-sm">H</span>
              </div>
              <span className="text-xl font-bold tracking-wider">
                <span style={{ color: "var(--hanes-red)" }}>HANES</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.page}
                  href={createPageUrl(item.page)}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                  style={{
                    color: currentPageName === item.page ? "var(--hanes-red)" : "var(--app-text-muted)",
                    background: currentPageName === item.page ? "rgba(200,16,46,0.10)" : "transparent",
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              {/* Language toggle */}
              <button
                onClick={toggleLang}
                className="px-3 py-1.5 rounded-lg text-xs font-bold border transition-all duration-300"
                style={{
                  borderColor: "var(--app-border)",
                  color: lang === "cy" ? "var(--hanes-red)" : "var(--app-text-muted)",
                  background: lang === "cy" ? "rgba(200,16,46,0.08)" : "var(--app-surface)",
                }}
                title={lang === "en" ? t.common.switchToWelsh : t.common.switchToEnglish}
              >
                {lang === "en" ? "CY" : "EN"}
              </button>

              {/* Theme toggle — only rendered after mount to avoid hydration mismatch */}
              {mounted && (
                <button
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                  className="p-2 rounded-lg border transition-all duration-300"
                  style={{ borderColor: "var(--app-border)", background: "var(--app-surface)" }}
                  title={isDark ? t.common.switchToLight : t.common.switchToDark}
                >
                  {isDark ? (
                    <Sun className="w-4 h-4" style={{ color: "var(--hanes-gold)" }} />
                  ) : (
                    <Moon className="w-4 h-4" style={{ color: "var(--app-text-muted)" }} />
                  )}
                </button>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 rounded-lg border transition-all"
                style={{ borderColor: "var(--app-border)", background: "var(--app-surface)" }}
              >
                {menuOpen ? (
                  <X className="w-5 h-5" style={{ color: "var(--app-text)" }} />
                ) : (
                  <Menu className="w-5 h-5" style={{ color: "var(--app-text)" }} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-b"
              style={{ background: "var(--app-bg-nav)", borderColor: "var(--app-border)" }}
            >
              <div className="px-4 py-4 space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.page}
                      href={createPageUrl(item.page)}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300"
                      style={{
                        color: currentPageName === item.page ? "var(--hanes-red)" : "var(--app-text-muted)",
                        background: currentPageName === item.page ? "rgba(200,16,46,0.10)" : "transparent",
                      }}
                    >
                      <Icon className="w-4 h-4" />
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Page content */}
      <main>{children}</main>
    </div>
  );
}
