
function generatorIterable() {
  let i = 1;
  return {
    [Symbol.iterator]: () => ({
      next: () => {
        if (i < 6) {
          i += 1;
          return {
            value: i - 1,
            done: false,
          };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    }),
  };
}

export {
  generatorIterable,
};
