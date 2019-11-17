
function setDefaultProperty(obj, defaultProperty) {
  const proxy = new Proxy(obj, {
    get(target, key, value) {
      if (!Object.prototype.hasOwnProperty.call(target, key)) {
        return defaultProperty;
      }
      return Reflect.get(target, key, value);
    },
  });
  return proxy;
}

export {
  setDefaultProperty,
};
