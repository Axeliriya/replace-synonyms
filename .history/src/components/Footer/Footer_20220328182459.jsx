import styles from './Footer.module.css';
import gitIcon from './git.png';
import GitHubIcon from './git.svg';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <address className={styles.contacts}>
        <a className={styles.links} href="https://github.com/wezochy">
          <img className={styles.img} src={gitIcon} alt="GitHub Icon" />
          <span>Wezochy</span>
        </a>
        <a href="https://github.com/Axeliriya">
          <GitHubIcon />
          <span>Axeliriya</span>
        </a>
      </address>
    </footer>
  );
};
