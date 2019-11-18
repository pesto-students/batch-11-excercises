function tripleAndFilter(numbers) {
  const finalArray = numbers
    .map(number => number * 3)
    .filter(number => number % 5 === 0);
  return finalArray;
}

export { tripleAndFilter };
