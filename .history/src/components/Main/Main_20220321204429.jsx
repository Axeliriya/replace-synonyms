import styles from './Main.module.css';
import { Section, Input, Textarea } from '..';

export const Main = () => {
  return (
    <main className={styles.main}>
      <Section className={styles.inputSection}>
        <form action="submit"></form>
        <Input name="Word" />
        <Input name="Sinonyms" />
        <Textarea name="Current Text" />
      </Section>
      <Section />
    </main>
  );
};
