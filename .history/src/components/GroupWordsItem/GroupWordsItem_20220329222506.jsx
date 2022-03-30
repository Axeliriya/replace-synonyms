import styles from './GroupWordsItem.module.css';
import { ModifiedTextsList } from '..';
import dayjs from 'dayjs';

export const GroupWordsItem = ({ section, groupIdx }) => {
  return (
    <li className={styles.item} key={section.createdAt}>
      <div className={styles.params}>{section.word}</div>
      <div className={styles.params}>{section.synonyms}</div>
      <div className={styles.params}>
        {dayjs(section.createdAt).format('YYYY-MM-DD HH:mm:ss')}
      </div>
      <ModifiedTextsList section={section} groupIdx={groupIdx} />
    </li>
  );
};
