
function limitFunctionCallCount(func, maximumAllowedCallCount) {
  let functionCallCount = 0;
  const isMaximumCallReached = () => functionCallCount >= maximumAllowedCallCount;
  const restrictedFunction = (...args) => {
    if (isMaximumCallReached()) return null;
    functionCallCount += 1;
    return func.apply(this, args);
  };
  return restrictedFunction;
}

export {
  limitFunctionCallCount,
};
