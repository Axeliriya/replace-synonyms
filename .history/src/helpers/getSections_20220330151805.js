import saved from './savedLocalstorage';

const getSections = (sections, setSections) => {
  const section = sections.reduce((acc, item) => {
    if (acc.length === 0) acc = saved.data() || [];

    if (
      item.synonyms === acc[acc.length - 1]?.synonyms &&
      item.word === acc[acc.length - 1]?.word
    ) {
      acc[acc.length - 1].data.push(item.data);
      localStorage.setItem('word', item.word);
      localStorage.setItem('synonyms', item.synonyms);
      localStorage.setItem('text', item.text);
    } else {
      acc.push({
        word: item.word,
        synonyms: item.synonyms,
        data: [item.data],
        createdAt: item.createdAt,
        id: item.id,
      });
      localStorage.setItem('word', item.word);
      localStorage.setItem('synonyms', item.synonyms);
      localStorage.setItem('text', item.text);
    }
    return acc;
  }, []);
  localStorage.setItem('data', JSON.stringify(section));
  setSections(section);
};

export default getSections;
