
function counterFactory() {
  const countObject = {
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
  return countObject;
}

export {
  counterFactory,
};
