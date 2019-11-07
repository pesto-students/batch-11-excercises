
function reverseString(actualString) {

  var reversedString =  actualString.split("").reverse().join("");

  return reversedString;
}

export {
  reverseString,
};
