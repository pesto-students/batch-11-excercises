
function binaryAgent(...args) {
  const binaryString = args[0];
  const binaryWordArray = binaryString.split(' ');
  const charArray = binaryWordArray.map((binaryWord) => {
    const Char = String.fromCharCode(parseInt(binaryWord, 2));
    return Char;
  });
  let englishString = '';
  charArray.forEach((Char) => {
    englishString += Char;
  });
  return englishString;
}

export {
  binaryAgent,
};
