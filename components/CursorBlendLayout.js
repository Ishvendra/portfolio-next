'use client';

import { useState, useEffect } from 'react';

export default function CursorBlendLayout({ children }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [isMobile]);

  return (
    <>
      {children}

      {!isMobile && (
        <div
          style={{
            position: 'fixed',
            left: mousePosition.x + 'px',
            top: mousePosition.y + 'px',
            transform: 'translate(-50%, -50%)',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'rgb(255,255,255)',
            filter: 'blur(1px)',
            mixBlendMode: 'exclusion',
            pointerEvents: 'none',
            zIndex: 9999,
            transition: 'transform 0.1s ease-out',
          }}
        />
      )}
    </>
  );
}
