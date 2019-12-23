
function doubleOddNumbers(numbers) {
  const oddNumberPredicate = ((number) => number % 2 !== 0);
  const doublePredicate = ((number) => number * 2);
  return numbers.filter(oddNumberPredicate).map(doublePredicate);
}

export {
  doubleOddNumbers,
};
