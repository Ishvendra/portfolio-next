'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles/blogList.module.css';

export default function Blob1() {
  return (
    <motion.div
      className={styles.mesh1}
      animate={{
        rotate: [0, 360],
        y: [0, -20, 0, 20, 0],
        filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)'],
      }}
      transition={{
        rotate: { repeat: Infinity, duration: 30, ease: 'linear' },
        rotateX: { repeat: Infinity, duration: 10, ease: 'easeInOut' },
        rotateY: { repeat: Infinity, duration: 25, ease: 'easeInOut' },
        y: { repeat: Infinity, duration: 8, ease: 'easeInOut' },
        filter: { repeat: Infinity, duration: 15, ease: 'linear' },
      }}
    >
      <Image
        fill
        src='/assets/blog/mesh1.png'
        alt='gradient mesh blob'
        style={{ objectFit: 'contain' }}
      />
    </motion.div>
  );
}
