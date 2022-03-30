// import styles from './TextsList.module.css';
import { ModifiedTextsItem } from '..';
import dayjs from 'dayjs';

export const ModifiedTextsList = ({ data }) => {
  return (
    <ul>
      {data.map((list, i) => (
        <ModifiedTextsItem key={i} list={{ list }} />
      ))}
    </ul>
  );
};
