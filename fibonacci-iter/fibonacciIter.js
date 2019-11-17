const fibonacciIter = {
  [Symbol.iterator]() {
    let lastFib = 0;
    let nextFib = 1;
    let i = 0;
    const iterator = {
      next() {
        if (i === 0) {
          lastFib = 1;
          i += 1;
          return { value: lastFib, done: false };
        }
        i += 1;
        const fibNumber = lastFib + nextFib;
        lastFib = nextFib;
        nextFib = fibNumber;
        return { value: fibNumber, done: false };
      },
    };
    return iterator;
  },
};

export { fibonacciIter };
