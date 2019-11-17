
const rangeIter = (start, end) => {
  if (start === undefined || end === undefined) {
    throw new TypeError('undefined is not a number');
  }
  if (isNaN(start) || isNaN(end)) {
    const errVariable = isNaN(start) ? start : end;
    throw new TypeError(`${errVariable} is not a number`);
  }

  const iterObj = {
    current: start - 1,
    end,
    [Symbol.iterator]() {
      return this;
    },
    next() {
      this.current += 1;
      if (this.current > this.end) {
        return { done: true };
      }
      return { done: false, value: this.current };
    },
  };

  return iterObj;
};

export {
  rangeIter,
};
