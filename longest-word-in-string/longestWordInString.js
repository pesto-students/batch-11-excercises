
function findLongestWordInString(testString) {
  var lengthOfLongestWord = 0;
  var testStringArray = testString.split(" ");

  testStringArray.forEach(testWord => {
    if(lengthOfLongestWord<testWord.length) {
      lengthOfLongestWord = testWord.length
    }
  });

  return lengthOfLongestWord;
}

export {
  findLongestWordInString,
};
