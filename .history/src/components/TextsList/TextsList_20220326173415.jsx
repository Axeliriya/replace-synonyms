import styles from './TextsList.module.css';
import { TextsItem } from '..';
import { useEffect, useState } from 'react';

export const TextsList = ({ data }) => {
  return (
    <ul className={styles.list}>
      {data && data.map((data, i) => <TextsItem key={i} data={data} />)}
    </ul>
  );
};
