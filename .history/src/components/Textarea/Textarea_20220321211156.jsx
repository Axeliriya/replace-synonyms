import styles from './Textarea.module.css';

export const Textarea = ({ name }) => {
  return (
    <div className={styles.wrapper}>
      <textarea className={styles.textarea} id={name} placeholder={name} />
      <label className={styles.label} htmlFor={name}>
        {name}
      </label>
    </div>
  );
};
