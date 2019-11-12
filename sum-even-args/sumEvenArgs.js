function sumEvenArgs(...array) {
  const isEven = (element) => element % 2 === 0;
  const sum = (acc, el) => acc + el;
  return array.filter(isEven).reduce(sum, 0);
}

export {
  sumEvenArgs,
};
