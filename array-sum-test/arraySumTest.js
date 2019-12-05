const add = (total, addend) => total + addend;

function arraySumTest(fixture) {
  return fixture.reduce(add);
}

export {
  arraySumTest,
};
