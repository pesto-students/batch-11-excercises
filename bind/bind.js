
function bind(action, person, ...more) {
  const bound = action.bind(person);
  return (...rest) => bound(...more, ...rest);
}

export {
  bind,
};
