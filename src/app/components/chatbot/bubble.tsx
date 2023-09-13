import { useEffect } from 'react';
import styles from './bubble.module.css';

interface Props {
  text: string;
  trigger: string;
  setMessage: (trigger: string) => void;
}

const Bubble = ({ text, trigger, setMessage }: Props) => {
  useEffect(() => {
    setTimeout(() => {
      setMessage(trigger);
    }, 1000);
  }, []);

  return <div className={styles.bubble}>{text}</div>;
};
export { Bubble };
