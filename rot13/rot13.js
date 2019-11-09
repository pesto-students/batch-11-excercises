
function rot13(...args) {
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const encodedString = args[0];
  let decodedString = '';
  const alphabetPattern = /[A-Z]+/gi;
  for (let i = 0; i < encodedString.length; i++) {
    const encodedChar = encodedString[i];
    let decodedChar = encodedChar;
    if (encodedChar.match(alphabetPattern)) {
      let shiftedIndex = alphabets.indexOf(encodedChar) + 13;
      if (shiftedIndex > 25) shiftedIndex %= 26;
      decodedChar = alphabets[shiftedIndex];
    }
    decodedString += decodedChar;
  }
  return decodedString;
}

export {
  rot13,
};
