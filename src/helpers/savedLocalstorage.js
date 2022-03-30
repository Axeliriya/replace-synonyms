const saved = {
  data() {
    const data = localStorage.getItem('data');
    if (data) {
      return JSON.parse(data);
    }
  },

  word() {
    const word = localStorage.getItem('word');
    if (word) {
      return word;
    }
  },

  synonyms() {
    const synonyms = localStorage.getItem('synonyms');
    if (synonyms) {
      return synonyms;
    }
  },

  text() {
    const text = localStorage.getItem('text');
    if (text) {
      return text;
    }
  },
};

export default saved;
