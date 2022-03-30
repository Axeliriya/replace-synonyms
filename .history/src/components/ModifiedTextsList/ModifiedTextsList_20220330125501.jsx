import styles from './ModifiedTextsList.module.css';
import { ModifiedTextsItem } from '..';
import { motion } from 'framer-motion';

export const ModifiedTextsList = ({ section }) => {
  return (
    <motion.ul className={styles.list}>
      {section.data.map((list, i) => (
        <ModifiedTextsItem key={i} textIdx={i} list={list} />
      ))}
    </motion.ul>
  );
};
