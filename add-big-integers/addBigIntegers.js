function addBigIntegers(stringOfnumbers) {
  const numbersArray = stringOfnumbers.split('\n').slice(1);
  let largestNumber = 0;
  let remainder = 0;
  const addBigNumbers = [];
  const reversednumberStrings = numbersArray.map((numberString) => {
    if (largestNumber <= numberString.length) {
      largestNumber = numberString.length;
    }
    return numberString.split('').reverse().join('');
  });
  for (let i = 0; i <= largestNumber - 1; i += 1) {
    let sumofStrings = 0;
    reversednumberStrings.forEach((number) => {
      if (number[i]) {
        sumofStrings += parseInt(number[i], 10);
      }
    });
    sumofStrings += remainder;
    remainder = Math.floor(sumofStrings / 10);
    addBigNumbers[i] = sumofStrings % 10;
  }
  if (remainder > 0) {
    addBigNumbers[largestNumber] = remainder;
  }
  return addBigNumbers.reverse().join('');
}

export {
  addBigIntegers,
};
