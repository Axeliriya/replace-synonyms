import styles from './TextsList.module.css';
import { TextsItem } from '..';

export const TextsList = ({ data }) => {
  const [sections, setSections] = useState([]);

  // useEffect(() => {

  // const section = textsList.reduce((acc, item) => {
  //   if (item.synonyms === acc[acc.length - 1]?.synonyms) {
  //     acc[acc.length - 1].list.push(item.data);
  //   } else {
  //     acc.push({
  //       word: item.word,
  //       synonyms: item.synonyms,
  //       data: [item.data],
  //     });
  //   }
  //   return acc;
  // }, []);
  //   setSections(section);
  //   console.log(sections);
  // }, []);

  return (
    <ul className={styles.list}>
      {sections && sections.map((data, i) => <TextsItem key={i} data={data} />)}
    </ul>
  );
};
