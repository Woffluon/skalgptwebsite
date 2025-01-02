import React, { useEffect, useState } from 'react';
import { DoorHalf } from './DoorHalf';
import { LightEffect } from './LightEffect';
import { Logo } from './Logo';

export function OpeningAnimation() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000); // Total animation duration
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 animate-content-fade">
      <div className="relative w-full h-full">
        <DoorHalf side="left" embossedLogo />
        <DoorHalf side="right" />
        <LightEffect />
        <Logo />
      </div>
    </div>
  );
}