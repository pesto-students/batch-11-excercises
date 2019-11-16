
function simpleIterable() {
  let i = 0;
  return {
    [Symbol.iterator]() {
      return {
        next() {
          i += 1;
          if (i === 6) {
            return {
              value: undefined,
              done: true,
            };
          }
          return {
            value: i,
            done: false,
          };
        },
      };
    },
  };
}

export {
  simpleIterable,
};
