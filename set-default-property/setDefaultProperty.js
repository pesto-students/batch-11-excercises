
function setDefaultProperty(obj, defaultValue) {
  const handler = {
    get(target, propName) {
      if (!(propName in target)) {
        target[propName] = defaultValue;
      }
      return target[propName];
    },
    set(target, propName, val) {
      target[propName] = val;
    },
  };
  return new Proxy(obj, handler);
}

export {
  setDefaultProperty,
};
