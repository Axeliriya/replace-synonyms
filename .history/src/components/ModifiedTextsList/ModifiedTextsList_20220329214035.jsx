import styles from './ModifiedTextsList.module.css';
import { ModifiedTextsItem } from '..';

export const ModifiedTextsList = ({ section }) => {
  return (
    <ul className={styles.list}>
      {section.data.map((list, i) => (
        <ModifiedTextsItem key={i} idx={i} list={list} />
      ))}
    </ul>
  );
};
