
function proxyIterable(array) {
  const proxy = new Proxy(array, {
    get(target, key, value) {
      if (key === 'increment') {
        return target.map((fixture) => fixture.increment(value));
      }
      return Reflect.get(target, key, value);
    },
  });
  return proxy;
}

export {
  proxyIterable,
};
