
function memoize(func) {
  const cache = {};
  return (...args) => {
    const argsString = args.toString();
    if (argsString in cache) {
      return cache[argsString];
    }
    cache[argsString] = func.apply(this, args);
    return cache[argsString];
  };
}

export {
  memoize,
};
