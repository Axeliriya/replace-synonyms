import styles from './Main.module.css';
import { Section, Input, Textarea, TextsList, Button } from '..';
import { ReactComponent as Rotate } from './rotate.svg';
import { useState, useEffect } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import axios from 'axios';

export const Main = () => {
  const [word, setWord] = useState('');
  const [synonyms, setSynonyms] = useState('');
  const [text, setText] = useState('');
  const [textsList, setTextsList] = useState([]);
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

  const onSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);

    const inputs = {
      word,
      synonyms,
      text,
    };

    try {
      const { data } = await axios.post(
        'https://wezochy-replace-words.herokuapp.com/data',
        {
          ...inputs,
        },
      ); // здесь происходит отправка объекта на сервер
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

  // const sections = textsList?.reduce((acc, item, index) => {
  //   if (acc.length === 0) acc = [];

  //   const prevItem = acc[acc.length - 1];
  //   // console.log(acc, item, index);

  //   if (item.synonims === prevItem?.synonims) {
  //     prevItem.list.push(item.data);
  //   } else {
  //     acc.push({
  //       word: item.word,
  //       synonims: item.synonims,
  //       list: [item.data],
  //     });
  //   }
  //   console.log(acc);

  //   return acc;
  // }, []);

  const sections = textsList.reduce((acc, item, i) => {
    if (item.synonyms === acc[acc.length - 1]?.synonyms) {
      acc[acc.length - 1].list.push(item.data);
    } else {
      acc.push({
        word: item.word,
        synonims: item.synonims,
        list: [item.data],
      });
    }
    return acc;
  }, []);

  useEffect(() => {
    sections && console.log(sections);
  }, []);

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
