import styles from './Input.module.css';

export const Input = ({ name }) => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} id={name} type="text" placeholder={name} />
      <label className={styles.label} htmlFor={name}>
        {name}
      </label>
    </div>
  );
};
