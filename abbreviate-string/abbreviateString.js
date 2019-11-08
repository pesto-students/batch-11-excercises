
function abbreviateString(sentence) {
  if (typeof sentence !== 'string') {
    throw Error(`Input must be a string, but ${typeof sentence} is given`);
  }
  const words = sentence.split(' ');
  const numberOfWords = words.length;
  let abbreviatedSentence = '';
  if (numberOfWords > 0) {
    abbreviatedSentence += words[0];
  }

  if (numberOfWords > 1) {
    // eslint-disable-next-line prefer-template
    abbreviatedSentence += ' ' + words[numberOfWords - 1][0].toUpperCase().toString() + '.';
  }
  return abbreviatedSentence;
}

export {
  abbreviateString,
};
