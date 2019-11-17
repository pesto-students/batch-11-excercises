function setDefaultProperty(object, defaultValue) {
  const handler = {
    get(target, prop) {
      if (prop in target) {
        return target[prop];
      }
      return defaultValue;
    },
  };
  return new Proxy(object, handler);
}

export {
  setDefaultProperty,
};
