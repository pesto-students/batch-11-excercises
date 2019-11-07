
function rot13(...args) {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const encodedString = args[0];
  let decodedString = '';
  const nonAlphabeticPattern = /[_ !,.]/;
  for (let i = 0; i < encodedString.length; i++) {
    const encodedChar = encodedString[i];
    if (nonAlphabeticPattern.test(encodedChar)) continue;
    let shiftedIndex = alphabets.indexOf(encodedChar) + 13;
    if (shiftedIndex > 26) shiftedIndex = shiftedIndex % 26;
    decodedString += alphabets[shiftedIndex];
  }
  return decodedString;
}

export {
  rot13,
};
