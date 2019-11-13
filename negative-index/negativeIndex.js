/* eslint-disable no-restricted-globals */

function negativeIndex(array) {
  if (!Array.isArray(array)) {
    throw TypeError('Only arrays are supported');
  }
  const negativeIndexHandler = {
    get(obj, prop) {
      if (typeof prop === 'symbol') {
        return Reflect.get(obj, prop);
      }
      const index = parseInt(prop, 10);
      if (isNaN(index)) {
        return Reflect.get(obj, prop);
      }
      let newIndex = index;
      if (newIndex < 0) {
        newIndex = obj.length + index;
      }
      return Reflect.get(obj, newIndex);
    },
    set(obj, prop, value) {
      if (typeof prop === 'symbol') {
        return Reflect.set(obj, prop, value);
      }
      const index = parseInt(prop, 10);
      if (isNaN(index)) {
        return Reflect.set(obj, prop, value);
      }
      let newIndex = index;
      if (newIndex < 0) {
        newIndex = obj.length + index;
      }
      return Reflect.set(obj, newIndex, value);
    },
  };

  const proxyArray = new Proxy(array, negativeIndexHandler);
  return proxyArray;
}

export {
  negativeIndex,
};
