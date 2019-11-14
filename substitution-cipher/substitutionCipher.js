const getCipherLetter = (plainChar) => {
  const upperCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCases = 'abcdefghijklmnopqrstuvwxyz';
  const isUpperCase = plainChar.toUpperCase() === plainChar;
  const plainIndex = isUpperCase ? upperCases.indexOf(plainChar) : lowerCases.indexOf(plainChar);
  let cipherIndex = plainIndex % 2 ? plainIndex + 6 : plainIndex + 4;
  if (cipherIndex > 25) {
    cipherIndex -= 26;
  }
  return isUpperCase ? upperCases[cipherIndex] : lowerCases[cipherIndex];
};

function substitutionCipher(plainText) {
  let cipherText = '';
  const nonAlphabeticPattern = /[a-zA-Z]/;
  [...plainText].forEach((plainChar) => {
    if (nonAlphabeticPattern.test(plainChar)) {
      const cipherLetter = getCipherLetter(plainChar);
      cipherText += cipherLetter;
    } else cipherText += plainChar;
  });
  return cipherText;
}

export {
  substitutionCipher,
};
