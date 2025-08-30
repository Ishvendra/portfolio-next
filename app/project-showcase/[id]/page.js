'use client';

import { useEffect, useState, useRef, use } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import projects from '../../../data/projects';
import { projectFooter } from '../../../utils/constants';
import ProjectCarousel from '../../../components/ProjectCarousel';
import styles from '../../../styles/project.module.css';
import clsx from 'clsx';
import NotFound from '@/app/not-found';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectShowcasePage = ({ params }) => {
  const { id } = use(params);
  const projectIndex = projects.findIndex((p) => p.id === id);

  if (projectIndex === -1) {
    NotFound();
  }

  const router = useRouter();

  const [isVisible, setIsVisible] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const overviewRef = useRef(null);
  const featuresRef = useRef(null);
  const solutionsRef = useRef(null);

  const project = projects[projectIndex];
  const images = project.images;
  const prevProject = projects[projectIndex - 1] || null;
  const nextProject = projects[projectIndex + 1] || null;

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [id]);

  useEffect(() => {
    const containers = [
      overviewRef.current,
      featuresRef.current,
      solutionsRef.current,
    ];

    const handleScroll = (container) => {
      if (!container) return;
      const onScroll = () => {
        if (
          container.scrollHeight - container.scrollTop <=
          container.clientHeight + 1
        ) {
          container.classList.add(styles['no-mask']);
        } else {
          container.classList.remove(styles['no-mask']);
        }
      };
      container.addEventListener('scroll', onScroll);
      onScroll();
      return () => container.removeEventListener('scroll', onScroll);
    };

    const cleanups = containers.map((c) => handleScroll(c));
    return () => cleanups.forEach((fn) => fn && fn());
  }, [id]);

  useEffect(() => {
    let isMounted = true;

    const cycleHint = () => {
      if (!isMounted) return;
      setShowHint(true);
      setTimeout(() => {
        if (!isMounted) return;
        setShowHint(false);
      }, 5000);
      setTimeout(cycleHint, 15000);
    };

    const timer = setTimeout(cycleHint, 10000);
    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <p
          className={clsx(
            styles['project-title'],
            styles.aesthetic,
            styles['font-size-title'],
            styles.reveal
          )}
        >
          {projectIndex + 1}. {project.title}
        </p>
        <p className={clsx(styles['aesthetic'], styles['project-date'])}>
          {project.date}
        </p>
      </header>

      <div className={styles['content-body']}>
        <nav
          className={clsx(
            styles.nav,
            styles['nav-left'],
            !prevProject && styles['disabled-nav']
          )}
          onClick={() =>
            prevProject && router.push(`/project-showcase/${prevProject.id}`)
          }
        >
          <p
            className={clsx(
              styles['aesthetic'],
              styles['rotated-text'],
              styles['font-size-title'],
              !prevProject && styles['disabled-btn']
            )}
          >
            PREVIOUS
          </p>
        </nav>
        <div className={styles['content-container']}>
          <div className={styles['content-left']}>
            <div className={styles['overview-container']} ref={overviewRef}>
              <h2 className={clsx(styles.color, styles['font-size-title'])}>
                Overview
              </h2>
              <AnimatePresence>
                {isVisible && (
                  <motion.div
                    key='overview'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {project.overview}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className={clsx(styles['screenshot-container'])}>
              <ProjectCarousel images={images} />
            </div>
          </div>

          <div className={styles['content-right']}>
            <div className={styles['features-container']} ref={featuresRef}>
              <AnimatePresence>
                {isVisible && (
                  <motion.div
                    key='features'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      paddingLeft: 10,
                    }}
                  >
                    {project.sections}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className={styles['tech-stack-container']}>
              {project.techStack.map((icon) => (
                <div className={styles['tech-icon']} key={icon.alt}>
                  <Image src={icon.src} alt={icon.alt} loading='lazy' />
                  <span
                    className={clsx(
                      styles['icon-tooltip'],
                      styles['aesthetic'],
                      styles['glow-text']
                    )}
                  >
                    {icon.alt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <nav
          className={clsx(
            styles.nav,
            styles['nav-right'],
            !nextProject && styles['disabled-nav']
          )}
          onClick={() =>
            nextProject && router.push(`/project-showcase/${nextProject.id}`)
          }
        >
          <p
            className={clsx(
              styles['aesthetic'],
              styles['rotated-text-right'],
              styles['font-size-title'],
              !nextProject && styles['disabled-btn']
            )}
          >
            NEXT
          </p>
        </nav>
      </div>

      <footer className={styles.footer}>
        {projectFooter.map((item, index) => (
          <div className={styles.wrapper} key={index}>
            <Link
              href={item.link}
              rel='noopener noreferrer'
              aria-label={item.name}
              className={clsx(
                styles['aesthetic'],
                styles['aesthetic-links'],
                styles['hover-shadow'],
                styles['hover-color'],
                styles['hover-font'],
                styles['font-color']
              )}
            >
              {[...item.name].map((char, i) => (
                <span
                  key={i}
                  className={styles['font-size-title']}
                  aria-hidden='true'
                >
                  {char}
                </span>
              ))}
            </Link>
          </div>
        ))}
      </footer>
    </div>
  );
};

export default ProjectShowcasePage;
