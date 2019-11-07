
function isPalindrome(testInput) {
  if(typeof testInput ==='number'){
    testInput = testInput.toString();
  }
  var sanitizedString = testInput.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  var reversedString = sanitizedString.split("").reverse().join("");

  return sanitizedString===reversedString;
}

export {
  isPalindrome,
};
