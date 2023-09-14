'use client';
import { Header } from './header';
import { Container } from './container';
import styles from './index.module.css';
import { useCallback, useState, useRef, useEffect } from 'react';

interface Props {
  initMessages: any[];
  steps: Record<string, any>;
}

const Chatbot = ({ initMessages, steps }: Props) => {
  const [messages, setMessages] = useState(initMessages);

  const handleSetMessage = useCallback(
    (trigger: string) => {
      const next = steps[trigger];
      if (next) {
        setMessages([...messages, next]);
      } else {
        // TODO: End or Error
      }
    },
    [messages, steps]
  );

  const handleCurrentSelectOption = useCallback(
    (value: number) => {
      const temp = [...messages];
      const { id, options } = temp.pop();
      const selectedOption = options.find((o: any) => o.value === value);

      setMessages([
        ...temp,
        {
          id,
          message: selectedOption.label,
          trigger: selectedOption.trigger,
          user: true,
        },
      ]);
      setTimeout(() => {
        handleSetMessage(selectedOption.trigger);
      }, 1000);
    },
    [messages, handleSetMessage]
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top:
          containerRef.current.scrollHeight - containerRef.current.clientHeight,
        behavior: 'smooth',
      });
    }
  }, [messages.length]);

  return (
    <div className={styles.chatbot}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.container} ref={containerRef}>
        <Container
          messages={messages}
          setMessage={handleSetMessage}
          selectOption={handleCurrentSelectOption}
        />
      </div>
    </div>
  );
};

export { Chatbot };
