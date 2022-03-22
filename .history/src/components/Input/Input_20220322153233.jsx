import styles from './Input.module.css';

export const Input = ({ name }) => {
  const [word, setWord] = useState('');
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        id={name}
        type="text"
        placeholder={name}
        onChange={onChange}
      />
      <label className={styles.label} htmlFor={name}>
        {name}
      </label>
    </div>
  );
};
