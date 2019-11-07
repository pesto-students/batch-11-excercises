
function binaryAgent(binaryString) {
  var translatedString = "";
  var binaryArray = binaryString.split(' ')

  binaryArray.forEach(binaryElement => {
    translatedString = translatedString + String.fromCharCode(parseInt(binaryElement, 2));
  });

  return translatedString;
}

export {
  binaryAgent,
};
