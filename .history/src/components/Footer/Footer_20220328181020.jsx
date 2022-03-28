import styles from './Footer.module.css';
import {} from './';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>Footer</span>
      <address>
        <a href="https://github.com/wezochy">
          <span>Wezochy</span>
        </a>
        <a href="https://github.com/Axeliriya">
          <span>Axeliriya</span>
        </a>
      </address>
    </footer>
  );
};
