import styles from './Footer.module.css';
import gitIcon from './git.png';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>Footer</span>
      <address>
        <a href="https://github.com/wezochy">
          <img src={gitIcon} alt="GitHub Icon" />
          <span>Wezochy</span>
        </a>
        <a href="https://github.com/Axeliriya">
          <img src={gitIcon} alt="GitHub Icon" />
          <span>Axeliriya</span>
        </a>
      </address>
    </footer>
  );
};
