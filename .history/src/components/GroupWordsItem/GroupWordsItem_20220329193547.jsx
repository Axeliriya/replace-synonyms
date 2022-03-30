import styles from './GroupWordsItem.module.css';
import cn from 'classnames';
import { ReactComponent as Up } from './up.svg';
import { ReactComponent as Down } from './down.svg';
import { ReactComponent as Copy } from './copy.svg';
import { useState } from 'react';
import dayjs from 'dayjs';

export const GroupWordsItem = ({ section }) => {
  // const [hidden, setHidden] = useState(true);
  // const [copied, setCopied] = useState(false);

  // const toggle = () => {
  //   setHidden(!hidden);
  // };

  // const copyText = text => {
  //   window.navigator.clipboard.writeText(text);
  //   setCopied(true);
  //   setTimeout(() => {
  //     setCopied(false);
  //   }, 1500);
  // };

  return (
    <li key={section.createdAt}>
      <div className={styles.params}>{section.word}</div>
      <div className={styles.params}>{section.synonyms}</div>
      <div className={styles.params}>
        {dayjs(section.createdAt).format('YYYY-MM-DD HH:mm:ss')}
      </div>
      {section.word} {section.synonyms}{' '}
      {dayjs(section.createdAt).format('YYYY-MM-DD HH:mm:ss')}
      <ModifiedTextsList />
      <ul>
        {section.data.map((list, i) => (
          <li key={i}>{list}</li>
        ))}
      </ul>
    </li>
  );
};
