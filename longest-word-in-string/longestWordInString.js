function longestWordInString(string) {
  const splitString = string.split(' ');

  let longestWord = 0;

  for (let i = 0; i < splitString.length; i += 1) {
    if (splitString[i].length > longestWord) {
      longestWord = splitString[i].length;
    }
  }
  return longestWord;
}

export {
  longestWordInString,
};
