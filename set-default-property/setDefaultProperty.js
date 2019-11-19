
function setDefaultProperty(object, defaultValue) {
  const handler = {
    get: (target, property) => {
      if (property in target) {
        return target[property];
      }
      return defaultValue;
    },
  };
  const defaultValueProxy = new Proxy(object, handler);
  return defaultValueProxy;
}

export {
  setDefaultProperty,
};
