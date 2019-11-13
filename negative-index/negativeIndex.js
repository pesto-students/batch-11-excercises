
function negativeIndex(randomArray) {
  if (!Array.isArray(randomArray)) {
    throw new TypeError('Only arrays are supported');
  }

  const handleNegativeIndex = {
    get(target, prop) {
      const index = parseInt(prop, 10);
      if (index < 0) {
        return Reflect.get(target, target.length + index);
      }
      return Reflect.get(target, index);
    },

    set(target, prop, value) {
      const index = parseInt(prop, 10);
      if (index < 0) {
        return Reflect.set(target, target.length + index, value);
      }
      return Reflect.set(target, index, value);
    },

  };

  const proxyArray = new Proxy(randomArray, handleNegativeIndex);
  return proxyArray;
}

export {
  negativeIndex,
};
