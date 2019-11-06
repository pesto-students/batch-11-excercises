function isPalindrome(str) {
// Regex To remove unwanted characters
  const regex = /[\W_]/g;
  const cleanStr = String(str).toLowerCase().replace(regex, '');
  const reversecleanStr = cleanStr.split('').reverse().join('');
  return reversecleanStr === cleanStr;
}

export {
  isPalindrome,
};
