import styles from './ModifiedTextsList.module.css';
import { ModifiedTextsItem } from '..';
import { motion, LayoutGroup } from 'framer-motion';

export const ModifiedTextsList = ({ section }) => {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerDirection: 1,
        when: 'afterChildren',
      },
    },
  };
  return (
    <motion.ul
      variants={variants}
      initial="hidden"
      animate="show"
      className={styles.list}
    >
      {section.data.map((list, i) => (
        <LayoutGroup key={i}>
          <ModifiedTextsItem textIdx={i} list={list} />
        </LayoutGroup>
      ))}
    </motion.ul>
  );
};
