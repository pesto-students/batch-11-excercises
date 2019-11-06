
function cacheFunction(callback) {
  const cache = [];
  // eslint-disable-next-line consistent-return
  function callbackInvoker(argumentToCallback) {
    if (cache.indexOf(argumentToCallback) === -1) {
      cache.push(argumentToCallback);
      return callback(argumentToCallback);
    }
  }
  return callbackInvoker;
}

export {
  cacheFunction,
};
