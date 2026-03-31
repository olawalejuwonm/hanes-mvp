'use client';

import React, { createContext, useContext, useState } from 'react';
import translations from '@/i18n/translations';

const LanguageContext = createContext({
  lang: 'en',
  t: translations.en,
  toggleLang: () => {},
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'cy' : 'en'));

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
