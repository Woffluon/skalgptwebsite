import React from 'react';
import { Translations } from '../types/language';

const emojis = ['🧠', '💬', '⚡', '🔒', '💻', '✨'];

interface Props {
  t: Translations;
}

export function Features({ t }: Props) {
  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400">
            {t.features.title}
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            {t.features.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.items.map((feature, index) => (
            <div
              key={index}
              className="feature-card p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-blue-950 border border-blue-900/30 hover:border-blue-700/40 hover:shadow-2xl hover:shadow-blue-900/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-6 transform transition-transform group-hover:scale-110">
                {emojis[index]}
              </div>
              <h3 className="text-xl font-semibold text-blue-100 mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}