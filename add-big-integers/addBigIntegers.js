
function addBigIntegers(numberString) {
  const numbers = numberString.split('\n').slice(1);
  let remainder = 0;
  let largestNumberLength = 0;
  const sum = [];
  const reversedNumbers = numbers.map((number) => {
    if (largestNumberLength <= number.length) {
      largestNumberLength = number.length;
    }
    return number.split('').reverse().join('');
  });
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i <= largestNumberLength - 1; i++) {
    let columnSum = 0;
    reversedNumbers.forEach((number) => {
      if (number[i]) {
        columnSum += parseInt(number[i], 10);
      }
    });
    columnSum += remainder;
    remainder = Math.floor(columnSum / 10);
    sum[i] = columnSum % 10;
  }
  if (remainder > 0) {
    sum[largestNumberLength] = remainder;
  }
  return sum.reverse().join('');
}

export {
  addBigIntegers,
};
