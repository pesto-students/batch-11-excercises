
function limitFunctionCallCount(callback, timesCalled) {
  let countOfCalls = timesCalled;
  return function (...args) {
    if (countOfCalls > 0) {
      countOfCalls--;
      return callback(...args);
    } else {
      return null;
    }
  }
}

export {
  limitFunctionCallCount,
};
