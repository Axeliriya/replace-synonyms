import styles from './Main.module.css';
import { Section, Input, Textarea, OutputList, Button } from '..';
import { ReactComponent as Rotate } from './rotate.svg';
import { useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const list = [
  {
    text: 'Lorem1 ipsum dolor, sit amet consectetur adipisicing elit. Molestias laborum dicta facere. Delectus nulla laudantium eum quo sequi dignissimos quos quod. Perferendis tenetur obcaecati, quibusdam id rem quos ipsam eos.',
  },
  {
    text: 'Lorem2 ipsum dolor, sit amet consectetur adipisicing elit. Molestias laborum dicta facere. Delectus nulla laudantium eum quo sequi dignissimos quos quod. Perferendis tenetur obcaecati, quibusdam id rem quos ipsam eos.',
  },
  {
    text: 'Lorem3 ipsum dolor, sit amet consectetur adipisicing elit. Molestias laborum dicta facere. Delectus nulla laudantium eum quo sequi dignissimos quos quod. Perferendis tenetur obcaecati, quibusdam id rem quos ipsam eos.',
  },
  {
    text: 'Lorem4 ipsum dolor, sit amet consectetur adipisicing elit. Molestias laborum dicta facere. Delectus nulla laudantium eum quo sequi dignissimos quos quod. Perferendis tenetur obcaecati, quibusdam id rem quos ipsam eos.',
  },
];

export const Main = () => {
  const [word, setWord] = useState('');
  const [synonyms, setSynonyms] = useState('');
  const [text, setText] = useState('');
  const [textsList, setTextsList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onChange = e => {
    switch (e.target.name) {
      case 'word':
        return setWord(e.target.value);
      case 'synonyms':
        return setSynonyms(e.target.value);
      case 'text':
        return setText(e.target.value);

      default:
        break;
    }
  };

  const onSubmit = e => {
    e.preventDefault();

    const data = {
      word,
      synonyms: synonyms.split(' '),
      text,
    };

    let promise = new Promise(function (resolve, reject) {
      setTimeout(() => resolve('Success'), 2000);
    });

    promise
      .then(() => console.log(data))
      .then(() => setTextsList(list))
      .then(() => setIsLoading(false))
      .catch(e => console.log(e))
      .finally(setIsLoading(true));
  };

  const onSubmitOnEnter = e => {
    if (e.which === 13 && !e.shiftKey) {
      onSubmit(e);
    }
  };

  return (
    <main className={styles.main}>
      <Section color="white">
        <form className={styles.form} onSubmit={e => onSubmit(e)}>
          <Input name="word" onChange={onChange} />
          <Input name="synonyms" onChange={onChange} />
          <Textarea
            name="text"
            onChange={onChange}
            onKeyDown={onSubmitOnEnter}
          />
          <Button text="Replace">
            <Rotate />
          </Button>
        </form>
      </Section>
      <Section color="gray">
        <div>Variants of the modified text</div>
        {isLoading ? (
          <div className={styles.wrapper}>
            <InfinitySpin color="grey" width={100} />
          </div>
        ) : (
          <OutputList list={textsList} />
        )}
      </Section>
    </main>
  );
};
