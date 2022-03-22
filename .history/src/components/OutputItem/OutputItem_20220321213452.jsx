import styles from './OutputItem.module.css';

export const OutputItem = ({ item }) => {
  return <li className={styles.item}>{item.text}</li>;
};
