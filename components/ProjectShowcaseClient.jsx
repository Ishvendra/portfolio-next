'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { projectFooter } from '@/utils/constants';
import ProjectCarousel from './ProjectCarousel';
import clsx from 'clsx';
import NotFound from '@/app/not-found';
import styles from '../styles/project.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectShowcaseClient = ({ project }) => {
  const [isVisible, setIsVisible] = useState(false);
  const overviewRef = useRef(null);
  const featuresRef = useRef(null);
  const solutionsRef = useRef(null);

  const router = useRouter();

  const projectIndex = project.index;
  const images = project.images;
  const prevProject = project.prev;
  const nextProject = project.next;

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [project.id]);

  useEffect(() => {
    const containers = [
      overviewRef.current,
      featuresRef.current,
      solutionsRef.current,
    ];

    const handleScroll = (container) => {
      if (!container) return;

      const checkScrollState = () => {
        if (
          container.scrollHeight - container.scrollTop <=
          container.clientHeight + 1
        ) {
          container.classList.add(styles['no-mask']);
        } else {
          container.classList.remove(styles['no-mask']);
        }
      };

      container.addEventListener('scroll', checkScrollState);

      const resizeObserver = new ResizeObserver(() => {
        checkScrollState();
      });

      resizeObserver.observe(container);

      checkScrollState();

      return () => {
        container.removeEventListener('scroll', checkScrollState);
        resizeObserver.disconnect();
      };
    };

    const cleanups = containers.map((c) => handleScroll(c));
    return () => cleanups.forEach((fn) => fn && fn());
  }, [project.id, isVisible]);
  if (projectIndex === -1) {
    return <NotFound />;
  }

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
          <Link
            disabled={!prevProject}
            href={prevProject ? `/project-showcase/${prevProject.id}` : '#'}
            className={clsx(
              styles['aesthetic'],
              styles['rotated-text'],
              styles['font-size-title'],
              !prevProject && styles['disabled-btn']
            )}
          >
            PREVIOUS
          </Link>
        </nav>
        <div className={styles['content-container']}>
          <div className={styles['content-left']}>
            <div className={styles['overview-container']} ref={overviewRef}>
              <h2
                className={clsx(styles.sectionTitle, styles.firstSectionTitle)}
              >
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
                  <Image
                    className={styles.techImages}
                    src={icon.src}
                    alt={icon.alt}
                    loading='lazy'
                  />
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
          <Link
            disabled={!nextProject}
            href={nextProject ? `/project-showcase/${nextProject.id}` : '#'}
            className={clsx(
              styles['aesthetic'],
              styles['rotated-text-right'],
              styles['font-size-title'],
              !nextProject && styles['disabled-btn']
            )}
          >
            Next
          </Link>
        </nav>
      </div>

      <footer className={styles.footer}>
        <div className={styles['desktop-footer-links']}>
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
                    aria-hidden='true'
                    className={styles['bottom-link-chars']}
                  >
                    {char}
                  </span>
                ))}
              </Link>
            </div>
          ))}
        </div>
        <div className={styles['mobile-nav-footer']}>
          <Link href='/' className={styles['mobile-nav-btn']}>
            Home
          </Link>

          <Link href='/about' className={styles['mobile-nav-btn']}>
            Bio
          </Link>

          <Link
            disabled={!prevProject}
            href={prevProject ? `/project-showcase/${prevProject.id}` : '#'}
            className={clsx(styles['mobile-nav-btn'], {
              [styles.linkDisabled]: !prevProject,
            })}
          >
            Prev
          </Link>

          <Link
            disabled={!nextProject}
            href={nextProject ? `/project-showcase/${nextProject.id}` : '#'}
            className={clsx(styles['mobile-nav-btn'], {
              [styles.linkDisabled]: !nextProject,
            })}
          >
            Next
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default ProjectShowcaseClient;
