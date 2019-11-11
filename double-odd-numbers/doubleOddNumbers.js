
function doubleOddNumbers(numbers) {
  const oddNumberDoubled = [];
  for (const number of numbers) {
    if (number % 2 !== 0) {
      oddNumberDoubled.push(number * 2);
    }
  }
  return oddNumberDoubled;
}

export {
  doubleOddNumbers,
};
