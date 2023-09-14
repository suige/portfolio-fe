import { Bubble } from './bubble';
import { Options } from './options';
import styles from './container.module.css';
import classNames from 'classnames';

interface Props {
  messages: any[]; //TODO
  setMessage: (trigger: string) => void;
  selectOption: (value: number) => void;
}

const Container = ({ messages, setMessage, selectOption }: Props) => {
  return (
    <div className={styles.container}>
      {messages.map((m, index) => {
        const { options } = m;
        if (options) {
          return (
            <div className={styles.user} key={index}>
              <Options options={options} selectOption={selectOption} />
            </div>
          );
        }
        return (
          <div
            className={classNames(m.user ? styles.user : styles.bot)}
            key={index}
          >
            <Bubble
              text={m.message}
              trigger={m.trigger}
              setMessage={setMessage}
              user={m.user}
            />
          </div>
        );
      })}
    </div>
  );
};

export { Container };
