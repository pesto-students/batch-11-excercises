
function counterFactory() {
  const counterFactoryObject = {
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

  return counterFactoryObject;
}

export {
  counterFactory,
};
