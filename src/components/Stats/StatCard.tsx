import React from 'react';
import { LucideIcon } from 'lucide-react';
import { playHoverSound } from '../../utils/sound';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  description: string;
  index: number;
}

export function StatCard({ icon, label, description, index }: StatCardProps) {
  return (
    <div
      className="group p-6 rounded-xl bg-black/40 border border-blue-900/20 backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-blue-500/10"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => playHoverSound()}
    >
      <div className="flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="text-xl font-bold text-blue-100 mb-2">
        {label}
      </div>
      <div className="text-blue-200/80 text-sm">{description}</div>
    </div>
  );
}