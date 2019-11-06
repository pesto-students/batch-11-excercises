
function limitFunctionCallCount(callback, limit) {
  let count = limit;
  function callbackInvoker(...params) {
    if (count) {
      count -= 1;
      return callback(...params);
    }
    return null;
  }
  return callbackInvoker;
}

export {
  limitFunctionCallCount,
};
