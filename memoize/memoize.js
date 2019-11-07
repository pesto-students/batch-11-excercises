function memoize(expensive) {
  const cache = {};
  return function(...args) {
    const key = args.join("");
    if (!cache[key]) {
      cache[key] = expensive(...args);
    }
    return cache[key];
  };
}

export { memoize };
