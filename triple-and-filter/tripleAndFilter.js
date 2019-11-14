
const triple = (number) => number * 3;
const isDivisibleBy5 = (number) => number % 5 === 0;
const tripleAndFilter = (numbers) => numbers.map(triple).filter(isDivisibleBy5);

export {
  tripleAndFilter,
};
