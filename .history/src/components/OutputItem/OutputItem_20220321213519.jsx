import styles from './OutputItem.module.css';

export const OutputItem = ({ text }) => {
  return <li className={styles.item}>{text}</li>;
};
