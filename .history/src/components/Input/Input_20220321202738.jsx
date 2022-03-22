import styles from './Input.module.css';

export const Input = ({ name }) => {
  return (
    <div>
      <label for={name}>{name}</label>
      <input className={styles.input} type="text" />
    </div>
  );
};
