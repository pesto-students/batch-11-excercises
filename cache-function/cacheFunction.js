
function cacheFunction(cacheFunc) {
  const cacheObject = {};
  function callback(...args) {
    if (cacheObject[args] === undefined) {
      cacheObject[args] = true;
      return cacheFunc(...args);
    }
    return cacheObject[args];
  }
  return callback;
}

export {
  cacheFunction,
};
