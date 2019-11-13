
function negativeIndex(randomArray) {
  if (!Array.isArray(randomArray)) {
    throw new TypeError('Only arrays are supported');
  }

  const handleNegativeIndex = {
    get(target, prop) {
      const index = parseInt(prop, 10);
      if (typeof target[Symbol.iterator] !== 'function') {
        throw new TypeError('Only arrays are supported');
      }
      if (index < 0) {
        return target[target.length + index];
      }
      return target[index];
    },

    set(target, prop, value) {
      const array = target;
      const index = parseInt(prop, 10);
      if (index < 0) {
        array[array.length + index] = value;
        return array;
      }
      array[index] = value;
      return array;
    },

  };

  const proxyArray = new Proxy(randomArray, handleNegativeIndex);
  return proxyArray;
}

export {
  negativeIndex,
};
