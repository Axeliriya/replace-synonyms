import styles from './Textarea.module.css';

export const Textarea = ({ name, onChange }) => {
  const scroll = e => {
    if (e.target.scrollTop > 0) {
      e.target.style.height = e.target.scrollHeight + 'px';
    }
  };

  return (
    <div className={styles.wrapper}>
      <textarea
        className={styles.textarea}
        id={name}
        name={name}
        placeholder={name}
        onKeyUp={e => scroll(e)}
        onChange={e => onChange(e)}
      />
      <label className={styles.label} htmlFor={name}>
        {name}
      </label>
    </div>
  );
};
