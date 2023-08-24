import styles from './page.module.css';
import { Steamboat } from './steamboat';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function Contact() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Contact Me</h1>
      <p>If you want to ask something or just say hello, please message me.</p>
      <a href="mailto:suigetsukaori@gmail.com" className={styles.email}>
        suigetsukaori@gmail.com
      </a>
      <div className={styles.imageWrapper}>
        <Steamboat />
      </div>
    </main>
  );
}
