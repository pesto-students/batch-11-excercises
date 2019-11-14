
const bind = (unboundFunction, object, ...args) => unboundFunction
  .bind(object, ...args);

export {
  bind,
};
