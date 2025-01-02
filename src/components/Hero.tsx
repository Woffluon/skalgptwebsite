import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Translations } from '../types/language';
import { BackgroundShapes } from './BackgroundShapes';
import { Stats } from './Stats';
import { playHoverSound } from '../utils/sound';

interface Props {
  t: Translations;
}

export function Hero({ t }: Props) {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-blue-950 to-indigo-950 overflow-hidden animate-gradient section-transition">
      <BackgroundShapes />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center" />
      
      <div className="absolute top-4 left-4">
        <a
          href="https://ciglisezaikarakoc.meb.k12.tr/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-950/40 hover:bg-blue-900/40 rounded-full backdrop-blur-sm transition-all text-blue-200 hover:scale-105"
          onMouseEnter={() => playHoverSound()}
        >
          {t.nav.school}
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="text-center animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="relative animate-float">
              <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-2xl opacity-20"></div>
              <span className="text-6xl relative z-10">🎓</span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 mb-6 animate-gradient">
            {t.hero.title}
          </h1>
          <p className="text-xl sm:text-2xl text-blue-200/80 max-w-4xl mx-auto leading-relaxed mb-12">
            {t.hero.subtitle}
          </p>
          <Stats />
        </div>
      </div>
    </div>
  );
}