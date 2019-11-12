function simpleIterable() {
  let nextIndex = 1;

  return {
    [Symbol.iterator]() {
      return this;
    },

    next() {
      if (nextIndex < 6) {
        return {
          done: false,
          // eslint-disable-next-line no-plusplus
          value: nextIndex++,
        };
      }
      return {
        done: true,
      };
    },
  };
}


export {
  simpleIterable,
};
