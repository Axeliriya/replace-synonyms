import styles from './Footer.module.css';
import { ReactComponent as GitHubIcon } from './git.svg';
import dayjs from 'dayjs';

export const Footer = () => {
  const date = dayjs(new Date()).format('YYYY');
  return (
    <footer className={styles.footer}>
      <div>
        <div>&#xa9; {date} replacer</div>
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
      </div>
    </footer>
  );
};