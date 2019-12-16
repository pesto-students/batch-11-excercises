
function curry(func) {
  const curried = (...args) => {
    if (args.length < func.length) {
      return (..._args) => curried(...args, ..._args);
    }
    return func(...args);
  };
  return curried;
}

export {
  curry,
};
