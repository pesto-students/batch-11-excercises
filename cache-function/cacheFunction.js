
function cacheFunction(func) {
  const cache = {};
  const cachedFunction = (...args) => {
    const key = JSON.stringify(args);
    if (Object.prototype.hasOwnProperty.call(cache, key)) {
      return cache[key];
    }
    const computedResult = func.call(null, args);
    const newKey = JSON.stringify(args);
    cache[newKey] = computedResult;
    return computedResult;
  };
  return cachedFunction;
}

export {
  cacheFunction,
};
