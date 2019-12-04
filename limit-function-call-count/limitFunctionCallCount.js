
function limitFunctionCallCount(returnFunction, limit) {
  let restriction = limit;

  function limitFunction(...args) {
    if (restriction) {
      restriction -= 1;
      return returnFunction(...args);
    }
    return null;
  }
  return limitFunction;
}

export {
  limitFunctionCallCount,
};
