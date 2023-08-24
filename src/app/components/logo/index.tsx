import { memo } from 'react';
import styles from './index.module.css';
import { Logo as LogoIcon } from './logo';

const Logo = memo(() => {
  return (
    <div className={styles.titleWrap}>
      <div className={styles.logo}>
        <LogoIcon />
      </div>
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
