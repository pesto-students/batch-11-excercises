function isPalindrome(maybePalindrome) {
  function isAlphaNumeric(character) {
    const code = character.charCodeAt(0);
    if (!(code > 47 && code < 58) // numeric (0-9)
      && (code > 64 && code < 91) // upper alpha (A-Z)
      && !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
    return true;
  }

  function sanitize(unsanitizedInput) {
    return unsanitizedInput
      .toString()
      .split('')
      .filter(isAlphaNumeric)
      .join('')
      .toLowerCase();
  }

  function reverseString(string) {
    return string
      .split('')
      .reverse()
      .join('');
  }

  const sanitizedString = sanitize(maybePalindrome);
  const reversedString = reverseString(sanitizedString);

  return sanitizedString === reversedString;
}

export {
  isPalindrome,
};
