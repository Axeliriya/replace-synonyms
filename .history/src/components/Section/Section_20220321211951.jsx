import styles from './Section.module.css';
import cn from "classnames";

export const Section = ({ color, children }) => {
  return <section className={cn(styles.section, {
      [styles.white]: color === 'white'
  })}>{children}</section>;
};
