
function alphabeticShift(string) {
  const characters = string.split('');
  const nextAlphabet = (char) => String.fromCharCode(char.charCodeAt(0) + 1);
  return characters.map(nextAlphabet).join('');
}

export {
  alphabeticShift,
};
