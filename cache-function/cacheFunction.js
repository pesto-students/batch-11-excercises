
function cacheFunction(...args) {
  let callback = args[0];
  var callbackResults = {};
  function cachedFunction(arg) {
    if (callbackResults.hasOwnProperty(arg))
      return callbackResults[arg];
    let result = callback(arg);
    callbackResults[arg] = result;
    return result;
  }
  return cachedFunction;
}

export {
  cacheFunction,
};
