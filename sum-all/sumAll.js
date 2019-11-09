
function sumAll(...args) {
  const numArray = args[0];
  const sortedNumArray = numArray.sort((a, b) => a - b);
  let smallNum = sortedNumArray[0];
  const largeNum = sortedNumArray[1];
  let sum = 0;
  while (smallNum <= largeNum) {
    sum += smallNum;
    smallNum += 1;
  }
  return sum;
}

export {
  sumAll,
};
