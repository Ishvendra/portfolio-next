'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import styles from '../app/page.module.css';
import { socials } from '@/utils/constants';

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <motion.button
        onClick={toggleMenu}
        className={styles.hamburgerButton}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className={styles.hamburgerLine}
          animate={{
            rotate: open ? 45 : 0,
            y: open ? 6 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className={styles.hamburgerLine}
          animate={{
            opacity: open ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className={styles.hamburgerLine}
          animate={{
            rotate: open ? -45 : 0,
            y: open ? -6 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.menuOverlay}
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={styles.menuPanel}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={styles.menuContent}
            >
              <div className={styles.menuTextSection}>
                <p className={styles.menuText}>
                  From clean, intuitive interfaces to scalable frontend
                  architectures, I focus on making the complex feel effortless.
                </p>
                <p className={styles.menuText}>
                  I like solving problems, questioning defaults, and
                  experimenting with new ideas.
                </p>
                <p className={styles.menuText}>
                  Beyond code, my interests range from the vastness of astronomy
                  to the depths of self-knowledge and philosophical inquiry.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className={styles.menuCTA}>
                Let&apos;s build something that&nbsp;
                <span className={styles['highlight-yellow']}>makes sense.</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={styles.menuSocials}
            >
              <h3 className={styles.menuSocialsTitle}>Connect</h3>
              <nav className={styles.menuSocialsNav}>
                {socials.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className='wrapper'>
                      <div className='inner'>
                        <Link
                          href={item.link}
                          target={
                            item.link.startsWith('/') ? '_self' : '_blank'
                          }
                          rel={
                            item.link.startsWith('/')
                              ? ''
                              : 'noopener noreferrer'
                          }
                          aria-label={item.name}
                          className='social-media-links hover-shadow hover-color'
                          style={{
                            height: '20px',
                            lineHeight: '20px',
                            fontSize: '14px',
                            display: 'block',
                            transition: 'all 0.3s ease',
                          }}
                          prefetch='auto'
                          onClick={toggleMenu}
                        >
                          {[...item.name].map((c, i) => (
                            <span
                              key={i}
                              aria-hidden='true'
                              style={{ display: 'inline-block' }}
                            >
                              {c}
                            </span>
                          ))}
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </nav>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className={styles.menuLocation}
            >
              <p className={styles.menuLocationText}>
                📍Based in Gurgaon, India
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
