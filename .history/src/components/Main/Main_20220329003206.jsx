import styles from './Main.module.css';
import { Section, Input, Textarea, TextsList, Button } from '..';
import { ReactComponent as Rotate } from './rotate.svg';
import { useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import axios from 'axios';

export const Main = () => {
  const [word, setWord] = useState('');
  const [synonyms, setSynonyms] = useState('');
  const [text, setText] = useState('');
  const [textsList, setTextsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [sections, setSections] = useState([]);

  // const getSections = sections => {
  //   const section = sections.reduce((acc, item) => {
  //     if (acc.length === 0) acc = [];

  //     if (item.synonyms === acc[acc.length - 1]?.synonyms) {
  //       acc[acc.length - 1].data.push(item.data);
  //     } else {
  //       acc.push({
  //         word: item.word,
  //         synonyms: item.synonyms,
  //         data: [item.data],
  //         createdAt: item.createdAt,
  //       });
  //     }
  //     return acc;
  //   }, []);
  //   console.log(section);
  //   setSections(section);
  // };

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
      synonyms,
      text,
    };

    // const date = { createdAt: Date.parse(new Date()) };

    try {
      const { data } = await axios.post(
        'https://wezochy-replace-words.herokuapp.com/data',
        {
          ...inputs,
        },
      );
      // textsList.push({ ...data, ...inputs, ...date });
      // setTextsList(textsList);
      // getSections(textsList);
      textsList.unshift({ ...data, ...inputs });
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

  const onClear = () => {
    setWord('');
    setSynonyms('');
    setText('');
    setTextsList([]);
  };

  return (
    <main className={styles.main}>
      <Section>
        <form className={styles.form} onSubmit={e => onSubmit(e)}>
          <Input value={word} name="word" onChange={onChange} />
          <Input value={synonyms} name="synonyms" onChange={onChange} />
          <Textarea
            value={text}
            name="text"
            onChange={onChange}
            onKeyDown={onSubmitOnEnter}
          />
          <div className={styles.loading}>
            {isLoading && (
              <div className={styles.loader}>
                <InfinitySpin color="grey" />
              </div>
            )}
            <Button text="Replace">
              <Rotate />
            </Button>
          </div>
        </form>
      </Section>
      <hr className={styles.hr} />
      <Section className={styles.variants}>
        <h1 className={styles.title}>Variants of the modified text</h1>
        <Button className={styles.btn} text="Сlear" onClick={onClear} />
        {error ? (
          <div className={styles.loader}>{error}</div>
        ) : (
          <TextsList data={textsList} />
        )}
        {/* {isLoading ? (
          <div className={styles.loader}>
            <InfinitySpin color="grey" width={150} />
          </div>
        ) : error ? (
          <div className={styles.loader}>{error}</div>
        ) : (
          <TextsList data={textsList} />
        )} */}
      </Section>
    </main>
  );
};
