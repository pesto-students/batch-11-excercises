
function simpleIterable() {
  const iterable = {
    [Symbol.iterator]() {
      this.value = 0;
      return this;
    },
    next() {
      this.value += 1;
      if (this.value > 5) {
        return { done: true, value: undefined };
      }
      return { done: false, value: this.value };
    },
  };
  return iterable;
}

export {
  simpleIterable,
};
