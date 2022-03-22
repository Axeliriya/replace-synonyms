import styles from './Textarea.module.css';

export const Textarea = ({ name }) => {
  const scroll = e => {
    // console.dir(e.target);
    if (e.target.scrollTop > 0) {
      e.target.style.height = e.target.scrollHeight + 'px';
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
