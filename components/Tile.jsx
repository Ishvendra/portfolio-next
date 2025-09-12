'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const Tile = ({ idx, length, images, link, name }) => {
  const router = useRouter();
  const index = length - idx - 1;

  const handleClick = () => {
    router.push(link);
  };

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const clamp01 = (n) => Math.max(0, Math.min(1, n));
  const t = clamp01((windowWidth - 768) / (1200 - 768));

  const scaleY = windowWidth < 1000 ? 1 + t * 0.5 : 0.6 + t * 0.5;

  const clamp = (n, min = 0, max = 1) => Math.max(min, Math.min(max, n));
  const gapX = 50 + clamp((windowWidth - 500) / (1500 - 500)) * 40;
  const xPos = index * gapX;

  const yPos = index * 100 * scaleY;

  const variants = {
    initial: {
      y: yPos,
      x: xPos,
      opacity: 1,
    },
    normal: {
      y: yPos,
      x: xPos,
    },
    hover: {
      y: yPos - 100,
      x: xPos,
    },
  };

  const baseWidth = 358;
  const baseHeight = 435;
  const aspectRatio = baseHeight / baseWidth;

  return (
    <motion.div
      key={`tile-${idx}`}
      onClick={handleClick}
      style={{
        zIndex: 100 - index,
        borderRadius: '8px',
        padding: '16px',
        width: '30%',
        height: '150px',
        cursor: 'pointer',
        willChange: 'transform, opacity',
        position: 'relative',
        top: windowWidth < 1000 ? 1000 - windowWidth : 0,
      }}
      variants={variants}
      initial='initial'
      animate='normal'
      whileHover='hover'
      transition={{
        type: 'spring',
        stiffness: 250,
        damping: 10,
      }}
    >
      <motion.img
        src={images[0]}
        alt={`${name} tile`}
        style={{
          width: windowWidth < 1200 ? windowWidth * 0.3 : 358,
          height: windowWidth < 1200 ? windowWidth * 0.3 * aspectRatio : 435,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        variants={{
          normal: { opacity: 1, zIndex: 2 },
          hover: { opacity: 1, zIndex: 0 },
        }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
      />

      <motion.img
        src={images[1]}
        alt={`${name} tile hover`}
        style={{
          position: 'absolute',
          width: windowWidth < 1200 ? windowWidth * 0.3 : 358,
          height: windowWidth < 1200 ? windowWidth * 0.3 * aspectRatio : 435,
          top: 0,
          left: 0,
        }}
        variants={{
          normal: { opacity: 0, zIndex: 0 },
          hover: { opacity: 1, zIndex: 2 },
        }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        fetchPriority='high'
      />
    </motion.div>
  );
};

export default Tile;
