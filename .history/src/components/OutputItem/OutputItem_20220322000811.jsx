import styles from './OutputItem.module.css';
import cn from 'classnames';
import up from './up.svg';
import down from './down.svg';
import copy from './copy.svg';
import { useState } from 'react';

export const OutputItem = ({ text }) => {
  const [hidden, setHidden] = useState(true);
  const [copied, setCopied] = useState(false);

  const toggle = () => {
    setHidden(!hidden);
  };

  const copyText = text => {
    window.navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <li
      className={cn(styles.item, {
        [styles.hidden]: hidden,
      })}
    >
      {text}
      <button
        className={cn(styles.button, styles.arrow)}
        type="button"
        onClick={toggle}
      >
        <img src={hidden ? down : up} alt="Arrow" />
      </button>
      <button
        className={cn(styles.button, styles.copy)}
        type="button"
        onClick={() => copyText(text)}
      >
        <img src={copy} alt="Arrow Down" />
        {copied && <div>Copied</div>}
      </button>
    </li>
  );
};
