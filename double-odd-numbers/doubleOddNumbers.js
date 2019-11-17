function doubleOddNumbers(numbers) {
  const double = (number) => number * 2;
  const isOdd = (number) => number % 2 !== 0;
  const oddNUmbers = numbers.filter(isOdd);
  return oddNUmbers.map(double);
}

export {
  doubleOddNumbers,
};
