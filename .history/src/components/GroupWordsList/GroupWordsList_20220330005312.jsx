import styles from './GroupWordsList.module.css';
import { GroupWordsItem } from '..';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const GroupWordsList = ({ data }) => {
  return (
    <TransitionGroup component={null}>
      <ul className={styles.list}>
        {data
          ?.sort((a, b) => b.createdAt - a.createdAt)
          .map((section, i) => (
            <CSSTransition key={section.createdAt}>
              <GroupWordsItem section={section} groupIdx={i} />
            </CSSTransition>
          ))}
      </ul>
    </TransitionGroup>
  );
};
