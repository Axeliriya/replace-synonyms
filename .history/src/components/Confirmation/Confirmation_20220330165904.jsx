import { Button } from '..';
import styles from './Confirmation.module.css';

export const Confirmation = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div>
          Are you sure you want to clear the data? All data from this page will
          be deleted.
        </div>
        <Button text="Yes" />
        <Button text="No" />
      </div>
    </div>
  );
};
