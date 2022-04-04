import styles from './Main.module.css';
import { Section, Input, Textarea, OutputList } from '..';
// import { useState } from 'react';

export const Main = () => {
  const onChange = e => {
    console.log([...{ [e.target.name]: e.target.value }]);
  };

  return (
    <main className={styles.main}>
      <Section color="white">
        <form className={styles.form} action="submit">
          <Input name="word" onChange={onChange} />
          <Input name="synonyms" onChange={onChange} />
          <Textarea name="text" onChange={onChange} />
        </form>
      </Section>
      <Section color="gray">
        <div>Variants of the modified text</div>
        <OutputList />
      </Section>
    </main>
  );
};