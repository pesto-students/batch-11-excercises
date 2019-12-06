
function sumAll(range) {
  const lowestToHighest = range.sort((number1, number2) => number1 - number2);
  const low = lowestToHighest[0];
  const high = lowestToHighest[lowestToHighest.length - 1];
  let sumOfRange = 0;
  for (let i = low; i <= high; i++) {
    sumOfRange += i;
  }
  return sumOfRange;
}

export {
  sumAll,
};
