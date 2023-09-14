'use client';
import { Header } from './header';
import { Container } from './container';
import styles from './index.module.css';
import { useCallback, useState, useRef, useEffect } from 'react';
import { Message, Steps, TextStep } from './type';

interface Props {
  initMessages: Message[];
  steps: Steps;
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
      const m = temp.pop();

      if (m?.type !== 'options') return;

      const selectedOption = m.options.find((o: any) => o.value === value);

      if (!selectedOption) return;

      const newTextStep: TextStep = {
        type: 'text',
        id: m.id,
        message: selectedOption.label,
        trigger: selectedOption.trigger,
        user: true,
      };

      setMessages([...temp, newTextStep]);
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

  // ここにボタンで表示をいれるから、ステップの制御は別のコンポーネント作る
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
