
function argsString(targetString, wordsToReplace) {
  return wordsToReplace.reduce((acc, word) => acc.replace(/{}/, word), targetString);
}

export {
  argsString,
};
