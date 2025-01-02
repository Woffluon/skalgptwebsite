import React, { useEffect, useState } from 'react';

export function OpeningAnimation() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="w-1/2 h-full bg-gray-900 animate-door-left" />
      <div className="w-1/2 h-full bg-gray-900 animate-door-right" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center animate-reveal">
          <div className="text-6xl mb-4">🎓</div>
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 animate-gradient">
            SkalGPT
          </h1>
        </div>
      </div>
    </div>
  );
}