
function alphabeticShift(inputString) {
  const charArray = inputString.split('');

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

  return charArray.map(shiftByOneChar).join('');
}

export {
  alphabeticShift,
};
