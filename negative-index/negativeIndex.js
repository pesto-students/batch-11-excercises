
function negativeIndex(arr) {
  if (!(arr instanceof Array)) {
    throw TypeError('Please pass array as argument. Only arrays are supported');
  }
  const proxy = new Proxy(arr, {
    get(target, property) {
      if (typeof property !== 'symbol') {
        const index = parseInt(property, 10);
        if (index < 0) {
          const actualIndex = index + target.length;
          return target[actualIndex];
        }
        return Reflect.get(target, property);
      }
      return Reflect.get(target, property);
    },
    set(target, property, value) {
      const index = parseInt(property, 10);
      if (index < 0) {
        const actualIndex = index + target.length;
        // eslint-disable-next-line no-param-reassign
        target[actualIndex] = value;
        return true;
      }
      return Reflect.set(target, property, value);
    },
  });
  return proxy;
}

export {
  negativeIndex,
};
