const simpleIterable = () => {
  const iterable = {
    [Symbol.iterator]() {
      let it = 0;
      const iterator = {
        next() {
          if (it < 5) {
            it += 1;
            for (let i = 1; i <= 5; i += 1) {
              return { value: it, done: false };
            }
          }
          return { value: undefined, done: true };
        },
      };
      return iterator;
    },
  };
  return iterable;
};

export { simpleIterable };
