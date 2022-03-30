import styles from './GroupWordsList.module.css';
import { GroupWordsItem } from '..';

export const GroupWordsList = ({ data }) => {
  return (
    <ul className={styles.list}>
      {data
        ?.sort((a, b) => b.createdAt - a.createdAt)
        .map(section => (
          <GroupWordsItem key={section.id} section={section} />
        ))}
    </ul>
  );
};
