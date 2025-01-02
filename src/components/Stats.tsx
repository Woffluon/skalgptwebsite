import React from 'react';
import { Brain, Sparkles, Cpu, MessageSquare, Blocks, Zap } from 'lucide-react';
import { playHoverSound } from '../utils/sound';

export function Stats() {
  const stats = [
    {
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      label: 'Çok Dilli Destek',
      description: '40+ dilde doğal dil işleme ve anlama'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-cyan-400" />,
      label: 'Kod Üretimi',
      description: 'Çoklu programlama dili desteği'
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-400" />,
      label: 'Verimli İşlem',
      description: '9B parametre ile optimize performans'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-cyan-400" />,
      label: 'Bağlamsal Anlama',
      description: 'Gelişmiş metin analizi ve yorumlama'
    },
    {
      icon: <Blocks className="w-8 h-8 text-blue-400" />,
      label: 'Bilgi Entegrasyonu',
      description: 'Kapsamlı veri sentezi ve analizi'
    },
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      label: 'Hızlı Yanıt',
      description: 'Düşük gecikme süreli etkileşim'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="group p-6 rounded-xl bg-black/40 border border-blue-900/20 backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-blue-500/10"
          style={{ animationDelay: `${index * 0.1}s` }}
          onMouseEnter={() => playHoverSound()}
        >
          <div className="flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            {stat.icon}
          </div>
          <div className="text-xl font-bold text-blue-100 mb-2">
            {stat.label}
          </div>
          <div className="text-blue-200/80 text-sm">{stat.description}</div>
        </div>
      ))}
    </div>
  );
}