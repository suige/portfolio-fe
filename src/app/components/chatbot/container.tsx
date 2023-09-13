import { Bubble } from './bubble';
import { Options } from './options';
import styles from './container.module.css';

interface Props {
  messages: any[]; //TODO
  setMessage: (trigger: string) => void;
}

const Container = ({ messages, setMessage }: Props) => {
  return (
    <div className={styles.container}>
      {messages.map((m, index) => {
        const { options } = m;
        if (options) {
          return (
            <div className={styles.user} key={index}>
              <Options options={options} setMessage={setMessage} />
            </div>
          );
        }
        return (
          <div className={styles.bot} key={index}>
            <Bubble
              text={m.message}
              trigger={m.trigger}
              setMessage={setMessage}
            />
          </div>
        );
      })}
    </div>
  );
};

export { Container };
