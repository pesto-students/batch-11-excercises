
function memoize(processor) {
  let cache = {};
  return function (...inputs) {
    if (cache[inputs]) {
      return cache[inputs];
    } else {
      cache[inputs] = processor(...inputs);
      return cache[inputs];
    }
  }
}

export {
  memoize,
};
