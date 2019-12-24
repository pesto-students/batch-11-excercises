
function duplicateLetters(string) {
  const seen = {};
  [...string].forEach((letter) => {
    if (letter in seen) {
      seen[letter] += 1;
    } else {
      seen[letter] = 1;
    }
  });
  const max = Math.max(...Object.values(seen));
  return max === 1 ? false : max;
}

export {
  duplicateLetters,
};
