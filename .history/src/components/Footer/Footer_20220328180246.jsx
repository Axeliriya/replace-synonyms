import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>Footer</span>
      <address>
        <a href="https://github.com/Axeliriya"></a>
        <a href="https://github.com/wezochy"></a>
      </address>
    </footer>
  );
};
