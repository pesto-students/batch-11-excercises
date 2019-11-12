function tripleAndFilter(array) {
  const triple = (el) => el * 3;
  const divisibleBy5 = (el) => el % 5 === 0;

  return array.map(triple)
    .filter(divisibleBy5);
}

export {
  tripleAndFilter,
};
