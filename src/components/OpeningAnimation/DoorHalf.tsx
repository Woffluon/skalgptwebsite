import React from 'react';

interface DoorHalfProps {
  side: 'left' | 'right';
  embossedLogo?: boolean;
}

export function DoorHalf({ side, embossedLogo }: DoorHalfProps) {
  return (
    <div 
      className={`w-1/2 h-full bg-gradient-to-b from-[#2C3E50] to-[#3498DB] 
        ${side === 'left' ? 'animate-door-left' : 'animate-door-right'}
        relative overflow-hidden`}
    >
      {embossedLogo && (
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="text-8xl transform -rotate-12 select-none">🎓</div>
        </div>
      )}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
}