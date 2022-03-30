// import styles from './GroupWordsList.module.css';
// import { TextsItem } from '..';
import dayjs from 'dayjs';

export const GroupWordsList = ({ data }) => {
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
                  <li key={i}>{list}</li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </>
  );
};
