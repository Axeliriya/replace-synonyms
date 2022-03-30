import { Button } from '..';
import styles from './Confirmation.module.css';

export const Confirmation = () => {
  return (
    <div className={styles.overlay}>
      <div>
        <div></div>
        <Button />
        <Button />
      </div>
    </div>
  );
};
