import styles from './Section.module.css';

export const Section = ({ children }) => {
  return <section className={styles.header}>{children}</section>;
};
