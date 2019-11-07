
function longestWordInString(sentence) {
  const words = sentence.split(' ');
  let longestWordLength = words[0].length;
  words.forEach(word => {
    if (word.length > longestWordLength)
      longestWordLength = word.length;
  });

  return longestWordLength;
}

export {
  longestWordInString,
};
