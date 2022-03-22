import styles from './App.module.css';
import { Header, Footer, Main } from '..';

export const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
