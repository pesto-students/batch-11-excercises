const onChange = (object, callback) => {
  const handler = {
    get(target, prop) {
      if (typeof target[prop] === 'object' && target[prop] !== null) {
        return new Proxy(target[prop], handler);
      }
      return target[prop];
    },
    set(target, prop, value) {
      callback();
      target[prop] = value;
      return true;
    },
    defineProperty(target, prop, descriptor) {
      callback();
      Object.defineProperty(target, prop, descriptor);
      return true;
    },

    deleteProperty(target, property) {
      callback();
      delete target[property];

      return true;
    },
  };
  const proxy = new Proxy(object, handler);
  return proxy;
};

export { onChange };
