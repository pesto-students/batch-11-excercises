
function bind(fn, thisBinding, ...numbers) {
  return function boundFn(...arg) {
    return fn.call(thisBinding, ...numbers, ...arg);
  };
}

export {
  bind,
};
