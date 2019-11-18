
function setDefaultProperty(targetObj, defaultValue) {
  const defaultPropHandler = {
    get(obj, prop) {
      if (!(prop in obj)) {
        return defaultValue;
      }
      return obj[prop];
    },
  };

  return new Proxy(targetObj, defaultPropHandler);
}

export {
  setDefaultProperty,
};
