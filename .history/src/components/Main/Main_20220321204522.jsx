import styles from './Main.module.css';
import { Section, Input, Textarea } from '..';

export const Main = () => {
  return (
    <main className={styles.main}>
      <Section className={styles.inputSection}>
        <form className={styles.form} action="submit">
          <Input name="Word" />
          <Input name="Sinonyms" />
          <Textarea name="Current Text" />
        </form>
      </Section>
      <Section />
    </main>
  );
};
