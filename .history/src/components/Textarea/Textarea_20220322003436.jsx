import styles from './Textarea.module.css';

export const Textarea = ({ name }) => {
  const scroll = e => {
    console.log(e);
    if (e.scrollTop > 0) {
      e.style.height = e.scrollHeight + 'px';
    }
  };

  return (
    <div className={styles.wrapper}>
      <textarea
        className={styles.textarea}
        id={name}
        placeholder={name}
        onKeyUp={e => scroll(e)}
      />
      <label className={styles.label} htmlFor={name}>
        {name}
      </label>
    </div>
  );
};
