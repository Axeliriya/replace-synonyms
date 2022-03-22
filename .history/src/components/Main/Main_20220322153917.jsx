import styles from './Main.module.css';
import { Section, Input, Textarea, OutputList } from '..';
import { useState } from 'react';

export const Main = () => {
  const [text, seText] = useState('');

  const onChange = e => {
    console.log(e.target.name);
  };

  return (
    <main className={styles.main}>
      <Section color="white">
        <form className={styles.form} action="submit">
          <Input name="Word" onChange={onChange} />
          <Input name="Synonyms" onChange={onChange} />
          <Textarea name="Current Text" onChange={onChange} />
        </form>
      </Section>
      <Section color="gray">
        <div>jhsdbckjsndlcksm</div>
        <OutputList />
      </Section>
    </main>
  );
};
