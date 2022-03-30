import styles from './Main.module.css';
import { Section, Input, Textarea, TextsList, Button } from '..';
// import { ReactComponent as Rotate } from './rotate.svg';
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
  const [sections, setSections] = useState(savedData());

  const getSections = sections => {
    const section = sections.reduce((acc, item) => {
      if (acc.length === 0) acc = [];

      if (
        item.synonyms === acc[acc.length - 1]?.synonyms &&
        item.word === acc[acc.length - 1]?.word
      ) {
        acc[acc.length - 1].data.unshift(item.data);
      } else {
        acc.push({
          word: item.word,
          synonyms: item.synonyms,
          data: [item.data],
          createdAt: item.createdAt,
        });
      }
      return acc;
    }, []);
    localStorage.setItem('data', JSON.stringify(section));
    setSections(section);
  };

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

    const date = { createdAt: Date.parse(new Date()) };

    try {
      const { data } = await axios.post(
        'https://wezochy-replace-words.herokuapp.com/data',
        {
          ...inputs,
        },
      );
      textsList.push({ ...data, ...inputs, ...date });
      setTextsList(textsList);
      getSections(textsList);
      // textsList.unshift({ ...data, ...inputs });
      // setTextsList(textsList);
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
    // setTextsList([]);
    setSections([]);
    localStorage.removeItem('data');
  };

  function savedData() {
    const data = localStorage.getItem('data');

    if (data) {
      return JSON.parse(data);
    }
  }

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
            {true ? (
              <div className={styles.loader}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="50"
                  viewBox="0 0 100 50"
                >
                  <path
                    stroke="grey"
                    fill="none"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
                    class="sc-bdvvtL ktBeVr"
                  ></path>
                  <path
                    opacity="0.07"
                    fill="none"
                    stroke="grey"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
                  ></path>
                </svg>
              </div>
            ) : (
              <Button text="Replace" />
            )}
          </div>
        </form>
      </Section>
      <hr className={styles.hr} />
      <Section className={styles.variants}>
        <h1 className={styles.title}>Variants of the modified text</h1>
        {sections.length > 0 && (
          <Button className={styles.btn} text="Сlear" onClick={onClear} />
        )}

        {error ? (
          <div className={styles.loader}>{error}</div>
        ) : (
          <TextsList data={sections} />
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
