import { memo, useEffect, useState } from 'react';
import styles from './index.module.css';
import Logo from './logo';

const FirstLoading = memo(() => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5500);
  }, []);

  if (!isLoading) {
    return <></>;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.border}>
        <p>Welcome to my website</p>
      </div>
      <div className={styles.rabbit}>
        <Logo />
      </div>
      <div className={styles.wall1}></div>
      <div className={styles.wall2}></div>
      <div className={styles.wall3}></div>
    </div>
  );
});

export { FirstLoading };
