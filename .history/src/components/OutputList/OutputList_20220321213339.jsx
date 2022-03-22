import styles from './OutputList.module.css';

export const OutputList = () => {
  const list = [
    {
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias laborum dicta facere. Delectus nulla laudantium eum quo sequi dignissimos quos quod. Perferendis tenetur obcaecati, quibusdam id rem quos ipsam eos.',
    },
    {
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias laborum dicta facere. Delectus nulla laudantium eum quo sequi dignissimos quos quod. Perferendis tenetur obcaecati, quibusdam id rem quos ipsam eos.',
    },
  ];
  return (
    <ul className={styles.section}>
      {list.map((item, i) => (
        <OutputItem key={i} item={item} />
      ))}
    </ul>
  );
};
