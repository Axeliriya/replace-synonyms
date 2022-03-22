import styles from './OutputItem.module.css';
import cn from 'classnames';
import up from './up.svg';
import down from './down.svg';
import { useState } from 'react';

export const OutputItem = ({ text }) => {
  const [hidden, setHidden] = useState(true);
  const toggle = () => {
    setHidden(!hidden);
  };
  return (
    <li
      className={cn(styles.item, {
        [styles.hidden]: toggle,
      })}
    >
      {text}
      <button className={cn(styles.button)} type="button" onClick={toggle}>
        <img src={toggle ? down : up} alt="Arrow Down" />
      </button>
    </li>
  );
};
