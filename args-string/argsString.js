
function argsString(inputString, argStrings) {
  const argsReplacedString = argStrings.reduce((acc, string) => acc.replace(/{}/, string), inputString);

  return argsReplacedString;
}

export {
  argsString,
};
