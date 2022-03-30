import styles from './GroupWordsItem.module.css';
import { ModifiedTextsList } from '..';
// import dayjs from 'dayjs';
import cn from 'classnames';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const GroupWordsItem = ({ section, groupIdx }) => {
  return (
    <CSSTransition timeout={3000} classNames={styles.item}>
      <li className={styles.item} key={section.createdAt}>
        <div className={cn(styles.params, styles.word)}>{section.word}</div>
        <div className={cn(styles.params, styles.synonyms)}>
          {section.synonyms}
        </div>
        {/* <div className={cn(styles.params, styles.date)}>
        {dayjs(section.createdAt).format('YYYY-MM-DD HH:mm:ss')}
      </div> */}
        <ModifiedTextsList section={section} groupIdx={groupIdx} />
      </li>
    </CSSTransition>
  );
};
