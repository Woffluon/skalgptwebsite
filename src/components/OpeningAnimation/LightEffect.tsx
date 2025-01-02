import React from 'react';

export function LightEffect() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 animate-light-burst">
        <div className="absolute inset-0 bg-[rgb(255,250,240)] opacity-0 animate-light-fade" />
      </div>
    </div>
  );
}