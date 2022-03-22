import styles from './Main.module.css';
import { Section, Input, Textarea } from '..';

export const Main = () => {
  return (
    <main className={styles.main}>
      <Section>
        <Input type="text" />
        <Input type="text" />
        <Textarea type="textarea" />
      </Section>
      <Section />
    </main>
  );
};
