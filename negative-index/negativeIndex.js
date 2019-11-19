
function negativeIndex(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Only Arrays are supported');
  }
  const handler = {
    get: (target, prop) => {
      if (prop < 0) {
        const actualIndex = target.length + parseInt(prop);
        return target[actualIndex];
      }
      return target[prop];
    },
    set: (target, prop, value) => {
      if (prop < 0) {
        const actualIndex = target.length + parseInt(prop);
        target[actualIndex] = value;
        return true;
      }
      target[prop] = value;
      return target;
    },
  };
  const negativeIndexProxy = new Proxy(array, handler);
  return negativeIndexProxy;
}

export {
  negativeIndex,
};
