// import styles from './TextsList.module.css';
// import { TextsItem } from '..';
// import { useState, useEffect } from 'react';

export const TextsList = ({ data }) => {
  // const [sections, setSections] = useState([]);

  // useEffect(() => {
  //   const section = data?.reduce((acc, item) => {
  //     if (acc.length === 0) acc = [];

  //     if (item.synonyms === acc[acc.length - 1]?.synonyms) {
  //       acc[acc.length - 1].data.push(item.data);
  //     } else {
  //       acc.push({
  //         word: item.word,
  //         synonyms: item.synonyms,
  //         data: [item.data],
  //       });
  //     }
  //     return acc;
  //   }, []);
  //   setSections(section);
  // }, [data]);

  return (
    <>
      {/* <ul className={styles.list}>
        {data && data.map((data, i) => <TextsItem key={i} data={data} />)}
      </ul> */}

      <ul>
        {data
          ?.sort((a, b) => b.createdAt - a.createdAt)
          .map(section => (
            <li key={section.createdAt}>
              {section.word} {section.synonyms} {section.createdAt.setDate()}
              <ul>
                {section.data.map((list, i) => (
                  <li key={i}>{list}</li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </>
  );
};
