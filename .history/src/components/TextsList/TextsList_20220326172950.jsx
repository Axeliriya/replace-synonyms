import styles from './TextsList.module.css';
import { TextsItem } from '..';
import { useEffect, useState } from 'react';

export const TextsList = ({ data }) => {
  const [word, setWord] = useState('');
  const [synonyms, setSynonyms] = useState(null);
  const [text, setText] = useState([]);
  const [newRes, setNewRes] = useState(false);
  // const { data: text, word, synonyms } = data;

  const textModify = data => {
    if (
      word === data.word &&
      JSON.stringify(synonyms) === JSON.stringify(data.synonyms)
    ) {
      setNewRes(false);
      text.push(data.data);
      setText(text);
    } else {
      setNewRes(true);
      setWord(data.word);
      setSynonyms(data.synonyms.join(', '));
      text.push(data.data);
      setText(text);
    }
  };

  useEffect(() => {
    textModify(data);
  }, []);
  return (
    <ul>
      {newRes && (
        <li>
          <div className={styles.params}>{word}</div>
          <div className={styles.params}>{synonyms}</div>
          <ul className={styles.list}>
            {text && text.map((data, i) => <TextsItem key={i} data={data} />)}
          </ul>
        </li>
      )}
    </ul>
  );
};
