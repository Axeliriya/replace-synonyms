import styles from './TextsList.module.css';
import { OutputItem } from '..';

export const TextsList = ({ list }) => {
  return (
    <ul className={styles.list}>
      {list && list.map(({ text }, i) => <OutputItem key={i} text={text} />)}
    </ul>
  );
};
