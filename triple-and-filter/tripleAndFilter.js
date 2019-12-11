
function tripleAndFilter(numbers) {
  const tripledNumbers = Array.form(numbers, (number) => number * 3);
  const filteredTripledNumbers = tripledNumbers.filter((number) => number % 5 === 0);
  return filteredTripledNumbers;
}

export {
  tripleAndFilter,
};
