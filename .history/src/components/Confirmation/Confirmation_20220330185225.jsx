import { Button } from '..';
import styles from './Confirmation.module.css';
import warning from './warning.png';
import { motion } from 'framer-motion';

export const Confirmation = ({ showModal, onOpenModal, onClear }) => {
  const variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      height: '100vh',
      overflow: 'hidden',
      opacity: 1,
      transition: {
        type: 'inerita',
        duration: 2,
      },
    },
  };
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={showModal ? 'show' : 'hidden'}
      className={styles.overlay}
    >
      <div className={styles.modal}>
        <div className={styles.wrapper}>
          <img src={warning} alt="Warning icon" />
          <span>
            Are you sure you want to clear the data? All data from this page
            will be permanently deleted.
          </span>
        </div>
        <Button
          text="Yes"
          onClick={() => {
            onClear();
            onOpenModal();
          }}
        />
        <Button text="No" onClick={onOpenModal} />
      </div>
    </motion.div>
  );
};
