function rangeIter(lowerBound, upperBound) {
  if (lowerBound === undefined || upperBound === undefined) {
    throw TypeError('undefined is not a number');
  }
  if (typeof lowerBound === 'string' || typeof upperBound === 'string') {
    throw TypeError('a is not a number');
  }
  const iterable = {
    [Symbol.iterator]() {
      this.lb = lowerBound;
      this.ub = upperBound;
      return this;
    },
    next() {
      if (this.lb <= this.ub) {
        const nextObj = {
          value: this.lb,
          done: false,
        };
        this.lb += 1;
        return nextObj;
      }
      return {
        done: true,
      };
    },
  };
  return iterable;
}

export {
  rangeIter,
};
