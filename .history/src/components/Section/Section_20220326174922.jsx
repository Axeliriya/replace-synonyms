import styles from './Section.module.css';
import cn from 'classnames';

export const Section = ({ color, children, className, ...props }) => {
  return (
    <section
      className={cn(styles.section, className, {
        [styles.white]: color === 'white',
        [styles.gray]: color === 'gray',
      })}
      {...props}
    >
      {children}
    </section>
  );
};
