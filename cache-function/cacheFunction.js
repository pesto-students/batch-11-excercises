
function cacheFunction(fn) {
  const cache = {};
  const callback = (args) => {
    console.log(cache);
    if (!cache.hasOwnProperty(args.toString())) {
      const result = fn(args);
      cache[args.toString()] = result;
      return result;
    }
    return cache[args.toString()];
  };

  return callback;
}

export {
  cacheFunction,
};
