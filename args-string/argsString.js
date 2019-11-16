function argsString(string, stringsArray) {
  const replaceWith = string.match('{}');
  const replace = (accumulator, word) => accumulator.replace(replaceWith, word);
  const result = stringsArray.reduce(replace);
  return result;
}

export {
  argsString,
};
