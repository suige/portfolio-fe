import { useEffect } from 'react';
import styles from './bubble.module.css';
import classNames from 'classnames';

interface Props {
  text: string;
  trigger: string;
  setMessage: (trigger: string) => void;
  user?: boolean;
}

const Bubble = ({ text, trigger, setMessage, user }: Props) => {
  useEffect(() => {
    setTimeout(() => {
      setMessage(trigger);
    }, 1000);
  }, []);

  return (
    <div className={classNames(styles.bubble, user && styles.user)}>{text}</div>
  );
};
export { Bubble };
