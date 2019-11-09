
function alternatingCharacters(repeatingCharactersWords) {
  const alternatingStringLengths = [];
  for (let i = 0; i < repeatingCharactersWords.length; i++) {
    let minimumDeletions = 0;
    let currentWord = repeatingCharactersWords[i];
    for (let j = 0; j < currentWord.length; j++) {
      if (currentWord[j] === currentWord[j + 1]) {
        minimumDeletions += 1;
      }
    }
    alternatingStringLengths.push(minimumDeletions);
  }
  return alternatingStringLengths;
}

export {
  alternatingCharacters,
};
