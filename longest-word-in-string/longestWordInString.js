
function findLongestWordInString(testString) {
  var lengthOfLogestWord = 0;
  var testStringArray = testString.split(" ");

  testStringArray.forEach(testWord => {
    if(lengthOfLogestWord<testWord.length) {
      lengthOfLogestWord = testWord.length
    }
  });

  return lengthOfLogestWord;
}

export {
  findLongestWordInString,
};
