/* eslint-disable func-names */

function memoize(regularFunction) {
  const cache = {};
  return function (...args) {
    const key = args.join('');
    if (!cache[key]) {
      cache[key] = regularFunction(...args);
    }
    return cache[key];
  };
}

export {
  memoize,
};
