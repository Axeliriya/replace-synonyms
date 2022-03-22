import styles from './Input.module.css';

export const Input = ({ name }) => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} id={name} type="text" />
      <label className={styles.label} for={name}>
        {name}
      </label>
    </div>
  );
};
