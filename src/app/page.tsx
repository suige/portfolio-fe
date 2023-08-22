import classNames from 'classnames';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  const title = 'Hi! I am Kaori, Software Engineer.'.split('');
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        {title.map((t, index) => (
          <span
            key={`${t}${index}`}
            className={classNames({ [styles.space]: t === ' ' })}
          >
            {t}
          </span>
        ))}
      </h1>
      <p className={styles.subTitle}>Animation Lover</p>
      <p>Front-end web developer with 3+ years of experience.</p>
      <p>
        My objective is to produce easy-to-understand interfaces based on users
        behaviors with keen attention to detail.
      </p>
      <p>
        Kaori stays on top of new front-end technology trends because I always
        explore the best ways to improve the client's experience.
      </p>
      <p>
        If you get interested me, please <Link href="/contact">contact me</Link>
        .
      </p>
    </main>
  );
}
