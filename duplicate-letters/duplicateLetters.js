function duplicateLetters(string) {
  const repeatingLetters = new Map();
  for (const char of string) {
    if (repeatingLetters[char] === undefined) {
      repeatingLetters[char] = 1;
    } else {
      repeatingLetters[char] += 1;
    }
  }

  const maxRepeatCount = Object.values(repeatingLetters)
    .sort((firstEl, secondEl) => secondEl - firstEl)[0];
  return maxRepeatCount > 1 ? maxRepeatCount : false;
}

export {
  duplicateLetters,
};
