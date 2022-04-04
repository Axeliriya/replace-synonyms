import styles from './ModifiedTextsItem.module.css';
import cn from 'classnames';
import { ReactComponent as Up } from './up.svg';
import { ReactComponent as Down } from './down.svg';
import { ReactComponent as Copy } from './copy.svg';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  const variants = {
    hidden: {
      opacity: 0,
      x: -50,
      backgroundColor: '#d6ffdd',
      border: '1px solid #88ff9c',
    },
    show: {
      opacity: 1,
      x: 0,
      backgroundColor: '#f0f0f0',
      border: '1px solid transparent',
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const variantsText = {
    hidden: { display: 'block', height: 20, overflow: 'hidden' },
    show: {
      height: 'auto',
      overflow: 'visible',
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <motion.li
      variants={variants}
      initial="hidden"
      animate="show"
      className={cn(styles.item, {
        // [styles.first]: groupIdx === textIdx,
      })}
    >
      <div
        className={cn(styles.modified, {
          [styles.hidden]: hidden,
        })}
      >
        <motion.span
          variants={variantsText}
          initial={'hidden'}
          animate={hidden ? 'hidden' : 'show'}
          className={styles.span}
        >
          {list}
        </motion.span>
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