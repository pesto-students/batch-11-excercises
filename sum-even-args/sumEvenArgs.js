
function sumEvenArgs(...numbers) {
  return numbers.filter((x) => x % 2 === 0).reduce((x, y) => x + y, 0);
}

export {
  sumEvenArgs,
};
