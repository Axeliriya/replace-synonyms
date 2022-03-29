import styles from './TextsList.module.css';
import { TextsItem } from '..';
import { useState, useEffect } from 'react';

export const TextsList = ({ data }) => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const section = data?.reduce((acc, item) => {
      if (acc.length === 0) acc = [];

      if (item.synonyms === acc[acc.length - 1]?.synonyms) {
        acc[acc.length - 1].data.push(item.data);
      } else {
        acc.push({
          word: item.word,
          synonyms: item.synonyms,
          data: [item.data],
        });
      }
      return acc;
    }, []);
    setSections(section);
  }, [data]);

  const onClick = () => {
    console.log(sections);
  };

  return (
    <>
      {/* <button onClick={onClick}>sdsdsadsa</button>
      <ul className={styles.list}>
        {data && data.map((data, i) => <TextsItem key={i} data={data} />)}
      </ul> */}
      {sections?.map(section => (
        <ul>
          <li>
            {section.synonyms}
            <ul>
              {section.data.map(list => (
                <li>{list}</li>
              ))}
            </ul>
          </li>
        </ul>
      ))}
    </>
  );
};
