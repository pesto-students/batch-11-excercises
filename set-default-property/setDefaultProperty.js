
function setDefaultProperty(object, defaultValue) {
  const handleDefaultProp = {
    get(target, prop) {
      if (!(prop in target)) {
        return defaultValue;
      }
      return Reflect.get(target, prop);
    },
  };

  return new Proxy(object, handleDefaultProp);
}

export {
  setDefaultProperty,
};
