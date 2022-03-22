import styles from './OutputList.module.css';
import { OutputItem } from '..';

export const OutputList = ({ list }) => {
  return (
    <ul className={styles.list}>
      {list.map(({ text }, i) => (
        <OutputItem key={i} text={text} />
      ))}
    </ul>
  );
};
