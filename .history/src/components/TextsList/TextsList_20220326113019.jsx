import styles from './TextsList.module.css';
import { TextsItem } from '..';

export const TextsList = ({ list }) => {
  return (
    <ul className={styles.list}>
      {list && list.map(({ data }, i) => <TextsItem key={i} text={data} />)}
    </ul>
  );
};
