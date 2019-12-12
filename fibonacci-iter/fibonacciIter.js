
const fibonacciIter = {
  [Symbol.iterator]() {
    this.first = 0;
    this.second = 1;
    return this;
  },
  next() {
    this.second += this.first;
    this.first = this.second - this.first;
    return { done: false, value: this.second };
  },
};

export {
  fibonacciIter,
};
