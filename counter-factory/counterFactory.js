
function counterFactory() {
  return {
    count: 0,
    increment() {
      this.count += 1;
      return this.count;
    },
    decrement() {
      this.count -= 1;
      return this.count;
    },
  };
}

export {
  counterFactory,
};
