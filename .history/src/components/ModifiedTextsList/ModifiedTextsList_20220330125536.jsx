import styles from './ModifiedTextsList.module.css';
import { ModifiedTextsItem } from '..';
import { motion } from 'framer-motion';

export const ModifiedTextsList = ({ section }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerDirection: -1,
      },
    },
  };
  return (
    <motion.ul className={styles.list}>
      {section.data.map((list, i) => (
        <ModifiedTextsItem key={i} textIdx={i} list={list} />
      ))}
    </motion.ul>
  );
};
