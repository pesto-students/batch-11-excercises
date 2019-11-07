
function reverseString(initialString) {
  let reversedString = '';
  for (let i = initialString.length - 1; i >= 0; i--) {
    reversedString = reversedString.concat(initialString[i]);
  }

  return reversedString;
}

export {
  reverseString,
};
