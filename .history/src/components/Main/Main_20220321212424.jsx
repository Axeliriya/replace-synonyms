import styles from './Main.module.css';
import { Section, Input, Textarea } from '..';

export const Main = () => {
  return (
    <main className={styles.main}>
      <Section color="white">
        <form className={styles.form} action="submit">
          <Input name="Word" />
          <Input name="Synonyms" />
          <Textarea name="Current Text" />
        </form>
      </Section>
      <Section color="gray">
        <div>jhsdbckjsndlcksm</div>
      </Section>
    </main>
  );
};
