import { Button } from '..';
import styles from './Confirmation.module.css';
import { motion, AnimatePresence } from 'framer-motion';

export const Confirmation = () => {
  const variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };
  return (
    <motion.div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.wrapper}>
          Are you sure you want to clear the data? All data from this page will
          be deleted.
        </div>
        <Button text="Yes" />
        <Button text="No" />
      </div>
    </motion.div>
  );
};
