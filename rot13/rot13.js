
const ALPHABETS_REGEX = /[A-Z]/;
const isAlphabet = (letter) => ALPHABETS_REGEX.test(letter);

const decode = (letter) => {
  const ENCODED_SERIES = 'NOPQRSTUVWXYZABCDEFGHIJKLM';
  const DECODED_SERIES = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return DECODED_SERIES.charAt(ENCODED_SERIES.indexOf(letter));
};

function rot13(sentence) {
  let decodedString = '';
  const encodedLetters = sentence.split('');
  const decodedLetters = encodedLetters.map((letter) => {
    if (isAlphabet(letter)) {
      return decode(letter);
    }
    return letter;
  });
  decodedString = decodedLetters.join('');
  return decodedString;
}

export {
  rot13,
};
