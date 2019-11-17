
function tripleAndFilter(array) {
  const triples = array.map((number) => number * 3);
  const isDivisiableByFive = (number) => number % 5 === 0;
  return triples.filter(isDivisiableByFive);
}

export {
  tripleAndFilter,
};
