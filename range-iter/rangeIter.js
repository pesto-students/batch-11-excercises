
function rangeIter(low, high) {
  if (typeof low !== 'number') {
    throw new TypeError('low is not a number');
  }
  if (typeof high !== 'number') {
    throw new TypeError('high is not a number');
  }
  const iterator = {
    state: low,
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (this.state > high) {
        return {
          done: true,
        }
      } else {
        return {
          value: this.state++,
          done: false
        }
      }
    }
  }
  return iterator;
}

export {
  rangeIter,
};
