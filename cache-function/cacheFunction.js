function cacheFunction(callback) {
  const cache = {};
  function cacheFn(...args) {
    if (cache[args] === undefined) {
      cache[args] = true;
      return callback(...args);
    }
    return cache[args];
  }
  return cacheFn;
}

export { cacheFunction };
