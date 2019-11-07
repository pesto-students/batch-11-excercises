
function binaryAgent(binarySentence) {
  let binaryWordsInTheSentence = binarySentence.split(' ');
  let wordsInTheSentence = binaryWordsInTheSentence.map(word => String.fromCharCode(parseInt(word, 2)));
  return wordsInTheSentence.reduce((formedSentence, singleCharacter) => formedSentence + singleCharacter, '');
}

export {
  binaryAgent,
};
