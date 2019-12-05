const fib = (num) => {
  if (num <= 2) {
    return 1;
  }
  return fib(num - 1) + fib(num - 2);
};

const sumFibs = (upperBound) => {
  let sum = 0;
  let fibNumber = 0;
  let counter = 1;
  while (fibNumber < upperBound) {
    fibNumber = fib(counter);
    counter += 1;
    if (fibNumber % 2 !== 0 && fibNumber < upperBound) {
      sum += fibNumber;
    }
  }
  return sum;
};

export { sumFibs };
