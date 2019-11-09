
function alienAlphabet(words) {
  const alienAlphabetMap = {};
  const alienAlphabets = [];
  words.forEach((word, index) => {
    const startingLetter = word[0];
    if (!Object.prototype.hasOwnProperty.call(alienAlphabetMap, startingLetter)) {
      alienAlphabetMap[startingLetter] = index;
      alienAlphabets.push(startingLetter);
    }
  });
  return alienAlphabets;
}

export {
  alienAlphabet,
};
