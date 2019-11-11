
function alphabeticShift(inputString) {
  const charArray = inputString.split('');
  const shiftByOneChar = (char) => String.fromCharCode(char.charCodeAt() + 1);

  return charArray.map(shiftByOneChar).join('');
}

export {
  alphabeticShift,
};
