function limitFunctionCallCount(callback, times) {
  let limit = times;
  function inside(...args) {
    if (limit) {
      limit--;
      return callback(...args);
    }
    return null;
  }
  return inside;
}

export { limitFunctionCallCount };
