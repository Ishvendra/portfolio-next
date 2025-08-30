'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tile, { TileProvider } from '../components/Tile';
import { socials, projects } from '../utils/constants';
import Link from 'next/link';
import Arrow from '../public/assets/icons/arrow.png';

const BODY_TEXT_COLOR = 'rgb(223, 223, 223)';

const Home = () => {
  const texts = ['Namaste, ', 'नमस्ते, '];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 1 : 0));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        width: '100vw',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <div
        style={{
          width: '30%',
          height: 'auto',
          marginRight: 'auto',
          marginTop: 100,
          marginLeft: '2%',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <div
          style={{ height: 30, display: 'flex', alignItems: 'center', gap: 8 }}
        >
          <div style={{ position: 'relative', width: 90, textAlign: 'left' }}>
            <AnimatePresence mode='wait'>
              <motion.span
                key={texts[index]}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className='absolute'
                style={{
                  color: 'rgb(230, 191, 116)',
                  fontFamily: 'Inconsolata',
                  fontSize: 24,
                  fontWeight: 700,
                  width: '100%',
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                }}
              >
                {texts[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          <span
            style={{
              color: '#e6bf74',
              fontFamily: 'nunito, Inconsolata',
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            I’m Ishvendra
          </span>
        </div>

        <div>
          <p
            style={{
              color: BODY_TEXT_COLOR,
              fontFamily: 'nunito, Inconsolata',
              fontWeight: 700,
            }}
          >
            From clean, intuitive interfaces to scalable frontend architectures,
            I focus on making the complex feel effortless.
          </p>
          <p
            style={{
              color: BODY_TEXT_COLOR,
              fontFamily: 'nunito, Inconsolata',
              fontWeight: 700,
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
            }}
          >
            Beyond code, my interests range from the vastness of astronomy to
            the depths of self-knowledge and philosophical inquiry.
          </p>
        </div>

        <p
          style={{
            color: 'rgb(236, 236, 236)',
            fontFamily: 'nunito, Inconsolata',
            fontWeight: 700,
          }}
        >
          Let’s build something that&nbsp;
          <span
            className='highlight-yellow'
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
          }}
        >
          {socials.map((item, index) => (
            <div className='wrapper' key={index}>
              <div className='inner'>
                <Link
                  href={item.link}
                  aria-label={item.name}
                  className='social-media-links hover-shadow hover-color'
                  style={{ height: '20px', lineHeight: '20px' }}
                  prefetch='auto'
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
          }}
        >
          📍Based in Gurgaon, India
        </p>
      </div>
      <TileProvider>
        <div
          style={{
            width: '45%',
            height: '100vh',
            position: 'absolute',
            top: -400,
            right: 150,
          }}
        >
          {projects.map((project, index) => (
            <Tile
              key={project.name}
              idx={index}
              length={projects.length}
              images={project.images}
              link={project.link}
            />
          ))}
        </div>
      </TileProvider>
      <div
        style={{
          position: 'absolute',
          right: 50,
          bottom: '2%',
          width: 200,
          height: 150,
        }}
      >
        <img
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
    </div>
  );
};

export default Home;
