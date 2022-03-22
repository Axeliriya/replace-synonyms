import styles from './Main.module.css';
import { Section, Input, Textarea, OutputList, Button } from '..';
import { ReactComponent as Rotate } from './rotate.svg';
import { useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import axios from 'axios';

export const Main = () => {
  const [word, setWord] = useState('');
  const [synonyms, setSynonyms] = useState('');
  const [text, setText] = useState('');
  const [textsList, setTextsList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onChange = e => {
    switch (e.target.name) {
      case 'word':
        return setWord(e.target.value);
      case 'synonyms':
        return setSynonyms(e.target.value);
      case 'text':
        return setText(e.target.value);

      default:
        break;
    }
  };

  const variants = async inputs => {
    const { word, synonyms, text: textInput } = inputs;
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }

    // function getRandomInt() {
    //   return Math.floor(Math.random() < 0.5);
    // }

    const vs = textInput
      .split(' ')
      .reduce(
        (acc, el) => (
          el.replace(/[\W\d]/g, '') === word
            ? acc.push(synonyms[getRandomInt(0, synonyms.length)])
            : acc.push(el),
          acc
        ),
        [],
      )
      .join(' ');

    const data = {
      text: vs,
    };

    await axios.post('http://localhost:3001/data', { ...data });
  };

  const onSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);

    const inputs = {
      word,
      synonyms: synonyms.replace(/,/g, '').split(' '),
      text,
    };

    try {
      await axios.post('http://localhost:3001/input', { ...inputs });
      await variants({ ...inputs });
      const { data } = await axios.get('http://localhost:3001/data');
      setTextsList(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error?.message);
      throw new Error(error);
    }
  };

  const onSubmitOnEnter = e => {
    if (e.which === 13 && !e.shiftKey) {
      onSubmit(e);
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
            onKeyDown={onSubmitOnEnter}
          />
          <Button text="Replace">
            <Rotate />
          </Button>
        </form>
      </Section>
      <Section color="gray">
        <h1 className={styles.title}>Variants of the modified text</h1>
        {isLoading ? (
          <div className={styles.loader}>
            <InfinitySpin color="grey" width={150} />
          </div>
        ) : error ? (
          <div className={styles.loader}>{error}</div>
        ) : (
          <OutputList list={textsList} />
        )}
      </Section>
    </main>
  );
};
