import styles from './ModifiedTextsList.module.css';
import { ModifiedTextsItem } from '..';

export const ModifiedTextsList = ({ section, groupIdx }) => {
  return (
    <ul className={styles.list}>
      {section.data.map((list, i) => (
        <ModifiedTextsItem
          key={i}
          groupIdx={groupIdx}
          textIdx={i}
          list={list}
        />
      ))}
    </ul>
  );
};
