const ALPHABET_ARRAY = 'abcdefghijklmnopqrstuvwxyz'.split('');

// Assuming a proper alphabet will be provided.
const isUpperCase = (alphabet) => alphabet.charCodeAt() >= 65 && alphabet.charCodeAt() <= 90;

function alphabeticShift(alphabets) {
  const completeAlphabets = ALPHABET_ARRAY;
  const shiftAlphabet = (alphabet) => {
    const alphabetCode = alphabet.toLowerCase().charCodeAt();
    const incrementedChar = completeAlphabets[((alphabetCode - 97) % 26) + 1];
    return isUpperCase(alphabet) ? incrementedChar.toUpperCase() : incrementedChar;
  };
  return alphabets.split('').map(shiftAlphabet).join('');
}

export {
  alphabeticShift,
};
