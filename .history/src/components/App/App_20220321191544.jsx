import styles from './App.module.css';
import { Header, Footer, Main } from '..';

export const App = () => {
  return (
    <div className={styles.app}>
      <Header></Header>
      <Main className={styles.main}></Main>
      <Footer></Footer>
    </div>
  );
};
