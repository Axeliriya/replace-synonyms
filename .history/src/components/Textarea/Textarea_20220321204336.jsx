import styles from './Textarea.module.css';

export const Textarea = ({ name }) => {
  return (
    <div className={styles.wrapper}>
      <textarea className={styles.textarea} id={name} />
      <label htmlFor={name}>{name}</label>
    </div>
  );
};
