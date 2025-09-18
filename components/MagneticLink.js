'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles/magneticLink.module.css';

const MagneticLink = ({
  children,
  href,
  customStyle = '',
  magneticStrength,
  index,
  x = 0,
  y = 0,
}) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  console.log('customStyle', customStyle);
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
    <motion.div
      initial={{ opacity: 0, y: y, x: x }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ delay: 0 + index * 0.1 }}
    >
      <Link
        ref={ref}
        href={href}
        prefetch={href?.startsWith('/')}
        className={`${styles.magneticLink} ${styles[customStyle]}`}
        onMouseMove={isMobile ? undefined : handleMouseMove}
        onMouseLeave={isMobile ? undefined : handleMouseLeave}
        target={href?.startsWith('/') ? '_self' : '_blank'}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default MagneticLink;
