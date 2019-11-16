const privateProps = (object, privateFilter) => {
  const proxy = new Proxy(object, {
    ownKeys(target) {
      const keys = Object.keys(target);
      const filteredPrivate = keys.filter((key) => !privateFilter(key));
      return filteredPrivate;
    },
    has(target, key) {
      if (privateFilter(key)) {
        return false;
      }
      return Reflect.has(target, key);
    },
    set(target, property, value) {
      if (privateFilter(property)) {
        throw TypeError(`Can't set property ${property}`);
      }
      return Reflect.set(target, property, value);
    },
  });
  return proxy;
};

export { privateProps };
