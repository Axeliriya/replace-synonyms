import styles from './Input.module.css';

export const Input = ({ value, name, onChange, isNotValid }) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        id={name}
        name={name}
        value={value}
        type="text"
        placeholder={name}
        onChange={e => onChange(e)}
      />
      <label className={styles.label} htmlFor={name}>
        {name.replace(/\w/, m => m.toUpperCase())}
      </label>
    </div>
  );
};
