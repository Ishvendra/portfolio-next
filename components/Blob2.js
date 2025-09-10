'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles/blogList.module.css';

export default function Blob1() {
  return (
    <motion.div
      className={styles.mesh2}
      animate={{
        rotate: [0, 360],
        y: [0, -20, 0, 20, 0],
        filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)'],
      }}
      transition={{
        rotate: { repeat: Infinity, duration: 60, ease: 'linear' },
        y: { repeat: Infinity, duration: 8, ease: 'easeInOut' },
        filter: { repeat: Infinity, duration: 20, ease: 'linear' },
      }}
    >
      <Image
        fill
        src='/assets/blog/mesh-2.webp'
        alt='gradient mesh blob'
        style={{ objectFit: 'contain' }}
      />
    </motion.div>
  );
}
