
function alphabeticShift(alphabeticCharacter) {
  const splittedCharacter = alphabeticCharacter.split('');
  const finalCharacters = [];
  for (let i = 0; i < splittedCharacter.length; i += 1) {
    const charCode = (splittedCharacter[i].charCodeAt()) + 1;
    finalCharacters.push(String.fromCharCode(charCode));
  }
  return finalCharacters.join('');
}

export {
  alphabeticShift,
};
