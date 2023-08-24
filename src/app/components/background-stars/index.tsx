import { memo } from 'react';
import styles from './index.module.css';

const BackgroundStars = memo(() => {
  return (
    <div className={styles.bgStars}>
      {[...Array(10)].map((_, index) => (
        <div className={styles.star} key={index}>
          ★
        </div>
      ))}
    </div>
  );
});

BackgroundStars.displayName = 'BackgroundStars';

export { BackgroundStars };
