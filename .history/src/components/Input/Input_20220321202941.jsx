import styles from './Input.module.css';

export const Input = ({ name }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} for={name}>
        {name}
      </label>
      <input className={styles.input} id={name} type="text" />
    </div>
  );
};
