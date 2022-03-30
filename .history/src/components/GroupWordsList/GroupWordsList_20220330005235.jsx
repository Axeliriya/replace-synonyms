import styles from './GroupWordsList.module.css';
import { GroupWordsItem } from '..';
import { TransitionGroup } from 'react-transition-group';

export const GroupWordsList = ({ data }) => {
  return (
    <TransitionGroup component={null}>
      <ul className={styles.list}>
        {data
          ?.sort((a, b) => b.createdAt - a.createdAt)
          .map((section, i) => (
            <GroupWordsItem
              key={section.createdAt}
              section={section}
              groupIdx={i}
            />
          ))}
      </ul>
    </TransitionGroup>
  );
};
