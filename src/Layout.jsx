import React from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Welsh Icons", path: "/icons" },
  { label: "Locations", path: "/locations" },
  { label: "Timeline", path: "/timeline" },
  { label: "QR Cards", path: "/qr-cards" },
];

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#0D0F13] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0D0F13]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <Link to="/" className="text-[#D4A843] font-black text-xl tracking-wider">
            HANES
          </Link>
          <div className="hidden sm:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  location.pathname === link.path
                    ? "text-[#D4A843] bg-[#D4A843]/10"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Page content */}
      <main>{children}</main>
    </div>
  );
}
