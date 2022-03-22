import styles from './OutputItem.module.css';
import cn from 'classnames';
// import up from './up.svg';
import down from './down.svg';

export const OutputItem = ({ text }) => {
  return (
    <li className={cn(styles.item, styles.hidden)}>
      {text}
      <button className={cn(styles.button)} type="button">
        <img src={down} alt="Arrow Down" />
      </button>
    </li>
  );
};
