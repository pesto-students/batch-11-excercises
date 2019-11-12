function bind(outerFunction, thisArg, ...args) {
  return outerFunction.bind(thisArg, ...args);
}

export {
  bind,
};
