"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Cartref" /* Home */ },
  { href: "/challenges", label: "Heriau" /* Challenges */ },
  { href: "/discover", label: "Darganfod" /* Discover */ },
  { href: "/about", label: "Amdanom" /* About */ },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#c8102e] text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl" aria-label="Welsh Dragon">
            🐉
          </span>
          <span className="text-xl font-bold tracking-wide group-hover:text-[#ffd700] transition-colors">
            Hanes
          </span>
          <span className="hidden sm:inline text-xs text-red-200 font-medium ml-1">
            Hanes Cymru
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6 font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-[#ffd700] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/challenges"
          className="hidden md:inline-flex items-center gap-1 bg-[#ffd700] text-[#1a1a2e] font-bold px-4 py-2 rounded-full text-sm hover:bg-yellow-300 transition-colors"
        >
          ⚔️ Chwarae Nawr
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="block w-5 h-0.5 bg-white mb-1" />
          <span className="block w-5 h-0.5 bg-white mb-1" />
          <span className="block w-5 h-0.5 bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#9b0c22] px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3 font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block hover:text-[#ffd700] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/challenges"
                className="inline-flex items-center gap-1 bg-[#ffd700] text-[#1a1a2e] font-bold px-4 py-2 rounded-full text-sm hover:bg-yellow-300 transition-colors mt-2"
                onClick={() => setMenuOpen(false)}
              >
                ⚔️ Chwarae Nawr
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
