const fibonacciIter = {
  [Symbol.iterator]() {
    this.current = 1;
    this.previous = 0;
    return this;
  },
  next() {
    this.current = this.current + this.previous;
    this.previous = this.current - this.previous;
    return { done: false, value: this.current };
  },
};

export {
  fibonacciIter,
};
