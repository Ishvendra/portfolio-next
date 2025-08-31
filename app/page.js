import Image from 'next/image';
import Tile from '../components/Tile';
import { socials, projects } from '../utils/constants';
import Link from 'next/link';
import NamasteText from '@/components/NamasteText';
import HamburgerMenu from '@/components/HamburgerMenu';
import Arrow from '../public/assets/icons/arrow.png';
import styles from './page.module.css';
import HomeMeta from '@/components/HomeMeta';
import clsx from 'clsx';

const Home = () => {
  const texts = ['Namaste 🙏🏼', 'नमस्ते 🙏🏼'];

  return (
    <>
      <HomeMeta />
      <div className={styles.container}>
        <div className={styles.mobileOnly}>
          <HamburgerMenu />
        </div>

        <div className={styles.leftSection}>
          <div className={styles.introSection}>
            <div className={styles.namasteWrapper}>
              <NamasteText
                texts={texts}
                intervalMs={3000}
                style={{
                  color: 'rgb(230, 191, 116)',
                  fontFamily: 'Inconsolata',
                  fontSize: 'var(--namaste-font-size)',
                  fontWeight: 700,
                  width: '100%',
                  textAlign: 'left',
                  whiteSpace: 'nowrap',
                }}
              />
            </div>

            <h1 className={styles.nameText}>I&apos;m Ishvendra</h1>
            <p className={styles.titleText}>a software developer</p>
          </div>

          <div className={clsx(styles.desktopOnly, styles.desktopOnlySection)}>
            <div className={styles.descriptionSection}>
              <p className={styles.descriptionText}>
                From clean, intuitive interfaces to scalable frontend
                architectures, I focus on making the complex feel effortless.
              </p>
              <p className={styles.descriptionText}>
                I like solving problems, questioning defaults, and experimenting
                with new ideas.
              </p>
              <p className={styles.descriptionText}>
                Beyond code, my interests range from the vastness of astronomy
                to the depths of self-knowledge and philosophical inquiry.
              </p>
            </div>

            <p className={styles.ctaText}>
              Let&apos;s build something that&nbsp;
              <span className={styles['highlight-yellow']}>makes sense.</span>
            </p>

            <nav className={styles.socialsNav}>
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
                          {c === ' ' ? '\u00A0' : c}
                        </span>
                      ))}
                    </Link>
                  </div>
                </div>
              ))}
            </nav>

            <p className={styles.locationText}>📍Based in Gurgaon, India</p>
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.mobileOnly}>
            <div className={styles.mobileProjectsSection}>
              <p className={styles.mobileProjectsTitle}>
                and this is what I&apos;ve been upto:
              </p>

              {projects
                .slice()
                .reverse()
                .map((project, index) => (
                  <Link
                    key={project.name}
                    className={styles.projectCard}
                    href={project.link}
                  >
                    <div className={styles.projectName}>{project.name}</div>
                    <p className={styles.projectDescription}>
                      {project.description}
                    </p>
                  </Link>
                ))}

              <div className={styles.mobileFooter}>
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
          </div>

          <div className={styles.desktopOnly}>
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
          </div>
        </div>

        <div className={styles.desktopArrow}>
          <Image
            src={Arrow}
            alt='arrow'
            height={60}
            style={{ marginLeft: 'auto' }}
          />
          <div className={styles.arrowText}>
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
    </>
  );
};

export default Home;
