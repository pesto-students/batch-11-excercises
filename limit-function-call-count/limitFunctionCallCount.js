function limitFunctionCallCount(callback, restrictUpTo) {
  let restrictCount = restrictUpTo;
  function limitFunction(...args) {
    if (restrictCount) {
      restrictCount -= 1;
      return callback(...args);
    }
    return null;
  }
  return limitFunction;
}

export { limitFunctionCallCount };
