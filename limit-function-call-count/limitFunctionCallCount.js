function limitFunctionCallCount(fncallback, limit) {
  let fncount = limit;

  function invokeTheFunc(...args) {
    if (fncount) {
      fncount -= 1;
      return fncallback(...args);
    }
    return null;
  }
  return invokeTheFunc;
}

export {
  limitFunctionCallCount,
};
