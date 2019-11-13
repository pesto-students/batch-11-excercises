
function onChange(obj, changeCb) {
  const proxy = new Proxy(obj, {
    set(...args) {
      console.log(args[1]);
      changeCb();
      return Reflect.set(...args);
    },
    defineProperty(...args) {
      changeCb();
      return Reflect.defineProperty(...args);
    },
  });
  return proxy;
}

export {
  onChange,
};
