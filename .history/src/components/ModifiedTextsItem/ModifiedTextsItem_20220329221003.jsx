import styles from './ModifiedTextsItem.module.css';
import cn from 'classnames';
import { ReactComponent as Up } from './up.svg';
import { ReactComponent as Down } from './down.svg';
import { ReactComponent as Copy } from './copy.svg';
import { useState } from 'react';

export const ModifiedTextsItem = ({ list, groupIdx, textIdx }) => {
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
    <li
      className={cn(styles.item, {
        [styles.first]: groupIdx === textIdx,
      })}
    >
      <div
        className={cn(styles.modified, {
          [styles.hidden]: hidden,
        })}
      >
        <span className={styles.span}>{list}</span>
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
            onClick={() => copyText(list)}
          >
            <Copy />
          </button>
        )}
        {copied && <div className={styles.copied}>Copied</div>}
      </div>
    </li>
  );
};
