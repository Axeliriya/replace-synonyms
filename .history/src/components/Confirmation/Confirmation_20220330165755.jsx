import { Button } from '..';
import styles from './Confirmation.module.css';

export const Confirmation = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div></div>
        <Button text="Yes" />
        <Button text="No" />
      </div>
    </div>
  );
};
