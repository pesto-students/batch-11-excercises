const simpleIterable = () => ({
  [Symbol.iterator]() {
    this.current = 0;
    return this;
  },

  next() {
    if (this.current < 5) {
      this.current += 1;
      return {
        done: false,
        value: this.current,
      };
    }
    return {
      done: true,
    };
  },
});

export {
  simpleIterable,
};
