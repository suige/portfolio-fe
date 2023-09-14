'use client';

import { ChatIcon } from '@/app/components/icons';
import { steps } from './chat-steps';
import styles from './index.module.css';
import { Chatbot } from '@/app/components/chatbot';
import { useCallback, useState } from 'react';
import classNames from 'classnames';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className={styles.chat}>
      <button
        className={classNames(styles.chatButton, isOpen && styles.hidden)}
        onClick={handleClick}
      >
        <ChatIcon />
      </button>
      <Chatbot
        initMessages={[steps['1']]}
        steps={steps}
        isActive={isOpen}
        onClose={handleClose}
      />
    </div>
  );
};

export { Chat };
