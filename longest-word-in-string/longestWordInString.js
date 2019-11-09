
function longestWordInString(...args) {
  const sentence = args[0];
  const wordArray = sentence.split(' ');
  const wordLengthArray = wordArray.map((word) => word.length);
  const longestWordLength = Math.max(...wordLengthArray);
  return longestWordLength;
}

export {
  longestWordInString,
};
