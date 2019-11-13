
function privateProps(obj, privacyFilter) {
  const proxy = new Proxy(obj, {
    set(target, property, value, ...args) {
      if (privacyFilter(property)) {
        throw TypeError('Can\'t set property "_private"');
      }
      return Reflect.set(target, property, value, ...args);
    },
    ownKeys(target) {
      const keys = Reflect.ownKeys(target);
      return keys.filter((key) => !privacyFilter(key));
    },
    has(target, key, ...args) {
      if (privacyFilter(key)) {
        return false;
      }
      return Reflect.has(target, key, ...args);
    },
  });
  return proxy;
}

export {
  privateProps,
};
