
function tripleAndFilter(numbers) {
  const tripledNumbers = numbers.map((number) => number * 3);
  return tripledNumbers.filter(isDivisibleBy5);
}

function isDivisibleBy5(number) {
  return number % 5 === 0;
}

export {
  tripleAndFilter,
};
