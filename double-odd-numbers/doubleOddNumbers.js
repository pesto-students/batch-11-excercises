
const isOdd = (number) => number % 2 !== 0;
const double = (number) => number * 2;
const doubleOddNumbers = (numbers) => numbers.filter(isOdd).map(double);

export {
  doubleOddNumbers,
};
