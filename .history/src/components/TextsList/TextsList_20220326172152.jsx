import styles from './TextsList.module.css';
import { TextsItem } from '..';

export const TextsList = ({ list }) => {
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
    <ul className={styles.list}>
      {list && list.map((data, i) => <TextsItem key={i} data={data} />)}
    </ul>
  );
};
