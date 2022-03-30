import styles from './GroupWordsItem.module.css';
import { ModifiedTextsList } from '..';
import dayjs from 'dayjs';
import cn from 'classnames';

export const GroupWordsItem = ({ section, groupIdx }) => {
  return (
    <li className={styles.item} key={section.createdAt}>
      <div className={cn(styles.params, styles.word)}>{section.word}</div>
      <div className={cn(styles.params, styles.synonyms)}>
        {section.synonyms}
      </div>
      <div className={cn(styles.params, styles.date)}>
        {dayjs(section.createdAt).format('YYYY-MM-DD HH:mm:ss')}
      </div>
      <ModifiedTextsList section={section} groupIdx={groupIdx} />
    </li>
  );
};
