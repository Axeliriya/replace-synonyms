import styles from './TextsList.module.css';
import { TextsItem } from '..';
import { useEffect } from 'react';

export const TextsList = ({ list }) => {
  useEffect(() => {
    console.log(list);
  }, []);
  return (
    <ul className={styles.list}>
      {list && list.map((data, i) => <TextsItem key={i} data={data} />)}
    </ul>
  );
};
