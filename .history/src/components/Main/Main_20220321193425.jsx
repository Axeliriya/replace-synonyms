import styles from './Main.module.css';
import { Section } from '..';

export const Main = () => {
  return (
    <main className={styles.main}>
      <Section />
      <Section />
    </main>
  );
};
