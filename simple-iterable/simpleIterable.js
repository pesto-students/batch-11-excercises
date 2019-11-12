
function simpleIterable() {
  const iterable = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },
    next() {
      if (this.current <= this.to) {
        this.current += 1;
        return {
          value: this.current - 1,
          done: false,
        };
      }
      return {
        done: true,
      };
    },
  };
  return iterable;
}

export {
  simpleIterable,
};
