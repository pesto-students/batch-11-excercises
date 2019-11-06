
function longestWordInString(string) {
  const listOfWordsFromString = string.split(' ');
  let maxLengthOfWord = -Infinity;
  listOfWordsFromString.forEach((word) => {
    if (word.length > maxLengthOfWord) maxLengthOfWord = word.length;
  });
  return maxLengthOfWord;
}

export {
  longestWordInString,
};
