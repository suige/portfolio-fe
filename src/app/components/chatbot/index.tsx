'use client';
import { Header } from './header';
import { Container } from './container';
import styles from './index.module.css';
import { useCallback, useState } from 'react';

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
        setMessages([...messages, steps[trigger]]);
      } else {
        // TODO: End or Error
      }
    },
    [messages, steps]
  );

  return (
    <div className={styles.chatbot}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.container}>
        <Container messages={messages} setMessage={handleSetMessage} />
      </div>
    </div>
  );
};

export { Chatbot };
