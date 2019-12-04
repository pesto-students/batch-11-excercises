function cacheFunction(fn) {
  const cache = {};
  return function cbFunction(...args) {
    const n = args[0];
    if (n in cache) {
      return cache[n];
    }

    const result = fn(n);
    cache[args] = result;

    return result;
  };
}

export {
  cacheFunction,
};
