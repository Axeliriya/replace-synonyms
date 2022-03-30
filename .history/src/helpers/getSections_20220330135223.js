import saved from './savedLocalstorage';

const getSections = (sections, setSections) => {
  const section = sections.reduce((acc, item) => {
    if (acc.length === 0) acc = saved.data() || [];

    if (
      item.synonyms === acc[acc.length - 1]?.synonyms &&
      item.word === acc[acc.length - 1]?.word
    ) {
      acc[acc.length - 1].data.unshift(item.data);
    } else {
      acc.push({
        word: item.word,
        synonyms: item.synonyms,
        data: [item.data],
        createdAt: item.createdAt,
      });
    }
    return acc;
  }, []);
  localStorage.setItem('word', section.word);
  localStorage.setItem('synonyms', section.synonyms);
  localStorage.setItem('text', section.text);
  localStorage.setItem('data', JSON.stringify(section));
  setSections(section);
};

export default getSections;
