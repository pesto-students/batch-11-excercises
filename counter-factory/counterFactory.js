function counterFactory() {
  const counterBox = {
    counts: 0,
    increment() {
      this.counts += 1;
      return this.counts;
    },
    decrement() {
      this.counts -= 1;
      return this.counts;
    },
  };
  return counterBox;
}

export {
  counterFactory,
};
