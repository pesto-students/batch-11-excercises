
function limitFunctionCallCount(fn, count) {

  const callBack = (...args) => {
    if (count > 0) {
      count -= 1;
      return fn(...args)
    }
    return null;
  }
  return callBack;
}

export {
  limitFunctionCallCount,
};
