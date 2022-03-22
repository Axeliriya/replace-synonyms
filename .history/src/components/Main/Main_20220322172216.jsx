import styles from './Main.module.css';
import { Section, Input, Textarea, OutputList } from '..';
import { useEffect, useState } from 'react';

export const Main = () => {
  const [word, setWord] = useState('');
  const [synonyms, setSynonyms] = useState('');
  const [text, seText] = useState('');

  const onChange = e => {
    switch (e.target.name) {
      case 'word':
        return setWord(e.target.value);
      case 'synonyms':
        return setSynonyms(e.target.value);
      case 'text':
        return seText(e.target.value);

      default:
        break;
    }
  };

  // useEffect(() => {
  //   const data = {
  //     word,
  //     synonyms: synonyms.split(' '),
  //     text,
  //   };
  // }, [word, synonyms, text]);

  const onSubmit = e => {
    e.preventDefault();

    const data = {
      word: word.replace(/[\s\W\d]/g, ''),
      synonyms: synonyms.replace(/[\S\W\d]/g, '').split(' '),
      text,
    };

    console.log(data);
  };

  return (
    <main className={styles.main}>
      <Section color="white">
        <form className={styles.form} onSubmit={e => onSubmit(e)}>
          <Input name="word" onChange={onChange} />
          <Input name="synonyms" onChange={onChange} />
          <Textarea name="text" onChange={onChange} />
          <button>sdfsdf</button>
        </form>
      </Section>
      <Section color="gray">
        <div>Variants of the modified text</div>
        <OutputList />
      </Section>
    </main>
  );
};
