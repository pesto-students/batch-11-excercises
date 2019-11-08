
function abbreviateString(string) {
  if (typeof string !== 'string') {
    throw new Error('Invalid Symbols or Object has given. Please provide human readable string');
  }
  const wordsInTheString = string.split(' ');
  const numberOfWordsInTheString = wordsInTheString.length;
  const lastWordOfTheString = wordsInTheString[numberOfWordsInTheString - 1];
  const charactersInTheLastWord = lastWordOfTheString.split('');
  const stringWithAbbreviation = `${wordsInTheString[0]} ${charactersInTheLastWord[0].toUpperCase()}.`;
  return stringWithAbbreviation;
}

export {
  abbreviateString,
};
