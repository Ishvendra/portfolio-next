'use client';

import React, { useState, useEffect, useContext, createContext } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const TileHoverContext = createContext({
  isAnyTileHovered: false,
  setIsAnyTileHovered: () => {},
});

export const TileProvider = ({ children }) => {
  const [isAnyTileHovered, setIsAnyTileHovered] = useState(false);

  return (
    <TileHoverContext.Provider
      value={{ isAnyTileHovered, setIsAnyTileHovered }}
    >
      {children}
    </TileHoverContext.Provider>
  );
};

const Tile = ({ idx, length, images, link }) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const { isAnyTileHovered, setIsAnyTileHovered } =
    useContext(TileHoverContext);

  const index = length - idx - 1;
  const initialY = index * 130;
  const blurAmount = (length - idx - 1) * 1;

  const variants = {
    initial: {
      y: initialY,
      x: index * 80,
      opacity: 1,
      filter: `blur(${blurAmount}px)`,
    },
    hover: {
      y: initialY - 100,
      filter: 'blur(0px)',
      transition: { duration: 0.3 },
    },
    normal: {
      filter: `blur(${blurAmount}px)`,
      transition: { duration: 0.3 },
    },
  };

  useEffect(() => {
    if (!isAnyTileHovered) {
      const hoverSequence = () => {
        const interval = setInterval(() => {
          setTimeout(() => {
            setIsHovered(true);
          }, 100 * (length - idx));

          setTimeout(() => {
            setIsHovered(false);
          }, 200 * (length - idx));
        }, 6000);

        return () => clearInterval(interval);
      };

      const cleanup = hoverSequence();
      return cleanup;
    }
  }, [idx, length, isAnyTileHovered]);

  const handleMouseEnter = () => {
    setIsAnyTileHovered(true);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsAnyTileHovered(false);
    setIsHovered(false);
  };

  const handleClick = () => {
    router.push(link);
  };

  return (
    <motion.div
      key={index}
      onClick={handleClick}
      style={{
        zIndex: 100 - index,
        borderRadius: '8px',
        padding: '16px',
        width: '30%',
        height: '150px',
        cursor: 'pointer',
      }}
      initial='initial'
      animate={isHovered ? 'hover' : 'normal'}
      variants={variants}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
    >
      <img src={isHovered ? images[1] : images[0]} alt='tile' />
    </motion.div>
  );
};

export default Tile;
