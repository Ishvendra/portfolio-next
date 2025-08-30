'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/404.module.css';
import Link from 'next/link';

export default function NotFound() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorRotation, setCursorRotation] = useState(0);
  const [showCursor, setShowCursor] = useState(false);
  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  const calculateRotate = (cursorX, cursorY, buttonElement) => {
    if (!buttonElement) return 0;

    const buttonRect = buttonElement.getBoundingClientRect();
    const buttonCenter = {
      x: buttonRect.left + buttonRect.width / 2,
      y: buttonRect.top + buttonRect.height / 2,
    };

    const radians = Math.atan2(
      buttonCenter.x - cursorX,
      buttonCenter.y - cursorY
    );
    const degree = radians * (180 / Math.PI) * -1 + 180;
    return degree;
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const isOverContainer = containerRef.current?.contains(e.target);
      setShowCursor(isOverContainer);

      setCursorPosition({
        x: e.pageX,
        y: e.pageY,
      });

      const rotation = calculateRotate(e.pageX, e.pageY, buttonRef.current);
      setCursorRotation(rotation + 20);
    };

    const handleMouseLeave = () => {
      setShowCursor(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    containerRef.current?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      containerRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        minHeight: '100vh',
        fontFamily: 'Roboto, Arial, sans-serif',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'none',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'fixed',
          left: '-8px',
          top: '-6px',
          pointerEvents: 'none',
          userSelect: 'none',
          display: showCursor ? 'block' : 'none',
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
          filter: 'drop-shadow(0 1px 1px rgba(0, 0, 0, 0.4))',
          zIndex: 9999,
        }}
      >
        <svg
          version='1.1'
          viewBox='0 0 28 28'
          style={{
            display: 'block',
            width: '28px',
            height: '28px',
            transform: `rotate(${cursorRotation}deg)`,
          }}
        >
          <polygon
            fill='#ee6219'
            points='8.2,20.9 8.2,4.9 19.8,16.5 13,16.5 12.6,16.6'
          />
          <polygon fill='#ee6219' points='17.3,21.6 13.7,23.1 9,12 12.7,10.5' />
          <rect
            x='12.5'
            y='13.6'
            transform='matrix(0.9221 -0.3871 0.3871 0.9221 -5.7605 6.5909)'
            width='2'
            height='8'
            fill='#ee6219'
          />
          <polygon
            fill='#ee6219'
            points='9.2,7.3 9.2,18.5 12.2,15.6 12.6,15.5 17.4,15.5'
          />
        </svg>
      </div>
      <div
        className={`${styles.talkBubble} ${styles.triRight}  ${styles.leftIn} ${styles.round}`}
      >
        <div className={styles.talkText}>
          <p
            style={{
              fontSize: 32,
              lineHeight: 1.2,
            }}
          >
            This path is broken… grab on, I’ll take you{' '}
            <Link
              ref={buttonRef}
              href='/'
              style={{
                cursor: 'none',
              }}
            >
              Home.
            </Link>
          </p>
        </div>
      </div>
      <Image
        fill
        src='/assets/common/404.webp'
        alt='404 image'
        style={{
          objectFit: 'cover',
          objectPosition: 'top',
          zIndex: -2,
        }}
      />
    </div>
  );
}
