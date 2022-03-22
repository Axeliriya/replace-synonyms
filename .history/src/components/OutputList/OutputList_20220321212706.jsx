import styles from './Section.module.css';
import cn from 'classnames';

export const OutputList = ({ color, children }) => {
  return (
    <section
      className={cn(styles.section, {
        [styles.white]: color === 'white',
        [styles.gray]: color === 'gray',
      })}
    >
      {children}
    </section>
  );
};
