
function convertBinaryToAscii(binaryString) {
  // One liner
  // return binaryString.split(' ').map(x => String.fromCharCode(Number.parseInt(x, 2))).join('');

  const binaryLetters = binaryString.split(' ');
  function convertBinaryCharacterToAscii(binaryRepresentation) {
    const integerRepresentation = Number.parseInt(binaryRepresentation, 2);
    const asciiCharacter = String.fromCharCode(integerRepresentation);
    return asciiCharacter;
  }
  const asciiLetters = binaryLetters.map(convertBinaryCharacterToAscii);
  const asciiString = asciiLetters.join('');
  return asciiString;
}

export {
  convertBinaryToAscii,
};
