
function alphabeticShift(string) {
  const charCodes = Array.from(string, (char) => char.charCodeAt(0));
  const modifiedCharCodes = charCodes.map((charCode) => charCode + 1);
  const modifiedString = modifiedCharCodes.reduce((partialString, currentCharCode) => partialString.concat(String.fromCharCode(currentCharCode)), '');
  return modifiedString;
}

export {
  alphabeticShift,
};
