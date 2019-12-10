
function binaryAgent(binarySentence) {
  const asciiCodeInBinary = binarySentence.split(' ');
  const outputSentence = '';

  return asciiCodeInBinary.reduce((accumulator, asciiCode) => {
    const asciiCodeInDecimal = parseInt(asciiCode, 2);
    const characterInEnglish = String.fromCharCode(asciiCodeInDecimal);
    return accumulator + characterInEnglish;
  }, outputSentence);
}

export {
  binaryAgent,
};
