import Image from 'next/image';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <Image src="/img/icon-kaorios.png" width={32} height={32} alt="" />
      <div>Kaori Bot</div>
    </div>
  );
};

export { Header };
