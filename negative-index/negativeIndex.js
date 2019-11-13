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
        return target[prop];
      }
      const index = Number(prop);

      if (Number.isNaN(index)) {
        return Reflect.set(target, prop, value);
      }

      target[index < 0 ? target.length + index : index] = value;

      return true;
    },
  });
}

export {
  negativeIndex,
};
