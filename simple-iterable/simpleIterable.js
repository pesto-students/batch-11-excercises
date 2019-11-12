const simpleIterable = () => {
  [Symbol.iterator] = () => {
    let i = 0;
    return {
      next() {
        i += 1;
        if (i < 6) {
          return {
            done: false,
            value: i,
          };
        }

        return {
          done: true,
        };
      },
    };
  };
};

export {
  simpleIterable,
};
