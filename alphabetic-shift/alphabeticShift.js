
function alphabeticShift(string) {
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let shiftedString = '';
  for (const char of string) {
    let charIndex = alphabets.indexOf(char);
    if (charIndex === 25) charIndex = 0;
    else if (charIndex === 51) charIndex = 26;
    const shiftedChar = alphabets[charIndex + 1];
    shiftedString += shiftedChar;
  }
  return shiftedString;
}

export {
  alphabeticShift,
};
