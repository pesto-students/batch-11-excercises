const knownProp = (object) => {
  const proxy = new Proxy(object, {
    get(target, prop) {
      if (prop in target) {
        return target[prop];
      }
      throw new TypeError('Unknown property is accessed');
    },
  });
  return proxy;
};

export {
  knownProp,
};
