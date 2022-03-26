import styles from './TextsItem.module.css';
import cn from 'classnames';
import { ReactComponent as Up } from './up.svg';
import { ReactComponent as Down } from './down.svg';
import { ReactComponent as Copy } from './copy.svg';
import { useEffect, useState } from 'react';

export const TextsItem = ({ data }) => {
  const [hidden, setHidden] = useState(true);
  const [copied, setCopied] = useState(false);

  const toggle = () => {
    setHidden(!hidden);
  };

  const copyText = text => {
    window.navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <li className={styles.item}>
      {text.map(({ data }, i) => (
        <div
          key={i}
          className={cn(styles.modified, {
            [styles.hidden]: hidden,
          })}
        >
          {data}
          <button
            className={cn(styles.button, styles.arrow)}
            type="button"
            onClick={toggle}
          >
            {hidden ? <Down /> : <Up />}
          </button>
          {!copied && (
            <button
              className={cn(styles.button, styles.copy)}
              type="button"
              onClick={() => copyText(text)}
            >
              <Copy />
            </button>
          )}
          {copied && <div className={styles.copied}>Copied</div>}
        </div>
      ))}
    </li>
  );
};
