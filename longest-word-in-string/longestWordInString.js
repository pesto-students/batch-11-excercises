
function longestWordInString(sentence) {
  const words = sentence.split(' ');
  let firstWord = words[0];
  let longestWordLength = firstWord.length;
  for (let word of words) {
    if (word.length > longestWordLength) {
      longestWordLength = word.length;
    }
  }
  return longestWordLength;
}

export {
  longestWordInString,
};
