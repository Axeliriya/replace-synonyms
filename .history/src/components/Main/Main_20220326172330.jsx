import styles from './Main.module.css';
import { Section, Input, Textarea, TextsList, Button } from '..';
import { ReactComponent as Rotate } from './rotate.svg';
import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import axios from 'axios';

export const Main = () => {
  const [word, setWord] = useState('');
  const [synonyms, setSynonyms] = useState('');
  const [text, setText] = useState('');
  const [textsList, setTextsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(textsList);
  }, []);

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

  const onSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);

    const inputs = {
      word,
      synonyms: synonyms.replace(/,/g, '').split(' '),
      text,
    };

    try {
      const { data } = await axios.post(
        'https://wezochy-replace-words.herokuapp.com/data',
        {
          ...inputs,
        },
      ); // здесь происходит отправка объекта на сервер
      textsList.push({ ...data, ...inputs });
      setTextsList(textsList);
      setIsLoading(false);
    } catch (error) {
      setError(error?.message);
      setIsLoading(false);
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
          <TextsList data={textsList} />
        )}
      </Section>
    </main>
  );
};
