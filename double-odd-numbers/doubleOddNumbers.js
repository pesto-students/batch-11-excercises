
function doubleOddNumbers(numbers) {
  const oddNumbers = numbers.filter(isOdd);
  return oddNumbers.map((number) => number * 2);
}

function isOdd(number) {
  return number % 2 !== 0;
}
export {
  doubleOddNumbers,
};
