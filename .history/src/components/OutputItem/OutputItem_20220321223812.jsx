import styles from './OutputItem.module.css';
import cn from 'classnames';
import UpIcon from './up.svg';
import DownIcon from './down.svg';

export const OutputItem = ({ text }) => {
  return (
    <li className={cn(styles.item, styles.hidden)}>
      {text}
      <button className={cn(styles.button)} type="button">
        <DownIcon />
      </button>
    </li>
  );
};
