import { useCallback } from 'react';
import { Button } from './button';
import styles from './options.module.css';

interface Props {
  options: { label: string; trigger: string }[];
  setMessage: (trigger: string) => void;
}

const Options = ({ options, setMessage }: Props) => {
  const handleClick = useCallback(
    (trigger: string) => {
      setMessage(trigger);
    },
    [setMessage]
  );

  return (
    <div className={styles.options}>
      {options.map((o, index) => (
        <Button
          label={o.label}
          onClick={() => handleClick(o.trigger)}
          key={index}
        />
      ))}
    </div>
  );
};

export { Options };
