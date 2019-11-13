function alphabeticShift(string) {
  const shiftCharacter = (character) => String.fromCharCode(character.charCodeAt(0) + 1);
  return string.split('')
    .map(shiftCharacter)
    .join('');
}

export {
  alphabeticShift,
};
