function counterFactory() {
  const object = {
    count: 0,
    increment: function() {
      this.count = this.count + 1;
      return this.count;
    },

    decrement: function() {
      this.count = this.count - 1;
      return this.count;
    }
  };

  return object;
}

export { counterFactory };
