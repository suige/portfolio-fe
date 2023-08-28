import GitHub from './icons/github-mark';
import styles from './index.module.css';

const SocialLinks = () => {
  return (
    <ul className={styles.socialLinks}>
      <li className={styles.socialLink}>
        <a
          href="https://github.com/kaorios"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>
      </li>
    </ul>
  );
};

export { SocialLinks };
