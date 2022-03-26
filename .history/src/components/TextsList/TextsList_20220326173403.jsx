import styles from './TextsList.module.css';
import { TextsItem } from '..';
import { useEffect, useState } from 'react';

export const TextsList = ({ data }) => {
  
  return (
    <ul>
      {newRes && (
        <li>
          <div className={styles.params}>{word}</div>
          <div className={styles.params}>{synonyms}</div>
          <ul className={styles.list}>
            {text && text.map((data, i) => <TextsItem key={i} data={data} />)}
          </ul>
  );
};
