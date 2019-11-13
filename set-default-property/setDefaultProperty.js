
function setDefaultProperty(object, defaultValue) {
  const handleDefaultProp = {
    get(target, prop) {
      if (!(prop in target)) {
        return defaultValue;
      }
      return target[prop];
    },
  };

  return new Proxy(object, handleDefaultProp);
}

export {
  setDefaultProperty,
};
