function proxyIterable(array) {
  const iterable = {
    array,
    index: -1,
    [Symbol.iterator]() {
      return this;
    },
    get: (target, prop) => {
      // console.log(target, prop);
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