import styles from './ModifiedTextsItem.module.css';
import cn from 'classnames';
import { ReactComponent as Up } from './up.svg';
import { ReactComponent as Down } from './down.svg';
import { ReactComponent as Copy } from './copy.svg';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const ModifiedTextsItem = ({ list, textIdx }) => {
  const [hidden, setHidden] = useState(true);
  const [copied, setCopied] = useState(false);
  // const [f, setf] = useState(false);

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

  // useEffect(() => {
  //   console.log(groupIdx, textIdx);
  //   setf(true);
  //   setTimeout(() => {
  //     setf(false);
  //   }, 2000);
  // }, [list]);

  return (
    <motion.li
      animate={{ y: -50 }}
      transition={{ delay: 1 }}
      className={cn(styles.item, {
        // [styles.first]: groupIdx === textIdx,
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
    </motion.li>
  );
};
