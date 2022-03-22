import styles from './Input.module.css';

export const Input = ({ name }) => {
  return (
    <fieldset className={styles.fieldset}>
      <legend>{name}</legend>
      <label>
        <input className={styles.input} type="text" />
      </label>
    </fieldset>
  );
};
