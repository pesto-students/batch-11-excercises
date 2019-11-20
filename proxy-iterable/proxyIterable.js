function proxyIterable(array) {
  const handler = {
    get: (target, prop) => {
      return function iterableFunction(...args) {
        const result = [];
        for (let i = 0; i < target.length; i += 1) {
          if (typeof target[i][prop] !== 'function') {
            throw Error(
              `Item ${i + 1} of the iterable is missing the ${prop}() method`,
            );
          }
          result.push(target[i][prop](...args));
        }
        return result;
      };
    },
  };

  return new Proxy(array, handler);
}

export { proxyIterable };
