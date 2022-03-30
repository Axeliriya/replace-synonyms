import styles from './Button.module.css';
import cn from 'classnames';

export const Button = ({ text, children, className, ...props }) => {
  return (
    <button className={cn(styles.button, className)} {...props}>
      <span>{text}</span>
      {children}
    </button>
  );
};
