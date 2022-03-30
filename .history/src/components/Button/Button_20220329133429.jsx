import styles from './Button.module.css';
import cn from 'classnames';

export const Button = ({ text, className, ...props }) => {
  return (
    <button className={cn(styles.button, className)} {...props}>
      {text}
    </button>
  );
};
