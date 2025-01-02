import React from 'react';
import { StatCard } from './StatCard';
import { statsData } from './statsData';

export function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
      {statsData.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <StatCard
            key={index}
            icon={<Icon className={`w-8 h-8 ${index % 2 === 0 ? 'text-blue-400' : 'text-cyan-400'}`} />}
            label={stat.label}
            description={stat.description}
            index={index}
          />
        );
      })}
    </div>
  );
}