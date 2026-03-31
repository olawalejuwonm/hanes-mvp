'use client';

import React from "react";

export default function UserNotRegisteredError() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#0D0F13]">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-medium text-white">Access Denied</h2>
        <p className="text-white/50">You are not registered for this application.</p>
        <button
          onClick={() => (window.location.href = "/")}
          className="px-4 py-2 bg-[#C8102E] text-white rounded-lg text-sm hover:bg-[#8B0A1E] transition-colors"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
