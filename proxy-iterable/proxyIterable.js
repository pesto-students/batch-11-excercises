function proxyIterable(array) {
  const iterable = {
    array,
    index: -1,
    [Symbol.iterator]() {
      return this;
    },
    get: (target, prop) => {
      if (typeof target[0][prop] === 'function') {
        return function iterableFunction(...args) {
          const result = [];
          for (const [element, object] of target.entries()) {
            if (typeof object[prop] !== 'function') {
              throw Error(`Item ${element + 1} of the iterable is missing the ${prop}() method`);
            }
            result.push(object[prop](...args));
          }
          return result;
        };
      }
      return target[0][prop];
    },
    next() {
      this.index += 1;
      if (this.index === this.array.length) {
        return {
          done: true,
        };
      }
      return {
        value: this.array[this.index],
        done: false,
      };
    },
  };

  return new Proxy(array, iterable);
}

export {
  proxyIterable,
};
