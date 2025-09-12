'use client';

import { useEffect, useState } from 'react';
import MagneticLink from './MagneticLink';
import { socialLinks } from '@/utils/constants';
import styles from '../styles/navbar.module.css';
import GithubIcon from './icons/GithubIcon';
import LinkedInIcon from './icons/linkedInIcon';

const LayoutNavbar = ({ pathname }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${
        pathname?.startsWith('/blog') ? styles.darkFont : ''
      }${
        pathname?.startsWith('/project-showcase') ? styles.blurBackground : ''
      }`}
    >
      <div className={styles.leftNavItems}>
        <MagneticLink href='/' index={0} y={-200}>
          Home
        </MagneticLink>
      </div>

      <div className={styles.rightNavItems}>
        <MagneticLink
          href='/project-showcase/01'
          className={
            pathname?.startsWith('/project-showcase') ? styles.underlineSvg : ''
          }
          index={2}
          y={-200}
        >
          Projects
        </MagneticLink>
        <MagneticLink
          href='/blog'
          index={1}
          y={-200}
          className={pathname === '/blog' ? styles.underlineSvgBlack : ''}
        >
          Blog
        </MagneticLink>
        <MagneticLink
          href='/about'
          index={5}
          y={-200}
          className={pathname === '/about' ? styles.underlineSvg : ''}
        >
          About
        </MagneticLink>

        <MagneticLink href={socialLinks.resume} index={1} y={-200}>
          Resume
        </MagneticLink>
        <span className={styles.iconLinks}>
          <MagneticLink href={socialLinks.linkedIn} index={4} y={-200}>
            <LinkedInIcon />
          </MagneticLink>
          <MagneticLink href={socialLinks.github} index={3} y={-200}>
            <GithubIcon />
          </MagneticLink>
        </span>
      </div>
    </nav>
  );
};

export default LayoutNavbar;
