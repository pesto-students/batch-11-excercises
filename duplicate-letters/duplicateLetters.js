function duplicateLetters(letters) {
  const lettersCount = {};
  Object.values(letters).map((letter) => {
    if (lettersCount[letter]) {
      lettersCount[letter] += 1;
    } else {
      lettersCount[letter] = 1;
    }
    return lettersCount;
  });
  let maxCount = 1;
  for (const letter in lettersCount) {
    if (lettersCount[letter] > maxCount) {
      maxCount = lettersCount[letter];
    }
  }
  return maxCount > 1 ? maxCount : false;
}

export {
  duplicateLetters,
};
