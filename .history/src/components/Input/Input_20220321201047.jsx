import styles from './Input.module.css';

export const Input = () => {
  return (
    <fieldset>
      <legend>ваш текст</legend>
      <input className={styles.input} type="text" />
    </fieldset>
  );
};
