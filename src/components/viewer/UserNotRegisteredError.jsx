'use client';

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function UserNotRegisteredError() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{ background: "var(--app-bg)" }}>
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-medium" style={{ color: "var(--app-text)" }}>{t.common.accessDenied}</h2>
        <p style={{ color: "var(--app-text-muted)" }}>{t.common.notRegistered}</p>
        <button
          onClick={() => (window.location.href = "/")}
          className="px-4 py-2 text-white rounded-lg text-sm transition-colors"
          style={{ background: "var(--hanes-red)" }}
        >
          {t.common.goHome}
        </button>
      </div>
    </div>
  );
}
