
// Traditional
// function bind(fn, obj, ...args) {
//   return fn.bind(obj, ...args);
// }

const bind = (fn, object, ...args) => fn.bind(object, ...args);

export {
  bind,
};
