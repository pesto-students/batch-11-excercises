
function alphabeticShift(word) {
  const letters = word.split('');
  const shiftedLetters = letters.map(shift);
  return shiftedLetters.join('');
}

const shift = (letter) => {
  const unicodePointValue = letter.charCodeAt(0);
  const shiftedUnicodePointValue = unicodePointValue + 1;
  const shiftedLetter = String.fromCharCode(shiftedUnicodePointValue);
  return shiftedLetter;
}

export {
  alphabeticShift,
};
