import MagneticLink from './MagneticLink';
import { socialLinks } from '@/utils/constants';
import styles from '../styles/blogList.module.css';

const BlogNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <MagneticLink href='/'>Home</MagneticLink>
      <div className={styles.rightNavItems}>
        <MagneticLink href='/project-showcase/01'>Projects</MagneticLink>
        <MagneticLink href={socialLinks.github}>Github</MagneticLink>
        <MagneticLink href={socialLinks.linkedIn}>LinkedIn</MagneticLink>
        <MagneticLink href='/about'>Bio</MagneticLink>
      </div>
    </nav>
  );
};

export default BlogNavbar;
