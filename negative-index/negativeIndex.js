const negativeIndex = (array) => {
  if (!Array.isArray(array)) {
    throw TypeError('Only arrays are supported as an argument');
  }

  const proxy = new Proxy(array, {
    get(target, property) {
      const index = parseInt(property, 10);
      if (property < 0) {
        const positiveIndex = index + target.length;
        return target[positiveIndex];
      }
      return target[property];
    },

    set(target, property, value) {
      const index = parseInt(property, 10);
      if (index < 0) {
        const positiveIndex = index + target.length;
        target[positiveIndex] = value;
        return true;
      }
      target[index] = value;
      return target;
    },
  });

  return proxy;
};

export { negativeIndex };
