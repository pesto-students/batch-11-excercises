
function fibonacciIter() {
}

fibonacciIter[Symbol.iterator] = () => {
  let previousFibonacciNumber = 0;
  let penultimateFibonacciNumber = 1;
  let i = 0;
  return {
    next() {
      if (i === 0) {
        previousFibonacciNumber = 1;
        i += 1;
        return {
          value: 1,
          done: false,
        };
      }
      i += 1;
      const fibNumber = previousFibonacciNumber + penultimateFibonacciNumber;
      penultimateFibonacciNumber = previousFibonacciNumber;
      previousFibonacciNumber = fibNumber;
      return {
        value: fibNumber,
        done: false,
      };
    },
  };
};

export {
  fibonacciIter,
};
