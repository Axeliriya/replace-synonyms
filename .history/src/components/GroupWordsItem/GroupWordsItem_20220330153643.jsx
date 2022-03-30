import styles from './GroupWordsItem.module.css';
import { ModifiedTextsList } from '..';
import dayjs from 'dayjs';
import cn from 'classnames';
import { useState } from 'react';

export const GroupWordsItem = ({ section }) => {
  return (
    <li className={styles.item}>
      {/* <div className={cn(styles.params, styles.date)}>
        {dayjs(section.createdAt).format('YYYY-MM-DD HH:mm:ss')}
        <button onClick={}>Delete section</button>
      </div> */}
      <div className={cn(styles.params, styles.word)}>{section.word}</div>
      <div className={cn(styles.params, styles.synonyms)}>
        {section.synonyms}
      </div>
      <ModifiedTextsList section={section} />
    </li>
  );
};
