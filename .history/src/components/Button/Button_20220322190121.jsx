import styles from './Button.module.css';

export const Button = ({ text, children }) => {
  return (
    <button className={styles.button}>
      {text}
      {children}
    </button>
  );
};
