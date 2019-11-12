
function argsString(placeHolder, words) {
  const predicate = (accumulator, word) => accumulator.replace('{}', word);
  return words.reduce(predicate, placeHolder);
}

export {
  argsString,
};
