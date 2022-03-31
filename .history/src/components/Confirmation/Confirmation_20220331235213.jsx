import { Button } from '..';
import styles from './Confirmation.module.css';
import warning from './warning.png';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export const Confirmation = ({ showModal, onOpenModal, onClear }) => {
  // const handleKeyDown = (e) => {
  //   if(e.key === 'Escape') {
  //           onOpenModal();
  //         }
  // }
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        console.log(e.key);
        onOpenModal();
      }
    }
    console.log(showModal);
    if (showModal) {
      window.addEventListener('keydown', e => handleKeyDown(e));
    }

    return () => window.removeEventListener('keydown', e => handleKeyDown(e));
  }, []);

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
        duration: 0.5,
      },
    },
  };
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={showModal ? 'show' : 'hidden'}
      exit="hidden"
      className={styles.overlay}
      onClick={onOpenModal}
    >
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
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
