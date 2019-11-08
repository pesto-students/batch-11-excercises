
function memoize(fn) {
  const resultMap = {};
  return function memoized(...args) {
    const toReturnSavedResult = resultMap[args];
    if (toReturnSavedResult) {
      return resultMap[args];
    }
    const result = fn(...args);
    resultMap[args] = result;
    return result;
  };
}

export {
  memoize,
};
