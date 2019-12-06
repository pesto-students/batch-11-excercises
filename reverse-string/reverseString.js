
function reverseString(string) {
  if (string.length === 0) {
    return '';
  } else {
    let reversedString = '';
    const lastLetterIndex = string.length - 1;
    for (let i = lastLetterIndex; i >= 0; i--) {
      reversedString += string[i];
    }
    return reversedString;
  }
}

export {
  reverseString,
};
