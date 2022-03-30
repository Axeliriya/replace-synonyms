import styles from './Button.module.css';
import cn from 'classnames';

export const Button = ({ text, appearance, children, className, ...props }) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.clear]: appearance === 'clear',
      })}
      {...props}
    >
      <span>{text}</span>
      {children}
    </button>
  );
};
