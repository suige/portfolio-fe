import { FirstLoading } from '@/app/components/first-loading';
import { DISABLED_ANIMATION_COOKIE_NAME } from '@/app/components/first-loading/const';
import './globals.css';
import styles from './layout.module.css';
import type { Metadata } from 'next';
import { Rubik, Wendy_One } from 'next/font/google';
import { BackgroundStars } from '@/app/components/background-stars';
import Link from 'next/link';
import { Logo } from '@/app/components/logo';
import { GlobalNavLink } from '@/app/components/global-nav-link';
import { cookies } from 'next/headers';

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  display: 'swap',
});

const wendy_one = Wendy_One({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-wendy-one',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Kaori's Portfolio",
    template: "%s | Kaori's Portfolio",
  },
  description: 'I am Kaori, Software engineer.',
  openGraph: {
    images: '/img/ogp.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const disabledLoadingAnimation = cookies().get(
    DISABLED_ANIMATION_COOKIE_NAME
  )?.value;

  return (
    <html lang="en" className={`${rubik.variable} ${wendy_one.variable}`}>
      <body className={styles.body}>
        <header className={styles.header}>
          <nav className={styles.globalNav}>
            <Link href="/">
              <Logo />
            </Link>
            <ul>
              <li>
                <GlobalNavLink href="/works" title="works">
                  works
                </GlobalNavLink>
              </li>
              <li>
                <GlobalNavLink href="/contact" title="contact">
                  contact
                </GlobalNavLink>
              </li>
            </ul>
          </nav>
        </header>
        <div className={styles.container}>{children}</div>
        <footer className={styles.footer}>
          <p className={styles.copyright}>&copy; Kaori</p>
        </footer>
        {disabledLoadingAnimation === 'true' ? <></> : <FirstLoading />}
        <BackgroundStars />
      </body>
    </html>
  );
}
