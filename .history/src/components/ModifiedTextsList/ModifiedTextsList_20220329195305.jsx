// import styles from './TextsList.module.css';
import { ModifiedTextsItem } from '..';
import dayjs from 'dayjs';

export const ModifiedTextsList = ({ section }) => {
  return (
    <ul>
      {section.data.map(item => (
        <div>{item}</div>
      ))}
      {section.data.map((list, i) => (
        <ModifiedTextsItem key={i} list={list} />
      ))}
    </ul>
  );
};
