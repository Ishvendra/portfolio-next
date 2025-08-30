import Link from 'next/link';
import {
  certifications,
  workExperienceData,
  skillsData,
} from '../../data/about';
import styles from '../../styles/about.module.css';

const WorkEntry = ({ workData }) => {
  return (
    <div className={styles['work-entry']}>
      <div className={styles['work-header']}>
        <div className={styles['company-role']}>
          <span className={styles['role']}>{workData.role}</span>
          <span className={styles['company']}>{workData.company}</span>
        </div>
        <div className={styles['work-dates']}>{workData.dates}</div>
      </div>
      <div className={styles['work-summary']}>{workData.summary}</div>
      <ul className={styles['work-highlights']}>
        {workData.highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className={styles['container-edu']}>
      <div className={styles.header}>
        <div className='wrapper' style={{ marginBottom: 10 }}>
          <div>
            <Link
              href='/'
              aria-label='Home'
              rel='noopener noreferrer'
              className={`${styles.aesthetic} aesthetic-links hover-shadow hover-color hover-font font-color`}
            >
              {['H', 'O', 'M', 'E'].map((char, i) => (
                <span key={i} aria-hidden='true' style={{ color: '#fff' }}>
                  {char}
                </span>
              ))}
            </Link>
          </div>
        </div>
        <div className='wrapper' style={{ marginBottom: 10 }}>
          <div>
            <Link
              href='/project-showcase/01'
              aria-label='Projects'
              rel='noopener noreferrer'
              className={`${styles.aesthetic} aesthetic-links hover-shadow hover-color hover-font font-color`}
            >
              {['P', 'R', 'O', 'J', 'E', 'C', 'T', 'S'].map((char, i) => (
                <span key={i} aria-hidden='true' style={{ color: '#fff' }}>
                  {char}
                </span>
              ))}
            </Link>
          </div>
        </div>
      </div>

      <section className={styles.section}>
        {/* Todo: Try adding h1/h2 for section titles for SEO */}
        <div className={styles['section-title']}>Experience</div>
        <div className={styles.divider}></div>
        <div className={styles['section-content']}>
          {workExperienceData.map((workData, index) => (
            <WorkEntry key={index} workData={workData} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles['section-title']}>Skills</div>
        <div className={styles.divider}></div>
        <div className={styles['section-content']}>
          <div className={styles['skills-container-edu']}>
            <div>
              <div className={styles['skill-category']}>
                <div className={styles['skill-title']}>Languages</div>
                <div className={styles['skill-list']}>
                  {skillsData.languages.join(', ')}
                </div>
              </div>
              <div className={styles['skill-category']}>
                <div className={styles['skill-title']}>Frontend</div>
                <div className={styles['skill-list']}>
                  {skillsData.frontend.join(', ')}
                </div>
              </div>
              <div className={styles['skill-category']}>
                <div className={styles['skill-title']}>Backend</div>
                <div className={styles['skill-list']}>
                  {skillsData.backend.join(', ')}
                </div>
              </div>
            </div>
            <div>
              <div className={styles['skill-category']}>
                <div className={styles['skill-title']}>Cloud & Database</div>
                <div className={styles['skill-list']}>
                  {skillsData.cloud.join(', ')}
                </div>
              </div>
              <div className={styles['skill-category']}>
                <div className={styles['skill-title']}>Tools & DevOps</div>
                <div className={styles['skill-list']}>
                  {skillsData.tools.join(', ')}
                </div>
              </div>
              <div className={styles['skill-category']}>
                <div className={styles['skill-title']}>Other</div>
                <div className={styles['skill-list']}>
                  {skillsData.other.join(', ')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles['section-title']}>Certifications</div>
        <div className={styles.divider}></div>
        <div className={styles['section-content']}>
          {certifications.map((cert, index) => (
            <div key={index} className={styles['cert-item']}>
              <div className={styles['cert-title']}>{cert.title}</div>
              <div className={styles['cert-period']}>{cert.period}</div>
              {cert.validation && (
                <div className={styles['cert-validation']}>
                  Validation: {cert.validation}
                </div>
              )}
              {cert.description && (
                <div className={styles['cert-description']}>
                  {cert.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles['section-title']}>Education</div>
        <div className={styles.divider}></div>
        <div className={styles['section-content']}>
          <div className={styles['edu-item']}>
            <div className={styles['edu-degree']}>
              Bachelor of Technology in Computer Science Engineering
            </div>
            <div className={styles['edu-institution']}>
              SRM Institute of Science and Technology, Chennai
            </div>
            <div className={styles['edu-details']}>
              June 2018 – May 2022 <span className={styles.dot}>•</span>{' '}
              <span className={styles.cgpa}>9.28 CGPA</span>
            </div>
            <div className={styles['edu-achievements']}>
              Vice President at SRM Hackathon{' '}
              <span className={styles.dot}>•</span> Design Head at The Listening
              Space
            </div>
          </div>
          <div className={styles['edu-item']}>
            <div className={styles['edu-degree']}>Secondary Education</div>
            <div className={styles['edu-institution']}>
              Delhi Public School, Sushant Lok, Gurgaon
            </div>
          </div>
        </div>
      </section>
      <div className={styles['blur-overlay']}></div>
      <div className={styles['blur-overlay-2']}></div>
    </div>
  );
};

export default AboutPage;
