import styles from './Main.module.css';
import { Section, Input, Textarea, GroupWordsList, Button } from '..';
import saved from '../../helpers/savedLocalstorage';
import getSections from '../../helpers/getSections';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Main = () => {
  const [word, setWord] = useState(saved.word() || '');
  const [synonyms, setSynonyms] = useState(saved.synonyms() || '');
  const [text, setText] = useState(saved.text() || '');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sections, setSections] = useState(saved.data());
  const [isNotValid, setIsNotValid] = useState(true);

  useEffect(() => {
    if (word?.length < 1 || synonyms?.length < 1 || text?.length < 1) {
      setIsNotValid(true);
    } else {
      setIsNotValid(false);
    }
  }, [word, synonyms, text]);

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
      const list = [{ ...data, ...inputs, ...date }];
      getSections(list, setSections);
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
    setSections([]);
    localStorage.removeItem('data');
    localStorage.removeItem('word');
    localStorage.removeItem('synonyms');
    localStorage.removeItem('text');
  };

  return (
    <main className={styles.main}>
      <Section>
        <form className={styles.form} onSubmit={e => onSubmit(e)}>
          <Input
            value={word}
            name="word"
            onChange={onChange}
            isNotValid={isNotValid}
          />
          <Input
            value={synonyms}
            name="synonyms"
            onChange={onChange}
            isNotValid={isNotValid}
          />

          <Textarea
            value={text}
            name="text"
            onChange={onChange}
            onKeyDown={onSubmitOnEnter}
            isNotValid={isNotValid}
          />
          <div className={styles.buttons}>
            {sections && sections.length > 0 && (
              <Button
                className={styles.btn}
                text="Сlear"
                appearance="clear"
                onClick={onClear}
              />
            )}
            <Button
              text={true ? '' : 'Replace'}
              disabled={isLoading || isNotValid}
            >
              {true && (
                <div className={styles.box}>
                  <div className={styles.loader}></div>
                </div>
              )}
            </Button>
          </div>
        </form>
      </Section>
      <hr className={styles.hr} />
      <Section className={styles.variants}>
        <h1 className={styles.title}>Variants of the modified text</h1>
        {error ? (
          <div className={styles.error}>{error}</div>
        ) : (
          <GroupWordsList data={sections} />
        )}
      </Section>
    </main>
  );
};
