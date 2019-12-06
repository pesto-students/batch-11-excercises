
function titleize(sentence) {
  if (sentence.length < 1) {
    return sentence;
  }

  const separator = /(\W+)/;
  const words = sentence.split(separator);
  const capitalizeWords = words.map((word) => {
    if (!separator.test(word)) {
      if (word.length === 1) {
        return word.toUpperCase();
      }
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
    return word;
  });
  return capitalizeWords.join('');
}

export {
  titleize,
};
