
function tripleAndFilter(numbers) {
  const triple = number => number * 3;
  const divisibleBy5 = number => number % 5 === 0;
  return numbers.map(triple).filter(divisibleBy5);
}

export {
  tripleAndFilter,
};
