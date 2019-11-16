const fibonacciIter = {
  [Symbol.iterator]: () => {
    const obj = {
      a: 1,
      b: 2,
      next() {
        const current = this.a;
        this.a = this.b;
        this.b = this.a + current;
        return {
          value: current,
          done: false,
        };
      },
    };
    return obj;
  },
};

export {
  fibonacciIter,
};
