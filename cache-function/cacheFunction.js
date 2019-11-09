
function cacheFunction(callback) {
  const cache = [];
  let cachedResult;
  return (arg) => {
    if (!cache.includes(arg)) {
      cache.push(arg);
      cachedResult = callback(arg);
    }
    return cachedResult;
  };
}

export {
  cacheFunction,
};
