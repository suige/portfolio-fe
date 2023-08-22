import { FirstLoading } from '@/app/components/first-loading';
import './globals.css';
import type { Metadata } from 'next';
import { Rubik, Wendy_One } from 'next/font/google';
import { BackgroundStars } from '@/app/components/background-stars';
import Link from 'next/link';
import { Logo } from '@/app/components/logo';
import { GlobalNavLink } from '@/app/components/global-nav-link';

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
  title: 'Kaori Portfolio',
  description: 'I am Kaori, Software engineer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${rubik.variable} ${wendy_one.variable}`}>
      <body>
        <header>
          <nav className="globalNav">
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
        <div className="container">{children}</div>
        <footer>
          <p className="copyright">&copy; Kaori</p>
        </footer>
        <FirstLoading />
        <BackgroundStars />
      </body>
    </html>
  );
}
