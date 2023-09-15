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
import { SocialLinks } from './components/social-links';
import { Chat } from './layout/chat';

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
        {disabledLoadingAnimation === 'true' ? <></> : <FirstLoading />}
        <header className={styles.header}>
          <Link href="/">
            <Logo />
          </Link>
          <nav className={styles.globalNav}>
            <ul>
              <li>
                <GlobalNavLink href="/works" title="works">
                  works
                </GlobalNavLink>
              </li>
            </ul>
            <SocialLinks />
          </nav>
        </header>
        <div className={styles.container}>{children}</div>
        <footer className={styles.footer}>
          <div className={styles.copyright}>&copy; Kaori</div>
        </footer>
        <Chat />
        <BackgroundStars />
      </body>
    </html>
  );
}
