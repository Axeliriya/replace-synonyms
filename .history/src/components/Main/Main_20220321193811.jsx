import styles from './Main.module.css';
import { Section, Input } from '..';

export const Main = () => {
  return (
    <main className={styles.main}>
      <Section>
        <Input type="text" />
        <Input type="text" />
        <Input type="textarea" />
      </Section>
      <Section />
    </main>
  );
};
