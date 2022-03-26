import styles from './TextsList.module.css';
import { TextsItem } from '..';

export const TextsList = ({ list }) => {
  console.log(list);
  return (
    <ul className={styles.list}>
      {list && list.map((data, i) => <TextsItem key={i} text={data.data} />)}
    </ul>
  );
};
