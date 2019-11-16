function simpleIterable() {
  const iterator = {
    state: 0,
    [Symbol.iterator]() {
      return this;
    },
    next() {
      this.state++;
      if (this.state === 6) {
        return {
          done: true
        }
      } else {
        return {
          value: this.state,
          done: false
        }
      }
    }
  };
  return iterator;
}

export {
  simpleIterable,
};
