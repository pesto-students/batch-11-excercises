const type = (arg) => {
  if (arg === null) {
    return 'Null';
  }
  if (arg === undefined) {
    return 'Undefined';
  }
  return arg.constructor.name;
};
export { type };
