import styles from './GroupWordsList.module.css';
import { GroupWordsItem } from '..';

export const GroupWordsList = ({ data }) => {
  const onClick = id => {
    console.log(id);
    console.log(data?.section);
    return data?.filter(section => section.id === id);
  };
  return (
    <ul className={styles.list}>
      {data
        ?.sort((a, b) => b.createdAt - a.createdAt)
        .map(section => (
          <GroupWordsItem
            key={section.id}
            section={section}
            onClick={onClick}
          />
        ))}
    </ul>
  );
};
