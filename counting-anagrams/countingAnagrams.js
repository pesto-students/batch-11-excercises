const alphabetize = (string) => string
  .split('')
  .sort()
  .join('');

const anagramGrouper = (words) => words
  .filter((word) => word.length >= 2)
  .reduce((anagrams, word) => {
    if (Object.keys(anagrams).includes(alphabetize(word))) {
      return {
        ...anagrams,
        [alphabetize(word)]: [...anagrams[alphabetize(word)], word],
      };
    }
    return { ...anagrams, [alphabetize(word)]: [word] };
  }, {});

const countingAnagrams = (mayContainAnagrams) => {
  const words = mayContainAnagrams.split(' ');
  const groupedWords = anagramGrouper(words);
  return Object.values(groupedWords)
    .filter((matchingWords) => matchingWords.length > 1)
    .reduce((count) => count + 1, 0);
};

export { countingAnagrams };
