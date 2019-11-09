function cacheFunction(callback) {
  let cache = {};
  function helper(argument) {
    if (argument in cache) {
      return cache[argument];
    }
    cache[argument] = callback(argument);
    return cache[argument];
  }
  return helper;
}

export { cacheFunction };
