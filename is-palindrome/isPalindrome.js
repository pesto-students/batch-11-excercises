function reverseString(string) {
  const array = string.split('');
  let result = '';
  for (let i = array.length - 1; i >= 0; i -= 1) {
    result += array[i];
  }
  return result;
}

function isPalindrome(inputString) {
  let string = inputString;
  if (typeof string === 'number') {
    string = string.toString();
    return reverseString(string) === string;
  }
  string = inputString.replace(/[^\s]/gi, '');
  const caseInsensitiveString = string.toLowerCase();
  return reverseString(caseInsensitiveString) === caseInsensitiveString;
}

export { isPalindrome };
