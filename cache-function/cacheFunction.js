
const cacheFunction = (toBeCached) => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(...args);
    if (key in cache) {
      return cache[key];
    }
    const result = toBeCached.apply(this, [...args]);
    cache[key] = result;
    return result;
  };
};

export {
  cacheFunction,
};
