import { memo } from 'react';
import styles from './index.module.css';
import logo from './logo.svg';
import Image from 'next/image';

const Logo = memo(() => {
  return (
    <div className={styles.titleWrap}>
      <Image src={logo} alt="" className={styles.logo} />
      <div className={styles.title}>
        <span>k</span>
        <span>a</span>
        <span>o</span>
        <span>r</span>
        <span>i</span>
      </div>
    </div>
  );
});

export { Logo };
