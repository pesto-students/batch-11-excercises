
function limitFunctionCallCount(callback, limit) {
  return (...args) => {
    if (limit > 0) {
      // eslint-disable-next-line no-param-reassign
      limit -= 1;
      return callback(...args);
    }
    return null;
  };
}

export {
  limitFunctionCallCount,
};
