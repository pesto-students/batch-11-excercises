
function longestWordInString(string) {
  const listOfWordsFromString = string.split(' ');
  let longestWordLength = -Infinity;
  listOfWordsFromString.forEach((word) => {
    if (word.length > longestWordLength) longestWordLength = word.length;
  });
  return longestWordLength;
}

export {
  longestWordInString,
};
