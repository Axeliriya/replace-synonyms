// import styles from './TextsList.module.css';
// import { GroupWordsItem } from '..';
import dayjs from 'dayjs';

export const ModifiedTextsList = ({ data }) => {
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
              {section.word} {section.synonyms}{' '}
              {dayjs(section.createdAt).format('YYYY-MM-DD HH:mm:ss')}
              <ul>
                {section.data.map((list, i) => (
                  <ModifiedTextsItem key={i} list={{ list }} />
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </>
  );
};
