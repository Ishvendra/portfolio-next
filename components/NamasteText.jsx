// components/NamasteText.jsx
'use client';
import { useEffect, useRef } from 'react';

export default function NamasteText({
  texts = ['Namaste, ', 'नमस्ते, '],
  intervalMs = 2000,
  style = {},
  className = '',
}) {
  const elRef = useRef(null);
  const idxRef = useRef(0);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    el.textContent = texts[0];
    el.style.transition = 'opacity 300ms ease';
    el.style.opacity = '1';

    let cancelled = false;
    const id = setInterval(() => {
      if (cancelled) return;

      // fade out -> change text -> fade in
      el.style.opacity = '0';
      setTimeout(() => {
        if (cancelled) return;
        idxRef.current = (idxRef.current + 1) % texts.length;
        el.textContent = texts[idxRef.current];
        el.style.opacity = '1';
      }, 200);
    }, intervalMs);

    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [texts, intervalMs]);

  return <span ref={elRef} className={className} style={style} />;
}
