import styles from './TextsList.module.css';
import { TextsItem } from '..';

export const TextsList = ({ list }) => {
  return (
    <ul className={styles.list}>
      {list && list.map(({ text }, i) => <TextsItem key={i} text={text} />)}
    </ul>
  );
};
