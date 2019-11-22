
function curry(callback, ...args) {
  if (callback.length <= args.length) {
    return callback(...args);
  }
  return (...argumentsToCurriedFn) => curry(callback, ...args, ...argumentsToCurriedFn);
}

export {
  curry,
};
