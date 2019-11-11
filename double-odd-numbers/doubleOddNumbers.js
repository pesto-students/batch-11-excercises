
function doubleOddNumbers(numbers) {
  return numbers.filter((x) => x % 2 !== 0).map((x) => x * 2);
}

export {
  doubleOddNumbers,
};
