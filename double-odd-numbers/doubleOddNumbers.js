
function doubleOddNumbers(numbers) {
  const isOdd = (num) => num % 2 !== 0;
  const double = (num) => num * 2;
  return numbers.filter(isOdd).map(double);
}

export {
  doubleOddNumbers,
};
