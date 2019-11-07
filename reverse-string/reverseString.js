
function reverseString(stringNeedToReverse) {
  const arrayOfCharacterInString = stringNeedToReverse.split('');
  const reversedCharacterArray = arrayOfCharacterInString.reverse();
  const reversedString = reversedCharacterArray.join('');
  return reversedString;
}

export {
  reverseString,
};
