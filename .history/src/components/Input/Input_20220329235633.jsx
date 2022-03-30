import styles from './Input.module.css';
import cn from 'classnames';

export const Input = ({ value, name, onChange, isNotValid }) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={cn(styles.input, {
          [styles.error]: isNotValid,
        })}
        id={name}
        name={name}
        value={value}
        type="text"
        placeholder={name}
        onChange={e => onChange(e)}
      />
      <label className={styles.label} htmlFor={name}>
        {name.replace(/\w/, m => m.toUpperCase())}*
      </label>
    </div>
  );
};
