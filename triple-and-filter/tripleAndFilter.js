
function tripleAndFilter(numbers) {
  const isDivisibleByFive = (number) => number % 5 === 0;
  const filteredNumbers = numbers.filter(isDivisibleByFive);

  return filteredNumbers.map((number) => number * 3);
}

export {
  tripleAndFilter,
};
