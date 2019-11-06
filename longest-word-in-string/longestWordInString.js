
function longestWordInString(sentence) {
  let largestWordLength = 0;
  const wordArray = sentence.split(' ');
  for (let i = 0; i < wordArray.length; i += 1) {
    const currentWordLength = wordArray[i].length;
    if (currentWordLength > largestWordLength) {
      largestWordLength = currentWordLength;
    }
  }
  return largestWordLength;
}

export {
  longestWordInString,
};
