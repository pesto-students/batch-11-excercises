function privateProps(target, privacyFilter) {
  for (const key of Object.keys(target)) {
    if (privacyFilter(key) === true) {
      Object.defineProperty(target, key, {
        enumerable: false,
      });
    }
  }
  return new Proxy(target, {
    has(target, prop) {
      if (privacyFilter(prop) === true) {
        return false;
      }
      return true;
    },
    set(target, prop, value) {
      if (privacyFilter(prop) === true) {
        throw TypeError('Can\'t set property "_private"');
      }
      target[prop] = value;
      return true;
    },
  });
}

export {
  privateProps,
};
