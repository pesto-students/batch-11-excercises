function negativeIndex(array) {
  if (!Array.isArray(array)) {
    throw TypeError('Only arrays are supported');
  }
  return new Proxy(array, {
    get(obj, prop) {
      if (typeof prop === 'symbol') {
        return obj[prop];
      }
      const index = parseInt(prop, 10);
      if (isNaN(index)) {
        return obj[prop];
      }
      let newIndex = index;
      if (prop < 0) {
        newIndex = obj.length + index;
      }
      return obj[newIndex];
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
      if (prop < 0) {
        newIndex = obj.length + index;
      }
      return Reflect.set(obj, newIndex, value);
    },
  });
}

export {
  negativeIndex,
};
