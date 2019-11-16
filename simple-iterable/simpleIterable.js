function simpleIterable() {
  const iterable = {
    [Symbol.iterator]() {
      return this;
    },
    a: 0,
    next() {
      if (this.a < 5) {
        this.a += 1;
        return {
          value: this.a,
          done: false,
        };
      }
      return {
        value: undefined,
        done: true,
      };
    },
  };
  return iterable;
}

export {
  simpleIterable,
};
