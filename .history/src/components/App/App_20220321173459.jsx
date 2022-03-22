import styles from './App.module.css';
import { Header } from "..";

export const App = () => {
  return (
    <div className={styles.app}>
      <Header></Header>
      <header className={styles.header}></header>
      <main className={styles.main}></main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
