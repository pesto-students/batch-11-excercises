
function isPalindrome(...args) {
  const word = args[0].toString().toLocaleLowerCase();
  const palindromeToCheck = word.replace(/[_ /\-,.()]/gi, '');
  const palindromeLength = palindromeToCheck.length;
  for (const i in palindromeToCheck) {
    if (palindromeToCheck[i] !== palindromeToCheck[palindromeLength - i - 1]) {
      return false;
    }
  }
  return true;
}

export {
  isPalindrome,
};
