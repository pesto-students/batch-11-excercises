const setDefaultProperty = (object, defaultValue) => {
  const proxy = new Proxy(object, {
    get(target, prop) {
      if (prop in target) {
        return target[prop];
      }
      return defaultValue;
    },
  });
  return proxy;
};

export {
  setDefaultProperty,
};
