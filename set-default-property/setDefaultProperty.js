
function setDefaultProperty(object, defaultValue) {
  const handler = {
    get(target, name) {
      return name in target ? target[name] : defaultValue;
    },
  };
  return new Proxy(object, handler);
}
export {
  setDefaultProperty,
};
