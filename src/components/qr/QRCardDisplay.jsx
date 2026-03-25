import React from "react";
import { motion } from "framer-motion";
import { MapPin, QrCode, Printer, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function QRCardDisplay({ location, index }) {
  const hasCoords = location.latitude && location.longitude;

  // Use qr_code_id as the direct URL if it looks like a URL, otherwise fall back to coords/search
  const mapsUrl = location.qr_code_id?.startsWith("http")
    ? location.qr_code_id
    : hasCoords
    ? `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${location.latitude},${location.longitude}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.name + " Wales")}`;

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(mapsUrl)}&bgcolor=0D0F13&color=D4A843`;

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>HANES Card - ${location.name}</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
            body { margin: 0; padding: 40px; font-family: 'Inter', sans-serif; background: white; display: flex; justify-content: center; }
            .card { width: 350px; border: 2px solid #D4A843; border-radius: 16px; overflow: hidden; }
            .card-header { background: #0D0F13; padding: 20px; text-align: center; color: white; }
            .card-header h1 { font-size: 18px; font-weight: 800; letter-spacing: 3px; color: #D4A843; margin: 0 0 4px 0; }
            .card-header p { font-size: 10px; color: #888; margin: 0; letter-spacing: 2px; text-transform: uppercase; }
            .card-body { padding: 24px; text-align: center; background: white; }
            .card-body h2 { font-size: 16px; margin: 0 0 4px 0; color: #1A1D23; }
            .card-body .era { font-size: 10px; color: #888; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 2px; }
            .card-body img { margin: 0 auto; }
            .card-footer { padding: 12px; text-align: center; font-size: 9px; color: #bbb; border-top: 1px solid #eee; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="card-header">
              <h1>HANES</h1>
              <p>Welsh Heritage AR</p>
            </div>
            <div class="card-body">
              <h2>${location.name}</h2>
              <div class="era">${location.era || "Wales"}</div>
              <img src="${qrUrl}" width="180" height="180" />
            </div>
            <div class="card-footer">
              Scan to navigate to the real location in Wales
              ${hasCoords ? `<br/>${location.latitude.toFixed(4)}° N, ${Math.abs(location.longitude).toFixed(4)}° W` : ""}
              <br/>Pan Wales Hackathon 2026
            </div>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    setTimeout(() => printWindow.print(), 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="group rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#D4A843]/20 overflow-hidden transition-all duration-500"
    >
      {/* Card header */}
      <div className="bg-gradient-to-r from-[#D4A843]/5 to-transparent p-5 border-b border-white/5">
        <div className="flex items-center gap-2">
          <QrCode className="w-4 h-4 text-[#D4A843]" />
          <span className="text-[10px] text-[#D4A843] tracking-[0.2em] uppercase font-medium">
            HANES Card
          </span>
        </div>
      </div>

      {/* QR Code */}
      <div className="p-8 flex flex-col items-center">
        <h3 className="text-lg font-semibold text-white/90 mb-1">{location.name}</h3>
        {location.era && (
          <p className="text-[10px] text-white/30 tracking-widest uppercase mb-6">{location.era}</p>
        )}
        
        <div className="w-48 h-48 rounded-xl overflow-hidden bg-[#0A0C0F] p-3 border border-white/5 mb-6">
          <img
            src={qrUrl}
            alt={`QR code for ${location.name}`}
            className="w-full h-full"
          />
        </div>

        {location.description && (
          <p className="text-xs text-white/30 text-center line-clamp-2 mb-6">{location.description}</p>
        )}

        {hasCoords && (
          <div className="flex items-center gap-1.5 text-[10px] text-white/20 mb-5">
            <MapPin className="w-3 h-3 text-[#D4A843]/40" />
            <span>{location.latitude.toFixed(4)}° N, {Math.abs(location.longitude).toFixed(4)}° W</span>
          </div>
        )}

        <div className="flex gap-2">
          <Button
            onClick={handlePrint}
            variant="outline"
            className="bg-white/5 border-white/10 text-white/60 hover:text-white hover:bg-white/10 text-xs"
          >
            <Printer className="w-3 h-3 mr-2" />
            Print Card
          </Button>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 text-xs transition-all"
          >
            <ExternalLink className="w-3 h-3" />
            Open Map
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-white/5 flex items-center gap-2 text-white/20 text-[10px]">
        <MapPin className="w-3 h-3" />
        <span>Scan QR to navigate to the real location</span>
      </div>
    </motion.div>
  );
}