import styles from './Input.module.css';

export const Input = ({ name }) => {
  return (
    <div className={styles.wrapper}>
      <label for={name}>{name}</label>
      <input id={name} className={styles.input} type="text" />
    </div>
  );
};
