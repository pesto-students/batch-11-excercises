
function longestWordInString(largestString) {

  const [largestStringLength] = [...largestString.split(' ').sort((a, b) => { return b.length - a.length };)];
  return largestStringLength.length;
}

export {
  longestWordInString,
};
