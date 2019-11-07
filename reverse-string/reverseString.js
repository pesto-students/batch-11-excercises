
function reverseString(stringToReverse) {
  const stringLength = stringToReverse.length;
  const reversedCharacterArray = Array(stringLength);
  for (let i = stringLength - 1; i > -1; i -= 1) {
    reversedCharacterArray.push(stringToReverse[i]);
  }
  return reversedCharacterArray.join('');
}

export {
  reverseString,
};
