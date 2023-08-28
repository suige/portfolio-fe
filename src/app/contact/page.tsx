import { SocialLinks } from '../components/social-links';
import styles from './page.module.css';
import { Steamboat } from './steamboat';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function Contact() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Contact</h1>
      <SocialLinks />
      <div className={styles.imageWrapper}>
        <Steamboat />
      </div>
    </main>
  );
}
