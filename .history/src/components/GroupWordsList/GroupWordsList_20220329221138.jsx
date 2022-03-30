import styles from './GroupWordsList.module.css';
import { GroupWordsItem } from '..';

export const GroupWordsList = ({ data }) => {
  return (
    <>
      {/* <ul className={styles.list}>
        {data && data.map((data, i) => <TextsItem key={i} data={data} />)}
      </ul> */}

      <ul className={styles.list}>
        {data
          ?.sort((a, b) => b.createdAt - a.createdAt)
          .map((section, i) => (
            <GroupWordsItem
              key={section.createdAt}
              section={section}
              groupIdx={i}
            />
          ))}
      </ul>
    </>
  );
};
