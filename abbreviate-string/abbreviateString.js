function abbreviateString(stringToBeAbbreviated) {
  if (typeof stringToBeAbbreviated !== 'string') {
    throw Error('Invalid parameters');
  } else {
    const [firstWord, ...remainingWords] = stringToBeAbbreviated.split(' ');
    const abbreviation = remainingWords.pop()[0].toUpperCase();
    return `${firstWord} ${abbreviation}.`;
  }
}

export {
  abbreviateString,
};
