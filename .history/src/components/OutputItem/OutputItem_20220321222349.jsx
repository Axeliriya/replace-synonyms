import styles from './OutputItem.module.css';
import cn from 'classnames';

export const OutputItem = ({ text }) => {
  return <li className={cn(styles.item, styles.hidden)}>{text}</li>;
};
