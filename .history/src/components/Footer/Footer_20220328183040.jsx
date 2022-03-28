import styles from './Footer.module.css';
import { ReactComponent as GitHubIcon } from './git.svg';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <address className={styles.contacts}>
        <a className={styles.links} href="https://github.com/wezochy">
          <GitHubIcon className={styles.img} />
          <span>Wezochy</span>
        </a>
        <a className={styles.links} href="https://github.com/Axeliriya">
          <GitHubIcon className={styles.img} />
          <span>Axeliriya</span>
        </a>
      </address>
    </footer>
  );
};
