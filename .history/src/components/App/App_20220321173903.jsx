import styles from './App.module.css';
import { Header, Footer } from "..";

export const App = () => {
  return (
    <div className={styles.app}>
      <Header></Header>
      <main className={styles.main}></main>
      <Footer></Footer>
    </div>
  );
}
