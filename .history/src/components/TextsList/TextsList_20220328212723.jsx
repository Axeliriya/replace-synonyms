import styles from './TextsList.module.css';
import { TextsItem } from '..';

export const TextsList = ({ data }) => {
  return (
    <ul className={styles.list}>
      {data && data.map((data, i) => <TextsItem key={i} data={data} />)}
    </ul>
  );
};
