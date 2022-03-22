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

  const onSubmit = e => {
    e.preventDefault();
    console.dir(e.target.which);

    const data = {
      word,
      synonyms,
      text,
    };

    console.log(data);
  };

  const onSubmitOnEnter = e => {
    e.preventDefault();
    console.dir(e.which);
    if (e.which === 13 && !e.shiftKey) {
      const data = {
        word,
        synonyms,
        text,
      };

      console.log(data);
    }
  };

  return (
    <main className={styles.main}>
      <Section color="white">
        <form className={styles.form} onSubmit={e => onSubmit(e)}>
          <Input name="word" onChange={onChange} />
          <Input name="synonyms" onChange={onChange} />
          <Textarea
            name="text"
            onChange={onChange}
            onKeyDown={e => onSubmitOnEnter(e)}
          />
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
