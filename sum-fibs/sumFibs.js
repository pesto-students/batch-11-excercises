const isOdd = (number) => number % 2 === 1;


function sumFibs(count) {
  let [a, b] = [0, 1];
  let sum = 1;
  let iterationCount = count;
  while (iterationCount > 0) {
    const fibonacci = a + b;
    [a, b] = [b, a + b];
    iterationCount -= 1;
    if (isOdd(fibonacci) && fibonacci < count) {
      sum += fibonacci;
    }
  }
  return sum;
}

export {
  sumFibs,
};
