function defaultHandler(defaultValue) {
  return {
    get(target, property) {
      if (property in target) {
        return target[property];
      }
      return defaultValue;
    },
  };
}

const setDefaultProperty = (object, defaultValue) => {
  const proxy = new Proxy(object, defaultHandler(defaultValue));

  return proxy;
};

export { setDefaultProperty };
