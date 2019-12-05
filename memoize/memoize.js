function memoize(regularFunction) {
  const cache = {};
  return function memo(...args) {
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
