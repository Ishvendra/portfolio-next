'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/magneticLink.module.css';

const MagneticLink = ({ children, href, className = '', magneticStrength }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const getTextLength = () => {
    if (typeof children === 'string') {
      return children.length;
    }
    return String(children).length;
  };

  const dynamicMagneticStrength =
    magneticStrength || (getTextLength() < 10 ? 0.8 : 0.4);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    const x = deltaX * dynamicMagneticStrength;
    const y = deltaY * dynamicMagneticStrength;

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
    }
  }, [position]);

  return (
    <Link
      ref={ref}
      href={href}
      prefetch={href?.startsWith('/')}
      className={`${styles.magneticLink} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      target={href?.startsWith('/') ? '_self' : '_blank'}
    >
      {children}
    </Link>
  );
};

export default MagneticLink;
