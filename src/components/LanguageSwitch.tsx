import React from 'react';
import { Language } from '../types/language';

interface Props {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export function LanguageSwitch({ currentLang, onLanguageChange }: Props) {
  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => onLanguageChange(currentLang === 'tr' ? 'en' : 'tr')}
        className="flex items-center gap-2 px-4 py-2 bg-blue-950/40 hover:bg-blue-900/40 rounded-full backdrop-blur-sm transition-all text-blue-200"
      >
        🌐
        <span className="uppercase font-medium">{currentLang}</span>
      </button>
    </div>
  );
}