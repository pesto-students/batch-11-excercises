function negativeIndex(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array');
  }

  return new Proxy(array, {
    get(target, prop) {
      if (typeof prop === 'symbol') {
        return target[prop];
      }
      const index = Number(prop);

      if (Number.isNaN(index)) {
        return Reflect.get(target, prop);
      }

      return target[index < 0 ? target.length + index : index];
    },
    set(target, prop, value) {
      if (typeof prop === 'symbol') {
        return Reflect.set(target, prop, value);
      }
      const index = parseInt(prop, 10);
      if (Number.isNaN(index)) {
        return Reflect.set(target, prop, value);
      }
      let newIndex = index;
      if (prop < 0) {
        newIndex = target.length + index;
      }
      return Reflect.set(target, newIndex, value);
    },
  });
}

export {
  negativeIndex,
};
