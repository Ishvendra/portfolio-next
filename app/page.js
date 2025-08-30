'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Tile from '../components/Tile';
import { TileProvider } from './context/TileProvide';
import { socials, projects } from '../utils/constants';
import Link from 'next/link';
import NamasteText from '@/components/NamasteText';
import Arrow from '../public/assets/icons/arrow.png';
import styles from './page.module.css';

const BODY_TEXT_COLOR = 'rgb(223, 223, 223)';

const HamburgerMenu = ({ isOpen, toggleMenu }) => (
  <>
    <motion.button
      onClick={toggleMenu}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1001,
        background: 'transparent',
        backdropFilter: 'blur(10px)',
        border: 'none',
        borderRadius: '12px',
        padding: '12px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        width: '48px',
        height: '48px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        style={{
          width: '20px',
          height: '2px',
          backgroundColor: '#e6bf74',
          borderRadius: '1px',
        }}
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 6 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        style={{
          width: '20px',
          height: '2px',
          backgroundColor: '#e6bf74',
          borderRadius: '1px',
        }}
        animate={{
          opacity: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        style={{
          width: '20px',
          height: '2px',
          backgroundColor: '#e6bf74',
          borderRadius: '1px',
        }}
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -6 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(5px)',
            zIndex: 999,
          }}
          onClick={toggleMenu}
        />
      )}
    </AnimatePresence>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: '85%',
            maxWidth: '400px',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.45)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRight: 'none',
            zIndex: 1000,
            padding: '80px 30px 30px 30px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <p
                style={{
                  color: BODY_TEXT_COLOR,
                  fontFamily: 'nunito, Inconsolata',
                  fontWeight: 700,
                  fontSize: '14px',
                  lineHeight: '1.5',
                  margin: 0,
                }}
              >
                From clean, intuitive interfaces to scalable frontend
                architectures, I focus on making the complex feel effortless.
              </p>
              <p
                style={{
                  color: BODY_TEXT_COLOR,
                  fontFamily: 'nunito, Inconsolata',
                  fontWeight: 700,
                  fontSize: '14px',
                  lineHeight: '1.5',
                  margin: 0,
                }}
              >
                I like solving problems, questioning defaults, and experimenting
                with new ideas.
              </p>
              <p
                style={{
                  color: BODY_TEXT_COLOR,
                  fontFamily: 'nunito, Inconsolata',
                  fontWeight: 700,
                  fontSize: '14px',
                  lineHeight: '1.5',
                  margin: 0,
                }}
              >
                Beyond code, my interests range from the vastness of astronomy
                to the depths of self-knowledge and philosophical inquiry.
              </p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p
              style={{
                color: 'rgb(236, 236, 236)',
                fontFamily: 'nunito, Inconsolata',
                fontWeight: 700,
                fontSize: '14px',
                margin: 0,
              }}
            >
              Let&apos;s build something that&nbsp;
              <span
                className={styles['highlight-yellow']}
                style={{
                  color: '#e6bf74',
                  fontFamily: 'nunito, Inconsolata',
                  fontWeight: 700,
                }}
              >
                makes sense.
              </span>
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <h3
              style={{
                color: '#e6bf74',
                fontFamily: 'nunito, Inconsolata',
                fontSize: '16px',
                fontWeight: 700,
                margin: 0,
                borderBottom: '2px solid rgba(230, 191, 116, 0.3)',
                paddingBottom: '8px',
              }}
            >
              Connect
            </h3>
            <nav
              style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
            >
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
                        target='_blank'
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

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              marginTop: 'auto',
              paddingTop: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <p
              style={{
                color: BODY_TEXT_COLOR,
                fontFamily: 'nunito, Inconsolata',
                fontWeight: 700,
                fontSize: '14px',
                margin: 0,
              }}
            >
              📍Based in Gurgaon, India
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </>
);

const Home = () => {
  const texts = ['Namaste 🙏🏼', 'नमस्ते 🙏🏼'];
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  console.log('parent');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const containerStyles = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    minHeight: '100vh',
    width: '100vw',
    justifyContent: isMobile ? 'flex-start' : 'center',
    alignItems: isMobile ? 'center' : 'flex-start',
    padding: isMobile ? '20px' : '0',
    overflow: isMobile ? 'auto' : 'visible',
  };

  const leftSectionStyles = {
    width: isMobile ? '100%' : '30%',
    maxWidth: isMobile ? '500px' : 'none',
    height: 'auto',
    marginRight: isMobile ? '0' : 'auto',
    marginTop: isMobile ? '20px' : '40px',
    marginLeft: isMobile ? '0' : '2%',
    marginBottom: isMobile ? '10px' : '0',
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? 0 : 20,
  };

  const rightSectionStyles = {
    width: isMobile ? '100%' : '45%',
    height: isMobile ? 'auto' : '100vh',
    position: isMobile ? 'static' : 'absolute',
    top: isMobile ? 'auto' : -400,
    right: isMobile ? 'auto' : 150,
    maxWidth: isMobile ? '500px' : 'none',
  };

  console.log('parent re-rendered');

  return (
    <div style={containerStyles}>
      {isMobile && <HamburgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />}

      <div style={leftSectionStyles}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              position: 'relative',
              width: isMobile ? 'auto' : 90,
              minHeight: 35,
              maxHeight: 35,
              textAlign: 'left',
              minWidth: isMobile ? '90px' : '90px',
            }}
          >
            <NamasteText
              texts={texts}
              intervalMs={3000}
              style={{
                color: 'rgb(230, 191, 116)',
                fontFamily: 'Inconsolata',
                fontSize: isMobile ? 30 : 24,
                fontWeight: 700,
                width: '100%',
                textAlign: 'center',
                whiteSpace: 'nowrap',
              }}
            />
          </div>

          <p
            style={{
              color: '#e6bf74',
              fontFamily: 'nunito, Inconsolata',
              fontSize: isMobile ? 40 : 24,
              fontWeight: 700,
            }}
          >
            I&apos;m Ishvendra
          </p>
          <p
            style={{
              color: '#e6bf74',
              fontFamily: 'nunito, Inconsolata',
              fontSize: isMobile ? 30 : 20,
              fontWeight: 700,
            }}
          >
            a software developer
          </p>
        </div>

        {/* Desktop content - show all content on desktop */}
        {!isMobile && (
          <>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                textAlign: 'left',
              }}
            >
              <p
                style={{
                  color: BODY_TEXT_COLOR,
                  fontFamily: 'nunito, Inconsolata',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: '1.5',
                }}
              >
                From clean, intuitive interfaces to scalable frontend
                architectures, I focus on making the complex feel effortless.
              </p>
              <p
                style={{
                  color: BODY_TEXT_COLOR,
                  fontFamily: 'nunito, Inconsolata',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: '1.5',
                }}
              >
                I like solving problems, questioning defaults, and experimenting
                with new ideas.
              </p>
              <p
                style={{
                  color: BODY_TEXT_COLOR,
                  fontFamily: 'nunito, Inconsolata',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: '1.5',
                }}
              >
                Beyond code, my interests range from the vastness of astronomy
                to the depths of self-knowledge and philosophical inquiry.
              </p>
            </div>

            <p
              style={{
                color: 'rgb(236, 236, 236)',
                fontFamily: 'nunito, Inconsolata',
                fontWeight: 700,
                fontSize: '16px',
                textAlign: 'left',
              }}
            >
              Let&apos;s build something that&nbsp;
              <span
                className={styles['highlight-yellow']}
                style={{
                  color: '#e6bf74',
                  fontFamily: 'nunito, Inconsolata',
                  fontWeight: 700,
                }}
              >
                makes sense.
              </span>
            </p>

            <nav
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                alignItems: 'flex-start',
              }}
            >
              {socials.map((item, index) => (
                <div className='wrapper' key={index}>
                  <div className='inner'>
                    <Link
                      href={item.link}
                      aria-label={item.name}
                      target={item.link.startsWith('/') ? '_self' : '_blank'}
                      rel={
                        item.link.startsWith('/') ? '' : 'noopener noreferrer'
                      }
                      className='social-media-links hover-shadow hover-color'
                      style={{
                        height: '20px',
                        lineHeight: '20px',
                        fontSize: '16px',
                      }}
                      prefetch={item.link.startsWith('/') ? 'auto' : false}
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
              ))}
            </nav>

            <p
              style={{
                color: BODY_TEXT_COLOR,
                fontFamily: 'nunito, Inconsolata',
                fontWeight: 700,
                marginLeft: -10,
                marginTop: 60,
                fontSize: '16px',
                textAlign: 'left',
              }}
            >
              📍Based in Gurgaon, India
            </p>
          </>
        )}
      </div>

      <div style={rightSectionStyles}>
        {isMobile ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',

              width: '100%',
            }}
          >
            <p
              style={{
                fontFamily: 'nunito, Inconsolata',
                fontSize: 26,
                fontStyle: 'italic',
              }}
            >
              and this is what I&apos;ve been upto:
            </p>

            {projects
              .slice()
              .reverse()
              .map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    padding: '16px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  whileHover={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(230, 191, 116, 0.3)',
                    scale: 1.02,
                  }}
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <div
                    style={{
                      color: 'white',
                      fontSize: 20,
                      fontFamily: 'nunito, Inconsolata',
                      fontWeight: 600,
                      textDecoration: 'underline',
                    }}
                  >
                    {project.name}
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.6)',
                    }}
                  >
                    {project.description}
                  </p>
                </motion.div>
              ))}

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: 6,
                alignItems: 'center',
                width: '100%',
                marginBottom: 100,
              }}
            >
              <button
                style={{
                  border: 'none',
                  background: 'transparent',
                  fontSize: 28,
                  color: '#e6bf74',
                  fontWeight: 900,
                  fontFamily: 'nunito, Inconsolata',
                  textDecoration: 'underline',
                  textAlign: 'left',
                }}
                onClick={toggleMenu}
              >
                More about me...
              </button>
              <Image
                src='/assets/common/animation.webp'
                height={200}
                width={200}
                alt='face animation'
              />
            </div>
            <div className={styles['blur-overlay']}></div>
            <div className={styles['blur-overlay-2']}></div>
          </div>
        ) : (
          <>
            <TileProvider>
              <div style={{ width: '100%', height: '100%' }}>
                {projects.map((project, index) => (
                  <Tile
                    key={project.name}
                    idx={index}
                    length={projects.length}
                    images={project.images}
                    link={project.link}
                    name={project.name}
                  />
                ))}
              </div>
            </TileProvider>
          </>
        )}
      </div>
      {!isMobile && (
        <div
          style={{
            position: 'absolute',
            right: 50,
            bottom: '2%',
            width: 200,
            height: 150,
            zIndex: 9999,
          }}
        >
          <Image
            src={Arrow}
            alt='arrow'
            height={60}
            style={{ marginLeft: 'auto' }}
          />
          <div style={{ color: 'white', fontSize: 20, margin: 0 }}>
            this is what I&apos;ve been
            <div className='wrapper'>
              <div className='inner'>
                <Link
                  href='/project-showcase/01'
                  aria-label='upto'
                  className='social-media-links hover-shadow hover-color'
                  style={{ height: '30px', lineHeight: '30px' }}
                  prefetch='auto'
                >
                  {[...'upto...'].map((c, i) => (
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
