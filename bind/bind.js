
function bind(fn, thisBinding, ...numbers) {
  return function bindedFn(...arg) {
    return fn.call(thisBinding, ...numbers, ...arg);
  };
}

export {
  bind,
};
