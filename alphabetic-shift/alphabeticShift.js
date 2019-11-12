
function alphabeticShift(alphabets) {
  const characters = alphabets.split('');
  const shiftByOneChar = (char) => {
    const charCode = char.charCodeAt();
    if (charCode === 'z'.charCodeAt()) {
      return 'a';
    }
    if (charCode === 'Z'.charCodeAt()) {
      return 'A';
    }
    return String.fromCharCode(charCode + 1);
  };
  return characters.map(shiftByOneChar).join('');
}

export {
  alphabeticShift,
};
