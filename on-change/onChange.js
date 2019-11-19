function onChange(object, cb) {
  const handler = {
    get(obj, prop) {
      if (typeof obj[prop] === 'object' && obj[prop] !== null) {
        return new Proxy(obj[prop], handler);
      }
      return obj[prop];
    },
    set(obj, prop, value) {
      cb();
      obj[prop] = value;
      return true;
    },
    defineProperty(obj, prop, value) {
      cb();
      obj[prop] = value;
      return true;
    },
    deleteProperty(obj, prop) {
      if (prop in obj) {
        cb();
        delete obj[prop];
      }
      return true;
    },
  };

  return new Proxy(object, handler);
}

export {
  onChange,
};
