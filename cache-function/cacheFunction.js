
function cacheFunction(callback) {
  const cache = [];
  return function (argumentsToCallBack) {
    if (!cache.includes(argumentsToCallBack)) {
      cache.push(argumentsToCallBack);
      return callback(argumentsToCallBack);
    }
  }
}

export {
  cacheFunction,
};
