function cacheFunction(fn) {
  const cache = {};
  return function cbFunction(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

export {
  cacheFunction,
};
