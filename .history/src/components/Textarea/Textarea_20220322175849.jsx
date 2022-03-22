import styles from './Textarea.module.css';

export const Textarea = ({ name, onChange, onKeyDown }) => {
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
        onKeyDown={onKeyDown}
      />
      <label className={styles.label} htmlFor={name}>
        {name.replace(/\w/, m => m.toUpperCase())}
      </label>
    </div>
  );
};
