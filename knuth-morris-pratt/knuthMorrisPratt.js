
function knuthMorrisPratt(givenText, pattern) {
  const firstLetter = pattern.charAt(0);
  const possibleIdxs = [];
  let textIdx = 0;
  let patternIdx = 0;
  while (patternIdx < pattern.length && textIdx < givenText.length) {
    const textLetter = givenText.charAt(textIdx);
    if (textLetter === pattern.charAt(patternIdx)) {
      patternIdx += 1;
    } else {
      // first pattern position doesn't match, so remove it
      possibleIdxs.splice(possibleIdxs.indexOf(textLetter), 1);
      // if there's a hint of where next pattern position could be,
      // start hunting for pattern from that position
      if (possibleIdxs.length !== 0) {
        [textIdx] = possibleIdxs;
      }
      // if letters dont match but this letter is the pattern position, then obviously
      // it will match the first letter of pattern, so we skip the comparison (patternIdx = 1)
      if (textLetter === firstLetter) {
        patternIdx = 1;
      } else {
        patternIdx = 0;
      }
    }

    if (textLetter === firstLetter) {
      possibleIdxs.push(textIdx);
    }

    if (patternIdx === pattern.length) {
      return parseInt(possibleIdxs[0], 10);
    }

    textIdx += 1;
  }
  return -1;
}

export {
  knuthMorrisPratt,
};
