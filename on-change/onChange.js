
function onChange(obj, changeCb) {
  const proxy = new Proxy(obj, {
    get(target, key) {
      if (typeof target[key] === 'object') {
        return onChange(target[key], changeCb);
      }
      return Reflect.get(target, key);
    },

    set(target, key, value) {
      // eslint-disable-next-line no-param-reassign
      target[key] = value;
      changeCb();
      return true;
    },

    defineProperty(...args) {
      changeCb();
      return Reflect.defineProperty(...args);
    },

    deleteProperty(...args) {
      changeCb();
      return Reflect.deleteProperty(...args);
    },
  });
  return proxy;
}

export {
  onChange,
};
