
function alphabeticShift(alphabets) {
  const shiftedAlphabets = [];
  for (let i = 0; i < alphabets.length; i += 1) {
    const charCode = alphabets.charCodeAt(i) + 1;
    shiftedAlphabets.push(String.fromCharCode(charCode));
  }
  return shiftedAlphabets.join('');
}

export {
  alphabeticShift,
};
