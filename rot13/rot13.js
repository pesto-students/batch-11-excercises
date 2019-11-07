/* eslint-disable no-continue */
function getDecryptedWord(encryptedWord) {
  let decryptedWord = '';
  const listOfAlphabetsFromWord = encryptedWord.split('');
  const ALPHABETS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  for (let i = 0; i < listOfAlphabetsFromWord.length; i += 1) {
    if (!ALPHABETS.includes(listOfAlphabetsFromWord[i])) continue;
    else {
      let asciiValueOfCharacter = listOfAlphabetsFromWord.charCodeAt(i);
      if (asciiValueOfCharacter + 13 > 90) {
        asciiValueOfCharacter = asciiValueOfCharacter + 13 - 90 + 65;
        decryptedWord += String.fromCharCode(asciiValueOfCharacter);
      } else {
        decryptedWord += String.fromCharCode(asciiValueOfCharacter);
      }
    }
  }
  return decryptedWord;
}

function rot13(encryptedText) {
  const encryptedTextList = encryptedText.split(' ');
  const decryptedTextList = [];
  encryptedTextList.forEach((word) => {
    decryptedTextList.push(getDecryptedWord(word));
  });
  const decryptedText = decryptedTextList.join(' ');
  return decryptedText;
}

export {
  rot13,
};
