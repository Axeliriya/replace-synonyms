import styles from './Input.module.css';

export const Input = ({ name }) => {
  return (
    <label>
      {name}
      <input className={styles.input} type="text" />
    </label>
  );
};
