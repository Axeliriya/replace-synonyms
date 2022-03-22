import styles from './Main.module.css';
import { Section, Input, Textarea, OutputList } from '..';
import { useEffect, useState } from 'react';

export const Main = () => {
  const [word, setWord] = useState('');
  const [synonyms, setSynonyms] = useState([]);
  const [text, seText] = useState('');

  const onChange = e => {
    switch (e.target.name) {
      case 'word':
        return setWord(e.target.value);
      case 'synonyms':
        return setSynonyms(synonyms.push[e.target.value]);
      case 'text':
        return seText(e.target.value);

      default:
        break;
    }
    // console.log({ [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const data = {
      word,
      synonyms,
      text,
    };
    console.log(data);
  }, []);

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
