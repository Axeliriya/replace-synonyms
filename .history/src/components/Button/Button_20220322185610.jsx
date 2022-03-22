import styles from './Button.module.css';

export const Button = ({ text, icon }) => {
  return (
    <button className={styles.button}>
      {text}
      {icon && icon}
    </button>
  );
};
