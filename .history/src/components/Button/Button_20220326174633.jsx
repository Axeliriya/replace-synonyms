import styles from './Button.module.css';

export const Button = ({ text, children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {text}
      {children}
    </button>
  );
};
