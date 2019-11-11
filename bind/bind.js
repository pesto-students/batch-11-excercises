
function bind(fn, bindObj, ...args) {
  return fn.bind(bindObj, ...args);
}

export {
  bind,
};
