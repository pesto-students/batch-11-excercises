function alphabeticShift(string) {
  let output = '';
  let charCode = 0;
  for (let i = 0; i < string.length; i += 1) {
    charCode = string[i].charCodeAt() + 1;
    output += String.fromCharCode(charCode);
  }
  return output;
}

export {
  alphabeticShift,
};
