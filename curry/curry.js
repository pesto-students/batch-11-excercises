function curry(func) {
  return function curriedFunction(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curriedFunction.apply(this, args.concat(args2));
      }
    }
  };
}
export {
  curry,
};
