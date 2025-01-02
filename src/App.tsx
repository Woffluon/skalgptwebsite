import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { LanguageSwitch } from './components/LanguageSwitch';
import { OpeningAnimation } from './components/OpeningAnimation';
import { Language } from './types/language';
import { tr, en } from './translations';

export default function App() {
  const [lang, setLang] = useState<Language>('tr');
  const t = lang === 'tr' ? tr : en;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-gray-900">
      <OpeningAnimation />
      <LanguageSwitch currentLang={lang} onLanguageChange={setLang} />
      <Hero t={t} />
      <Features t={t} />
    </div>
  );
}