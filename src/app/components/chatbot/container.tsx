import { Bubble } from './bubble';
import { Options } from './options';
import styles from './container.module.css';
import classNames from 'classnames';
import { Message, TriggerID } from './type';

interface Props {
  messages: Message[];
  setMessage: (trigger: TriggerID) => void;
  selectOption: (value: number) => void;
}

const Container = ({ messages, setMessage, selectOption }: Props) => {
  return (
    <div className={styles.container}>
      {messages.map((m) => {
        if (m.type === 'options') {
          return (
            <div className={styles.user} key={m.id}>
              <Options options={m.options} selectOption={selectOption} />
            </div>
          );
        }
        return (
          <div
            className={classNames(m.user ? styles.user : styles.bot)}
            key={m.id}
          >
            <Bubble message={m} setMessage={setMessage} />
          </div>
        );
      })}
    </div>
  );
};

export { Container };
