'use client';

import React, { createContext, useContext, useState } from 'react';
import translations from '@/i18n/translations';

const LanguageContext = createContext({
  lang: 'cy',
  t: translations.cy,
  toggleLang: () => {},
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'cy';
    return localStorage.getItem('hanes-lang') || 'cy';
  });

  const toggleLang = () =>
    setLang((prev) => {
      const next = prev === 'en' ? 'cy' : 'en';
      localStorage.setItem('hanes-lang', next);
      return next;
    });

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
