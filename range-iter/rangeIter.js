const validateInputs = (num1, num2) => {
  if (num1 === undefined || num2 === undefined) {
    throw new TypeError('Pl supply correct inputs');
  }
  if (typeof num1 !== 'number') {
    throw new TypeError(`${num1} is not a number`);
  }
  if (typeof num2 !== 'number') {
    throw new TypeError(`${num2} is not a number`);
  }
};

const rangeIter = (start, end) => {
  validateInputs(start, end);
  const iterator = {
    [Symbol.iterator]() {
      this.start = start;
      return this;
    },
    next() {
      if (this.start > end) {
        return { done: true };
      }
      if (this.start <= end) {
        const value = this.start;
        this.start += 1;
        return { done: false, value };
      }
      return { done: true };
    },
  };
  return iterator;
};

export {
  rangeIter,
};
