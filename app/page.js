import Image from 'next/image';
import { socials, projects } from '../utils/constants';
import Link from 'next/link';
import NamasteText from '@/components/NamasteText';
import HamburgerMenu from '@/components/HamburgerMenu';
import Arrow from '../public/assets/icons/arrow.png';
import styles from './page.module.css';
import HomeMeta from '@/components/HomeMeta';
import clsx from 'clsx';
import ProjectsGrid from '@/components/ProjectsGrid';
import MagneticLink from '@/components/MagneticLink';
import LiquidEther from '@/components/LiquidEther';

const Home = () => {
  return (
    <>
      <HomeMeta />
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
      >
        <LiquidEther
          colors={['#FF5429', '#FFA200', '#FDE4AF']}
          mouseForce={10}
          cursorSize={45}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.1}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.mobileOnly}>
          <HamburgerMenu />
        </div>

        <div className={styles.leftSection}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
            }}
          >
            <Image
              src='/assets/common/bg.webp'
              height={100}
              width={100}
              alt='face animation'
              className={styles.desktopOnly}
            />
            <div className={styles.introSection}>
              <div className={styles.namasteWrapper}>
                <NamasteText
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

              <h1 className={styles.nameText}>
                I&apos;m{' '}
                <div className={styles.nameWrapper}>
                  <span className={styles.nameHighlight}>Ishvendra</span>

                  <div className={styles.nameTooltip}>
                    <div className={styles.pronunciation}>
                      <p>ish-ven-dra</p>
                    </div>
                    <hr className={styles.separator} />
                    <div className={styles.meaningSection}>
                      <p>
                        <b className={styles.definitionHeading}>
                          Meaning as per pop-hinduism:
                        </b>
                        <br />
                        <span className={styles.definition}>
                          A name combining <i>Īśvara</i> (Lord) and <i>Indra</i>{' '}
                          (King of Gods), meaning &quot;The Divine Ruler.&quot;
                        </span>
                      </p>

                      <p>
                        <b className={styles.definitionHeading}>
                          My Interpretation through vedantic lens:
                        </b>
                        <br />
                        <span className={styles.definition}>
                          To keep one&apos;s understanding (<i>Īśvara</i>) above
                          the sensual impluses (<i>Indr-iyan</i>).
                        </span>
                      </p>
                    </div>
                    {/* <a
                      href='/blog/my-name'
                      target='_blank'
                      rel='noopener noreferrer'
                      className={styles.readMore}
                    >
                      Read more on my blog...
                    </a> */}
                  </div>
                </div>
              </h1>
            </div>
          </div>
          <div className={clsx(styles.desktopOnly, styles.desktopOnlySection)}>
            <div className={styles.descriptionSection}>
              <p className={styles.descriptionText}>
                I&apos;m a software developer, which is mostly a title for
                someone who likes to figure things out.
              </p>
              <p className={styles.descriptionText}>
                I enjoy turning a complicated{' '}
                <span className={styles.errorSquiggle}>
                  <span className={styles.alternatingText}>
                    <span className={styles.right}>m</span>
                    <span className={styles.left}>e</span>
                    <span className={styles.right}>s</span>
                    <span className={styles.left}>s</span>
                  </span>
                </span>{' '}
                into something usable and{' '}
                <span className={styles.aestheticStars}>clean</span>.
              </p>
            </div>

            <p className={styles.ctaText}>
              Let&apos;s build something that&nbsp;
              <span className={styles['highlight-yellow']}>makes sense.</span>
            </p>

            <nav className={styles.socialsNav}>
              {socials.map((item, index) => (
                <MagneticLink
                  href={item.link}
                  key={item.link}
                  index={index}
                  x={-300}
                  customStyle='yellowLinks'
                >
                  {item.name}
                </MagneticLink>
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
                    key={`${project.name}-${index}`}
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
              {/* {projects.map((project, index) => (
                <Tile
                  key={project.name}
                  idx={index}
                  length={projects.length}
                  images={project.images}
                  link={project.link}
                  name={project.name}
                />
              ))} */}
              <ProjectsGrid />
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
