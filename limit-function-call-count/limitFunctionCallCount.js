
function limitFunctionCallCount(action, n) {
  let times = 0;
  return (...args) => {
    if (times < n) {
      times += 1;
      return action(...args);
    }
    return null;
  };
}

export {
  limitFunctionCallCount,
};
