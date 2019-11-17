
function knownProp(obj) {
  const proxy = new Proxy(obj, {
    get(target, property) {
      const ownProperties = Object.getOwnPropertyNames(obj);
      if (ownProperties.includes(property)) {
        return Reflect.get(obj, property);
      }
      throw TypeError('You are trying to access unknown property');
    },
  });
  return proxy;
}

export {
  knownProp,
};
