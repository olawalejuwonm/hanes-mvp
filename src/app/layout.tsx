import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hanes – Hanes Cymru | Gamified Welsh History",
  description:
    "Hanes is a gamified exploration of Welsh history, language, and culture. Use augmented reality to digitally resurrect forgotten and ruined elements of Cymru's past.",
  keywords: [
    "Wales",
    "Welsh history",
    "Cymru",
    "gamified history",
    "augmented reality",
    "AR",
    "Welsh culture",
    "Hanes",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cy"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-white text-[#1a1a2e]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
