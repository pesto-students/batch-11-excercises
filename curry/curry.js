
function curry(fn) {
  return function curried(...args) {
    if (args.length < fn.length) {
      return function pass(...args2) {
        return curried.apply(this, [...args, ...args2]);
      };
    }
    // eslint-disable-next-line prefer-spread
    return fn.apply(this, args);
  };
}

export {
  curry,
};
